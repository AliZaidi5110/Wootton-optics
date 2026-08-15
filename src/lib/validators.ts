import { z } from "zod";
import {
  EMAIL_ERROR,
  UK_PHONE_ERROR,
  normalizeEmail,
  isValidEmailFormat,
  isValidUkPhone,
  formatUkPhone,
  sanitizePlainText,
} from "@/lib/form-validation";

/** Allowed service values — must match the contact form <select> exactly. */
export const CONTACT_SERVICES = [
  "General Enquiry",
  "Hearing Care",
  "Optical Services",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

const emailField = z
  .string()
  .transform((v) => normalizeEmail(v))
  .pipe(
    z
      .string()
      .min(1, EMAIL_ERROR)
      .max(254, EMAIL_ERROR)
      .refine((v) => isValidEmailFormat(v), { message: EMAIL_ERROR })
  );

const ukPhoneRequired = z
  .string()
  .transform((v) => v.trim())
  .pipe(
    z
      .string()
      .min(1, UK_PHONE_ERROR)
      .max(40, UK_PHONE_ERROR)
      .refine((v) => isValidUkPhone(v), { message: UK_PHONE_ERROR })
      .transform((v) => formatUkPhone(v))
  );

const plainText = (opts: {
  min: number;
  max: number;
  empty: string;
  short: string;
  long: string;
}) =>
  z
    .string()
    .transform((v) => sanitizePlainText(v))
    .pipe(
      z
        .string()
        .min(1, opts.empty)
        .min(opts.min, opts.short)
        .max(opts.max, opts.long)
    );

export const contactSchema = z.object({
  fullName: plainText({
    min: 2,
    max: 100,
    empty: "Enter your full name",
    short: "Enter your full name (at least 2 characters)",
    long: "Name must be 100 characters or fewer",
  }),
  email: emailField,
  phone: ukPhoneRequired,
  service: z.enum(CONTACT_SERVICES, {
    error: "Please select a service",
  }),
  subject: plainText({
    min: 3,
    max: 150,
    empty: "Enter a subject",
    short: "Subject must be at least 3 characters",
    long: "Subject must be 150 characters or fewer",
  }),
  message: plainText({
    min: 10,
    max: 2000,
    empty: "Enter your message",
    short: "Message must be at least 10 characters",
    long: "Message must be 2000 characters or fewer",
  }),
  /** Honeypot — must be empty. Validated separately for silent success. */
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<
  Record<"fullName" | "email" | "phone" | "service" | "subject" | "message", string>
>;

export type ContactApiSuccess = {
  success: true;
  message: string;
};

export type ContactApiError = {
  success: false;
  error: string;
  errors?: ContactFieldErrors;
};

export type ContactApiResponse = ContactApiSuccess | ContactApiError;

export const APPOINTMENT_SERVICES = [
  "hearing-test",
  "ear-wax-removal",
  "hearing-aid",
  "eye-test",
  "optical",
] as const;

export const appointmentSchema = z.object({
  name: plainText({
    min: 2,
    max: 100,
    empty: "Enter your full name",
    short: "Enter your full name (at least 2 characters)",
    long: "Name must be 100 characters or fewer",
  }),
  email: emailField,
  phone: ukPhoneRequired,
  service: z.enum(APPOINTMENT_SERVICES, {
    error: "Please select a service",
  }),
  preferredDate: z.string().trim().min(1, "Please select a preferred date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    error: "Please select a preferred time",
  }),
  notes: z.preprocess(
    (val) => {
      if (val === undefined || val === null) return undefined;
      if (typeof val !== "string") return val;
      const cleaned = sanitizePlainText(val);
      return cleaned === "" ? undefined : cleaned;
    },
    z.string().max(500, "Notes must be 500 characters or fewer").optional()
  ),
  website: z.string().optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export type AppointmentFieldErrors = Partial<
  Record<
    "name" | "email" | "phone" | "service" | "preferredDate" | "preferredTime" | "notes",
    string
  >
>;

export type AppointmentApiSuccess = {
  success: true;
  message: string;
};

export type AppointmentApiError = {
  success: false;
  error: string;
  errors?: AppointmentFieldErrors;
};

export type AppointmentApiResponse = AppointmentApiSuccess | AppointmentApiError;

export const newsletterSchema = z.object({
  email: emailField,
  interests: z.array(z.enum(["hearing", "optics", "wellness"])).optional(),
});

export const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: emailField,
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
});

export const loginSchema = z.object({
  email: emailField,
  password: z.string().min(1),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export function contactFieldErrors(
  issues: { path: PropertyKey[]; message: string }[]
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const fields = new Set([
    "fullName",
    "email",
    "phone",
    "service",
    "subject",
    "message",
  ]);

  for (const issue of issues) {
    const key = String(issue.path[0] ?? "");
    if (fields.has(key) && !errors[key as keyof ContactFieldErrors]) {
      errors[key as keyof ContactFieldErrors] = issue.message;
    }
  }

  return errors;
}

export function appointmentFieldErrors(
  issues: { path: PropertyKey[]; message: string }[]
): AppointmentFieldErrors {
  const errors: AppointmentFieldErrors = {};
  const fields = new Set([
    "name",
    "email",
    "phone",
    "service",
    "preferredDate",
    "preferredTime",
    "notes",
  ]);

  for (const issue of issues) {
    const key = String(issue.path[0] ?? "");
    if (fields.has(key) && !errors[key as keyof AppointmentFieldErrors]) {
      errors[key as keyof AppointmentFieldErrors] = issue.message;
    }
  }

  return errors;
}

/** Client-side contact validation (mirrors server schema messages). */
export function validateContactForm(input: {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
}): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = sanitizePlainText(input.fullName);
  if (!name || name.length < 2) {
    errors.fullName = "Enter your full name (at least 2 characters)";
  } else if (name.length > 100) {
    errors.fullName = "Name must be 100 characters or fewer";
  }

  const emailErr = (() => {
    const e = normalizeEmail(input.email);
    if (!e || !isValidEmailFormat(e)) return EMAIL_ERROR;
    return null;
  })();
  if (emailErr) errors.email = emailErr;

  if (!input.phone.trim() || !isValidUkPhone(input.phone)) {
    errors.phone = UK_PHONE_ERROR;
  }

  if (!(CONTACT_SERVICES as readonly string[]).includes(input.service)) {
    errors.service = "Please select a service";
  }

  const subject = sanitizePlainText(input.subject);
  if (!subject || subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  } else if (subject.length > 150) {
    errors.subject = "Subject must be 150 characters or fewer";
  }

  const message = sanitizePlainText(input.message);
  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (message.length > 2000) {
    errors.message = "Message must be 2000 characters or fewer";
  }

  return errors;
}

export function validateAppointmentForm(input: {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}): AppointmentFieldErrors {
  const errors: AppointmentFieldErrors = {};
  const name = sanitizePlainText(input.name);
  if (!name || name.length < 2) {
    errors.name = "Enter your full name (at least 2 characters)";
  } else if (name.length > 100) {
    errors.name = "Name must be 100 characters or fewer";
  }

  if (!normalizeEmail(input.email) || !isValidEmailFormat(input.email)) {
    errors.email = EMAIL_ERROR;
  }

  if (!input.phone.trim() || !isValidUkPhone(input.phone)) {
    errors.phone = UK_PHONE_ERROR;
  }

  if (!(APPOINTMENT_SERVICES as readonly string[]).includes(input.service)) {
    errors.service = "Please select a service";
  }

  if (!input.preferredDate.trim()) {
    errors.preferredDate = "Please select a preferred date";
  }

  if (!["morning", "afternoon", "evening"].includes(input.preferredTime)) {
    errors.preferredTime = "Please select a preferred time";
  }

  const notes = sanitizePlainText(input.notes);
  if (notes.length > 500) {
    errors.notes = "Notes must be 500 characters or fewer";
  }

  return errors;
}
