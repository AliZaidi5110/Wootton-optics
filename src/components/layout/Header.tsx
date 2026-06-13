"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Ear, Glasses } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean, mobile = false) {
  return cn(
    "font-medium transition-colors rounded-lg",
    mobile ? "px-4 py-3 text-base min-h-[48px] flex items-center" : "px-3 py-2 text-sm",
    active
      ? "bg-primary text-white font-semibold"
      : "text-navy hover:text-primary hover:bg-teal-light/60"
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const appointmentsActive = isNavActive(pathname, "/appointments");
  const phoneDisplay = SITE.phoneDisplay ?? SITE.phone;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-cream-dark shadow-sm">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="flex items-center shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-navy rounded-lg flex items-center justify-center">
                <Ear className="w-5 h-5 text-teal-light" />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center -ml-2">
                <Glasses className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="min-w-0">
              <p className="font-heading font-bold text-lg text-navy leading-tight truncate">Wootton</p>
              <p className="text-xs text-charcoal truncate">Optician &amp; Hearing Care</p>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = isNavActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={navLinkClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="hidden lg:flex items-center gap-1.5 text-sm text-navy font-semibold hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {phoneDisplay}
            </a>
            <Button
              href="/appointments"
              variant={appointmentsActive ? "primary" : "accent"}
              size="sm"
              className={cn("hidden sm:inline-flex shrink-0", appointmentsActive && "ring-2 ring-primary ring-offset-2")}
              aria-current={appointmentsActive ? "page" : undefined}
            >
              Book Now
            </Button>
            <button
              className="xl:hidden shrink-0 p-2 rounded-lg hover:bg-teal-light min-w-[44px] min-h-[44px] flex items-center justify-center text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="xl:hidden mt-3 pb-4 border-t border-cream-dark pt-3" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isNavActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={navLinkClass(active, true)}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-4 py-3 text-navy font-semibold"
              >
                <Phone className="w-4 h-4" />
                {phoneDisplay}
              </a>
              <Button
                href="/appointments"
                variant={appointmentsActive ? "primary" : "accent"}
                className={cn("mt-2 mx-4", appointmentsActive && "ring-2 ring-primary ring-offset-2")}
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
