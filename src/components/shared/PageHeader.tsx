interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="gradient-sky py-16 border-b border-primary/10">
      <div className="container">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="text-sm text-muted mb-4">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</a>
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
