import { PageHeader } from "@/components/shared/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { Calendar, Video, Phone, Check } from "lucide-react";

export const metadata = generateSEO({
  title: "Book Appointment | Free Consultation Ilford",
  description:
    "Book your free hearing test or eye test appointment at Wootton Hearing & Optics, Ilford. Online booking with confirmation email. Virtual consultations available.",
  path: "/appointments",
  keywords: [
    "book hearing test Ilford",
    "eye test appointment Essex",
    "free consultation Ilford",
  ],
});

export default function AppointmentsPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <>
      <PageHeader
        title="Book Your Appointment"
        subtitle="Schedule a free consultation for hearing tests, hearing aids, eye tests, or optical services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book Appointment" },
        ]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Calendar,
                title: "In-Clinic Visit",
                desc: "Visit our Cranbrook Road clinic for comprehensive assessments.",
              },
              {
                icon: Video,
                title: "Virtual Consultation",
                desc: "Initial consultations available via video call from home.",
              },
              {
                icon: Phone,
                title: "Phone Booking",
                desc: `Call ${SITE.phone} to speak with our team directly.`,
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
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Request an Appointment</h2>
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
                  "Free parking available nearby",
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
