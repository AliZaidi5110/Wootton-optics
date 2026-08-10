import { ServiceLanding } from "@/components/services/ServiceLanding";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

const path = "/dry-eye-assessment-northampton";

export const metadata = generateSEO({
  title: "Dry Eye Assessment Northampton | Wootton",
  description:
    "Dry eye assessment in Northampton at Wootton Opticians. Personalised treatment for dry, gritty, burning or watery eyes — book today.",
  path,
  image: IMAGES.clinic,
  keywords: pageKeywords("dry-eye-assessment-northampton"),
});

export default function DryEyeAssessmentNorthamptonPage() {
  return (
    <ServiceLanding
      title="Dry eye assessment"
      h1="Dry Eye Assessment Northampton"
      subtitle="Clinical assessment and personalised care for dry, gritty or watery eyes at Wootton Opticians."
      path={path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Eye Care", href: "/optics" },
        { label: "Dry Eye Assessment" },
      ]}
      intro={[
        "Dry, burning, gritty or watery eyes are common — especially with screen use and contact lenses. At Wootton Opticians in Northampton we assess the underlying cause and build a personalised treatment plan.",
        "Rather than guessing with over-the-counter drops alone, a clinical assessment helps target the right combination of advice, products and follow-up.",
      ]}
      whoFor={[
        "People with dry, irritated or tired eyes",
        "Contact lens wearers struggling with comfort",
        "Heavy screen users and office workers",
        "Anyone with watery eyes that still feel dry",
      ]}
      benefits={[
        "Root-cause focused assessment",
        "Personalised treatment plan",
        "Product and lifestyle guidance",
        "Follow-up monitoring as needed",
      ]}
      ctaHref="/appointments?service=eye-test"
      ctaLabel="Book Dry Eye Assessment"
      relatedLinks={[
        { href: "/optics", label: "Eye Care" },
        { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
        { href: "/myopia-management-northampton", label: "Myopia Management" },
        { href: "/services", label: "All Services" },
      ]}
      serviceSchema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Dry Eye Assessment Northampton",
        description:
          "Dry eye assessment and personalised treatment at Wootton Opticians, Northampton.",
        url: `${SITE.url}${path}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Northampton" },
      }}
      faqItems={[
        {
          question: "Do you offer dry eye treatment in Northampton?",
          answer:
            "Yes. Our dry eye assessment at Wootton Opticians identifies the cause of your symptoms and provides a personalised plan including clinical advice, recommended products and follow-up care.",
        },
      ]}
    />
  );
}
