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
      {hasSlider && <HeroImageSlider images={backgroundImages!} />}
      <div className="container relative z-10">
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className={`text-sm mb-4 ${hasSlider ? "text-white/95 font-medium drop-shadow-md" : "text-muted"}`}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2 text-white/60">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className={
                      hasSlider
                        ? "text-white/90 hover:text-sky transition-colors"
                        : "text-charcoal hover:text-primary transition-colors"
                    }
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className={hasSlider ? "text-white font-semibold" : "text-navy font-semibold"}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1
          className={`font-heading font-bold mb-4 ${
            hasSlider
              ? "text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,31,63,0.85)]"
              : "text-3xl sm:text-4xl lg:text-5xl text-navy"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`max-w-2xl ${
              hasSlider
                ? "text-lg sm:text-xl text-white font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,31,63,0.75)]"
                : "text-lg text-muted"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
