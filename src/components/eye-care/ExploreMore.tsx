import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eyeCareServices } from "@/data/eye-care-services";
import { eyeCareNorthamptonPath, hubPath, moreFromLinks } from "@/data/eye-care-hub";
import { SectionHeading } from "./SectionHeading";

/** "Explore more eye care" list: hub, Eye Care Northampton, then every service except the current page. */
export function ExploreMore({ currentPath }: { currentPath: string }) {
  const links = [
    { href: hubPath, label: "Eye care hub: opticians in Northampton" },
    { href: eyeCareNorthamptonPath, label: "Eye care in Northampton" },
    ...eyeCareServices.map((s) => ({ href: s.path, label: s.name })),
  ].filter((l) => l.href !== currentPath);

  return (
    <section className="border-t border-cream-dark bg-white py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Keep exploring"
          title="Explore more eye care at Wootton Opticians"
          align="center"
        />
        <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex min-h-[52px] items-center justify-between gap-3 rounded-xl border border-cream-dark bg-cream px-4 py-3 text-sm font-semibold text-navy transition-all hover:border-primary/40 hover:bg-teal-light/60 hover:text-primary"
              >
                {link.label}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-sky p-6 text-center">
          <p className="mb-3 font-heading text-lg font-bold text-navy">
            More from Wootton Opticians &amp; Hearing Care
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {moreFromLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
