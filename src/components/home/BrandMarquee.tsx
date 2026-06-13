import { brands } from "@/data/brands";

function BrandName({ name }: { name: string }) {
  return (
    <div className="brand-logo-item flex items-center justify-center shrink-0 px-6 md:px-9">
      <span className="font-heading text-xl md:text-2xl font-semibold text-navy/70 whitespace-nowrap transition-colors duration-300 hover:text-navy">
        {name}
      </span>
    </div>
  );
}

export function BrandMarquee() {
  const track = [...brands, ...brands];

  return (
    <section
      className="py-12 sm:py-14 bg-white border-y border-neutral-100 overflow-hidden"
      aria-label="Designer eyewear brands we stock"
    >
      <div className="container mb-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-2">
          Designer Brands We Stock
        </h2>
        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
          From NHS frames to the latest designer brands — independent sourcing
          means the best options for your lifestyle.
        </p>
      </div>

      <div className="brand-marquee relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <ul className="brand-marquee-track flex items-center w-max list-none">
          {track.map((brand, i) => (
            <li key={`${brand.name}-${i}`} aria-hidden={i >= brands.length}>
              <BrandName name={brand.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
