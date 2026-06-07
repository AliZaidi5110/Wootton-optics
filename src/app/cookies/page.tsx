import { PageHeader } from "@/components/shared/PageHeader";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Cookie Policy",
  description: "Cookie policy for Wootton Hearing & Optics website. GDPR-compliant cookie usage information.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHeader title="Cookie Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
      <section className="py-20">
        <div className="container max-w-3xl prose">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website.
            They help us provide a better experience and understand how our site is used.
          </p>
          <h2>Cookies We Use</h2>
          <p><strong>Essential cookies:</strong> Required for site functionality including cookie consent preferences.</p>
          <p><strong>Analytics cookies:</strong> Google Analytics 4 helps us understand visitor behaviour (only with your consent).</p>
          <p><strong>Preference cookies:</strong> Remember your theme preference (light/dark mode).</p>
          <h2>Managing Cookies</h2>
          <p>
            You can accept or decline non-essential cookies via our cookie consent banner.
            You can also manage cookies through your browser settings.
          </p>
        </div>
      </section>
    </>
  );
}
