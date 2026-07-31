import Link from "next/link";
import { Phone, Mail, MapPin, Ear, Glasses } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  const phoneDisplay = SITE.phoneDisplay ?? SITE.phone;

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Ear className="w-4 h-4 text-white" />
              </div>
              <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center -ml-3 border border-white/20">
                <Glasses className="w-4 h-4 text-teal-light" />
              </div>
              <span className="font-heading font-bold text-xl text-white ml-1">Wootton</span>
            </div>
            <p className="text-sm leading-relaxed text-white/85 mb-2 max-w-md">
              {SITE.opticsName} &amp; {SITE.hearingName} — an independent, family-run
              practice providing personalised eye and hearing care in Northampton since 2003.
            </p>
            <p className="text-sm text-white/70">
              NHS and private services · Free hearing consultations · No sales pressure
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{SITE.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/85 hover:text-sky transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-white/85 hover:text-sky transition-colors min-w-0"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.opticsEmail}`}
                  className="flex items-center gap-3 text-white/85 hover:text-sky transition-colors min-w-0"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="break-all">{SITE.opticsEmail}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-white/85 mb-6">
              {SITE.hours.display.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/optics" className="text-white/85 hover:text-sky transition-colors">
                  {SITE.opticsName}
                </Link>
              </li>
              <li>
                <Link href="/hearing" className="text-white/85 hover:text-sky transition-colors">
                  {SITE.hearingName}
                </Link>
              </li>
              <li>
                <Link
                  href="/eye-care-northampton"
                  className="text-white/85 hover:text-sky transition-colors"
                >
                  Eye Care Northampton
                </Link>
              </li>
              <li>
                <Link
                  href="/ear-wax-removal-northampton"
                  className="text-white/85 hover:text-sky transition-colors"
                >
                  Ear Wax Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/nhs-eye-test-northampton"
                  className="text-white/85 hover:text-sky transition-colors"
                >
                  NHS Eye Test
                </Link>
              </li>
              <li>
                <Link
                  href="/free-hearing-test-northampton"
                  className="text-white/85 hover:text-sky transition-colors"
                >
                  Free Hearing Test
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-white/85 hover:text-sky transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <a
                  href={SITE.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-sky transition-colors"
                >
                  Leave a Google Review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/65 text-center sm:text-left">
          <div>
            <p>&copy; {new Date().getFullYear()} {SITE.hearingName}. All rights reserved.</p>
            {SITE.companyNumber && (
              <p className="mt-1">Registered in England &amp; Wales · Co. {SITE.companyNumber}</p>
            )}
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-white/75 hover:text-sky transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-white/75 hover:text-sky transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="text-white/75 hover:text-sky transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
