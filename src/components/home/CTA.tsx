import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function CTA() {
  const telHref = `tel:${SITE.phone.replace(/\s/g, "")}`;

  return (
    <section className="py-20 bg-navy-deep text-white">
      <div className="container text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Book Your Appointment?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Contact our Northampton clinic today. We&apos;re here to help with sight
          tests, hearing assessments, and personalised advice — with no obligation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 max-w-lg sm:max-w-none mx-auto sm:mx-0">
          <a
            href={telHref}
            className="inline-flex items-center justify-center gap-3 px-5 sm:px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 shrink-0" />
            {SITE.phoneDisplay ?? SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center gap-3 px-5 sm:px-8 py-4 rounded-lg bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors text-sm sm:text-base min-w-0 w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 shrink-0" />
            <span className="break-all">{SITE.email}</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg sm:max-w-none mx-auto sm:mx-0">
          <Button
            href="/appointments?service=eye-test"
            variant="white"
            size="lg"
            className="w-full sm:w-auto !text-black hover:!text-black"
          >
            Book Sight Test Online
          </Button>
          <Button
            href="/appointments?service=hearing-test"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-navy"
          >
            Book Hearing Test Online
          </Button>
        </div>
      </div>
    </section>
  );
}
