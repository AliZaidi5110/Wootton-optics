import { PageHeader } from "@/components/shared/PageHeader";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CTA } from "@/components/home/CTA";
import { BookingForm } from "@/components/forms/BookingForm";
import { eyewearFrames, lensTechnologies } from "@/data/eyewear";
import { generateSEO } from "@/lib/seo";
import { Check, Eye, Glasses, Sun, Shield } from "lucide-react";

export const metadata = generateSEO({
  title: "Optical Services Essex | Eye Tests & Eyewear Ilford",
  description:
    "Professional eye tests, designer eyewear & advanced lens technology in Ilford, Essex. NHS & private appointments at Wootton Optics.",
  path: "/optics",
  keywords: [
    "optical services Essex",
    "eye test Ilford",
    "optician Essex",
    "prescription glasses Ilford",
    "designer eyewear",
  ],
});

export default function OpticsPage() {
  return (
    <>
      <PageHeader
        title="Wootton Optics"
        subtitle="Comprehensive eye care, designer eyewear, and advanced lens technology from Essex's trusted dispensing opticians."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Optics" },
        ]}
      />

      <BrandMarquee />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Eye Care Services Overview
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Wootton Optics provides thorough eye examinations, expert frame
                styling, and the latest lens technology. Whether you need a routine
                eye test, new prescription glasses, or contact lenses, our Ilford
                team delivers exceptional optical services.
              </p>
              <div className="space-y-3">
                {[
                  "NHS and private eye tests available",
                  "Digital retinal imaging and glaucoma screening",
                  "100+ designer and everyday frame styles",
                  "Varifocal and occupational lens specialists",
                  "Contact lens fitting and aftercare",
                  "UV protection and blue light filtering",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Eye, label: "Eye Tests", value: "NHS & Private" },
                { icon: Glasses, label: "Frames", value: "100+ Styles" },
                { icon: Sun, label: "UV Protection", value: "Standard" },
                { icon: Shield, label: "Lens Tech", value: "Advanced" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 text-center"
                >
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-heading font-bold text-navy">{item.label}</p>
                  <p className="text-sm text-neutral-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="eye-test" className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-8">
            Book Your Eye Test
          </h2>
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
            <BookingForm />
          </div>
        </div>
      </section>

      <section id="collections" className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-4">
            Eyewear Collections
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
            From classic styles to the latest designer frames, find your perfect
            look at Wootton Optics.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {eyewearFrames.map((frame) => (
              <div
                key={frame.id}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow group"
              >
                <div className="h-36 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                  <Glasses className="w-12 h-12 text-accent/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-neutral-500">{frame.brand}</p>
                  <h3 className="font-heading font-bold text-sm text-navy">{frame.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-neutral-500">{frame.style}</span>
                    <span className="font-semibold text-primary text-sm">{frame.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-4">
            Lens Technology
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
            Advanced lens options for every vision need and lifestyle.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {lensTechnologies.map((lens) => (
              <div
                key={lens.name}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="font-heading font-bold text-lg text-navy mb-2">{lens.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {lens.description}
                </p>
                <ul className="space-y-1">
                  {lens.benefits.map((b) => (
                    <li key={b} className="text-sm flex items-center gap-2">
                      <Check className="w-4 h-4 text-fresh" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                  <Sun className="w-8 h-8 text-accent" />
                  UV Protection Information
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  UV radiation damages eyes year-round, not just in summer. All lenses
                  dispensed at Wootton Optics include UV protection as standard. We
                  also offer prescription sunglasses with UV400-rated protection for
                  complete outdoor eye safety.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Children&apos;s eyes are especially vulnerable — we recommend UV-blocking
                  lenses and proper sunglasses from an early age.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["UV400 Protection", "Polarised Options", "Photochromic Lenses", "Prescription Sun"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-white dark:bg-neutral-800 rounded-xl p-4 text-center font-medium text-sm"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
