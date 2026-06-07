import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20).optional(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  service: z.enum(["hearing", "optics", "general"]).optional(),
});

export const appointmentSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  service: z.enum(["hearing-test", "hearing-aid", "eye-test", "optical", "virtual"]),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  notes: z.string().max(500).optional(),
  virtualConsultation: z.boolean().optional(),
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

export type ContactInput = z.infer<typeof contactSchema>;
export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
