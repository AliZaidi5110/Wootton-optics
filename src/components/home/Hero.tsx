"use client";

import { ArrowRight, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { trustStats } from "@/data/homepage-services";

export function Hero() {
  return (
    <section className="border-b border-neutral-200">
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        <div className="bg-navy text-white px-6 py-14 sm:px-10 lg:px-14 lg:py-20 flex flex-col justify-center">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-light text-sm font-medium border border-white/15">
              <Award className="w-4 h-4 text-primary" />
              Established 2003
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-light text-sm font-medium border border-white/15">
              <Shield className="w-4 h-4 text-primary" />
              Independent Practice
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6 text-white">
            Expert Eye &amp; Hearing Care in Northampton
          </h1>

          <p className="text-lg text-white/85 leading-relaxed mb-4 max-w-xl">
            {SITE.tagline} {SITE.opticsName} and {SITE.hearingName} offer
            personalised clinical care under one trusted, family-run roof.
          </p>

          <p className="text-base text-white/70 leading-relaxed mb-8 max-w-xl">
            NHS and private sight tests, specialist contact lenses, dry eye and
            glaucoma screening, myopia management, free hearing assessments, ear
            wax removal, and hearing aid supply — all delivered with time,
            expertise, and genuine care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/appointments?service=eye-test" variant="primary" size="lg">
              Book Sight Test
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="/appointments?service=hearing-test"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white hover:text-navy"
            >
              Book Hearing Test
            </Button>
          </div>
        </div>

        <div className="bg-cream px-6 py-14 sm:px-10 lg:px-14 lg:py-20 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
            Why patients trust us
          </p>
          <div className="grid grid-cols-2 gap-5 sm:gap-6">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-sm"
              >
                <p className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-charcoal leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted leading-relaxed max-w-md">
            Same dedicated clinicians at every visit. Honest recommendations
            without sales pressure. NHS access alongside premium options.
          </p>
        </div>
      </div>
    </section>
  );
}
