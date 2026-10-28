import Link from "next/link";
import { ArrowRight, Ear, Heart, Volume2 } from "lucide-react";
import { SectionHeading } from "@/components/eye-care/SectionHeading";
import { services } from "@/data/services";

const HEARING_SERVICE_IDS = [
  "free-hearing-screening",
  "free-hearing-consultation",
  "ear-wax-removal",
  "hearing-aids",
  "hearing-aid-maintenance",
];

const ICONS = { ear: Ear, volume: Volume2, heart: Heart } as const;

const hearingServices = HEARING_SERVICE_IDS.map((id) => services.find((s) => s.id === id)).filter(
  (s): s is NonNullable<typeof s> => Boolean(s)
);

/** Grid of hearing services, each linking to its page (mirrors the eye care service grid). */
export function HearingServiceGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-sky py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Hearing care services"
          title="Our hearing care services in Northampton"
          align="center"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hearingServices.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Ear;
            return (
              <li key={service.id} className="flex">
                <Link
                  href={service.href}
                  className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-fresh transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-3xl font-bold text-navy/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold leading-snug text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/80">
                    {service.description}
                  </p>
                  {service.price && (
                    <p className="mt-4 text-sm font-semibold text-navy">{service.price}</p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
