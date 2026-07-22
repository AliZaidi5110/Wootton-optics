import { PageHeader } from "@/components/shared/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { Calendar, MapPin, Phone, Check } from "lucide-react";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Book Eye or Hearing Test Northampton | Wootton",
  description:
    "Book an NHS eye test, private sight test or free hearing consultation online at our Northampton clinic. Confirmation by email within 24 hours.",
  path: "/appointments",
  keywords: [
    "book eye test Northampton",
    "book hearing test Northampton",
    "NHS eye test appointment Northampton",
    "free hearing consultation Northampton",
  ],
});

export default function AppointmentsPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <>
      <PageHeader
        title="Book Your Appointment"
        subtitle="Schedule a free consultation for hearing tests, hearing aids, ear wax removal, eye tests, or optical services."
        currentPath="/appointments"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book Appointment" },
        ]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Visit the Practice",
                desc: "Visit our Wootton Hope Drive clinic for comprehensive assessments.",
              },
              {
                icon: Phone,
                title: "Phone Booking",
                desc: `Call ${SITE.phoneDisplay ?? SITE.phone} to speak with our team directly.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 text-center"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Book an Appointment</h2>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                <BookingForm />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">What to Expect</h2>
              <div className="space-y-4">
                {[
                  "Confirmation email within 24 hours",
                  "SMS reminder 24 hours before appointment",
                  "Allow 60 minutes for hearing assessments",
                  "Bring current glasses for eye tests",
                  "No obligation to purchase",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              {calendlyUrl && (
                <div className="mt-8">
                  <h3 className="font-heading font-bold text-navy mb-4">Or Book via Calendly</h3>
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <Calendar className="w-5 h-5" />
                    Open Calendly Scheduler
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
