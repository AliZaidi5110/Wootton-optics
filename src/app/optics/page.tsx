import { PageHeader } from "@/components/shared/PageHeader";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CTA } from "@/components/home/CTA";
import { BookingForm } from "@/components/forms/BookingForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { lensTechnologies } from "@/data/eyewear";
import { faqs } from "@/data/faqs";
import { generateSEO, faqSchema } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { IMAGES } from "@/lib/images";
import { Check, Eye, Glasses, Shield } from "lucide-react";
import Link from "next/link";

export const revalidate = 86400;

const opticsFaqs = faqs.filter((f) => f.category === "optics");

export const metadata = generateSEO({
  title: "Opticians Northampton | Glasses & Eye Tests | Wootton",
  description:
    "Independent opticians in Northampton for NHS & private eye tests, designer glasses, contact lenses and specialist clinics at Wootton Hope Drive.",
  path: "/optics",
  image: IMAGES.clinic,
  keywords: pageKeywords("optics"),
});

export default function OpticsPage() {
  return (
    <>
      <JsonLd
        data={faqSchema(opticsFaqs.map((f) => ({ question: f.question, answer: f.answer })))}
      />
      <PageHeader
        title="Wootton Opticians — Eye Care Services"
        subtitle="Independent opticians in Northampton for NHS and private sight tests, designer eyewear, contact lenses and specialist clinics."
        currentPath="/optics"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Eye Care" },
        ]}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: "Wootton Opticians clinic in Northampton — eye tests, glasses and specialist eye care",
          },
        ]}
      />

      <section className="py-20 section-optician">
        <div className="container">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 text-center">
            Your local independent optician
          </h2>
          <p className="text-center text-navy/85 max-w-3xl mx-auto mb-10 leading-relaxed">
            At our Wootton Fields practice we combine thorough clinical eye examinations with
            personal frame styling and advanced lens options — for the whole family since 2003.
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-6">
                Optical services overview
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

      <section className="py-16 bg-cream">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-navy text-center mb-6">
            Popular eye care services in Northampton
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {[
              { href: "/eye-care-northampton", label: "Eye Care Northampton" },
              { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
              { href: "/myopia-management-northampton", label: "Myopia Management" },
              { href: "/dry-eye-assessment-northampton", label: "Dry Eye Assessment" },
              { href: "/services", label: "All Services & Prices" },
              { href: "/appointments?service=eye-test", label: "Book an Eye Test" },
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

      <section className="py-16 bg-white" id="faq">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-8 text-center">
            Eye care FAQs
          </h2>
          <div className="space-y-6">
            {opticsFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading font-bold text-navy mb-2">{faq.question}</h3>
                <p className="text-navy/85 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
