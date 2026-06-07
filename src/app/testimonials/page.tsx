import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { testimonials } from "@/data/testimonials";
import { generateSEO } from "@/lib/seo";
import { Star } from "lucide-react";

export const metadata = generateSEO({
  title: "Patient Testimonials | Wootton Hearing & Optics",
  description:
    "Read real stories from patients at Wootton Hearing & Optics, Ilford. Hearing care and eye care testimonials from Essex and London.",
  path: "/testimonials",
  keywords: ["Wootton Hearing reviews", "optician reviews Ilford", "hearing aid testimonials"],
});

const borderColors = ["border-primary", "border-accent", "border-gold", "border-fresh"];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Patient Testimonials"
        subtitle="Real stories from real patients across Ilford, Essex and Greater London."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <article
                key={t.id}
                className={`bg-white rounded-2xl p-8 shadow-md border-t-4 ${borderColors[i % borderColors.length]}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-sunny text-sunny" />
                  ))}
                </div>
                <p className="text-navy italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white ${i % 2 === 0 ? "bg-primary" : "bg-accent"}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy">{t.name}</p>
                    <p className="text-sm text-muted">
                      {t.location} · {t.service === "hearing" ? "Hearing Care" : "Eye Care"}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
