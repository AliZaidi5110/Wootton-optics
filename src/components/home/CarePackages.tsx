import { Star, Heart, Crown, Check } from "lucide-react";
import { carePackages } from "@/data/care-packages";
import { Button } from "@/components/ui/Button";

const iconMap = { star: Star, heart: Heart, crown: Crown };
const borderMap = {
  sunny: "border-sunny",
  primary: "border-primary",
  gold: "border-gold",
};
const checkMap = {
  sunny: "text-sunny",
  primary: "text-primary",
  gold: "text-gold",
};

export function CarePackages() {
  return (
    <section className="py-20 gradient-warm">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Care Packages Tailored to You
          </h2>
          <p className="text-muted text-lg">Designed for every patient, every need</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {carePackages.map((pkg) => {
            const Icon = iconMap[pkg.icon as keyof typeof iconMap] || Star;
            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl p-8 border-t-4 ${borderMap[pkg.accentColor]} card-hover ${pkg.featured ? "shadow-xl scale-[1.02] ring-2 ring-primary/20" : "shadow-md"}`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${pkg.accentColor === "primary" ? "bg-sky text-primary" : pkg.accentColor === "gold" ? "bg-gold/15 text-gold" : "bg-sunny/20 text-sunny"}`}>
                  <Icon className={`w-7 h-7 ${pkg.featured ? "w-8 h-8" : ""}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-navy mb-1">{pkg.price}</p>
                <p className="text-sm text-muted mb-4">{pkg.period}</p>
                <p className="text-sm text-muted mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-charcoal">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${checkMap[pkg.accentColor]}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted mb-4">Best for: {pkg.bestFor}</p>
                <Button href="/care-packages" variant={pkg.ctaVariant} className="w-full">
                  Choose Plan
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
