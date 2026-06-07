"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";

const highlights = [
  "Independent access to the best eyewear & hearing aid brands",
  "Same dedicated clinicians at every visit",
  "Non-tolerance guarantees on lenses and hearing aids",
];

export function WelcomeSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image collage */}
          <div className="relative flex">
            <div className="absolute left-0 top-10 bottom-10 w-1.5 bg-fresh rounded-full hidden sm:block" aria-hidden="true" />

            <div className="relative ml-0 sm:ml-6 w-full max-w-lg mx-auto lg:mx-0 pb-10 sm:pb-12">
              {/* Rotating 20+ badge */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 z-20 w-28 h-28 sm:w-32 sm:h-32">
                <div className="relative w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
                  <span className="relative z-10 font-heading text-3xl sm:text-4xl font-bold text-fresh">
                    20+
                  </span>
                  <svg
                    className="absolute inset-0 w-full h-full welcome-badge-spin"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="welcomeBadgeCircle"
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                      />
                    </defs>
                    <text fill="#04A777" fontSize="7.5" fontWeight="600" letterSpacing="1.5">
                      <textPath href="#welcomeBadgeCircle" startOffset="0%">
                        YEARS OF PRACTICING • 20+ YEARS •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/welcome-1.jpg"
                  alt="Eye examination at Wootton Optics, Ilford"
                  width={520}
                  height={620}
                  className="w-full h-auto object-cover aspect-[4/5]"
                  priority
                />
              </div>

              {/* Overlapping secondary image */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 w-[52%] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/welcome-2.jpg"
                  alt="Optometrist examining a patient at Wootton Hearing & Optics"
                  width={280}
                  height={200}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="lg:pl-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
              <span className="text-fresh">Introducing</span>{" "}
              <span className="text-navy">Your Trusted Family Eye &amp; Hearing Clinic</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              Wootton Hearing Care Ltd and Wootton Optics are a mother-and-son practice on
              Cranbrook Road, Ilford — delivering expert eye tests, designer eyewear, hearing
              assessments, and premium hearing aids with the personal care only a family business
              can offer.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <span className="w-6 h-6 rounded-full bg-fresh/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-fresh" />
                  </span>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-10">
              <p className="text-muted text-sm mb-1">Have any question?</p>
              <Link
                href="/appointments"
                className="font-heading text-xl sm:text-2xl font-bold text-navy hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Book an Appointment
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sky border-2 border-fresh flex items-center justify-center overflow-hidden">
                  <span className="font-heading font-bold text-primary text-lg">MW</span>
                </div>
                <p className="font-heading text-xl text-primary italic">Margaret &amp; Daniel Wootton</p>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-md border border-neutral-100 ml-auto">
                <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-navy leading-none">5,000+</p>
                  <p className="text-sm text-muted">Patients</p>
                </div>
              </div>
            </div>

            <Button href="/about" variant="primary" className="mt-8 lg:hidden">
              Learn About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
