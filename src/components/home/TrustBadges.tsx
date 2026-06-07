import { Shield, Award, CheckCircle, Star } from "lucide-react";

const badges = [
  { icon: Shield, title: "HCPC Registered", desc: "Fully qualified clinicians" },
  { icon: Award, title: "BSA Member", desc: "British Society of Audiology" },
  { icon: CheckCircle, title: "ABDO Registered", desc: "Association of British Dispensing Opticians" },
  { icon: Star, title: "5-Star Rated", desc: "Trusted by 5,000+ clients" },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-accent-light/40 dark:bg-neutral-950 border-b border-neutral-300/40 dark:border-neutral-800">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-trust/10 rounded-xl flex items-center justify-center shrink-0">
                <badge.icon className="w-6 h-6 text-trust" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-neutral-900 dark:text-white">
                  {badge.title}
                </p>
                <p className="text-xs text-neutral-500">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
