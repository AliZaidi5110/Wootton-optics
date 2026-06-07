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
            className="absolute inset-0 bg-gradient-to-br from-white/92 via-sky/85 to-white/88"
            aria-hidden="true"
          />
        </>
      )}
      <div className="container relative z-10">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="text-sm text-muted mb-4">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="text-charcoal hover:text-primary transition-colors">{crumb.label}</a>
                ) : (
                  <span className="text-navy font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-muted max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
