import { ServiceLanding } from "@/components/services/ServiceLanding";
import { generateSEO } from "@/lib/seo";
import { pageKeywords } from "@/lib/keywords";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

const path = "/nhs-eye-test-northampton";

export const metadata = generateSEO({
  title: "NHS Eye Test Northampton | Funded | Wootton",
  description:
    "Book an NHS eye test in Northampton at Wootton Opticians. Funded for eligible patients, with NHS optical vouchers toward glasses when required.",
  path,
  image: IMAGES.clinic,
  keywords: pageKeywords("nhs-eye-test-northampton"),
});

export default function NhsEyeTestNorthamptonPage() {
  return (
    <ServiceLanding
      title="NHS eye test"
      h1="NHS Eye Test Northampton"
      subtitle="Funded sight tests for eligible patients at Wootton Opticians, Wootton Hope Drive."
      path={path}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Eye Care", href: "/optics" },
        { label: "NHS Eye Test" },
      ]}
      intro={[
        "Wootton Opticians provides NHS sight tests in Northampton for eligible patients. Your examination includes vision assessment, eye health checks, and a prescription when needed.",
        "If you qualify for an NHS optical voucher, we can help you choose frames and lenses covered by your voucher, with optional upgrades available.",
      ]}
      whoFor={[
        "Children under 16 (and some under 19 in full-time education)",
        "People aged 60 and over",
        "Patients with diabetes or glaucoma risk factors",
        "Anyone on qualifying benefits or with an NHS optical voucher",
      ]}
      benefits={[
        "Funded for eligible NHS patients",
        "Thorough vision and eye health examination",
        "NHS voucher toward glasses if required",
        "Referral to specialists when clinically necessary",
      ]}
      pricingNote="Pricing: Funded for eligible patients"
      ctaHref="/appointments?service=eye-test"
      ctaLabel="Book NHS Eye Test"
      relatedLinks={[
        { href: "/optics", label: "Eye Care" },
        { href: "/myopia-management-northampton", label: "Myopia Management" },
        { href: "/services", label: "All Services" },
        { href: "/appointments", label: "Book Appointment" },
      ]}
      serviceSchema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "NHS Eye Test Northampton",
        description:
          "NHS-funded sight tests for eligible patients at Wootton Opticians, Northampton.",
        url: `${SITE.url}${path}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "City", name: "Northampton" },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "GBP",
          description: "Funded for eligible patients",
        },
      }}
      faqItems={[
        {
          question: "Do you offer NHS eye tests in Northampton?",
          answer:
            "Yes. Wootton Opticians provides NHS sight tests funded for eligible patients in Northampton. Bring any voucher or eligibility documents to your appointment.",
        },
        {
          question: "Do you accept NHS vouchers for glasses?",
          answer:
            "Yes. Bring your NHS optical voucher to our Northampton practice and we will help you select frames covered by the voucher.",
        },
      ]}
    />
  );
}
