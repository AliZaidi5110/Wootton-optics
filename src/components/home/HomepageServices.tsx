import {
  opticsIntro,
  hearingIntro,
  opticsServices,
  hearingServices,
} from "@/data/homepage-services";
import { Button } from "@/components/ui/Button";
import { ServiceDetailCard } from "@/components/home/ServiceDetailCard";
import { Glasses, Ear } from "lucide-react";

export function HomepageServices() {
  return (
    <>
      <section id="optics-services" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky text-primary rounded-full text-sm font-semibold mb-4">
              <Glasses className="w-4 h-4" />
              Open since {opticsIntro.established}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              {opticsIntro.headline}
            </h2>
            <p className="text-lg text-charcoal leading-relaxed">{opticsIntro.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {opticsServices.map((service) => (
              <ServiceDetailCard key={service.id} service={service} accent="primary" />
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/appointments?service=eye-test" variant="primary" size="lg">
              Book an Eye Test
            </Button>
            <Button href="/optics" variant="outline" size="lg">
              View All Eye Care
            </Button>
          </div>
        </div>
      </section>

      <section id="hearing-services" className="py-20 gradient-sky">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-accent rounded-full text-sm font-semibold mb-4">
              <Ear className="w-4 h-4" />
              {hearingIntro.name}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              {hearingIntro.headline}
            </h2>
            <p className="text-lg text-charcoal leading-relaxed">{hearingIntro.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hearingServices.map((service) => (
              <ServiceDetailCard key={service.id} service={service} accent="accent" />
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/appointments?service=hearing-test" variant="accent" size="lg">
              Book a Free Hearing Consultation
            </Button>
            <Button href="/hearing" variant="outline" size="lg">
              View All Hearing Care
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
