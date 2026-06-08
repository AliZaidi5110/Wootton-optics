import { Check } from "lucide-react";
import { trustStripItems } from "@/data/homepage-services";

export function TrustStrip() {
  return (
    <section className="bg-teal-light border-y border-primary/15 py-5" aria-label="Key benefits">
      <div className="container">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {trustStripItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy">
              <Check className="w-4 h-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
