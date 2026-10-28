import { CalendarCheck, Check, Clock, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import type { EyeCareService } from "@/data/eye-care-services";
import { hubPath } from "@/data/eye-care-hub";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { BookingBand } from "./BookingBand";
import { ContentBlocks } from "./ContentBlocks";
import { ExploreMore } from "./ExploreMore";
import { FaqAccordion } from "./FaqAccordion";
import { RichText, stripLinks } from "./RichText";
import { ServiceIcon } from "./ServiceIcon";

export function EyeServicePage({ service }: { service: EyeCareService }) {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.schemaDescription,
    url: `${SITE.url}${service.path}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "City", name: "Northampton" },
    ...(service.priceFrom && {
      offers: {
        "@type": "Offer",
        price: service.priceFrom,
        priceCurrency: "GBP",
        description: `From £${service.priceFrom}`,
      },
    }),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(faq.answer) },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <PageHeader
        title={service.h1}
        currentPath={service.path}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Eye Care", href: hubPath },
          { label: service.breadcrumb },
        ]}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: `${service.name} at Wootton Opticians & Hearing Care clinic, Northampton`,
          },
        ]}
      />

      {/* Introduction + at-a-glance card */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="container grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <p className="text-lg leading-relaxed text-navy/90 sm:text-xl">
              <RichText text={service.intro} />
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/appointments?service=eye-test" size="lg" className="w-full sm:w-auto">
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                {service.ctaLabel}
              </Button>
              <Button href={telHref} variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
            </div>
          </div>

          <aside
            aria-label="At a glance"
            className="rounded-2xl border border-cream-dark bg-white p-6 shadow-lg lg:col-span-5"
          >
            <h2 className="font-heading text-xl font-bold text-navy">At a glance</h2>
            {service.highlights && (
              <ul className="mt-4 space-y-3">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fresh/15 text-fresh">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-5 space-y-3 border-t border-cream-dark pt-5 text-sm text-navy/85">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {SITE.address.full}
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Mon, Tue, Thu, Fri 9:00 – 5:30
                  <br />
                  Wed &amp; Sat 9:00 – 12:00 · Closed for lunch 1:00 – 2:00
                </span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <ContentBlocks blocks={service.blocks} startAlt />

      <FaqAccordion
        heading={service.faqsHeading}
        faqs={service.faqs}
        className={service.blocks.length % 2 === 0 ? "bg-white" : "bg-cream"}
      />

      <BookingBand
        heading={service.bookHeading}
        text={service.bookText}
        ctaLabel={service.bookCtaLabel}
      />

      <ExploreMore currentPath={service.path} />
    </>
  );
}
