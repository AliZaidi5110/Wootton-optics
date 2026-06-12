import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { Button } from "@/components/ui/Button";

export const metadata = generateSEO({
  title: "Page Not Found",
  description: "The page you are looking for could not be found. Visit Wootton Optician & Hearing Care in Northampton.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="py-24 bg-cream min-h-[60vh] flex items-center">
      <div className="container text-center max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">404</p>
        <h1 className="font-heading text-4xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-navy/85 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find that page. You may have followed an outdated link or
          mistyped the address.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/appointments" variant="outline" size="lg">
            Book an Appointment
          </Button>
        </div>
        <p className="mt-8 text-sm text-navy/70">
          Need help?{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contact our Northampton clinic
          </Link>
        </p>
      </div>
    </section>
  );
}
