import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { team } from "@/data/team";
import { generateSEO } from "@/lib/seo";
import { Heart, Target, Users, Award } from "lucide-react";

export const metadata = generateSEO({
  title: "About Us | Family Hearing & Optical Care Ilford",
  description:
    "Meet the Wootton family — mother & son team providing expert hearing care and optical services in Ilford, Essex for over 20 years.",
  path: "/about",
  keywords: ["Wootton Hearing", "family business Ilford", "audiologist Essex", "optician Ilford"],
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
    desc: "Proudly serving Ilford, Essex, and Greater London. We support local events and health awareness campaigns.",
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
        title="About Wootton Hearing & Optics"
        subtitle="A mother & son family business dedicated to helping you hear and see the world more clearly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundImages={[
          { src: "/about-1.avif", alt: "Wootton Hearing & Optics clinic in Ilford" },
          { src: "/about-2.avif", alt: "Family-run hearing and optical care at Wootton" },
          { src: "/about-3.avif", alt: "Expert clinicians at Wootton Hearing & Optics" },
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
                hearing care in Ilford. What began as a small hearing aid clinic on
                Cranbrook Road has grown into a trusted destination for thousands of
                clients across Essex and London.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                In 2015, Margaret&apos;s son Daniel joined the business, bringing his
                expertise as a dispensing optician to create Wootton Optics. This
                natural expansion meant families could address both their hearing and
                vision needs in one welcoming, familiar environment.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Today, our mother-and-son team combines over 35 years of combined
                clinical experience with the warmth and personal attention that only a
                family business can provide. We are proud to be part of the Ilford
                community and committed to improving lives through better hearing and
                clearer vision.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <p className="font-heading text-2xl font-bold text-navy mb-2">Mother & Son</p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Margaret & Daniel Wootton
              </p>
              <p className="text-sm text-neutral-500 mt-4">
                Serving Ilford since 2003
              </p>
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
            screenings at community events, support the Ilford Business Improvement
            District, and sponsor local sports teams. Giving back to the community
            that has supported us for over 20 years is at the heart of who we are.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
