/**
 * POST /api/contact — contact form handler for Wootton Optician & Hearing Care.
 *
 * - Validates with Zod; emails Admin@ via Resend + customer auto-reply
 * - Rate limit: 5 / IP / 10 minutes (in-memory)
 * - Honeypot: `website`
 * - Required env: RESEND_API_KEY
 */

import { NextRequest, NextResponse } from "next/server";
import {
  contactSchema,
  contactFieldErrors,
  type ContactApiResponse,
} from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";
import { SITE } from "@/lib/constants";
import {
  PRACTICE_EMAIL,
  FROM_ADDRESS,
  getClientIp,
  isAllowedOrigin,
  isHoneypotFilled,
  getResendClient,
} from "@/lib/resend-mail";
import {
  contactNotificationEmail,
  contactConfirmationEmail,
} from "@/lib/email-templates";

const CONTACT_RATE_MAX = 5;
const CONTACT_RATE_WINDOW_MS = 10 * 60 * 1000;

function json<T extends ContactApiResponse>(body: T, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return json(
      {
        success: false,
        error: "Something went wrong, please call us at 01604 875111",
      },
      403
    );
  }

  const ip = getClientIp(request);
  const { success: withinLimit } = rateLimit(`contact-${ip}`, {
    max: CONTACT_RATE_MAX,
    windowMs: CONTACT_RATE_WINDOW_MS,
  });

  if (!withinLimit) {
    return json(
      {
        success: false,
        error: "Too many messages. Please wait a few minutes or call us at 01604 875111",
      },
      429
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid request body" }, 400);
  }

  if (isHoneypotFilled(body)) {
    return json(
      { success: true, message: "Thank you! We will respond within 24 hours." },
      200
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      {
        success: false,
        error: "Please correct the highlighted fields",
        errors: contactFieldErrors(parsed.error.issues),
      },
      400
    );
  }

  const data = parsed.data;
  const resend = getResendClient();

  if (!resend) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return json(
      {
        success: false,
        error: "Something went wrong, please call us at 01604 875111",
      },
      500
    );
  }

  const notification = contactNotificationEmail({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    service: data.service,
    subject: data.subject,
    message: data.message,
  });

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [PRACTICE_EMAIL],
      replyTo: data.email,
      subject: `New enquiry: ${data.subject} (${data.service})`,
      html: notification.html,
      text: notification.text,
    });

    if (error) {
      console.error("[contact] Resend notification failed", {
        name: error.name,
        message: error.message,
      });
      return json(
        {
          success: false,
          error: "Something went wrong, please call us at 01604 875111",
        },
        500
      );
    }
  } catch (err) {
    console.error("[contact] Unexpected error sending notification", {
      message: err instanceof Error ? err.message : "unknown",
    });
    return json(
      {
        success: false,
        error: "Something went wrong, please call us at 01604 875111",
      },
      500
    );
  }

  const confirmation = contactConfirmationEmail(data.fullName);

  try {
    const { error: confirmError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [data.email],
      subject: `We've received your message — ${SITE.name}`,
      html: confirmation.html,
      text: confirmation.text,
    });

    if (confirmError) {
      console.error("[contact] Confirmation email failed", {
        name: confirmError.name,
        message: confirmError.message,
      });
    }
  } catch (err) {
    console.error("[contact] Unexpected error sending confirmation", {
      message: err instanceof Error ? err.message : "unknown",
    });
  }

  return json(
    { success: true, message: "Thank you! We will respond within 24 hours." },
    200
  );
}
