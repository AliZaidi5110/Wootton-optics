"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { trackBookingSubmit } from "@/lib/analytics";
import type { AppointmentApiResponse } from "@/lib/validators";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-navy/15 bg-cream/60 text-navy placeholder:text-navy/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white min-h-[48px] transition-colors disabled:opacity-60";

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
      } else {
        setStatus("error");
        setErrorMessage(
          (!data.success && data.error) ||
            "Something went wrong, please call us at 01604 875111"
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong, please call us at 01604 875111");
    }
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 relative" noValidate>
      {/* Honeypot — must stay out of visual/AT/crawler-visible content */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
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
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="underline font-semibold"
            >
              {SITE.phoneDisplay ?? SITE.phone}
            </a>
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
            id="booking-name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            disabled={isLoading}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="booking-email" className="block text-sm font-semibold text-navy mb-2">
            Email <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="booking-email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            disabled={isLoading}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-semibold text-navy mb-2">
            Phone <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            required
            aria-required="true"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            disabled={isLoading}
            placeholder="01604 000000"
          />
        </div>
        <div>
          <label htmlFor="booking-service" className="block text-sm font-semibold text-navy mb-2">
            Service <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            id="booking-service"
            required
            aria-required="true"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClass}
            disabled={isLoading}
          >
            <option value="hearing-test">Hearing Test</option>
            <option value="ear-wax-removal">Ear Wax Removal</option>
            <option value="hearing-aid">Hearing Aid Consultation</option>
            <option value="eye-test">Eye Test</option>
            <option value="optical">Optical Consultation</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="booking-date" className="block text-sm font-semibold text-navy mb-2">
            Preferred date <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="booking-date"
            type="date"
            required
            aria-required="true"
            min={new Date().toISOString().split("T")[0]}
            value={form.preferredDate}
            onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
            className={inputClass}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="booking-time" className="block text-sm font-semibold text-navy mb-2">
            Preferred time <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            id="booking-time"
            required
            aria-required="true"
            value={form.preferredTime}
            onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            className={inputClass}
            disabled={isLoading}
          >
            <option value="morning">Morning (9am – 12pm)</option>
            <option value="afternoon">Afternoon (12pm – 4pm)</option>
            <option value="evening">Late Afternoon (4pm – 6pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="booking-notes" className="block text-sm font-semibold text-navy mb-2">
          Additional notes <span className="text-navy/45 font-normal">(optional)</span>
        </label>
        <textarea
          id="booking-notes"
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className={`${inputClass} min-h-[110px] resize-y`}
          placeholder="Anything we should know before your visit…"
          disabled={isLoading}
        />
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
