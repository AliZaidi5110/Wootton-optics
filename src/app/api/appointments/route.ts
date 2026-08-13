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
  escapeHtml,
  getClientIp,
  isAllowedOrigin,
  isHoneypotFilled,
  getResendClient,
  emailRowsHtml,
  hoursListHtml,
  hoursListText,
} from "@/lib/resend-mail";

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

function buildNotificationHtml(data: AppointmentInput): string {
  const service = SERVICE_LABELS[data.service];
  const time = TIME_LABELS[data.preferredTime];
  const bodyRows = emailRowsHtml([
    ["Full name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", service],
    ["Preferred date", data.preferredDate],
    ["Preferred time", time],
    ["Notes", data.notes?.trim() ? data.notes : "None"],
  ]);

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#1f2937;">
      <h1 style="font-size:18px;color:#0a1f35;margin:0 0 12px;">New appointment request</h1>
      <p style="margin:0 0 16px;">A visitor requested a booking on ${escapeHtml(SITE.name)}.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #e5e7eb;">
        ${bodyRows}
      </table>
    </div>
  `.trim();
}

function buildNotificationText(data: AppointmentInput): string {
  return [
    "New appointment request",
    "",
    `Full name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${SERVICE_LABELS[data.service]}`,
    `Preferred date: ${data.preferredDate}`,
    `Preferred time: ${TIME_LABELS[data.preferredTime]}`,
    `Notes: ${data.notes?.trim() ? data.notes : "None"}`,
  ].join("\n");
}

function buildConfirmationHtml(data: AppointmentInput): string {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#1f2937;">
      <p>Dear ${escapeHtml(data.name)},</p>
      <p>We've received your appointment request for <strong>${escapeHtml(SERVICE_LABELS[data.service])}</strong> on <strong>${escapeHtml(data.preferredDate)}</strong> (${escapeHtml(TIME_LABELS[data.preferredTime])}).</p>
      <p>Our team will confirm your booking shortly by email or phone.</p>
      <p>If you need to speak to us sooner, call <strong>${escapeHtml(SITE.phoneDisplay ?? SITE.phone)}</strong>.</p>
      <p><strong>Opening hours</strong></p>
      <ul>${hoursListHtml()}</ul>
      <p style="margin-top:16px;">Kind regards,<br/>${escapeHtml(SITE.name)}<br/>${escapeHtml(SITE.address.full)}</p>
    </div>
  `.trim();
}

function buildConfirmationText(data: AppointmentInput): string {
  return [
    `Dear ${data.name},`,
    "",
    `We've received your appointment request for ${SERVICE_LABELS[data.service]} on ${data.preferredDate} (${TIME_LABELS[data.preferredTime]}).`,
    "",
    "Our team will confirm your booking shortly by email or phone.",
    "",
    `If you need to speak to us sooner, call ${SITE.phoneDisplay ?? SITE.phone}.`,
    "",
    "Opening hours:",
    hoursListText(),
    "",
    "Kind regards,",
    SITE.name,
    SITE.address.full,
  ].join("\n");
}

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

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [PRACTICE_EMAIL],
      replyTo: data.email,
      subject: `New appointment: ${SERVICE_LABELS[data.service]} — ${data.preferredDate}`,
      html: buildNotificationHtml(data),
      text: buildNotificationText(data),
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

  try {
    const { error: confirmError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [data.email],
      subject: `We've received your appointment request — ${SITE.name}`,
      html: buildConfirmationHtml(data),
      text: buildConfirmationText(data),
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
