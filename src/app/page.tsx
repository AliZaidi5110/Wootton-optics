import { Hero } from "@/components/home/Hero";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { Philosophy } from "@/components/home/Philosophy";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CliniciansSection } from "@/components/home/CliniciansSection";
import { EyeCareSection } from "@/components/home/EyeCareSection";
import { HearingCareSection } from "@/components/home/HearingCareSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <Philosophy />
      <BrandMarquee />
      <CliniciansSection />
      <EyeCareSection />
      <HearingCareSection />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}
