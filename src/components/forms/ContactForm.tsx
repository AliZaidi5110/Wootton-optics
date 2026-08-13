"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_SERVICES, type ContactApiResponse, type ContactFieldErrors } from "@/lib/validators";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  service: (typeof CONTACT_SERVICES)[number] | "";
  subject: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  subject: "",
  message: "",
  website: "",
};

const FIELD_ORDER = [
  "fullName",
  "email",
  "phone",
  "service",
  "subject",
  "message",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formId = useId();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const refs = {
    fullName: fullNameRef,
    email: emailRef,
    phone: phoneRef,
    service: serviceRef,
    subject: subjectRef,
    message: messageRef,
  } as const;

  const ids = {
    fullName: `${formId}-fullName`,
    email: `${formId}-email`,
    phone: `${formId}-phone`,
    service: `${formId}-service`,
    subject: `${formId}-subject`,
    message: `${formId}-message`,
    fullNameError: `${formId}-fullName-error`,
    emailError: `${formId}-email-error`,
    phoneError: `${formId}-phone-error`,
    serviceError: `${formId}-service-error`,
    subjectError: `${formId}-subject-error`,
    messageError: `${formId}-message-error`,
    formStatus: `${formId}-status`,
  };

  useEffect(() => {
    if (status !== "error") return;
    const firstInvalid = FIELD_ORDER.find((key) => fieldErrors[key]);
    if (firstInvalid) {
      refs[firstInvalid].current?.focus();
      return;
    }
    summaryRef.current?.focus();
  }, [status, fieldErrors]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key !== "website" && fieldErrors[key as keyof ContactFieldErrors]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof ContactFieldErrors];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors({});
    setFormError(null);
    setSuccessMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          subject: form.subject,
          message: form.message,
          website: form.website,
        }),
      });

      const data = (await res.json()) as ContactApiResponse;

      if (res.ok && data.success) {
        setStatus("success");
        setSuccessMessage(data.message || "Thank you! We will respond within 24 hours.");
        setForm(initialForm);
        return;
      }

      setStatus("error");
      if (!data.success && data.errors) {
        setFieldErrors(data.errors);
        setFormError(data.error || "Please correct the highlighted fields");
      } else {
        setFormError(
          (!data.success && data.error) ||
            "Something went wrong, please call us at 01604 875111"
        );
      }
    } catch {
      setStatus("error");
      setFormError("Something went wrong, please call us at 01604 875111");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border-2 border-transparent bg-sky text-navy placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[48px]";
  const invalidClass = "border-red-700 focus:border-red-700 focus:ring-red-700/20";
  const errorTextClass = "mt-1.5 text-sm font-medium text-red-800";
  const isSubmitting = status === "submitting";

  function fieldDescribedBy(field: keyof ContactFieldErrors, errorId: string) {
    return fieldErrors[field] ? errorId : undefined;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from users and assistive tech; bots often fill it */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div
        ref={summaryRef}
        id={ids.formStatus}
        tabIndex={-1}
        className="outline-none"
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        aria-atomic="true"
      >
        {status === "success" && successMessage && (
          <p className="text-fresh font-medium rounded-lg bg-fresh/10 border border-fresh/30 px-4 py-3">
            {successMessage}
          </p>
        )}
        {status === "error" && formError && (
          <p className="text-red-800 font-medium rounded-lg bg-red-50 border border-red-300 px-4 py-3">
            {formError}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={ids.fullName} className="block text-sm font-medium mb-2 text-navy">
            Full Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            ref={fullNameRef}
            id={ids.fullName}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={fieldErrors.fullName ? true : undefined}
            aria-describedby={fieldDescribedBy("fullName", ids.fullNameError)}
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className={`${inputClass} ${fieldErrors.fullName ? invalidClass : ""}`}
            disabled={isSubmitting}
          />
          {fieldErrors.fullName && (
            <p id={ids.fullNameError} className={errorTextClass} role="alert">
              {fieldErrors.fullName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={ids.email} className="block text-sm font-medium mb-2 text-navy">
            Email <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            ref={emailRef}
            id={ids.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldDescribedBy("email", ids.emailError)}
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={`${inputClass} ${fieldErrors.email ? invalidClass : ""}`}
            disabled={isSubmitting}
          />
          {fieldErrors.email && (
            <p id={ids.emailError} className={errorTextClass} role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={ids.phone} className="block text-sm font-medium mb-2 text-navy">
            Phone <span className="sr-only">(optional)</span>
          </label>
          <input
            ref={phoneRef}
            id={ids.phone}
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={fieldErrors.phone ? true : undefined}
            aria-describedby={fieldDescribedBy("phone", ids.phoneError)}
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={`${inputClass} ${fieldErrors.phone ? invalidClass : ""}`}
            disabled={isSubmitting}
          />
          {fieldErrors.phone && (
            <p id={ids.phoneError} className={errorTextClass} role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={ids.service} className="block text-sm font-medium mb-2 text-navy">
            Service <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            ref={serviceRef}
            id={ids.service}
            name="service"
            required
            aria-required="true"
            aria-invalid={fieldErrors.service ? true : undefined}
            aria-describedby={fieldDescribedBy("service", ids.serviceError)}
            value={form.service}
            onChange={(e) =>
              updateField("service", e.target.value as FormState["service"])
            }
            className={`${inputClass} ${fieldErrors.service ? invalidClass : ""}`}
            disabled={isSubmitting}
          >
            <option value="" disabled>
              Select a service
            </option>
            {CONTACT_SERVICES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.service && (
            <p id={ids.serviceError} className={errorTextClass} role="alert">
              {fieldErrors.service}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={ids.subject} className="block text-sm font-medium mb-2 text-navy">
          Subject <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          ref={subjectRef}
          id={ids.subject}
          name="subject"
          type="text"
          required
          aria-required="true"
          aria-invalid={fieldErrors.subject ? true : undefined}
          aria-describedby={fieldDescribedBy("subject", ids.subjectError)}
          value={form.subject}
          onChange={(e) => updateField("subject", e.target.value)}
          className={`${inputClass} ${fieldErrors.subject ? invalidClass : ""}`}
          disabled={isSubmitting}
        />
        {fieldErrors.subject && (
          <p id={ids.subjectError} className={errorTextClass} role="alert">
            {fieldErrors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={ids.message} className="block text-sm font-medium mb-2 text-navy">
          Message <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          ref={messageRef}
          id={ids.message}
          name="message"
          required
          rows={5}
          aria-required="true"
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldDescribedBy("message", ids.messageError)}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${inputClass} min-h-[120px] ${fieldErrors.message ? invalidClass : ""}`}
          disabled={isSubmitting}
        />
        {fieldErrors.message && (
          <p id={ids.messageError} className={errorTextClass} role="alert">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        aria-label={isSubmitting ? "Sending message" : "Send message"}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
