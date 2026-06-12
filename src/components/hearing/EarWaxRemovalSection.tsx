import Image from "next/image";
import Link from "next/link";
import { Check, Ear, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EAR_WAX_PRICING, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const benefits = [
  "Safe microsuction by trained clinicians",
  "Immediate relief from blocked or muffled hearing",
  "Ideal for hearing aid users with wax build-up",
  "No referral needed — book direct at our clinic",
];

export function EarWaxRemovalSection() {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  return (
    <section id="ear-wax-removal" className="py-20 section-hearing">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              <Image
                src={IMAGES.clinic}
                alt="Wootton Optician and Wootton Hearing Care clinic at 9 Tudor Court, Northampton"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:flex bg-primary text-white rounded-xl px-5 py-3 shadow-lg border border-white/20">
              <div className="flex items-center gap-2">
                <Ear className="w-5 h-5" />
                <span className="font-semibold text-sm">Ear Wax Removal Available</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky mb-3">
              Wootton Hearing Care
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Professional Ear Wax Removal
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              Visit our Northampton clinic for safe, clinical ear wax removal by
              microsuction. Clear pricing with no hidden fees — the same trusted
              family practice serving Wootton Fields since 2003.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-sky mb-2">
                  One Ear
                </p>
                <p className="font-heading text-4xl font-bold text-white mb-1">
                  £{EAR_WAX_PRICING.oneEar}
                </p>
                <p className="text-sm text-white/75">Single ear treatment</p>
              </div>
              <div className="rounded-2xl bg-primary/20 border border-primary/40 p-6 text-center ring-1 ring-primary/30">
                <p className="text-sm font-semibold uppercase tracking-wide text-sky mb-2">
                  Both Ears
                </p>
                <p className="font-heading text-4xl font-bold text-white mb-1">
                  £{EAR_WAX_PRICING.bothEars}
                </p>
                <p className="text-sm text-white/75">Complete bilateral treatment</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                href="/appointments?service=hearing-test"
                variant="primary"
                size="lg"
              >
                Book Wax Removal
              </Button>
              <Button
                href={telHref}
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-navy"
              >
                <Phone className="w-5 h-5" />
                Call to Book
              </Button>
            </div>

            <div className="flex items-start gap-2 text-sm text-white/75">
              <MapPin className="w-4 h-4 text-sky shrink-0 mt-0.5" />
              <span>
                {SITE.address.full} ·{" "}
                <Link href={telHref} className="text-sky hover:text-white transition-colors">
                  {SITE.phoneDisplay ?? SITE.phone}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
