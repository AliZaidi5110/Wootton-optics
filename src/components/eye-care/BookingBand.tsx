import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RichText } from "./RichText";
import { SITE } from "@/lib/constants";

export function BookingBand({
  heading,
  text,
  ctaLabel = "Book Online",
  ctaHref = "/appointments?service=eye-test",
}: {
  heading: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fresh/15 blur-3xl"
      />
      <div className="container relative text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold !text-white sm:text-4xl">
          {heading}
        </h2>
        {text && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            <RichText text={text} linkClassName="font-semibold text-white underline" />
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={ctaHref} variant="white" size="lg" className="w-full !text-black sm:w-auto">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            {ctaLabel}
          </Button>
          <Button
            href={telHref}
            variant="outline"
            size="lg"
            className="w-full border-white/40 text-white hover:bg-white hover:!text-navy sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {SITE.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
