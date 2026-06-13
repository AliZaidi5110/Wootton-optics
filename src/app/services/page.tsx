import { PageHeader } from "@/components/shared/PageHeader";
import { CTA } from "@/components/home/CTA";
import { services, processSteps } from "@/data/services";
import { generateSEO } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Check, Ear, Eye, Volume2, Glasses, Heart, Contact } from "lucide-react";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = generateSEO({
  title: "Eye Care & Hearing Services Northampton | Wootton",
  description:
    "Explore NHS and private eye tests, designer eyewear, hearing tests, hearing aids and ear wax removal at our independent Northampton clinic, Wootton.",
  path: "/services",
  keywords: [
    "hearing services Northampton",
    "optical services Northamptonshire",
    "eye test price",
    "hearing aid prices",
    "ear wax removal price Northampton",
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
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm flex items-center gap-2">
                        <Check className="w-4 h-4 text-fresh shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  {service.price && (
                    <p className="font-semibold text-primary">{service.price}</p>
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
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700"
                >
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm flex items-center gap-2">
                        <Check className="w-4 h-4 text-fresh shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  {service.price && (
                    <p className="font-semibold text-accent">{service.price}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-12">
            How Our Process Works
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-lg">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-sm text-navy mb-2">{step.title}</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-8">
            Service Comparison
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[600px] text-sm border-collapse max-w-4xl mx-auto">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Book</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Hearing Test", duration: "60 mins", price: "Free consultation" },
                  { name: "Ear Wax Removal", duration: "30 mins", price: "£35 / £70 both ears" },
                  { name: "Hearing Aid Fitting", duration: "90 mins", price: "From £495" },
                  { name: "Eye Test (Private)", duration: "30 mins", price: "From £35" },
                  { name: "Eye Test (NHS)", duration: "30 mins", price: "Free (if eligible)" },
                  { name: "Contact Lens Fitting", duration: "45 mins", price: "Free with purchase" },
                ].map((row, i) => (
                  <tr
                    key={row.name}
                    className={i % 2 === 0 ? "bg-neutral-50 dark:bg-neutral-900" : ""}
                  >
                    <td className="p-4 font-medium">{row.name}</td>
                    <td className="p-4">{row.duration}</td>
                    <td className="p-4 text-primary font-semibold">{row.price}</td>
                    <td className="p-4">
                      <Link href="/appointments" className="text-primary hover:underline text-sm">
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
