import { PageHeader } from "@/components/shared/PageHeader";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Accessibility Statement",
  description: "WCAG 2.1 AA accessibility commitment for Wootton Hearing & Optics website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        title="Accessibility Statement"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
      />
      <section className="py-20">
        <div className="container max-w-3xl prose">
          <p>
            {SITE.name} is committed to ensuring digital accessibility for people with
            disabilities. We continually improve the user experience for everyone and apply
            the relevant accessibility standards.
          </p>
          <h2>Conformance Status</h2>
          <p>
            This website aims to conform to WCAG 2.1 Level AA. We use semantic HTML,
            keyboard navigation support, sufficient colour contrast, alt text for images,
            and ARIA labels for interactive elements.
          </p>
          <h2>Physical Accessibility</h2>
          <p>
            Our Wootton Hope Drive clinic is wheelchair accessible with step-free access.
            Please contact us in advance if you need any additional accommodations.
          </p>
          <h2>Feedback</h2>
          <p>
            If you encounter accessibility barriers on our website or in our clinic,
            please contact us at {SITE.email} or {SITE.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
