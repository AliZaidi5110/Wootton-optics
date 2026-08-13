"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { trackBookingSubmit } from "@/lib/analytics";
import type { AppointmentApiResponse } from "@/lib/validators";

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

  const inputClass =
    "w-full px-4 py-3 rounded-lg border-2 border-transparent bg-sky text-navy placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[48px]";
  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
      >
        <label htmlFor="booking-website">Website</label>
        <input
          id="booking-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />
      </div>

      <div
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
      >
        {status === "success" && (
          <div className="space-y-2 mb-2">
            <p className="text-fresh font-medium">
              Appointment request received! We will confirm by email shortly.
            </p>
            <p className="text-sm text-navy/80">
              Happy with your visit?{" "}
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline hover:no-underline"
              >
                Leave us a Google review
              </a>{" "}
              — it helps other local patients find us.
            </p>
          </div>
        )}
        {status === "error" && errorMessage && (
          <p className="text-red-800 font-medium mb-2 rounded-lg bg-red-50 border border-red-300 px-4 py-3">
            {errorMessage}{" "}
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="underline">
              {SITE.phoneDisplay ?? SITE.phone}
            </a>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-medium mb-2">
            Full Name <span aria-hidden="true">*</span>
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
          />
        </div>
        <div>
          <label htmlFor="booking-email" className="block text-sm font-medium mb-2">
            Email <span aria-hidden="true">*</span>
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
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-medium mb-2">
            Phone <span aria-hidden="true">*</span>
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
          />
        </div>
        <div>
          <label htmlFor="booking-service" className="block text-sm font-medium mb-2">
            Service <span aria-hidden="true">*</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="booking-date" className="block text-sm font-medium mb-2">
            Preferred Date <span aria-hidden="true">*</span>
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
          <label htmlFor="booking-time" className="block text-sm font-medium mb-2">
            Preferred Time <span aria-hidden="true">*</span>
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
        <label htmlFor="booking-notes" className="block text-sm font-medium mb-2">
          Additional Notes <span className="sr-only">(optional)</span>
        </label>
        <textarea
          id="booking-notes"
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className={`${inputClass} min-h-[80px]`}
          placeholder="Any specific requirements or questions..."
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        aria-busy={isLoading}
        aria-label={isLoading ? "Submitting appointment request" : "Book appointment"}
      >
        {isLoading ? "Booking..." : "Book Appointment"}
      </Button>
    </form>
  );
}
