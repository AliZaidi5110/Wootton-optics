import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  Ear,
  Glasses,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookingBand } from "@/components/eye-care/BookingBand";
import { ExploreMore } from "@/components/eye-care/ExploreMore";
import { FaqAccordion } from "@/components/eye-care/FaqAccordion";
import { RichText, stripLinks } from "@/components/eye-care/RichText";
import { SectionHeading } from "@/components/eye-care/SectionHeading";
import { ServiceGrid } from "@/components/eye-care/ServiceGrid";
import { hub, hubPath } from "@/data/eye-care-hub";
import { SITE } from "@/lib/constants";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: hub.metaTitle,
  description: hub.metaDescription,
  path: hubPath,
  image: IMAGES.clinic,
  keywords: pageKeywords("optics"),
});

const hours = [
  ["Monday", "9:00 to 5:30"],
  ["Tuesday", "9:00 to 5:30"],
  ["Wednesday", "9:00 to 12:00"],
  ["Thursday", "9:00 to 5:30"],
  ["Friday", "9:00 to 5:30"],
  ["Saturday", "9:00 to 12:00"],
  ["Sunday", "Closed"],
  ["Lunch", "Closed 1:00 to 2:00"],
];

export default function OpticsPage() {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hub.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(faq.answer) },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHeader
        title={hub.h1}
        currentPath={hubPath}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Eye Care" }]}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: "Wootton Opticians clinic in Northampton — eye tests, glasses and specialist eye care",
          },
        ]}
      />

      {/* Introduction */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="container grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-navy/90 sm:text-xl">
              <RichText text={hub.intro} />
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/appointments?service=eye-test" size="lg" className="w-full sm:w-auto">
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Book an Eye Test
              </Button>
              <Button href={telHref} variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
            </div>
            <p className="mt-6 flex items-start gap-3 text-sm text-navy/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {hub.hours}
            </p>
          </div>

          <aside
            aria-label="Why patients choose us"
            className="rounded-2xl bg-navy-deep p-6 text-white shadow-xl lg:col-span-5"
          >
            <h2 className="font-heading text-xl font-bold !text-white">Why patients choose us</h2>
            <ul className="mt-4 space-y-3">
              {hub.whyPatientsChooseUs.map((item) => (
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

      {/* Local optician */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading title={hub.localHeading} />
            <p className="mt-6 text-lg leading-relaxed text-navy/85">{hub.localText}</p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="mb-4 font-heading text-xl font-bold text-navy">
              What you can book with us:
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {hub.bookList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-cream-dark bg-cream p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fresh/15 text-fresh">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-navy/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="scroll-mt-24 bg-sky py-16 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Eye care services"
            title={hub.servicesHeading}
            align="center"
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      {/* NHS and private eye tests */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container">
          <SectionHeading title={hub.testsHeading} align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[hub.nhsTest, hub.privateTest].map((test, i) => (
              <article
                key={test.href}
                className="flex flex-col rounded-2xl border border-cream-dark bg-white p-7 shadow-sm"
              >
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white ${
                    i === 0 ? "bg-fresh" : "bg-primary"
                  }`}
                >
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-bold text-navy">{test.label}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-navy/85">{test.text}</p>
                <Link
                  href={test.href}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  {test.linkLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border-l-4 border-primary bg-white p-6 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-navy">{hub.howOften.label}</h3>
            <p className="mt-2 leading-relaxed text-navy/85">{hub.howOften.text}</p>
          </div>
        </div>
      </section>

      {/* Designer glasses */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Frames"
            title={hub.brandsHeading}
            intro={hub.brandsText}
            align="center"
          />
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {hub.brands.map((brand) => (
              <li
                key={brand}
                className="rounded-full border border-primary/30 bg-teal-light/50 px-5 py-2.5 font-heading text-lg font-bold text-navy"
              >
                {brand}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button href={hub.brandsLink.href} variant="primary" size="lg">
              <Glasses className="h-5 w-5" aria-hidden="true" />
              {hub.brandsLink.label}
            </Button>
          </div>
        </div>
      </section>

      {/* Lens technology */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container">
          <SectionHeading title={hub.lensHeading} align="center" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hub.lenses.map((lens) => (
              <li
                key={lens.title}
                className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <h3 className="font-heading text-xl font-bold text-navy">{lens.title}</h3>
                <p className="mt-2 leading-relaxed text-navy/85">{lens.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specialist clinics */}
      <section className="bg-navy-deep py-16 text-white sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold !text-white sm:text-3xl lg:text-4xl">
              {hub.clinicsHeading}
            </h2>
            <span
              aria-hidden="true"
              className="mx-auto mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-primary to-fresh"
            />
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hub.clinics.map((clinic) => (
              <li key={clinic.href}>
                <Link
                  href={clinic.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <h3 className="font-heading text-xl font-bold !text-white">{clinic.title}</h3>
                  <p className="mt-2 flex-1 text-white/85">{clinic.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeading title={hub.whyChooseHeading} align="center" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hub.whyChoose.map((item) => (
              <li key={item.title} className="rounded-2xl bg-cream p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-navy/85">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas + hearing care */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-primary">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-2xl font-bold text-navy">{hub.areasHeading}</h2>
            <p className="mt-3 leading-relaxed text-navy/85">{hub.areasText}</p>
          </div>
          <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-primary">
              <Ear className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-2xl font-bold text-navy">{hub.underOneRoofHeading}</h2>
            <p className="mt-3 leading-relaxed text-navy/85">
              <RichText text={hub.underOneRoofText} />
            </p>
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeading title={hub.findUsHeading} align="center" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 rounded-2xl bg-cream p-8">
              <p className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-navy">Address</span>
                  <span className="text-navy/85">{SITE.address.full.replace(", UK", "")}</span>
                </span>
              </p>
              <p className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-navy">Phone</span>
                  <a href={telHref} className="text-primary hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-semibold text-navy">Email</span>
                  <a href={`mailto:${SITE.email}`} className="break-all text-primary hover:underline">
                    {SITE.email}
                  </a>
                </span>
              </p>
            </div>
            <div className="rounded-2xl border border-cream-dark p-8 shadow-sm">
              <h3 className="mb-4 flex items-center gap-3 font-heading text-xl font-bold text-navy">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                Opening hours
              </h3>
              <dl className="divide-y divide-cream-dark">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4 py-2.5">
                    <dt className="font-semibold text-navy">{day}</dt>
                    <dd className="text-navy/85">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Advice */}
      <section className="bg-sky py-16">
        <div className="container max-w-3xl">
          <SectionHeading title={hub.adviceHeading} align="center" />
          <ul className="mt-8 space-y-3">
            {hub.advice.map((post) => (
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

      <FaqAccordion heading={hub.faqsHeading} faqs={hub.faqs} />

      <BookingBand
        heading={hub.bookHeading}
        text={hub.bookText}
        ctaLabel="Book Sight Test Online"
      />

      <ExploreMore currentPath={hubPath} />
    </>
  );
}
