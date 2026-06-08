import type { DetailedService } from "@/types";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDetailCardProps {
  service: DetailedService;
  accent: "primary" | "accent";
}

export function ServiceDetailCard({ service, accent }: ServiceDetailCardProps) {
  const accentStyles =
    accent === "primary"
      ? "border-t-primary bg-white"
      : "border-t-accent bg-white/90";

  const checkColor = accent === "primary" ? "text-primary" : "text-accent";
  const priceColor = accent === "primary" ? "text-primary" : "text-accent";

  return (
    <article
      className={cn(
        "rounded-2xl border border-neutral-200 border-t-4 p-6 sm:p-7 shadow-sm card-hover h-full flex flex-col",
        accentStyles
      )}
    >
      <h3 className="font-heading text-xl font-bold text-navy mb-3">{service.title}</h3>

      <div className="space-y-4 text-sm sm:text-base flex-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">What it is</p>
          <p className="text-charcoal leading-relaxed">{service.summary}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">Who needs it</p>
          <p className="text-charcoal leading-relaxed">{service.whoNeedsIt}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">Benefits</p>
          <ul className="space-y-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-charcoal">
                <Check className={cn("w-4 h-4 shrink-0 mt-0.5", checkColor)} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={cn("mt-5 pt-4 border-t border-neutral-100 font-semibold", priceColor)}>
        {service.pricing}
      </p>
    </article>
  );
}
