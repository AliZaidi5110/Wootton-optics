import { HeroImageSlider, type HeroSlideImage } from "@/components/shared/HeroImageSlider";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImages?: HeroSlideImage[];
}

export function PageHeader({ title, subtitle, breadcrumbs, backgroundImages }: PageHeaderProps) {
  const hasSlider = Boolean(backgroundImages?.length);

  return (
    <section
      className={`relative py-16 border-b border-primary/10 overflow-hidden ${
        hasSlider ? "" : "gradient-sky"
      }`}
    >
      {hasSlider && (
        <>
          <HeroImageSlider images={backgroundImages!} />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/20 to-transparent"
            aria-hidden="true"
          />
        </>
      )}
      <div className="container relative z-10">
        <div
          className={
            hasSlider
              ? "max-w-3xl rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-10 shadow-[0_8px_32px_rgba(0,31,63,0.12)]"
              : ""
          }
        >
          {breadcrumbs && (
            <nav
              aria-label="Breadcrumb"
              className={`text-sm mb-4 ${hasSlider ? "text-charcoal font-medium" : "text-muted"}`}
            >
              {breadcrumbs.map((crumb, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2 text-neutral-400">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="text-charcoal hover:text-primary transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-navy font-semibold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1
            className={`font-heading font-bold text-navy mb-4 ${
              hasSlider
                ? "text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wide"
                : "text-3xl sm:text-4xl lg:text-5xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`max-w-2xl ${
                hasSlider
                  ? "text-lg sm:text-xl text-navy/90 font-medium leading-relaxed"
                  : "text-lg text-muted"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
