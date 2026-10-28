import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eyeCareServices } from "@/data/eye-care-services";
import { ServiceIcon } from "./ServiceIcon";

/** The seven clinical eye care services shown on the hub (glasses keeps its own page, linked elsewhere). */
const gridServices = eyeCareServices.filter((s) => s.slug !== "glasses-northampton");

/** Grid of every eye care service: name + overview, each linking to its full page. */
export function ServiceGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {gridServices.map((service, i) => (
        <li key={service.path} className="flex">
          <Link
            href={service.path}
            className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-fresh transition-transform duration-300 group-hover:scale-x-100"
            />
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <span className="font-heading text-3xl font-bold text-navy/10">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold leading-snug text-navy">
              {service.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/80">{service.overview}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
