import Image from "next/image";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { team } from "@/data/team";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { Heart, Target, Users, Award, MapPin } from "lucide-react";

export const metadata = generateSEO({
  title: "About Us | Family Hearing & Optical Care Northampton",
  description:
    "Meet the Wootton family — mother & son team providing expert hearing care and optical services in Northampton for over 20 years.",
  path: "/about",
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
        subtitle="A mother & son family business dedicated to helping you hear and see the world more clearly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundImages={[
          { src: "/about-1.avif", alt: "Wootton Optician & Hearing Care clinic in Northampton" },
          { src: "/about-2.avif", alt: "Family-run hearing and optical care at Wootton" },
          { src: "/about-3.avif", alt: "Expert clinicians at Wootton Optician & Hearing Care" },
        ]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Wootton Hearing Care was founded in 2003 by Margaret Wootton, a
                passionate audiologist who saw a need for personal, community-focused
                hearing care in Northampton. What began as a small hearing aid clinic on
                Wootton Hope Drive has grown into a trusted destination for thousands of
                clients across Northamptonshire.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                In 2015, Margaret&apos;s son Daniel joined the business, bringing his
                expertise as a dispensing optician to create Wootton Optician. This
                natural expansion meant families could address both their hearing and
                vision needs in one welcoming, familiar environment.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Today, our mother-and-son team combines over 35 years of combined
                clinical experience with the warmth and personal attention that only a
                family business can provide. We are proud to be part of the Northampton
                community and committed to improving lives through better hearing and
                clearer vision.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/wootton-clinic.jpg"
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
                <p className="text-white/80 text-sm mb-3">Margaret &amp; Daniel Wootton</p>
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

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row"
              >
                <div className="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                  <Users className="w-16 h-16 text-primary/40" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-navy">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <ul className="space-y-1">
                    {member.qualifications.map((q) => (
                      <li key={q} className="text-xs text-neutral-500 flex items-center gap-2">
                        <Award className="w-3 h-3 text-fresh shrink-0" /> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-4">
            Our Values & Mission
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
            Our mission is to improve quality of life through accessible, expert
            hearing and vision care for every member of our community.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">Community Involvement</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We actively participate in local health fairs, provide free hearing
            screenings at community events, support local Northampton business and health
            District, and sponsor local sports teams. Giving back to the community
            that has supported us for over 20 years is at the heart of who we are.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
