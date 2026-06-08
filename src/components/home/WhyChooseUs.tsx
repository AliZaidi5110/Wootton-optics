import { Building2, Heart, Layers, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Truly Independent",
    desc: "Not tied to any supplier — we recommend what is genuinely best for your eyes and hearing.",
  },
  {
    icon: Layers,
    title: "NHS & Private Access",
    desc: "Eligible NHS sight tests and vouchers, alongside private appointments and premium options.",
  },
  {
    icon: Heart,
    title: "Family-Run Since 2003",
    desc: "A mother-and-son practice built on trust, continuity, and genuine patient relationships.",
  },
  {
    icon: UserCheck,
    title: "Same Clinicians Every Visit",
    desc: "See the same qualified professionals who know your history and understand your needs.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Excellence",
    desc: "HCPC-registered audiologists and experienced dispensing opticians using modern technology.",
  },
  {
    icon: Sparkles,
    title: "Personalised Care",
    desc: "Unhurried appointments, clear explanations, and tailored solutions — never a one-size-fits-all approach.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Why Choose Us
          </h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto leading-relaxed">
            An established independent practice where clinical expertise meets
            the warmth of family care — with full access to NHS and private services.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-6 rounded-2xl bg-cream border border-cream-dark card-hover"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-teal-light text-primary">
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy mb-1">{f.title}</h3>
                <p className="text-sm text-charcoal leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
