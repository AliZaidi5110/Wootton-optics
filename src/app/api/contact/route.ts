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
  type ContactInput,
} from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";
import { SITE } from "@/lib/constants";
import {
  PRACTICE_EMAIL,
  FROM_ADDRESS,
  escapeHtml,
  getClientIp,
  isAllowedOrigin,
  isHoneypotFilled,
  getResendClient,
  emailRowsHtml,
  hoursListHtml,
  hoursListText,
} from "@/lib/resend-mail";

const CONTACT_RATE_MAX = 5;
const CONTACT_RATE_WINDOW_MS = 10 * 60 * 1000;

function buildNotificationHtml(data: ContactInput): string {
  const bodyRows = emailRowsHtml([
    ["Full name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service", data.service],
    ["Subject", data.subject],
    ["Message", data.message],
  ]);

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#1f2937;">
      <h1 style="font-size:18px;color:#0a1f35;margin:0 0 12px;">New website enquiry</h1>
      <p style="margin:0 0 16px;">A visitor submitted the contact form on ${escapeHtml(SITE.name)}.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #e5e7eb;">
        ${bodyRows}
      </table>
    </div>
  `.trim();
}

function buildNotificationText(data: ContactInput): string {
  return [
    "New website enquiry",
    "",
    `Full name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Service: ${data.service}`,
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function buildConfirmationHtml(fullName: string): string {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#1f2937;">
      <p>Dear ${escapeHtml(fullName)},</p>
      <p>We've received your message and will be in touch shortly.</p>
      <p>If your enquiry is urgent, please call us on <strong>${escapeHtml(SITE.phoneDisplay ?? SITE.phone)}</strong>.</p>
      <p><strong>Opening hours</strong></p>
      <ul>${hoursListHtml()}</ul>
      <p style="margin-top:16px;">Kind regards,<br/>${escapeHtml(SITE.name)}<br/>${escapeHtml(SITE.address.full)}</p>
    </div>
  `.trim();
}

function buildConfirmationText(fullName: string): string {
  return [
    `Dear ${fullName},`,
    "",
    "We've received your message and will be in touch shortly.",
    "",
    `If your enquiry is urgent, please call us on ${SITE.phoneDisplay ?? SITE.phone}.`,
    "",
    "Opening hours:",
    hoursListText(),
    "",
    "Kind regards,",
    SITE.name,
    SITE.address.full,
  ].join("\n");
}

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

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [PRACTICE_EMAIL],
      replyTo: data.email,
      subject: `New enquiry: ${data.subject} (${data.service})`,
      html: buildNotificationHtml(data),
      text: buildNotificationText(data),
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

  try {
    const { error: confirmError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [data.email],
      subject: `We've received your message — ${SITE.name}`,
      html: buildConfirmationHtml(data.fullName),
      text: buildConfirmationText(data.fullName),
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
