import Image from "next/image";
import { Eye, Contact, Droplets, Focus, ScanEye, Baby, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
  { icon: Eye, label: "NHS & Private Eye Tests", color: "text-sunny bg-sunny/20" },
  { icon: Contact, label: "Specialist Contact Lenses", color: "text-primary bg-sky" },
  { icon: Droplets, label: "Dry Eye Assessment", color: "text-accent bg-coral/20" },
  { icon: Focus, label: "Myopia Management", color: "text-gold bg-gold/15" },
  { icon: ScanEye, label: "Glaucoma Screening", color: "text-fresh bg-mint/40" },
  { icon: Baby, label: "Children's Eye Tests", color: "text-accent bg-accent/10" },
];

export function EyeCareSection() {
  return (
    <section className="py-20 gradient-sky">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start lg:sticky lg:top-28">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none aspect-[4/3] overflow-hidden rounded-3xl shadow-lg ring-1 ring-primary/10 bg-white">
              <Image
                src="/img-2.avif"
                alt="Patient selecting designer eyewear at Wootton Optics, Ilford"
                fill
                sizes="(max-width: 640px) 420px, (max-width: 1024px) 480px, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Wootton Optics — Vision Clarity
            </h2>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Open since 2003, Wootton Optics provides NHS and private sight tests, specialist
              contact lens fitting, dry eye assessment, myopia management for children, glaucoma
              screening, and child-friendly eye examinations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "NHS & private eye tests",
                "Specialist contact lenses",
                "Dry eye assessment",
                "Myopia management",
                "Glaucoma screening",
                "Children's eye tests",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-charcoal">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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
