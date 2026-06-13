import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { EarWaxRemovalSection } from "@/components/hearing/EarWaxRemovalSection";
import { BookingForm } from "@/components/forms/BookingForm";
import { hearingAids } from "@/data/hearing-aids";
import { generateSEO } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { Check, Ear, Volume2, Heart } from "lucide-react";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Hearing Aids Northampton | Expert Hearing Care Northamptonshire",
  description:
    "Premium hearing aids, free hearing tests, ear wax removal (£35/£70) & audiologist services in Northampton. BTE, RIC, ITE & invisible hearing aids with expert fitting & aftercare.",
  path: "/hearing",
  image: IMAGES.clinic,
  keywords: [
    "hearing aids Northampton",
    "hearing test Northampton",
    "hearing care Northamptonshire",
    "audiologist Northampton",
    "free hearing test",
    "ear wax removal Northampton",
  ],
});

export default function HearingPage() {
  return (
    <>
      <PageHeader
        title="Wootton Hearing Care"
        subtitle="Expert hearing tests, premium hearing aids, and lifetime aftercare from Northampton's trusted family audiologists."
        currentPath="/hearing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hearing Care" },
        ]}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: "Wootton Optician and Wootton Hearing Care clinic storefront, Northampton",
          },
        ]}
      />

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Why Choose Wootton Hearing?
              </h2>
              <p className="text-navy/85 leading-relaxed mb-8">
                At Wootton Hearing Care Ltd, we believe everyone deserves to hear
                life&apos;s precious moments clearly. Our Northampton clinic offers
                comprehensive hearing assessments, the latest hearing aid
                technology, and compassionate ongoing support.
              </p>
              <div className="space-y-4">
                {[
                  "Free initial hearing consultation — no obligation",
                  "All major hearing aid brands available",
                  "Custom programming and fitting",
                  "Trial periods on selected models",
                  "Rechargeable and Bluetooth-enabled options",
                  "Lifetime aftercare included with purchase",
                  "Ear wax removal — £35 per ear, £70 for both ears",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                    <span className="text-navy/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                { icon: Ear, title: "Hearing Tests", desc: "Comprehensive audiometry" },
                { icon: Volume2, title: "Hearing Aids", desc: "All styles & brands" },
                { icon: Heart, title: "Aftercare", desc: "Lifetime support" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-navy-deep rounded-xl p-5 border border-white/15 shadow-sm"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-sky" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">{item.title}</p>
                    <p className="text-sm text-white/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EarWaxRemovalSection />

      <section id="hearing-test" className="py-20 section-hearing">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-4">
            Your Hearing Test Explained
          </h2>
          <p className="text-center text-white/90 max-w-2xl mx-auto mb-12">
            A comprehensive hearing assessment takes approximately 60 minutes and
            includes several tests to build a complete picture of your hearing health.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your hearing concerns and medical history" },
              { step: "2", title: "Examination", desc: "Visual inspection of ear canals and eardrums" },
              { step: "3", title: "Audiometry", desc: "Pure tone and speech testing in our soundproof booth" },
              { step: "4", title: "Results", desc: "Clear explanation of your audiogram and recommendations" },
            ].map((item) => (
              <div
                key={item.step}
                className="on-light bg-white rounded-2xl p-6 text-center border border-white/20 shadow-sm"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-navy/85">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hearing-aids" className="py-20 bg-white">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-4">
            Types of Hearing Aids
          </h2>
          <p className="text-center text-navy/85 max-w-2xl mx-auto mb-12">
            We offer the full spectrum of modern hearing aid styles to suit every
            degree of hearing loss and lifestyle preference.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {hearingAids.map((aid) => (
              <div
                key={aid.id}
                className="bg-cream rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-teal-light to-sky flex items-center justify-center">
                  <Ear className="w-16 h-16 text-primary/30" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-navy/70 uppercase">{aid.type}</span>
                  <h3 className="font-heading font-bold text-lg text-navy mt-1 mb-2">{aid.name}</h3>
                  <p className="text-sm text-navy/85 mb-4">{aid.description}</p>
                  <ul className="space-y-1 mb-4">
                    {aid.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-xs text-navy/75 flex items-center gap-2">
                        <Check className="w-3 h-3 text-fresh" /> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="font-semibold text-primary">{aid.priceRange}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Product Comparison</h3>
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left rounded-tl-lg">Feature</th>
                  {hearingAids.slice(0, 4).map((a) => (
                    <th key={a.id} className="p-4 text-left">{a.type}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["Bluetooth", "Rechargeable", "AI Noise Reduction", "Invisible"].map(
                  (feature, i) => (
                    <tr
                      key={feature}
                      className={i % 2 === 0 ? "bg-sky/50" : "bg-white"}
                    >
                      <td className="p-4 font-medium text-navy">{feature}</td>
                      {hearingAids.slice(0, 4).map((a) => (
                        <td key={a.id} className="p-4">
                          {a.features.some((f) =>
                            f.toLowerCase().includes(feature.toLowerCase().split(" ")[0])
                          ) ? (
                            <Check className="w-5 h-5 text-fresh" />
                          ) : (
                            <span className="text-navy/40">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="aftercare" className="py-20 section-hearing">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-8">
            Book Your Hearing Assessment
          </h2>
          <div className="on-light bg-white rounded-2xl p-8 shadow-lg border border-white/20">
            <BookingForm />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
