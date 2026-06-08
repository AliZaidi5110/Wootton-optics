import {
  opticsIntro,
  hearingIntro,
  opticsServices,
  hearingServices,
} from "@/data/homepage-services";
import { Button } from "@/components/ui/Button";
import { ServiceDetailCard } from "@/components/home/ServiceDetailCard";

export function HomepageServices() {
  return (
    <>
      <section id="optician-services" className="py-20 section-optician">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Open since {opticsIntro.established}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              {opticsIntro.headline}
            </h2>
            <p className="text-lg text-charcoal leading-relaxed">{opticsIntro.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {opticsServices.map((service) => (
              <ServiceDetailCard key={service.id} service={service} variant="light" />
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/appointments?service=eye-test" variant="primary" size="lg">
              Book a Sight Test
            </Button>
            <Button href="/optics" variant="outline" size="lg">
              Learn More About Eye Care
            </Button>
          </div>
        </div>
      </section>

      <section id="hearing-services" className="py-20 section-hearing text-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-light mb-3">
              {hearingIntro.name}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {hearingIntro.headline}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">{hearingIntro.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hearingServices.map((service) => (
              <ServiceDetailCard key={service.id} service={service} variant="dark" />
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/appointments?service=hearing-test" variant="primary" size="lg">
              Book a Free Consultation
            </Button>
            <Button
              href="/hearing"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white hover:text-navy"
            >
              Learn More About Hearing Care
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
