import { ServiceLanding } from "@/components/services/ServiceLanding";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

const path = "/myopia-management-northampton";

export const metadata = generateSEO({
  title: "Myopia Management Northampton | Children | Wootton",
  description:
    "Myopia management for children in Northampton at Wootton Opticians. Specialist lenses and monitoring to help slow short-sightedness progression.",
  path,
  image: IMAGES.clinic,
  keywords: pageKeywords("myopia-management-northampton"),
});

export default function MyopiaManagementNorthamptonPage() {
  return (
    <ServiceLanding
      title="Myopia management"
      h1="Myopia Management Northampton"
      subtitle="Evidence-based care to help slow short-sightedness in children at Wootton Opticians."
      path={path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Eye Care", href: "/optics" },
        { label: "Myopia Management" },
      ]}
      intro={[
        "Myopia (short-sightedness) often progresses through childhood. At Wootton Opticians in Northampton, we offer myopia management programmes using specialist contact lenses or spectacle lenses, with regular monitoring.",
        "Early assessment helps protect long-term eye health and may reduce how strong a child’s prescription becomes over time.",
      ]}
      whoFor={[
        "Children and teenagers whose prescription is getting stronger each year",
        "Families with a history of high myopia",
        "Children who sit close to screens or struggle to see the board at school",
        "Parents seeking proactive options beyond standard glasses alone",
      ]}
      benefits={[
        "Specialist contact lens and spectacle options",
        "Personalised monitoring plan",
        "May reduce long-term prescription progression",
        "Clear guidance for parents and schools",
      ]}
      ctaHref="/appointments?service=eye-test"
      ctaLabel="Book a Children’s Eye Assessment"
      relatedLinks={[
        { href: "/optics", label: "Eye Care" },
        { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
        { href: "/services", label: "All Services" },
        { href: "/about", label: "About Us" },
      ]}
      serviceSchema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Myopia Management Northampton",
        description:
          "Myopia management programmes for children at Wootton Opticians, Northampton.",
        url: `${SITE.url}${path}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Northampton" },
      }}
      faqItems={[
        {
          question: "What is myopia management for children in Northampton?",
          answer:
            "Myopia management uses specialist contact lenses or spectacle lenses to help slow the progression of short-sightedness in children. At Wootton Opticians we assess suitability and create a monitoring plan.",
        },
        {
          question: "When should my child have an eye test?",
          answer:
            "Children should be tested regularly — often annually — especially if they sit close to screens, squint, complain of headaches, or have a family history of eye problems.",
        },
      ]}
    />
  );
}
