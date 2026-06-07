import Image from "next/image";
import { brands } from "@/data/brands";

function BrandLogo({ name, image, alt }: { name: string; image: string; alt: string }) {
  return (
    <div className="brand-logo-item flex items-center justify-center shrink-0 px-8 md:px-12">
      <Image
        src={image}
        alt={alt}
        width={180}
        height={72}
        className="h-12 md:h-14 w-auto max-w-[160px] md:max-w-[180px] object-contain grayscale-[20%] hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function BrandMarquee() {
  const track = [...brands, ...brands];

  return (
    <section className="py-14 bg-white border-y border-neutral-100 overflow-hidden" aria-label="Designer eyewear brands">
      <div className="container mb-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-2">
          Designer Brands We Stock
        </h2>
        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
          From NHS frames to the latest Italian designer brands — independent sourcing
          means the best options for your lifestyle.
        </p>
      </div>

      <div className="brand-marquee relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="brand-marquee-track flex items-center w-max">
          {track.map((brand, i) => (
            <BrandLogo key={`${brand.name}-${i}`} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
