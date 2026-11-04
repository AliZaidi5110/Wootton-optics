import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Clock, Ear, Info, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookingBand } from "@/components/eye-care/BookingBand";
import { ContentTable } from "@/components/eye-care/ContentBlocks";
import { ExploreMore } from "@/components/eye-care/ExploreMore";
import { FaqAccordion } from "@/components/eye-care/FaqAccordion";
import { FindUs } from "@/components/eye-care/FindUs";
import { RichText, stripLinks } from "@/components/eye-care/RichText";
import { SectionHeading } from "@/components/eye-care/SectionHeading";
import { ServiceGrid } from "@/components/eye-care/ServiceGrid";
import { hearingHub, hearingHubPath } from "@/data/hearing-care-hub";
import { hearingCareServices } from "@/data/hearing-care-services";
import { SITE } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: hearingHub.metaTitle,
  description: hearingHub.metaDescription,
  path: hearingHubPath,
  image: IMAGES.clinic,
  keywords: pageKeywords("hearing"),
});

export default function HearingPage() {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hearingHub.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(faq.answer) },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHeader
        title={hearingHub.h1}
        currentPath={hearingHubPath}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hearing Care" }]}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: "Wootton Hearing Care clinic in Northampton — hearing tests, ear wax removal and hearing aids",
          },
        ]}
      />

      {/* Introduction */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="container grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-navy/90 sm:text-xl">{hearingHub.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/appointments?service=hearing-test"
                size="lg"
                className="w-full sm:w-auto"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Book a Free Hearing Test
              </Button>
              <Button href={telHref} variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
            </div>
            <p className="mt-6 flex items-start gap-3 text-sm text-navy/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {hearingHub.hours}
            </p>
            <p className="mt-4 flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-navy">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {hearingHub.notice}
            </p>
          </div>

          <aside
            aria-label="Why patients choose us"
            className="rounded-2xl bg-navy-deep p-6 text-white shadow-xl lg:col-span-5"
          >
            <h2 className="font-heading text-xl font-bold !text-white">Why patients choose us</h2>
            <ul className="mt-4 space-y-3">
              {hearingHub.whyPatientsChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/30 text-sky">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Local clinic */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container max-w-4xl text-center">
          <SectionHeading title={hearingHub.localHeading} align="center" />
          <p className="mt-6 text-lg leading-relaxed text-navy/85">{hearingHub.localText}</p>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="scroll-mt-24 bg-sky py-16 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Hearing care services"
            title={hearingHub.servicesHeading}
            align="center"
          />
          <div className="mt-12">
            <ServiceGrid services={hearingCareServices} />
          </div>
        </div>
      </section>

      {/* Which service */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container max-w-4xl">
          <SectionHeading title={hearingHub.whichHeading} align="center" />
          <ContentTable columns={hearingHub.whichColumns} rows={hearingHub.whichRows} />
        </div>
      </section>

      {/* How to get started */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container max-w-4xl">
          <SectionHeading title={hearingHub.startedHeading} align="center" />
          <ol className="mt-10 space-y-4">
            {hearingHub.started.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-xl border border-cream-dark bg-cream p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1.5 text-lg leading-relaxed text-navy/90">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container">
          <SectionHeading title={hearingHub.whyChooseHeading} align="center" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hearingHub.whyChoose.map((item) => (
              <li key={item.title} className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-navy/85">
                  <RichText text={item.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas + eye care */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-cream-dark bg-cream p-8">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-primary">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-2xl font-bold text-navy">{hearingHub.areasHeading}</h2>
            <p className="mt-3 leading-relaxed text-navy/85">{hearingHub.areasText}</p>
          </div>
          <div className="rounded-2xl border border-cream-dark bg-cream p-8">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-primary">
              <Ear className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-2xl font-bold text-navy">
              {hearingHub.underOneRoofHeading}
            </h2>
            <p className="mt-3 leading-relaxed text-navy/85">
              <RichText text={hearingHub.underOneRoofText} />
            </p>
          </div>
        </div>
      </section>

      <FindUs heading={hearingHub.findUsHeading} />

      {/* Advice */}
      <section className="bg-sky py-16">
        <div className="container max-w-3xl">
          <SectionHeading title={hearingHub.adviceHeading} align="center" />
          <ul className="mt-8 space-y-3">
            {hearingHub.advice.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="group flex min-h-[56px] items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 font-semibold text-navy shadow-sm transition-all hover:text-primary hover:shadow-md"
                >
                  {post.label}
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion heading={hearingHub.faqsHeading} faqs={hearingHub.faqs} />

      <BookingBand
        heading={hearingHub.bookHeading}
        text={hearingHub.bookText}
        ctaLabel="Book a Free Hearing Test"
        ctaHref="/appointments?service=hearing-test"
        secondary={{ label: "Book Ear Wax Removal", href: "/appointments?service=hearing-test" }}
      />

      <ExploreMore currentPath={hearingHubPath} family="hearing" />
    </>
  );
}
