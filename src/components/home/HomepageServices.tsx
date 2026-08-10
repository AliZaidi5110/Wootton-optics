import Link from "next/link";
import {
  opticsIntro,
  hearingIntro,
  opticsServices,
  hearingServices,
} from "@/data/homepage-services";
import { Button } from "@/components/ui/Button";
import { ServiceDetailCard } from "@/components/home/ServiceDetailCard";

const opticsQuickLinks = [
  { href: "/eye-care-northampton", label: "Eye Care Northampton" },
  { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
  { href: "/myopia-management-northampton", label: "Myopia Management" },
  { href: "/dry-eye-assessment-northampton", label: "Dry Eye Assessment" },
];

const hearingQuickLinks = [
  { href: "/free-hearing-test-northampton", label: "Free Hearing Test" },
  { href: "/ear-wax-removal-northampton", label: "Ear Wax Removal" },
  { href: "/hearing-aid-repairs-northampton", label: "Hearing Aid Repairs" },
];

export function HomepageServices() {
  return (
    <>
      <section id="optician-services" className="py-20 section-optician">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy/80 mb-3">
              Open since {opticsIntro.established}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              {opticsIntro.headline}
            </h2>
            <p className="text-lg text-navy/90 leading-relaxed">{opticsIntro.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {opticsServices.map((service) => (
              <ServiceDetailCard key={service.id} service={service} variant="light" />
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/appointments?service=eye-test" variant="primary" size="lg" className="w-full sm:w-auto">
              Book a Sight Test
            </Button>
            <Button
              href="/optics"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-navy text-navy bg-white/60 hover:bg-navy hover:text-white"
            >
              Learn More About Eye Care
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {opticsQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-navy/80 font-medium hover:text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="hearing-services" className="py-20 section-hearing text-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky mb-3">
              {hearingIntro.name}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {hearingIntro.headline}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">{hearingIntro.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hearingServices.map((service) => (
              <ServiceDetailCard key={service.id} service={service} variant="dark" />
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/appointments?service=hearing-test" variant="primary" size="lg" className="w-full sm:w-auto">
              Book a Free Consultation
            </Button>
            <Button
              href="/hearing"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-navy"
            >
              Learn More About Hearing Care
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {hearingQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 font-medium hover:text-sky hover:underline">
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
