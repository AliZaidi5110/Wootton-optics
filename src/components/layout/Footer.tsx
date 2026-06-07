import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Camera, Play, MessageCircle, Ear, Glasses } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Ear className="w-4 h-4 text-white" />
              </div>
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center -ml-3">
                <Glasses className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-lg ml-1">Wootton</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-300 mb-6">
              Family-run hearing care and optical services in Ilford, Essex.
              Quality service and individual care for every patient since 2003.
            </p>
            <div className="flex gap-3">
              {[
                { href: SITE.social.facebook, icon: Share2, label: "Facebook" },
                { href: SITE.social.instagram, icon: Camera, label: "Instagram" },
                { href: SITE.social.youtube, icon: Play, label: "YouTube" },
                { href: SITE.social.whatsapp, icon: MessageCircle, label: "WhatsApp" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/optics" className="text-sm text-neutral-300 hover:text-primary transition-colors">Eye Care</Link></li>
              <li><Link href="/hearing" className="text-sm text-neutral-300 hover:text-accent transition-colors">Hearing Care</Link></li>
              <li><Link href="/services" className="text-sm text-neutral-300 hover:text-primary transition-colors">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{SITE.address.full}</span>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-neutral-400">
              <p>{SITE.hours.weekdays}</p>
              <p>{SITE.hours.saturday}</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Connect</h4>
            <p className="text-sm text-neutral-300 mb-4">
              Get hearing and eye care tips delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} {SITE.hearingName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
