/**
 * POST /api/newsletter — notify Admin@ of new newsletter signups via Resend.
 * Required env: RESEND_API_KEY
 */

import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";
import {
  PRACTICE_EMAIL,
  FROM_ADDRESS,
  escapeHtml,
  getClientIp,
  isAllowedOrigin,
  getResendClient,
} from "@/lib/resend-mail";

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = getClientIp(request);
  const { success } = rateLimit(`newsletter-${ip}`, { max: 5, windowMs: 10 * 60 * 1000 });
  if (!success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);

    const resend = getResendClient();
    if (!resend) {
      console.error("[newsletter] RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [PRACTICE_EMAIL],
      replyTo: data.email,
      subject: `New newsletter signup: ${data.email}`,
      html: `<p>New newsletter signup: <strong>${escapeHtml(data.email)}</strong></p>`,
      text: `New newsletter signup: ${data.email}`,
    });

    if (error) {
      console.error("[newsletter] Resend failed", {
        name: error.name,
        message: error.message,
      });
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
}
