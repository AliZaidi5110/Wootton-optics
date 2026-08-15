/**
 * POST /api/appointments — booking form handler for Wootton Optician & Hearing Care.
 *
 * - Validates with Zod; emails Admin@ via Resend + customer confirmation
 * - Rate limit: 5 / IP / 10 minutes (in-memory)
 * - Honeypot: `website`
 * - Required env: RESEND_API_KEY
 */

import { NextRequest, NextResponse } from "next/server";
import {
  appointmentSchema,
  appointmentFieldErrors,
  type AppointmentApiResponse,
  type AppointmentInput,
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
  appointmentNotificationEmail,
  appointmentConfirmationEmail,
} from "@/lib/email-templates";

const APPOINTMENT_RATE_MAX = 5;
const APPOINTMENT_RATE_WINDOW_MS = 10 * 60 * 1000;

const SERVICE_LABELS: Record<AppointmentInput["service"], string> = {
  "hearing-test": "Hearing Test",
  "ear-wax-removal": "Ear Wax Removal",
  "hearing-aid": "Hearing Aid Consultation",
  "eye-test": "Eye Test",
  optical: "Optical Consultation",
};

const TIME_LABELS: Record<AppointmentInput["preferredTime"], string> = {
  morning: "Morning (9am – 12pm)",
  afternoon: "Afternoon (12pm – 4pm)",
  evening: "Late Afternoon (4pm – 6pm)",
};

function json<T extends AppointmentApiResponse>(body: T, status: number) {
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
  const { success: withinLimit } = rateLimit(`appointment-${ip}`, {
    max: APPOINTMENT_RATE_MAX,
    windowMs: APPOINTMENT_RATE_WINDOW_MS,
  });

  if (!withinLimit) {
    return json(
      {
        success: false,
        error: "Too many booking requests. Please wait a few minutes or call us at 01604 875111",
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
      {
        success: true,
        message: "Appointment request received. We will confirm by email shortly.",
      },
      200
    );
  }

  const parsed = appointmentSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      {
        success: false,
        error: "Please correct the highlighted fields",
        errors: appointmentFieldErrors(parsed.error.issues),
      },
      400
    );
  }

  const data = parsed.data;
  const resend = getResendClient();

  if (!resend) {
    console.error("[appointments] RESEND_API_KEY is not configured");
    return json(
      {
        success: false,
        error: "Something went wrong, please call us at 01604 875111",
      },
      500
    );
  }

  const serviceLabel = SERVICE_LABELS[data.service];
  const timeLabel = TIME_LABELS[data.preferredTime];
  const notification = appointmentNotificationEmail({
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: serviceLabel,
    preferredDate: data.preferredDate,
    preferredTime: timeLabel,
    notes: data.notes?.trim() ? data.notes : "None",
  });

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [PRACTICE_EMAIL],
      replyTo: data.email,
      subject: `New appointment: ${serviceLabel} — ${data.preferredDate}`,
      html: notification.html,
      text: notification.text,
    });

    if (error) {
      console.error("[appointments] Resend notification failed", {
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
    console.error("[appointments] Unexpected error sending notification", {
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

  const confirmation = appointmentConfirmationEmail({
    name: data.name,
    service: serviceLabel,
    preferredDate: data.preferredDate,
    preferredTime: timeLabel,
  });

  try {
    const { error: confirmError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [data.email],
      subject: `We've received your appointment request — ${SITE.name}`,
      html: confirmation.html,
      text: confirmation.text,
    });

    if (confirmError) {
      console.error("[appointments] Confirmation email failed", {
        name: confirmError.name,
        message: confirmError.message,
      });
    }
  } catch (err) {
    console.error("[appointments] Unexpected error sending confirmation", {
      message: err instanceof Error ? err.message : "unknown",
    });
  }

  // Optional DB persist — never block email success
  try {
    const { connectDB } = await import("@/lib/mongodb");
    const { Appointment } = await import("@/models/Appointment");
    await connectDB();
    await Appointment.create({
      ...data,
      preferredDate: new Date(data.preferredDate),
    });
  } catch {
    // Mongo optional; email already sent
  }

  return json(
    {
      success: true,
      message: "Appointment request received. We will confirm by email shortly.",
    },
    200
  );
}

export async function GET(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const jwt = await import("jsonwebtoken");
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET not configured");

    const decoded = jwt.default.verify(token, secret) as { userId: string };
    const { connectDB } = await import("@/lib/mongodb");
    const { Appointment } = await import("@/models/Appointment");
    await connectDB();

    const appointments = await Appointment.find({ userId: decoded.userId })
      .sort({ preferredDate: -1 })
      .limit(20);

    return NextResponse.json({ appointments });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
