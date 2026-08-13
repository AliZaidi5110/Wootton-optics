import { NextRequest } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

/** Only practice inbox — Admin@woottonopticianshearingcare.co.uk */
export const PRACTICE_EMAIL = SITE.email;

// Verify woottonopticianshearingcare.co.uk in Resend before going live:
// https://resend.com/domains
export const FROM_ADDRESS = `Wootton Optician & Hearing Care <${PRACTICE_EMAIL}>`;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "anonymous";
  }
  return request.headers.get("x-real-ip") || "anonymous";
}

export function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const siteUrl = SITE.url.replace(/\/$/, "");

  const allowedHosts = new Set<string>();
  try {
    allowedHosts.add(new URL(siteUrl).host);
  } catch {
    /* ignore */
  }
  allowedHosts.add("localhost:3000");
  allowedHosts.add("127.0.0.1:3000");
  const host = request.headers.get("host");
  if (host) allowedHosts.add(host);

  const candidates = [origin, referer].filter(Boolean) as string[];
  if (candidates.length === 0) return false;

  return candidates.some((value) => {
    try {
      return allowedHosts.has(new URL(value).host);
    } catch {
      return false;
    }
  });
}

export function isHoneypotFilled(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const website = (body as { website?: unknown }).website;
  return typeof website === "string" && website.trim() !== "";
}

export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export function emailRowsHtml(rows: [string, string][]): string {
  return rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;vertical-align:top;color:#0a1f35;border-bottom:1px solid #e5e7eb;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;vertical-align:top;color:#1f2937;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td>
      </tr>`
    )
    .join("");
}

export function hoursListHtml(): string {
  return SITE.hours.display.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
}

export function hoursListText(): string {
  return SITE.hours.display.map((line) => `- ${line}`).join("\n");
}
