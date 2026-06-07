"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Clock, Ear, Glasses } from "lucide-react";
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
    mobile ? "px-4 py-3 text-base min-h-[48px] flex items-center" : "px-2.5 py-2 text-sm",
    active
      ? "bg-primary text-white font-semibold shadow-sm"
      : "text-charcoal hover:text-primary hover:bg-sky/60"
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const appointmentsActive = isNavActive(pathname, "/appointments");

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="bg-sky text-navy text-sm py-2">
        <div className="container flex justify-between items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {SITE.hours.weekdays}
            </span>
            <span className="hidden lg:inline text-neutral-300">|</span>
            <span className="hidden lg:inline">{SITE.address.full}</span>
          </div>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-primary font-semibold hover:text-accent transition-colors ml-auto"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
        </div>
      </div>

      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Ear className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center -ml-2">
                <Glasses className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <p className="font-heading font-bold text-lg text-navy leading-tight">
                Wootton
              </p>
              <p className="text-xs text-muted flex items-center gap-1">
                Hearing & Optics
                <span className="w-2 h-2 bg-sunny rounded-full inline-block" aria-hidden="true" />
              </p>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
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

          <div className="flex items-center gap-2">
            <Button
              href="/appointments"
              variant={appointmentsActive ? "primary" : "accent"}
              size="sm"
              className={cn(
                "hidden sm:inline-flex",
                appointmentsActive && "ring-2 ring-primary ring-offset-2"
              )}
              aria-current={appointmentsActive ? "page" : undefined}
            >
              Book Now
            </Button>
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-sky min-w-[48px] min-h-[48px] flex items-center justify-center text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            className="xl:hidden mt-3 pb-4 border-t border-neutral-200 pt-3"
            aria-label="Mobile navigation"
          >
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
              <Button
                href="/appointments"
                variant={appointmentsActive ? "primary" : "accent"}
                className={cn("mt-2 mx-4", appointmentsActive && "ring-2 ring-primary ring-offset-2")}
                aria-current={appointmentsActive ? "page" : undefined}
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
