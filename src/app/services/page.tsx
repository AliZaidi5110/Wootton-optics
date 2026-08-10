import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { services, processSteps } from "@/data/services";
import { generateSEO } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Check, Ear, Eye, Volume2, Glasses, Heart, Contact } from "lucide-react";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Eye & Hearing Services Northampton | Wootton",
  description:
    "Full price list for NHS eye tests, private sight tests, free hearing consultations and ear wax removal at Wootton Optician & Hearing Care, Northampton.",
  path: "/services",
  keywords: [
    "ear wax removal cost Northampton",
    "eye test price Northampton",
    "hearing test Northampton",
    "NHS eye test Northampton",
    "hearing aid prices Northampton",
  ],
});

const iconMap: Record<string, React.ElementType> = {
  ear: Ear,
  volume: Volume2,
  heart: Heart,
  eye: Eye,
  glasses: Glasses,
  contact: Contact,
};

const pricingRows = [
  {
    name: "Hearing Test",
    duration: "60 mins",
    price: "Free consultation",
    href: "/free-hearing-test-northampton",
  },
  {
    name: "Ear Wax Removal",
    duration: "30 mins",
    price: "£35 / £70 both ears",
    href: "/ear-wax-removal-northampton",
  },
  {
    name: "Eye Test (Private)",
    duration: "30 mins",
    price: "From £55",
    href: "/optics",
  },
  {
    name: "Eye Test (NHS)",
    duration: "30 mins",
    price: "Funded for eligible patients",
    href: "/nhs-eye-test-northampton",
  },
  {
    name: "Contact Lens Fitting",
    duration: "45 mins",
    price: "",
    href: "/optics",
  },
  {
    name: "Children's Eye Test (NHS)",
    duration: "30 mins",
    price: "Funded for eligible patients",
    href: "/optics",
  },
];

export default function ServicesPage() {
  const hearingServiceIds = [
    "free-hearing-screening",
    "free-hearing-consultation",
    "ear-wax-removal",
    "hearing-aids",
    "hearing-aid-maintenance",
  ];
  const opticalServiceIds = [
    "nhs-eye-test",
    "private-eye-test",
    "specialist-contact-lenses",
    "dry-eye-assessment",
    "myopia-management",
    "glaucoma-screening",
    "child-eye-tests",
  ];
  const hearingServices = services.filter((s) => hearingServiceIds.includes(s.id));
  const opticalServices = services.filter((s) => opticalServiceIds.includes(s.id));

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive hearing and optical care under one roof at our Northampton clinic."
        currentPath="/services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <Ear className="w-7 h-7 text-primary" /> Hearing Care Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {hearingServices.map((service) => {
              const Icon = iconMap[service.icon] || Ear;
              return (
                <div
                  key={service.id}
                  className="bg-navy-deep rounded-2xl p-6 border border-white/15"
                >
                  <Icon className="w-8 h-8 text-sky mb-4" />
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {service.href ? (
                      <Link href={service.href} className="hover:text-sky transition-colors">
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="text-sm text-white/85 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm flex items-center gap-2 text-white/90">
                        <Check className="w-4 h-4 text-fresh shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  {service.price && (
                    <p className="font-semibold text-sky">{service.price}</p>
                  )}
                  {service.href && (
                    <Link
                      href={service.href}
                      className="inline-block mt-3 text-sm text-sky hover:underline font-medium"
                    >
                      Learn more
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="font-heading text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <Eye className="w-7 h-7 text-accent" /> Optical Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {opticalServices.map((service) => {
              const Icon = iconMap[service.icon] || Eye;
              return (
                <div
                  key={service.id}
                  className="bg-navy-deep rounded-2xl p-6 border border-white/15"
                >
                  <Icon className="w-8 h-8 text-sky mb-4" />
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {service.href ? (
                      <Link href={service.href} className="hover:text-sky transition-colors">
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="text-sm text-white/85 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm flex items-center gap-2 text-white/90">
                        <Check className="w-4 h-4 text-fresh shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  {service.price && (
                    <p className="font-semibold text-sky">{service.price}</p>
                  )}
                  {service.href && (
                    <Link
                      href={service.href}
                      className="inline-block mt-3 text-sm text-sky hover:underline font-medium"
                    >
                      Learn more
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 section-hearing">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold !text-white text-center mb-12">
            How booking works
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-lg">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-sm !text-white mb-2">{step.title}</h3>
                <p className="text-xs !text-white/90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-8">
            Service prices
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[600px] text-sm border-collapse max-w-4xl mx-auto">
              <thead>
                <tr className="bg-neutral-100 text-navy">
                  <th className="p-4 text-left font-semibold">Service</th>
                  <th className="p-4 text-left font-semibold">Duration</th>
                  <th className="p-4 text-left font-semibold">Price</th>
                  <th className="p-4 text-left font-semibold">Book</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.name}
                    className={i % 2 === 0 ? "bg-neutral-50" : "bg-white"}
                  >
                    <td className="p-4 font-medium text-navy">
                      <Link href={row.href} className="hover:text-primary underline-offset-2 hover:underline">
                        {row.name}
                      </Link>
                    </td>
                    <td className="p-4 text-navy/80">{row.duration}</td>
                    <td className="p-4 text-navy font-semibold">{row.price || "—"}</td>
                    <td className="p-4">
                      <Link
                        href="/appointments"
                        className="text-navy hover:text-primary underline text-sm font-medium"
                      >
                        Book Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container text-center">
          <Button href="/appointments" size="lg">
            Book Your Appointment
          </Button>
        </div>
      </section>

      <CTA />
    </>
  );
}
