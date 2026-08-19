import Link from "next/link";
import { Phone, Mail, MapPin, Ear, Glasses } from "lucide-react";
import { SITE } from "@/lib/constants";

const exploreLinks = [
  { href: "/optics", label: "Eye Care Hub" },
  { href: "/hearing", label: "Hearing Care Hub" },
  { href: "/eye-care-northampton", label: "Eye Care Northampton" },
  { href: "/nhs-eye-test-northampton", label: "NHS Eye Test" },
  { href: "/myopia-management-northampton", label: "Myopia Management" },
  { href: "/dry-eye-assessment-northampton", label: "Dry Eye Assessment" },
  { href: "/free-hearing-test-northampton", label: "Free Hearing Test" },
  { href: "/ear-wax-removal-northampton", label: "Ear Wax Removal" },
  { href: "/hearing-aid-repairs-northampton", label: "Hearing Aid Repairs" },
  { href: "/services", label: "All Services" },
  { href: "/blog", label: "Advice & Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/appointments", label: "Book an Appointment" },
];

export function Footer() {
  const phoneDisplay = SITE.phoneDisplay ?? SITE.phone;

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
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
              {SITE.opticsName} &amp; {SITE.hearingName} — independent eye and hearing care in
              Northampton since 2003.
            </p>
            <p className="text-sm text-white/85 mb-4">
              NHS and private services · Free hearing consultations · No sales pressure
            </p>
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky hover:underline font-medium"
            >
              Leave a Google Review
            </a>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-white mb-4 text-base">Contact</h2>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{SITE.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/90 hover:text-sky transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-white/90 hover:text-sky transition-colors min-w-0"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-white mb-4 text-base">Opening Hours</h2>
            <ul className="space-y-2 text-sm text-white/90">
              {SITE.hours.display.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-white mb-4 text-base">Explore</h2>
            <ul className="space-y-2 text-sm columns-1">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/90 hover:text-sky transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80 text-center sm:text-left">
          <div>
            <p>
              &copy; {new Date().getFullYear()} {SITE.hearingName}. All rights reserved.
            </p>
            {SITE.companyNumber && (
              <p className="mt-1">Registered in England &amp; Wales · Co. {SITE.companyNumber}</p>
            )}
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-white/85 hover:text-sky transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-white/85 hover:text-sky transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="text-white/85 hover:text-sky transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
