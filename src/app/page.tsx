import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HomepageServices } from "@/components/home/HomepageServices";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTA } from "@/components/home/CTA";
import { FAQ } from "@/components/home/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import { faqs } from "@/data/faqs";

export const revalidate = 86400;

export default function HomePage() {
  const faqItems = faqs.slice(0, 6).map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <Hero />
      <TrustStrip />
      <HomepageServices />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}
