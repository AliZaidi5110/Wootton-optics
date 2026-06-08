import { Users, UserCheck, ShieldCheck, Layers, Sparkles, Headphones } from "lucide-react";

const features = [
  { icon: Users, title: "Family-Owned Trust", desc: "Mother & son team with 20+ years serving Northampton", color: "text-accent bg-coral/20" },
  { icon: UserCheck, title: "Same Staff Every Visit", desc: "Build a lasting relationship with your clinician", color: "text-primary bg-sky" },
  { icon: ShieldCheck, title: "Non-Tolerance Guarantee", desc: "Try lenses and aids with complete confidence", color: "text-fresh bg-mint/40" },
  { icon: Layers, title: "NHS + Premium Options", desc: "From free NHS to Italian designer brands", color: "text-gold bg-gold/15" },
  { icon: Sparkles, title: "Personalised Solutions", desc: "Tailored to your lifestyle, budget & needs", color: "text-accent bg-accent/10" },
  { icon: Headphones, title: "Expert Support", desc: "Ongoing aftercare, adjustments & repairs", color: "text-sunny bg-sunny/20" },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Why Wootton is Different
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Your local independent centre where practice is based on the highest level of professional and personal service.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 p-6 rounded-2xl bg-neutral-50 card-hover">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy mb-1">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
