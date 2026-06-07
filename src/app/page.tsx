import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CliniciansSection } from "@/components/home/CliniciansSection";
import { EyeCareSection } from "@/components/home/EyeCareSection";
import { HearingCareSection } from "@/components/home/HearingCareSection";
import { CarePackages } from "@/components/home/CarePackages";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <BrandMarquee />
      <CliniciansSection />
      <EyeCareSection />
      <HearingCareSection />
      <CarePackages />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CTA />
    </>
  );
}
