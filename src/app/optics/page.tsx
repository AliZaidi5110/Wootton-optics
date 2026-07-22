import { PageHeader } from "@/components/shared/PageHeader";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CTA } from "@/components/home/CTA";
import { BookingForm } from "@/components/forms/BookingForm";
import { lensTechnologies } from "@/data/eyewear";
import { generateSEO } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { Check, Eye, Glasses, Shield } from "lucide-react";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Optician Northampton | NHS Eye Tests | Wootton",
  description:
    "Book an NHS or private eye test in Northampton at Wootton Optician. Designer glasses, contact lenses, myopia management and children's sight tests.",
  path: "/optics",
  image: IMAGES.clinic,
  keywords: [
    "optician Northampton",
    "eye test Northampton",
    "NHS eye test Northampton",
    "NHS sight test Northampton",
    "prescription glasses Northampton",
    "designer eyewear Northampton",
  ],
});

export default function OpticsPage() {
  return (
    <>
      <PageHeader
        title="Eye Care"
        subtitle="Comprehensive eye care, designer eyewear, and advanced lens technology from Northampton's trusted dispensing opticians."
        currentPath="/optics"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Eye Care" },
        ]}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: "Wootton Optician clinic storefront with designer eyewear, Northampton",
          },
        ]}
      />

      <section className="py-20 section-optician">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-10 text-center">
            Wootton Optician
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-6">
                Eye Care Services Overview
              </h3>
              <p className="text-navy/85 leading-relaxed mb-6">
                Wootton Optician provides thorough eye examinations, expert frame
                styling, and the latest lens technology. Whether you need a routine
                eye test, new prescription glasses, or contact lenses, our Northampton
                team delivers exceptional optical services.
              </p>
              <div className="space-y-3">
                {[
                  "NHS and private eye tests available",
                  "ABDO-registered dispensing opticians",
                  "Digital retinal imaging and glaucoma screening",
                  "Designer and everyday frame styles",
                  "Varifocal and occupational lens specialists",
                  "Contact lens fitting and aftercare",
                  "Blue light filtering options",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                    <span className="text-navy/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Eye, label: "Eye Tests", value: "NHS & Private" },
                { icon: Glasses, label: "Frames", value: "Designer & NHS" },
                { icon: Shield, label: "Lens Tech", value: "Advanced" },
                { icon: Check, label: "Aftercare", value: "Included" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-navy-deep rounded-2xl p-6 text-center border border-white/15 shadow-sm"
                >
                  <item.icon className="w-8 h-8 text-sky mx-auto mb-3" />
                  <p className="font-heading font-bold text-white">{item.label}</p>
                  <p className="text-sm text-white/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      <section id="eye-test" className="py-20 section-hearing">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-8">
            Book Your Eye Test
          </h2>
          <div className="on-light bg-white rounded-2xl p-8 border border-white/20 shadow-sm">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="py-20 section-hearing">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-4">
            Lens Technology
          </h2>
          <p className="text-center text-white/90 max-w-2xl mx-auto mb-12">
            Advanced lens options for every vision need and lifestyle.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {lensTechnologies.map((lens) => (
              <div
                key={lens.name}
                className="on-light bg-white rounded-2xl p-6 border border-white/20 shadow-sm"
              >
                <h3 className="font-heading font-bold text-lg text-navy mb-2">{lens.name}</h3>
                <p className="text-sm text-navy/85 mb-4">{lens.description}</p>
                <ul className="space-y-1">
                  {lens.benefits.map((b) => (
                    <li key={b} className="text-sm flex items-center gap-2 text-navy/90">
                      <Check className="w-4 h-4 text-fresh" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
