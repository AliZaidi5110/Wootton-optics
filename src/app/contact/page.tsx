import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Contact Us | Wootton Optician & Hearing Care Northampton",
  description:
    "Contact Wootton Optician & Hearing Care at 9 Tudor Court, Wootton Hope Drive, Northampton NN4 6FF. Call, email, or visit our clinic for hearing and optical services.",
  path: "/contact",
  keywords: ["contact Wootton Hearing", "Northampton optician contact", "hearing clinic Northamptonshire"],
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
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
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
                    <p className="text-neutral-600 dark:text-neutral-400">{SITE.hours.weekdays}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{SITE.hours.saturday}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{SITE.hours.sunday}</p>
                  </div>
                </div>
                <a
                  href={SITE.social.whatsapp}
                  className="inline-flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
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
    </>
  );
}
