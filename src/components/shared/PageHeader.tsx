import { HeroImageSlider, type HeroSlideImage } from "@/components/shared/HeroImageSlider";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImages?: HeroSlideImage[];
  currentPath?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  backgroundImages,
  currentPath = "",
}: PageHeaderProps) {
  const hasSlider = Boolean(backgroundImages?.length);

  const breadcrumbItems = breadcrumbs?.map((crumb) => ({
    name: crumb.label,
    url: crumb.href ? `${SITE.url}${crumb.href}` : `${SITE.url}${currentPath}`,
  }));

  return (
    <section
      className={`relative py-16 border-b border-primary/10 overflow-hidden ${
        hasSlider ? "page-hero-header" : "gradient-sky"
      }`}
    >
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      )}
      {hasSlider && <HeroImageSlider images={backgroundImages!} />}
      <div className="container relative z-10">
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className={`text-sm mb-4 ${hasSlider ? "!text-white font-medium drop-shadow-md" : "text-muted"}`}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && (
                  <span className={`mx-2 ${hasSlider ? "text-white/70" : "text-muted"}`}>/</span>
                )}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className={
                      hasSlider
                        ? "!text-white hover:text-sky transition-colors"
                        : "text-charcoal hover:text-primary transition-colors"
                    }
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className={hasSlider ? "!text-white font-semibold" : "text-navy font-semibold"}>
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
              ? "text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wide !text-white drop-shadow-[0_2px_8px_rgba(0,31,63,0.9)]"
              : "text-3xl sm:text-4xl lg:text-5xl text-navy"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`max-w-2xl ${
              hasSlider
                ? "text-lg sm:text-xl !text-white leading-relaxed drop-shadow-[0_2px_6px_rgba(0,31,63,0.85)]"
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
