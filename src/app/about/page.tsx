import Image from "next/image";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Heart, Target, Users, Award, MapPin } from "lucide-react";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "About Wootton Optician & Hearing Care Northampton",
  description:
    "Learn about our independent, family-run opticians and hearing care clinic serving Wootton, Northampton and the local community since 2003.",
  path: "/about",
  image: IMAGES.clinic,
  keywords: ["Wootton Hearing", "family business Northampton", "audiologist Northamptonshire", "optician Northampton"],
});

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "We treat every client like family, with patience, empathy, and genuine concern for your wellbeing.",
  },
  {
    icon: Target,
    title: "Clinical Excellence",
    desc: "Continuous professional development ensures we deliver the highest standards of hearing and optical care.",
  },
  {
    icon: Users,
    title: "Community Focus",
    desc: "Proudly serving Northampton, Wootton Fields, and Northamptonshire. We support local events and health awareness campaigns.",
  },
  {
    icon: Award,
    title: "Honest Advice",
    desc: "Transparent recommendations without sales pressure. We advise what's genuinely best for your needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Wootton Optician & Hearing Care"
        subtitle="An independent, family-run practice dedicated to helping you hear and see the world more clearly."
        currentPath="/about"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundImages={[
          {
            src: IMAGES.clinic,
            alt: "Wootton Optician & Hearing Care clinic in Northampton",
          },
        ]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-navy/85 leading-relaxed mb-4">
                Wootton Hearing Care was established in 2003 with a clear vision: to bring
                personal, community-focused hearing care to Northampton. What began as a
                dedicated hearing clinic on Wootton Hope Drive has grown into a trusted
                destination for thousands of clients across Northamptonshire.
              </p>
              <p className="text-navy/85 leading-relaxed mb-4">
                As demand grew, the practice naturally expanded to include Wootton
                Optician — allowing families to address both their hearing and vision needs
                in one welcoming, familiar environment.
              </p>
              <p className="text-navy/85 leading-relaxed">
                Today, our qualified clinical team combines decades of experience with the
                warmth and personal attention that only an independent family business can
                provide. We are proud to be part of the Northampton community and committed
                to improving lives through better hearing and clearer vision.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={IMAGES.clinic}
                  alt="Wootton Optician and Wootton Hearing Care clinic storefront in Northampton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="bg-navy-deep p-6 text-center">
                <p className="font-heading text-xl font-bold text-white mb-1">
                  Wootton Optician &amp; Hearing Care
                </p>
                <p className="text-white/80 text-sm mb-3">Independent family practice</p>
                <p className="flex items-center justify-center gap-2 text-sm text-white/75">
                  <MapPin className="w-4 h-4 text-sky shrink-0" />
                  {SITE.address.full}
                </p>
                <p className="text-xs text-white/60 mt-3">Serving Northampton since 2003</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-4">
            Our Values & Mission
          </h2>
          <p className="text-center text-navy/85 max-w-2xl mx-auto mb-12">
            Our mission is to improve quality of life through accessible, expert
            hearing and vision care for every member of our community.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl border border-cream-dark bg-cream"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-sm text-navy/85">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">Community Involvement</h2>
          <p className="text-navy/85 max-w-2xl mx-auto leading-relaxed">
            We actively participate in local health fairs, provide free hearing
            screenings at community events, support local Northampton businesses and health
            initiatives, and sponsor local sports teams. Giving back to the community
            that has supported us for over 20 years is at the heart of who we are.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
