/**
 * POST /api/contact — contact form handler for Wootton Optician & Hearing Care.
 *
 * - Validates payload with Zod, sends practice notification + customer auto-reply via Resend
 * - Rate limit: 5 submissions per IP per 10 minutes (in-memory; use Redis in multi-instance prod)
 * - Honeypot field `website`: if filled, returns success without sending
 * - Required env: RESEND_API_KEY
 * - Optional: NEXT_PUBLIC_SITE_URL (origin/referer allowlist)
 */

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactSchema,
  contactFieldErrors,
  type ContactApiResponse,
  type ContactInput,
} from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";
import { SITE } from "@/lib/constants";

const CONTACT_RATE_MAX = 5;
const CONTACT_RATE_WINDOW_MS = 10 * 60 * 1000;

const PRACTICE_EMAIL = SITE.email; // Admin@woottonopticianshearingcare.co.uk — only practice inbox
// Verify woottonopticianshearingcare.co.uk in the Resend dashboard before going live:
// https://resend.com/domains
const FROM_ADDRESS = `Wootton Optician & Hearing Care <${PRACTICE_EMAIL}>`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "anonymous";
  }
  return request.headers.get("x-real-ip") || "anonymous";
}

function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const siteUrl = SITE.url.replace(/\/$/, "");

  const allowedHosts = new Set<string>();
  try {
    allowedHosts.add(new URL(siteUrl).host);
  } catch {
    /* ignore invalid SITE.url */
  }
  allowedHosts.add("localhost:3000");
  allowedHosts.add("127.0.0.1:3000");
  // Vercel preview / production hostnames derived from request if present
  const host = request.headers.get("host");
  if (host) allowedHosts.add(host);

  const candidates = [origin, referer].filter(Boolean) as string[];
  if (candidates.length === 0) {
    return false;
  }

  return candidates.some((value) => {
    try {
      const url = new URL(value);
      return allowedHosts.has(url.host);
    } catch {
      return false;
    }
  });
}

function buildNotificationHtml(data: ContactInput): string {
  const rows: [string, string][] = [
    ["Full name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service", data.service],
    ["Subject", data.subject],
    ["Message", data.message],
  ];

  const bodyRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;vertical-align:top;color:#0a1f35;border-bottom:1px solid #e5e7eb;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;vertical-align:top;color:#1f2937;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td>
      </tr>`
    )
    .join("");

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
  const hours = SITE.hours.display.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#1f2937;">
      <p>Dear ${escapeHtml(fullName)},</p>
      <p>We've received your message and will be in touch shortly.</p>
      <p>If your enquiry is urgent, please call us on <strong>${escapeHtml(SITE.phoneDisplay ?? SITE.phone)}</strong>.</p>
      <p><strong>Opening hours</strong></p>
      <ul>${hours}</ul>
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
    ...SITE.hours.display.map((line) => `- ${line}`),
    "",
    `Kind regards,`,
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

  // Honeypot: bots often fill hidden fields — pretend success, send nothing.
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.trim() !== ""
  ) {
    return json(
      { success: true, message: "Thank you! We will respond within 24 hours." },
      200
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors = contactFieldErrors(parsed.error.issues);
    return json(
      {
        success: false,
        error: "Please correct the highlighted fields",
        errors,
      },
      400
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Do not log PII / message body. Note: avoid shipping PII to third-party log drains.
    console.error("[contact] RESEND_API_KEY is not configured");
    return json(
      {
        success: false,
        error: "Something went wrong, please call us at 01604 875111",
      },
      500
    );
  }

  const resend = new Resend(apiKey);

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

  // Auto-confirmation is best-effort — never block success if this fails.
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
