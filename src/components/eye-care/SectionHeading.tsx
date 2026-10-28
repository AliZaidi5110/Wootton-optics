import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h2 className="font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={cn(
          "mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-primary to-fresh",
          align === "center" && "mx-auto"
        )}
      />
      {intro && <p className="mt-4 leading-relaxed text-navy/80">{intro}</p>}
    </div>
  );
}
