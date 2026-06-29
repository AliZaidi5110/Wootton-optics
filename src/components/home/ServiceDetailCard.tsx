import type { DetailedService } from "@/types";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDetailCardProps {
  service: DetailedService;
  variant?: "light" | "dark";
}

export function ServiceDetailCard({ service, variant = "light" }: ServiceDetailCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={cn(
        "rounded-2xl border p-6 sm:p-7 h-full flex flex-col transition-shadow duration-300 hover:shadow-lg",
        isDark
          ? "bg-white/10 border-white/25 border-t-sky hover:bg-white/15 text-white"
          : "bg-white border-primary/20 border-t-navy shadow-sm"
      )}
    >
      <h3
        className={cn(
          "font-heading text-xl font-bold mb-3",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {service.title}
      </h3>

      <div className="space-y-4 text-sm sm:text-base flex-1">
        <div>
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-wide mb-1",
              isDark ? "text-sky" : "text-navy/70"
            )}
          >
            What it is
          </p>
          <p className={cn("leading-relaxed", isDark ? "text-white/90" : "text-navy/90")}>
            {service.summary}
          </p>
        </div>

        <div>
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-wide mb-1",
              isDark ? "text-sky" : "text-navy/70"
            )}
          >
            Who it&apos;s for
          </p>
          <p className={cn("leading-relaxed", isDark ? "text-white/90" : "text-navy/90")}>
            {service.whoNeedsIt}
          </p>
        </div>

        <div>
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-wide mb-2",
              isDark ? "text-sky" : "text-navy/70"
            )}
          >
            Key benefits
          </p>
          <ul className="space-y-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className={cn(
                  "flex items-start gap-2",
                  isDark ? "text-white/90" : "text-navy/90"
                )}
              >
                <Check
                  className={cn(
                    "w-4 h-4 shrink-0 mt-0.5",
                    isDark ? "text-sky" : "text-primary"
                  )}
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {service.pricing && (
        <p
          className={cn(
            "mt-5 pt-4 border-t font-semibold",
            isDark ? "border-white/25 text-white" : "border-primary/25 text-navy"
          )}
        >
          {service.pricing}
        </p>
      )}
    </article>
  );
}
