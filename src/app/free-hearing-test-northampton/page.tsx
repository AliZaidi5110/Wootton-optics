import { ServiceLanding } from "@/components/services/ServiceLanding";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

const path = "/free-hearing-test-northampton";

export const metadata = generateSEO({
  title: "Free Hearing Test Northampton | Wootton",
  description:
    "Book a free hearing consultation in Northampton at Wootton Hearing Care. Full assessment, honest advice, and no obligation to purchase hearing aids.",
  path,
  image: IMAGES.clinic,
  keywords: [
    "free hearing test Northampton",
    "hearing test Northampton",
    "free hearing consultation Northampton",
    "audiologist Northampton",
  ],
});

export default function FreeHearingTestNorthamptonPage() {
  return (
    <ServiceLanding
      title="Free hearing test"
      h1="Free Hearing Test Northampton"
      subtitle="Free initial hearing consultations with no obligation — at our Wootton Hope Drive clinic."
      path={path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Hearing Care", href: "/hearing" },
        { label: "Free Hearing Test" },
      ]}
      intro={[
        "If you struggle in background noise, turn the TV up, or wonder whether your hearing has changed, book a free hearing consultation in Northampton at Wootton Hearing Care.",
        "Your visit includes audiometric assessment and clear recommendations with no sales pressure. You decide whether hearing aids or further care is right for you.",
      ]}
      whoFor={[
        "Adults noticing hearing changes or difficulty in groups",
        "People over 50 wanting peace of mind",
        "Anyone struggling with TV volume or phone calls",
        "Family members concerned about a loved one’s hearing",
      ]}
      benefits={[
        "Free initial consultation",
        "Full hearing assessment explained clearly",
        "Honest, independent advice",
        "No obligation to purchase",
      ]}
      pricingNote="Pricing: Free initial consultation"
      ctaHref="/appointments?service=hearing-test"
      ctaLabel="Book Free Hearing Test"
      relatedLinks={[
        { href: "/hearing", label: "Hearing Care" },
        { href: "/ear-wax-removal-northampton", label: "Ear Wax Removal" },
        { href: "/hearing-aid-repairs-northampton", label: "Hearing Aid Repairs" },
        { href: "/services", label: "All Services" },
      ]}
      serviceSchema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Free Hearing Test Northampton",
        description:
          "Free hearing consultation and assessment at Wootton Hearing Care, Northampton.",
        url: `${SITE.url}${path}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Northampton" },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "GBP",
        },
      }}
      faqItems={[
        {
          question: "How much does a hearing test cost in Northampton?",
          answer:
            "Our initial hearing consultation at Wootton Hearing Care in Northampton is free, with no obligation to purchase hearing aids.",
        },
        {
          question: "Is a hearing screening the same as a full hearing test?",
          answer:
            "A screening is a quick check. A full consultation includes comprehensive audiometry, lifestyle discussion, and detailed recommendations.",
        },
      ]}
    />
  );
}
