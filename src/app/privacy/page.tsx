import { PageHeader } from "@/components/shared/PageHeader";
import { generateSEO } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description:
    "Wootton Hearing Care Ltd privacy policy. GDPR-compliant data protection for hearing and optical services in Ilford, Essex.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="py-20">
        <div className="container max-w-3xl prose">
          <p className="text-neutral-600 dark:text-neutral-400">Last updated: June 2025</p>
          <h2>1. Data Controller</h2>
          <p>
            {SITE.hearingName} ({SITE.address.full}) is the data controller for personal
            data collected through this website and our clinical services.
          </p>
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information including name, email, phone number, appointment
            details, and health-related information necessary for providing hearing and optical
            services. We also collect website usage data via cookies and analytics.
          </p>
          <h2>3. How We Use Your Data</h2>
          <p>
            Your data is used to provide clinical services, process appointments, send
            confirmations and reminders, improve our services, and comply with legal
            obligations. We never sell your personal data.
          </p>
          <h2>4. Your Rights (GDPR)</h2>
          <p>
            You have the right to access, rectify, erase, restrict processing, data portability,
            and to object to processing. Contact {SITE.email} to exercise these rights.
          </p>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures including SSL/TLS
            encryption, access controls, and regular security reviews to protect your data.
          </p>
          <h2>6. Contact</h2>
          <p>
            For privacy enquiries, contact our Data Protection Officer at {SITE.email} or
            write to {SITE.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}
