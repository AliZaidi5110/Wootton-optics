import { ServiceLanding } from "@/components/services/ServiceLanding";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

const path = "/eye-care-northampton";

export const metadata = generateSEO({
  title: "Eye Care Northampton | Optician | Wootton",
  description:
    "Eye care in Northampton at Wootton Opticians — NHS & private eye tests, glasses, contact lenses, myopia management and dry eye assessment in Wootton Fields.",
  path,
  image: IMAGES.clinic,
  keywords: [
    "eye care Northampton",
    "eye care in Northampton",
    "optician Northampton",
    "eye test Northampton",
    "NHS eye test Northampton",
    "independent optician Northampton",
  ],
});

export default function EyeCareNorthamptonPage() {
  return (
    <ServiceLanding
      title="Eye care"
      h1="Eye Care in Northampton"
      subtitle="Independent eye care at Wootton Opticians — NHS and private sight tests, designer glasses and specialist clinics since 2003."
      path={path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Eye Care", href: "/optics" },
        { label: "Eye Care Northampton" },
      ]}
      intro={[
        "Searching for eye care in Northampton? Wootton Opticians is a local independent practice on Wootton Hope Drive (NN4 6FF), serving Wootton Fields, Hardingstone, Collingtree and the wider Northampton area.",
        "We focus on thorough NHS and private eye tests, clear prescriptions, and specialist clinics — including children’s sight tests, myopia management, dry eye assessment and glaucoma screening — with time to explain every result.",
        "Unlike large chains, you see the same trusted clinicians in a family-run setting established in 2003, with free parking nearby and simple online booking.",
      ]}
      whoFor={[
        "Anyone needing an NHS or private eye test in Northampton",
        "Families looking for children’s eye care and myopia management",
        "Contact lens wearers needing specialist fitting or aftercare",
        "People with dry eyes, headaches or changing vision",
      ]}
      benefits={[
        "NHS eye tests funded for eligible patients",
        "Private sight tests from £55 with retinal imaging options",
        "Designer and everyday frames with expert dispensing",
        "Myopia management, dry eye and glaucoma screening",
        "Same trusted clinicians at our Wootton Fields clinic",
      ]}
      pricingNote="NHS eye tests: funded for eligible patients · Private sight tests: from £55"
      ctaHref="/appointments?service=eye-test"
      ctaLabel="Book Eye Care Appointment"
      relatedLinks={[
        { href: "/optics", label: "Full Eye Care Services" },
        { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
        { href: "/myopia-management-northampton", label: "Myopia Management" },
        { href: "/dry-eye-assessment-northampton", label: "Dry Eye Assessment" },
        { href: "/services", label: "All Services" },
      ]}
      serviceSchema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Eye Care Northampton",
        description:
          "Independent eye care in Northampton including NHS and private eye tests, glasses and specialist clinics at Wootton Opticians.",
        url: `${SITE.url}${path}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: [
          { "@type": "City", name: "Northampton" },
          { "@type": "City", name: "Wootton Fields" },
        ],
      }}
      faqItems={[
        {
          question: "Where can I get eye care in Northampton?",
          answer:
            "Wootton Opticians offers eye care in Northampton at 9 Tudor Court, Wootton Hope Drive, NN4 6FF. Book an NHS or private eye test online or call 01604 875111.",
        },
        {
          question: "Do you offer NHS eye tests?",
          answer:
            "Yes. NHS sight tests are funded for eligible patients. We also accept NHS optical vouchers toward glasses.",
        },
        {
          question: "What eye care services do you provide?",
          answer:
            "NHS and private eye tests, children’s sight tests, myopia management, dry eye assessment, glaucoma screening, contact lenses and prescription glasses.",
        },
      ]}
    />
  );
}
