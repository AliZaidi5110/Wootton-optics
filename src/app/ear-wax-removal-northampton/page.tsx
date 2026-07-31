import { ServiceLanding } from "@/components/services/ServiceLanding";
import { generateSEO } from "@/lib/seo";
import { SITE, EAR_WAX_PRICING } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

const path = "/ear-wax-removal-northampton";

export const metadata = generateSEO({
  title: "Ear Wax Removal Northampton | From £35 | Wootton",
  description:
    "Professional microsuction ear wax removal in Northampton from £35 per ear or £70 for both. No referral needed at Wootton Optician & Hearing Care.",
  path,
  image: IMAGES.clinic,
  keywords: [
    "ear wax removal Northampton",
    "ear wax removal cost Northampton",
    "microsuction Northampton",
    "blocked ears Northampton",
  ],
});

export default function EarWaxRemovalNorthamptonPage() {
  return (
    <ServiceLanding
      title="Ear wax removal"
      h1="Ear Wax Removal Northampton"
      subtitle={`Safe microsuction at our Wootton Hope Drive clinic — £${EAR_WAX_PRICING.oneEar} one ear · £${EAR_WAX_PRICING.bothEars} both ears.`}
      path={path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Hearing Care", href: "/hearing" },
        { label: "Ear Wax Removal" },
      ]}
      intro={[
        `If you have blocked ears, muffled hearing, or wax affecting your hearing aids, professional ear wax removal in Northampton is available at Wootton Optician & Hearing Care without a GP referral.`,
        `We use safe microsuction methods performed by trained clinicians. Appointments are typically quick, with clear pricing and no hidden fees — ideal if cotton buds or home remedies have not helped.`,
      ]}
      whoFor={[
        "Blocked or muffled hearing caused by wax",
        "Hearing aid users with wax build-up",
        "Discomfort, itching, or a feeling of fullness in the ear",
        "Anyone advised that wax needs clinical removal",
      ]}
      benefits={[
        "Microsuction by trained clinicians",
        "Immediate relief for many patients",
        "No referral required — book direct",
        "Same family practice since 2003",
      ]}
      pricingNote={`Pricing: £${EAR_WAX_PRICING.oneEar} per ear · £${EAR_WAX_PRICING.bothEars} for both ears`}
      ctaHref="/appointments?service=hearing-test"
      ctaLabel="Book Ear Wax Removal"
      relatedLinks={[
        { href: "/hearing", label: "Hearing Care" },
        { href: "/free-hearing-test-northampton", label: "Free Hearing Test" },
        { href: "/hearing-aid-repairs-northampton", label: "Hearing Aid Repairs" },
        { href: "/services", label: "All Services" },
      ]}
      serviceSchema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Ear Wax Removal Northampton",
        description:
          "Professional microsuction ear wax removal at Wootton Optician & Hearing Care, Northampton.",
        url: `${SITE.url}${path}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Northampton" },
        offers: [
          {
            "@type": "Offer",
            name: "One ear",
            price: String(EAR_WAX_PRICING.oneEar),
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            name: "Both ears",
            price: String(EAR_WAX_PRICING.bothEars),
            priceCurrency: "GBP",
          },
        ],
      }}
      faqItems={[
        {
          question: "How much does ear wax removal cost in Northampton?",
          answer: `At Wootton Optician & Hearing Care, ear wax removal costs £${EAR_WAX_PRICING.oneEar} for one ear or £${EAR_WAX_PRICING.bothEars} for both ears. No GP referral is needed.`,
        },
        {
          question: "Do I need a referral for ear wax removal?",
          answer:
            "No. You can book ear wax removal directly at our Northampton clinic by phone or online.",
        },
      ]}
    />
  );
}
