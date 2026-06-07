import { PageHeader } from "@/components/shared/PageHeader";
import { CarePackages } from "@/components/home/CarePackages";
import { CTA } from "@/components/home/CTA";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Care Packages | Hearing & Eye Care Ilford",
  description:
    "Tailored care packages for hearing and vision health. Essential, Complete & Premium plans with non-tolerance guarantees at Wootton Hearing & Optics, Ilford.",
  path: "/care-packages",
  keywords: ["hearing care packages", "eye care plans Ilford", "hearing aid aftercare"],
});

export default function CarePackagesPage() {
  return (
    <>
      <PageHeader
        title="Our Care Packages"
        subtitle="Three flexible packages designed for every patient, every need — with non-tolerance guarantees and ongoing expert support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Care Packages" }]}
      />
      <section className="py-12 bg-white">
        <div className="container max-w-3xl text-center">
          <p className="text-muted text-lg leading-relaxed">
            At Wootton Hearing &amp; Optics, we believe you should not worry about ongoing care costs,
            follow-up appointments, or repairs. Our care packages give you clarity, confidence, and
            exceptional value — whether you are exploring hearing aids for the first time or renewing
            your designer eyewear.
          </p>
        </div>
      </section>
      <CarePackages />
      <CTA />
    </>
  );
}
