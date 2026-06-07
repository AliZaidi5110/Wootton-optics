"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

const accentBorders = ["border-primary", "border-accent", "border-gold", "border-fresh", "border-coral", "border-sunny"];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-20 gradient-sky">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Real Stories from Real Patients
          </h2>
          <p className="text-muted text-lg">Trusted by families across Ilford, Essex &amp; Greater London</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-2xl p-8 sm:p-12 shadow-md border-t-4 ${accentBorders[current % accentBorders.length]}`}
            >
              <div className="flex gap-1 mb-4 justify-center">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunny text-sunny" />
                ))}
              </div>
              <p className="text-lg text-navy text-center leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="text-center">
                <div className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center font-heading font-bold text-white text-lg ${current % 2 === 0 ? "bg-primary" : "bg-accent"}`}>
                  {t.name.charAt(0)}
                </div>
                <p className="font-heading font-bold text-navy">{t.name}</p>
                <p className="text-sm text-muted">
                  {t.location} · {t.service === "hearing" ? "Hearing Care" : "Eye Care"}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} aria-label="Previous" className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-neutral-300"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} aria-label="Next" className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center mt-6">
            <Link href="/testimonials" className="text-primary font-semibold hover:text-accent transition-colors underline-offset-4 hover:underline">
              View all testimonials
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
