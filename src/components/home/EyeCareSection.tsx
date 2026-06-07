import { Eye, Glasses, CircleDot, Contact, Baby, Activity, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
  { icon: Eye, label: "Eye Tests & Examinations", color: "text-sunny bg-sunny/20" },
  { icon: Glasses, label: "Designer Frames", color: "text-gold bg-gold/15" },
  { icon: CircleDot, label: "Premium Lenses", color: "text-primary bg-sky" },
  { icon: Contact, label: "Contact Lenses", color: "text-accent bg-coral/20" },
  { icon: Baby, label: "Children's Eyewear", color: "text-fresh bg-mint/40" },
  { icon: Activity, label: "Solutions for Every Lifestyle", color: "text-accent bg-accent/10" },
];

export function EyeCareSection() {
  return (
    <section className="py-20 gradient-sky">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-primary">
              <div className="w-20 h-20 bg-sky rounded-2xl flex items-center justify-center mb-6">
                <Glasses className="w-10 h-10 text-primary" />
              </div>
              <ul className="space-y-3">
                {["NHS & private eye tests", "100+ designer frame styles", "Varifocal & occupational lenses", "Free NHS voucher accepted"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Wootton Optics — Vision Clarity
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              From thorough eye examinations to designer frames and advanced lens technology — our dispensing opticians deliver crystal-clear vision with a personal touch.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${f.color}`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-navy">{f.label}</span>
                </div>
              ))}
            </div>
            <Button href="/optics" variant="primary" size="lg">
              Explore Eye Care Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
