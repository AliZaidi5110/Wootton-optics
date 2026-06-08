import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HomepageServices } from "@/components/home/HomepageServices";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HomepageServices />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
