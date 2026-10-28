import { ChevronDown } from "lucide-react";
import type { EyeCareFaq } from "@/data/eye-care-services";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

export function FaqAccordion({
  heading,
  faqs,
  className = "bg-cream",
}: {
  heading: string;
  faqs: EyeCareFaq[];
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`} id="faq">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="Questions answered" title={heading} align="center" />
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-cream-dark bg-white shadow-sm open:border-primary/40 open:shadow-md"
            >
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading text-lg font-bold text-navy">{faq.question}</h3>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-navy/85">
                <RichText text={faq.answer} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
