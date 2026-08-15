import { isValidPhoneNumber, parsePhoneNumberFromString } from "libphonenumber-js";

export const EMAIL_ERROR = "Please enter a valid email address.";
export const UK_PHONE_ERROR = "Please enter a valid UK phone number.";

/** Trim + lowercase email for validation and sending. */
export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

/**
 * Strict-enough email check: local@domain.tld with a real-looking TLD.
 * Rejects missing @, missing domain, spaces, and invalid characters.
 */
export function isValidEmailFormat(value: string): boolean {
  const email = normalizeEmail(value);
  if (!email || email.length > 254) return false;
  // Basic RFC-inspired pattern with TLD of 2+ letters
  const pattern =
    /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;
  if (!pattern.test(email)) return false;
  const domain = email.split("@")[1] ?? "";
  const tld = domain.split(".").pop() ?? "";
  return tld.length >= 2;
}

export function validateEmail(value: string): string | null {
  if (!normalizeEmail(value)) return EMAIL_ERROR;
  if (!isValidEmailFormat(value)) return EMAIL_ERROR;
  return null;
}

/** Validate UK mobile or landline via libphonenumber-js (region GB). */
export function isValidUkPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  // Only allow digits and common formatting characters
  if (!/^[+\d\s().-]+$/.test(trimmed)) return false;
  try {
    if (!isValidPhoneNumber(trimmed, "GB")) return false;
    const parsed = parsePhoneNumberFromString(trimmed, "GB");
    if (!parsed || parsed.country !== "GB") return false;
    return parsed.isValid();
  } catch {
    return false;
  }
}

export function validateUkPhone(value: string, required = true): string | null {
  const trimmed = value.trim();
  if (!trimmed) return required ? UK_PHONE_ERROR : null;
  if (!isValidUkPhone(trimmed)) return UK_PHONE_ERROR;
  return null;
}

/** Format UK number for display/storage when valid; otherwise return trimmed original. */
export function formatUkPhone(value: string): string {
  const trimmed = value.trim();
  try {
    const parsed = parsePhoneNumberFromString(trimmed, "GB");
    if (parsed?.isValid()) return parsed.formatInternational();
  } catch {
    /* fall through */
  }
  return trimmed;
}

/** Strip HTML/script tags and control characters from user text before emailing. */
export function sanitizePlainText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim();
}

export function validateRequiredText(
  value: string,
  opts: { min: number; max: number; emptyMessage: string; shortMessage: string; longMessage: string }
): string | null {
  const cleaned = sanitizePlainText(value);
  if (!cleaned) return opts.emptyMessage;
  if (cleaned.length < opts.min) return opts.shortMessage;
  if (cleaned.length > opts.max) return opts.longMessage;
  return null;
}
