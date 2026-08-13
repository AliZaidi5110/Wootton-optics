import { PageHeader } from "@/components/shared/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { SITE } from "@/lib/constants";
import { Check, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Book Eye or Hearing Test Northampton | Wootton",
  description:
    "Book an NHS eye test, private sight test or free hearing consultation online at our Northampton clinic. Confirmation by email within 24 hours.",
  path: "/appointments",
  keywords: pageKeywords("appointments"),
});

const expectations = [
  "Confirmation by email within 24 hours",
  "Reminder before your appointment",
  "Allow up to 60 minutes for hearing assessments",
  "Bring current glasses or hearing aids if you have them",
  "Honest advice — no obligation to purchase",
];

const popularLinks = [
  { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
  { href: "/eye-care-northampton", label: "Eye Care" },
  { href: "/free-hearing-test-northampton", label: "Free Hearing Test" },
  { href: "/ear-wax-removal-northampton", label: "Ear Wax Removal" },
  { href: "/services", label: "View Prices" },
];

export default function AppointmentsPage() {
  const phoneDisplay = SITE.phoneDisplay ?? SITE.phone;
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Request an eye or hearing appointment at our Wootton Hope Drive clinic. We’ll confirm by email within 24 hours."
        currentPath="/appointments"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book Appointment" },
        ]}
      />

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-navy/10 shadow-sm overflow-hidden">
                <div className="px-6 sm:px-8 py-6 border-b border-navy/8 bg-navy-deep">
                  <p className="text-sky text-xs font-semibold uppercase tracking-widest mb-2">
                    Online booking request
                  </p>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    Request your appointment
                  </h2>
                  <p className="text-white/80 text-sm mt-2 max-w-xl">
                    Complete the form and our team will confirm a suitable time. For urgent needs,
                    please call the practice directly.
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <BookingForm />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-navy/10 p-6 sm:p-7">
                <h2 className="font-heading text-xl font-bold text-navy mb-5">
                  Prefer to book by phone?
                </h2>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Call the clinic</p>
                      <a
                        href={telHref}
                        className="text-primary font-semibold hover:underline text-lg"
                      >
                        {phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Visit us</p>
                      <p className="text-navy/75 text-sm leading-relaxed">{SITE.address.full}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm mb-1">Opening hours</p>
                      <ul className="text-navy/75 text-sm space-y-0.5">
                        {SITE.hours.display.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-navy/10 p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h2 className="font-heading text-xl font-bold text-navy">What to expect</h2>
                </div>
                <ul className="space-y-3">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy/85">
                      <Check className="w-4 h-4 text-fresh shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy-deep px-6 py-5 text-white">
                <p className="text-sm text-white/85 leading-relaxed">
                  Independent family practice since 2003 — NHS and private care, free hearing
                  consultations, and clear advice with no sales pressure.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-navy/8">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-lg font-bold text-navy mb-3">Popular services</h2>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {popularLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-navy/70 hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
