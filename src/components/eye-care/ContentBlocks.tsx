import { Check, TriangleAlert } from "lucide-react";
import type { EyeCareBlock } from "@/data/eye-care-services";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

function ListBody({ block }: { block: Extract<EyeCareBlock, { type: "list" }> }) {
  const style = block.style ?? "plain";

  if (style === "steps") {
    return (
      <ol className="space-y-4">
        {block.items.map((item, i) => (
          <li key={item} className="flex items-start gap-4 rounded-xl border border-cream-dark bg-white p-4 shadow-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
              {i + 1}
            </span>
            <span className="pt-1 leading-relaxed text-navy/90">
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ol>
    );
  }

  const Icon = style === "alert" ? TriangleAlert : Check;
  const iconWrap =
    style === "alert"
      ? "bg-gold/20 text-accent"
      : style === "check"
        ? "bg-fresh/15 text-fresh"
        : "bg-teal-light text-primary";

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {block.items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-cream-dark bg-white p-4 shadow-sm"
        >
          <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${iconWrap}`}>
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="leading-relaxed text-navy/90">
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Renders a service page's content blocks as alternating, full-width sections. */
export function ContentBlocks({
  blocks,
  startAlt = false,
}: {
  blocks: EyeCareBlock[];
  /** Start on the white background instead of cream */
  startAlt?: boolean;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        const alt = (i % 2 === 0) === startAlt;
        const bg = alt ? "bg-white" : "bg-cream";

        if (block.type === "text") {
          return (
            <section key={block.heading} className={`py-14 sm:py-16 ${bg}`}>
              <div className="container grid gap-8 lg:grid-cols-12">
                <SectionHeading title={block.heading} className="lg:col-span-5" />
                <div className="space-y-4 text-lg leading-relaxed text-navy/85 lg:col-span-7">
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (block.type === "list") {
          return (
            <section key={block.heading} className={`py-14 sm:py-16 ${bg}`}>
              <div className="container grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <SectionHeading title={block.heading} />
                  {block.intro && (
                    <p className="mt-5 leading-relaxed text-navy/85">
                      <RichText text={block.intro} />
                    </p>
                  )}
                </div>
                <div className="lg:col-span-8">
                  <ListBody block={block} />
                  {block.outro && (
                    <p
                      className={`mt-6 rounded-xl border-l-4 border-primary p-4 leading-relaxed text-navy/90 ${
                        alt ? "bg-cream" : "bg-white"
                      }`}
                    >
                      <RichText text={block.outro} />
                    </p>
                  )}
                </div>
              </div>
            </section>
          );
        }

        return (
          <section key={block.heading} className={`py-14 sm:py-16 ${bg}`}>
            <div className="container">
              <SectionHeading
                title={block.heading}
                intro={block.intro}
                align="center"
              />
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {block.cards.map((card) => (
                  <li
                    key={card.title}
                    className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <h3 className="font-heading text-xl font-bold text-navy">{card.title}</h3>
                    <p className="mt-2 leading-relaxed text-navy/85">
                      <RichText text={card.text} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}
