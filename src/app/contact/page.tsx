import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Contact Optician Northampton | Wootton",
  description:
    "Contact our Northampton clinic at 9 Tudor Court, Wootton Hope Drive. Call 01604 875111 to book an eye test, hearing consultation or ear wax removal.",
  path: "/contact",
  keywords: pageKeywords("contact"),
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Visit our Northampton clinic, call, or send us a message."
        currentPath="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{SITE.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="text-primary hover:underline"
                    >
                      {SITE.phoneDisplay ?? SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-primary hover:underline block">
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    {SITE.hours.display.map((line) => (
                      <p key={line} className="text-neutral-600 dark:text-neutral-400">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 h-64 bg-neutral-100 dark:bg-neutral-800">
                <iframe
                  title="Wootton Optician & Hearing Care location on Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-xl font-bold text-navy mb-4">Looking for a service?</h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {[
              { href: "/appointments", label: "Book an Appointment" },
              { href: "/eye-care-northampton", label: "Eye Care Northampton" },
              { href: "/ear-wax-removal-northampton", label: "Ear Wax Removal" },
              { href: "/free-hearing-test-northampton", label: "Free Hearing Test" },
              { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary font-medium hover:underline">
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
