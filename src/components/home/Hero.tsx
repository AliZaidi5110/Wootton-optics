"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ear, Glasses, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky text-primary rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 text-coral" />
              Family-Run Since 2003 · Northampton
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold text-navy leading-tight mb-6">
              Wootton Optics &amp; Wootton Hearing Care
            </h1>
            <p className="text-lg text-muted mb-4 max-w-xl leading-relaxed">
              {SITE.tagline} From NHS and private eye tests to free hearing
              consultations — expert clinical care under one roof in Wootton Fields, Northampton.
            </p>
            <p className="text-base text-charcoal mb-8 max-w-xl leading-relaxed">
              <strong className="text-navy">Wootton Optics</strong> has been open since 2003.
              Alongside <strong className="text-navy">Wootton Hearing Care</strong>, we provide
              comprehensive vision and hearing services for families across Northamptonshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button href="/appointments?service=eye-test" variant="primary" size="lg">
                Book Eye Test
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/appointments?service=hearing-test" variant="accent" size="lg">
                Book Hearing Test
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted font-medium">FREE initial consultations — no obligation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary card-hover">
                <div className="w-16 h-16 bg-sky rounded-2xl flex items-center justify-center mb-4">
                  <Glasses className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">Wootton Optics</h3>
                <p className="text-sm text-muted">Since 2003 · NHS &amp; private eye tests, specialist contact lenses &amp; clinical screening</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-accent card-hover mt-8">
                <div className="w-16 h-16 bg-coral/30 rounded-2xl flex items-center justify-center mb-4">
                  <Ear className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">Wootton Hearing</h3>
                <p className="text-sm text-muted">Free screenings &amp; consultations, ear wax removal &amp; hearing aid supply</p>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-primary/10 via-sky to-accent/10 rounded-2xl p-6 flex items-center justify-center gap-6">
                {["HCPC Registered", "NHS & Premium", "Non-Tolerance Guarantee"].map((badge) => (
                  <span key={badge} className="text-sm font-semibold text-navy text-center">{badge}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
