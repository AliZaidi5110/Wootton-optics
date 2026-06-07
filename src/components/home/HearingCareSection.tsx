import { Ear, Volume2, Package, Settings, Headphones, Wrench, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
  { icon: Ear, label: "Hearing Tests & Assessments", color: "text-primary bg-sky" },
  { icon: Volume2, label: "Premium Hearing Aids", color: "text-gold bg-gold/15" },
  { icon: Package, label: "Care Packages Available", color: "text-accent bg-coral/20" },
  { icon: Settings, label: "Expert Fitting & Adjustment", color: "text-fresh bg-mint/40" },
  { icon: Headphones, label: "Aftercare & Support", color: "text-accent bg-accent/10" },
  { icon: Wrench, label: "Maintenance & Repairs", color: "text-sunny bg-sunny/20" },
];

export function HearingCareSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Wootton Hearing — Sound Clarity
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Comprehensive hearing assessments, state-of-the-art hearing aids, and tailored care packages — all with the warmth of a family-run practice you can trust.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-sky/40 rounded-xl p-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${f.color}`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-navy">{f.label}</span>
                </div>
              ))}
            </div>
            <Button href="/hearing" variant="accent" size="lg">
              Explore Hearing Care Services
            </Button>
          </div>
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-accent">
              <div className="w-20 h-20 bg-coral/20 rounded-2xl flex items-center justify-center mb-6">
                <Ear className="w-10 h-10 text-accent" />
              </div>
              <ul className="space-y-3">
                {["Free initial hearing consultation", "All major hearing aid brands", "Trial periods available", "Lifetime aftercare on purchase"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
