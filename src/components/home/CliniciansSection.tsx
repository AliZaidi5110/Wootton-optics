import Image from "next/image";

export function CliniciansSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <Image
              src="/img-1.jpg"
              alt="Wootton clinician consulting with a patient using a tablet at our Ilford practice"
              width={640}
              height={480}
              className="w-full h-auto rounded-3xl object-cover shadow-lg"
              priority={false}
            />
          </div>

          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-navy leading-tight mb-8">
              Dedicated and experienced clinicians
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-charcoal leading-relaxed mb-6">
              With 20+ years of experience, our healthcare professionals are
              experts at providing accessible eye and hearing care.
            </p>

            <p className="text-base sm:text-lg text-charcoal leading-relaxed mb-6">
              Whilst our service is a great choice for anyone, we&apos;re the go-to
              for those who can&apos;t easily get out and about.
            </p>

            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              Our Optometrists and Audiologists are trained to support a range of
              cognitive abilities, including dementia, which allows each individual
              to receive the best possible care in their own familiar surroundings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
