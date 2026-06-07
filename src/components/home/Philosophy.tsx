import { Star, Heart, Handshake, Shield } from "lucide-react";

const cards = [
  {
    icon: Star,
    title: "Quality Without Compromise",
    text: "Whether NHS or premium designer frames, you deserve the best service and the highest quality.",
    accent: "border-gold bg-gold/5",
    iconColor: "text-gold bg-gold/15",
  },
  {
    icon: Heart,
    title: "Personal Care That Matters",
    text: "Same caring staff at every visit, building lasting relationships with every patient.",
    accent: "border-coral bg-coral/10",
    iconColor: "text-accent bg-coral/20",
  },
  {
    icon: Handshake,
    title: "Independent, Expert Sourcing",
    text: "Not tied to any supplier — we source the best brands and technology worldwide for you.",
    accent: "border-primary bg-sky/50",
    iconColor: "text-primary bg-sky",
  },
  {
    icon: Shield,
    title: "Guarantees You Can Trust",
    text: "Non-tolerance guarantees on lenses and hearing aids — try with complete confidence.",
    accent: "border-fresh bg-mint/30",
    iconColor: "text-fresh bg-mint/50",
  },
];

export function Philosophy() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">Our Philosophy</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We believe everybody is entitled to the best service. You should feel like an individual whose needs are truly cared for.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 border-t-4 ${card.accent} card-hover`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${card.iconColor}`}>
                <card.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
