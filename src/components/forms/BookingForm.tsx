"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { trackBookingSubmit } from "@/lib/analytics";
import {
  validateAppointmentForm,
  type AppointmentApiResponse,
  type AppointmentFieldErrors,
} from "@/lib/validators";
import { EMAIL_ERROR, UK_PHONE_ERROR, validateEmail, validateUkPhone } from "@/lib/form-validation";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-navy/15 bg-cream/60 text-navy placeholder:text-navy/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white min-h-[48px] transition-colors disabled:opacity-60";
const invalidClass = "border-red-700 focus:border-red-700 focus:ring-red-700/20";
const errorTextClass = "mt-1.5 text-sm font-medium text-red-800";

const FIELD_ORDER = [
  "name",
  "email",
  "phone",
  "service",
  "preferredDate",
  "preferredTime",
  "notes",
] as const;

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "hearing-test",
    preferredDate: "",
    preferredTime: "morning",
    notes: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<AppointmentFieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof AppointmentFieldErrors, boolean>>>({});

  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    service: useRef<HTMLSelectElement>(null),
    preferredDate: useRef<HTMLInputElement>(null),
    preferredTime: useRef<HTMLSelectElement>(null),
    notes: useRef<HTMLTextAreaElement>(null),
  };

  function setFieldError(field: keyof AppointmentFieldErrors, message: string | null) {
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });
  }

  function updateField(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key !== "website" && fieldErrors[key as keyof AppointmentFieldErrors]) {
      setFieldError(key as keyof AppointmentFieldErrors, null);
    }
  }

  function blurValidate(field: keyof AppointmentFieldErrors) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "email") {
      setFieldError("email", validateEmail(form.email));
      return;
    }
    if (field === "phone") {
      setFieldError("phone", validateUkPhone(form.phone, true));
      return;
    }
    const all = validateAppointmentForm(form);
    setFieldError(field, all[field] ?? null);
  }

  function showError(field: keyof AppointmentFieldErrors) {
    return Boolean(fieldErrors[field] && (touched[field] || status === "error"));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    const clientErrors = validateAppointmentForm(form);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setStatus("error");
      setErrorMessage("Please correct the highlighted fields");
      setTouched({
        name: true,
        email: true,
        phone: true,
        service: true,
        preferredDate: true,
        preferredTime: true,
        notes: true,
      });
      const first = FIELD_ORDER.find((k) => clientErrors[k]);
      if (first) refs[first].current?.focus();
      return;
    }

    setStatus("loading");
    setFieldErrors({});

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.email.trim().toLowerCase(),
        }),
      });
      const data = (await res.json()) as AppointmentApiResponse;
      if (res.ok && data.success) {
        trackBookingSubmit(form.service);
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "hearing-test",
          preferredDate: "",
          preferredTime: "morning",
          notes: "",
          website: "",
        });
        setTouched({});
      } else {
        setStatus("error");
        if (!data.success && data.errors) {
          setFieldErrors(data.errors);
          setErrorMessage(data.error || "Please correct the highlighted fields");
          const first = FIELD_ORDER.find((k) => data.errors?.[k]);
          if (first) refs[first].current?.focus();
        } else {
          setErrorMessage(
            (!data.success && data.error) ||
              "Something went wrong, please call us at 01604 875111"
          );
        }
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong, please call us at 01604 875111");
    }
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 relative" noValidate>
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(e) => updateField("website", e.target.value)}
        className="absolute opacity-0 pointer-events-none w-px h-px -z-10"
        aria-hidden="true"
      />

      <div
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        aria-atomic="true"
      >
        {status === "success" && (
          <div className="rounded-xl border border-fresh/30 bg-fresh/10 px-4 py-3 mb-1 space-y-1">
            <p className="text-navy font-semibold text-sm sm:text-base">
              Request received — we will confirm by email shortly.
            </p>
            <p className="text-sm text-navy/75">
              After your visit,{" "}
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
              >
                leave a Google review
              </a>{" "}
              if we helped.
            </p>
          </div>
        )}
        {status === "error" && errorMessage && (
          <p className="text-red-800 font-medium text-sm rounded-xl bg-red-50 border border-red-200 px-4 py-3 mb-1">
            {errorMessage}{" "}
            {!errorMessage.includes("01604") && (
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="underline font-semibold"
              >
                {SITE.phoneDisplay ?? SITE.phone}
              </a>
            )}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-semibold text-navy mb-2">
            Full name <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            ref={refs.name}
            id="booking-name"
            type="text"
            required
            aria-required="true"
            aria-invalid={showError("name") ? true : undefined}
            aria-describedby={showError("name") ? "booking-name-error" : undefined}
            autoComplete="name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            onBlur={() => blurValidate("name")}
            className={`${inputClass} ${showError("name") ? invalidClass : ""}`}
            disabled={isLoading}
            placeholder="Jane Smith"
          />
          {showError("name") && (
            <p id="booking-name-error" className={errorTextClass} role="alert">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="booking-email" className="block text-sm font-semibold text-navy mb-2">
            Email <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            ref={refs.email}
            id="booking-email"
            type="email"
            required
            aria-required="true"
            aria-invalid={showError("email") ? true : undefined}
            aria-describedby={showError("email") ? "booking-email-error" : undefined}
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            onBlur={() => blurValidate("email")}
            className={`${inputClass} ${showError("email") ? invalidClass : ""}`}
            disabled={isLoading}
            placeholder="name@example.com"
          />
          {showError("email") && (
            <p id="booking-email-error" className={errorTextClass} role="alert">
              {fieldErrors.email || EMAIL_ERROR}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-semibold text-navy mb-2">
            Phone <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            ref={refs.phone}
            id="booking-phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={showError("phone") ? true : undefined}
            aria-describedby={showError("phone") ? "booking-phone-error" : undefined}
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            onBlur={() => blurValidate("phone")}
            className={`${inputClass} ${showError("phone") ? invalidClass : ""}`}
            disabled={isLoading}
            placeholder="07123 456789 or 01604 875111"
          />
          {showError("phone") && (
            <p id="booking-phone-error" className={errorTextClass} role="alert">
              {fieldErrors.phone || UK_PHONE_ERROR}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="booking-service" className="block text-sm font-semibold text-navy mb-2">
            Service <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            ref={refs.service}
            id="booking-service"
            required
            aria-required="true"
            aria-invalid={showError("service") ? true : undefined}
            value={form.service}
            onChange={(e) => updateField("service", e.target.value)}
            onBlur={() => blurValidate("service")}
            className={`${inputClass} ${showError("service") ? invalidClass : ""}`}
            disabled={isLoading}
          >
            <option value="hearing-test">Hearing Test</option>
            <option value="ear-wax-removal">Ear Wax Removal</option>
            <option value="hearing-aid">Hearing Aid Consultation</option>
            <option value="eye-test">Eye Test</option>
            <option value="optical">Optical Consultation</option>
          </select>
          {showError("service") && (
            <p className={errorTextClass} role="alert">
              {fieldErrors.service}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="booking-date" className="block text-sm font-semibold text-navy mb-2">
            Preferred date <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            ref={refs.preferredDate}
            id="booking-date"
            type="date"
            required
            aria-required="true"
            aria-invalid={showError("preferredDate") ? true : undefined}
            aria-describedby={showError("preferredDate") ? "booking-date-error" : undefined}
            min={new Date().toISOString().split("T")[0]}
            value={form.preferredDate}
            onChange={(e) => updateField("preferredDate", e.target.value)}
            onBlur={() => blurValidate("preferredDate")}
            className={`${inputClass} ${showError("preferredDate") ? invalidClass : ""}`}
            disabled={isLoading}
          />
          {showError("preferredDate") && (
            <p id="booking-date-error" className={errorTextClass} role="alert">
              {fieldErrors.preferredDate}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="booking-time" className="block text-sm font-semibold text-navy mb-2">
            Preferred time <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            ref={refs.preferredTime}
            id="booking-time"
            required
            aria-required="true"
            aria-invalid={showError("preferredTime") ? true : undefined}
            value={form.preferredTime}
            onChange={(e) => updateField("preferredTime", e.target.value)}
            onBlur={() => blurValidate("preferredTime")}
            className={`${inputClass} ${showError("preferredTime") ? invalidClass : ""}`}
            disabled={isLoading}
          >
            <option value="morning">Morning (9am – 12pm)</option>
            <option value="afternoon">Afternoon (12pm – 4pm)</option>
            <option value="evening">Late Afternoon (4pm – 6pm)</option>
          </select>
          {showError("preferredTime") && (
            <p className={errorTextClass} role="alert">
              {fieldErrors.preferredTime}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="booking-notes" className="block text-sm font-semibold text-navy mb-2">
          Additional notes <span className="text-navy/45 font-normal">(optional)</span>
        </label>
        <textarea
          ref={refs.notes}
          id="booking-notes"
          rows={4}
          value={form.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          onBlur={() => blurValidate("notes")}
          className={`${inputClass} min-h-[110px] resize-y ${showError("notes") ? invalidClass : ""}`}
          placeholder="Anything we should know before your visit…"
          disabled={isLoading}
          aria-invalid={showError("notes") ? true : undefined}
        />
        {showError("notes") && (
          <p className={errorTextClass} role="alert">
            {fieldErrors.notes}
          </p>
        )}
      </div>

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          aria-busy={isLoading}
          aria-label={isLoading ? "Submitting appointment request" : "Book appointment"}
          className="w-full sm:w-auto"
        >
          {isLoading ? "Sending request…" : "Request appointment"}
        </Button>
        <p className="text-xs text-navy/55 leading-relaxed sm:max-w-xs">
          By submitting, you agree we may contact you about this booking request.
        </p>
      </div>
    </form>
  );
}
