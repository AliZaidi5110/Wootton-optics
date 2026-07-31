import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export type ServiceLandingProps = {
  title: string;
  h1: string;
  subtitle: string;
  path: string;
  breadcrumbs: { label: string; href?: string }[];
  intro: string[];
  whoFor: string[];
  benefits: string[];
  pricingNote?: string;
  ctaHref: string;
  ctaLabel: string;
  relatedLinks: { href: string; label: string }[];
  serviceSchema: Record<string, unknown>;
  faqItems?: { question: string; answer: string }[];
};

export function ServiceLanding({
  title,
  h1,
  subtitle,
  path,
  breadcrumbs,
  intro,
  whoFor,
  benefits,
  pricingNote,
  ctaHref,
  ctaLabel,
  relatedLinks,
  serviceSchema,
  faqItems = [],
}: ServiceLandingProps) {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <PageHeader
        title={h1}
        subtitle={subtitle}
        currentPath={path}
        breadcrumbs={breadcrumbs}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: `${title} at Wootton Optician & Hearing Care clinic, Northampton`,
          },
        ]}
      />

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-6">
            {title} in Northampton
          </h2>
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-navy/85 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
          {pricingNote && (
            <p className="mt-6 font-semibold text-navy text-lg border-l-4 border-primary pl-4">
              {pricingNote}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Who it&apos;s for</h2>
              <ul className="space-y-3">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/85">
                    <Check className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">What to expect</h2>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/85">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button href={ctaHref} variant="primary" size="lg" className="w-full sm:w-auto">
              {ctaLabel}
            </Button>
            <Button
              href={telHref}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {faqItems.length > 0 && (
        <section className="py-16 sm:py-20 bg-cream" id="faq">
          <div className="container max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-heading font-bold text-navy mb-2">{faq.question}</h3>
                  <p className="text-navy/85 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-white border-t border-cream-dark">
        <div className="container">
          <h2 className="font-heading text-xl font-bold text-navy mb-4 text-center">
            Related services
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary hover:underline font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
