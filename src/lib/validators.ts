import { z } from "zod";

/** Allowed service values — must match the contact form <select> exactly. */
export const CONTACT_SERVICES = [
  "General Enquiry",
  "Hearing Care",
  "Optical Services",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

const phoneRegex = /^[+\d][\d\s().-]{6,29}$/;

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name (at least 2 characters)")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .trim()
    .min(1, "Enter a valid email address")
    .email("Enter a valid email address")
    .max(254, "Email address is too long"),
  phone: z.preprocess(
    (val) => {
      if (val === undefined || val === null) return undefined;
      if (typeof val !== "string") return val;
      const trimmed = val.trim();
      return trimmed === "" ? undefined : trimmed;
    },
    z
      .string()
      .regex(phoneRegex, "Enter a valid phone number")
      .max(30, "Phone number is too long")
      .optional()
  ),
  service: z.enum(CONTACT_SERVICES, {
    error: "Please select a service",
  }),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must be 150 characters or fewer"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be 2000 characters or fewer"),
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

export const appointmentSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  service: z.enum(["hearing-test", "ear-wax-removal", "hearing-aid", "eye-test", "optical"]),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  notes: z.string().max(500).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  interests: z.array(z.enum(["hearing", "optics", "wellness"])).optional(),
});

export const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().min(10).max(20).optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

/** Map Zod issues to field-level error messages for the contact form. */
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
