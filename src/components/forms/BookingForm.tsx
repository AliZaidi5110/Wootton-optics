"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { trackBookingSubmit } from "@/lib/analytics";

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "hearing-test",
    preferredDate: "",
    preferredTime: "morning",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
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
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border-2 border-transparent bg-sky text-navy placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[48px]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            id="booking-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="booking-email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            id="booking-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-medium mb-2">
            Phone *
          </label>
          <input
            id="booking-phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="booking-service" className="block text-sm font-medium mb-2">
            Service *
          </label>
          <select
            id="booking-service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClass}
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
            Preferred Date *
          </label>
          <input
            id="booking-date"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={form.preferredDate}
            onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="booking-time" className="block text-sm font-medium mb-2">
            Preferred Time *
          </label>
          <select
            id="booking-time"
            value={form.preferredTime}
            onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            className={inputClass}
          >
            <option value="morning">Morning (9am – 12pm)</option>
            <option value="afternoon">Afternoon (12pm – 4pm)</option>
            <option value="evening">Late Afternoon (4pm – 6pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="booking-notes" className="block text-sm font-medium mb-2">
          Additional Notes
        </label>
        <textarea
          id="booking-notes"
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className={`${inputClass} min-h-[80px]`}
          placeholder="Any specific requirements or questions..."
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Booking..." : "Book Appointment"}
      </Button>

      {status === "success" && (
        <div className="space-y-2" role="status">
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
      {status === "error" && (
        <p className="text-red-600 font-medium" role="alert">
          Booking failed. Please call us on{" "}
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="underline">
            {SITE.phoneDisplay ?? SITE.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
