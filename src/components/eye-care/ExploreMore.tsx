import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CARE_FAMILIES, type CareFamily } from "@/data/care-families";
import { SectionHeading } from "./SectionHeading";

/** "Explore more" list: the family's hub links, then every service except the current page. */
export function ExploreMore({
  currentPath,
  family = "eye",
}: {
  currentPath: string;
  family?: CareFamily;
}) {
  const config = CARE_FAMILIES[family];
  const links = [
    ...config.exploreLeading,
    ...config.services.map((s) => ({ href: s.path, label: s.name })),
  ].filter((l) => l.href !== currentPath);

  return (
    <section className="border-t border-cream-dark bg-white py-16 sm:py-20">
      <div className="container">
        <SectionHeading eyebrow="Keep exploring" title={config.exploreHeading} align="center" />
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

        <div className="mx-auto mt-10 max-w-5xl space-y-5 rounded-2xl bg-sky p-6 text-center">
          {config.crossLinks && (
            <div>
              <p className="mb-3 font-heading text-lg font-bold text-navy">
                {config.crossLinks.heading}
              </p>
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
                {config.crossLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-semibold text-primary hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="mb-3 font-heading text-lg font-bold text-navy">
              More from Wootton Opticians &amp; Hearing Care
            </p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {config.moreFromLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
