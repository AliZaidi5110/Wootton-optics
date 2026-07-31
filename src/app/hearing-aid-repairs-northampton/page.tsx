import { ServiceLanding } from "@/components/services/ServiceLanding";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

const path = "/hearing-aid-repairs-northampton";

export const metadata = generateSEO({
  title: "Hearing Aid Repairs Northampton | Wootton",
  description:
    "Hearing aid repairs, cleaning, reprogramming and servicing in Northampton. Batteries and accessories available at Wootton Hearing Care.",
  path,
  image: IMAGES.clinic,
  keywords: [
    "hearing aid repairs Northampton",
    "hearing aid servicing Northampton",
    "hearing aid cleaning Northampton",
    "hearing aid batteries Northampton",
  ],
});

export default function HearingAidRepairsNorthamptonPage() {
  return (
    <ServiceLanding
      title="Hearing aid repairs"
      h1="Hearing Aid Repairs Northampton"
      subtitle="Cleaning, servicing, reprogramming and repairs at our Northampton clinic."
      path={path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Hearing Care", href: "/hearing" },
        { label: "Hearing Aid Repairs" },
      ]}
      intro={[
        "If your hearing aids whistle, cut out, or need a clean and check, bring them to Wootton Hearing Care in Northampton for professional servicing.",
        "We provide cleaning, reprogramming, repairs, batteries and accessories — whether your aids were fitted with us or elsewhere.",
      ]}
      whoFor={[
        "Hearing aid users with feedback, weak sound or faults",
        "Patients needing batteries, domes or accessories",
        "Anyone whose aids need cleaning or reprogramming",
        "People seeking a local repair option in Northampton",
      ]}
      benefits={[
        "Professional cleaning and checks",
        "Reprogramming as needed",
        "Repairs and accessories in clinic",
        "Supportive aftercare from a local team",
      ]}
      ctaHref="/appointments?service=hearing-test"
      ctaLabel="Book a Hearing Aid Check"
      relatedLinks={[
        { href: "/hearing", label: "Hearing Care" },
        { href: "/free-hearing-test-northampton", label: "Free Hearing Test" },
        { href: "/ear-wax-removal-northampton", label: "Ear Wax Removal" },
        { href: "/services", label: "All Services" },
      ]}
      serviceSchema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Hearing Aid Repairs Northampton",
        description:
          "Hearing aid repairs, cleaning and servicing at Wootton Hearing Care, Northampton.",
        url: `${SITE.url}${path}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Northampton" },
      }}
      faqItems={[
        {
          question: "Do you repair hearing aids in Northampton?",
          answer:
            "Yes. We provide hearing aid cleaning, servicing, reprogramming, repairs, batteries and accessories at our Northampton clinic. Call 01604 875111 to book.",
        },
      ]}
    />
  );
}
