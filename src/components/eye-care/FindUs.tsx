import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

const hours = [
  ["Monday", "9:00 to 5:30"],
  ["Tuesday", "9:00 to 5:30"],
  ["Wednesday", "9:00 to 12:00"],
  ["Thursday", "9:00 to 5:30"],
  ["Friday", "9:00 to 5:30"],
  ["Saturday", "9:00 to 12:00"],
  ["Sunday", "Closed"],
  ["Lunch", "Closed 1:00 to 2:00"],
];

/** Address, contact details and opening hours. */
export function FindUs({ heading }: { heading: string }) {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container">
        <SectionHeading title={heading} align="center" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 rounded-2xl bg-cream p-8">
            <p className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-navy">Address</span>
                <span className="text-navy/85">{SITE.address.full.replace(", UK", "")}</span>
              </span>
            </p>
            <p className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-navy">Phone</span>
                <a href={telHref} className="text-primary hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </span>
            </p>
            <p className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-semibold text-navy">Email</span>
                <a href={`mailto:${SITE.email}`} className="break-all text-primary hover:underline">
                  {SITE.email}
                </a>
              </span>
            </p>
          </div>
          <div className="rounded-2xl border border-cream-dark p-8 shadow-sm">
            <h3 className="mb-4 flex items-center gap-3 font-heading text-xl font-bold text-navy">
              <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
              Opening hours
            </h3>
            <dl className="divide-y divide-cream-dark">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-4 py-2.5">
                  <dt className="font-semibold text-navy">{day}</dt>
                  <dd className="text-navy/85">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
