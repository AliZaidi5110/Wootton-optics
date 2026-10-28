"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, Ear, Glasses, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE, type NavChild, type NavItem } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isChildActive(pathname: string, child: NavChild): boolean {
  return (
    isNavActive(pathname, child.href) ||
    (child.matchPaths ?? []).some((path) => isNavActive(pathname, path))
  );
}

function isItemActive(pathname: string, item: NavItem): boolean {
  return (
    isNavActive(pathname, item.href) ||
    (item.children ?? []).some((child) => isChildActive(pathname, child))
  );
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

/** Colour/shape for a nav item made of a link plus a chevron button (padding lives on the parts). */
function splitLinkClass(active: boolean) {
  return cn(
    "font-medium text-sm transition-colors rounded-lg",
    active
      ? "bg-primary text-white font-semibold"
      : "text-navy hover:text-primary hover:bg-teal-light/60"
  );
}

function BrandMark() {
  return (
    <div className="relative shrink-0 w-12 h-9 sm:w-[3.25rem] sm:h-10" aria-hidden="true">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-navy rounded-lg flex items-center justify-center">
        <Ear className="w-4 h-4 sm:w-5 sm:h-5 text-teal-light" />
      </div>
      <div className="absolute left-[1.125rem] sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center ring-2 ring-cream">
        <Glasses className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>
    </div>
  );
}

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = isItemActive(pathname, item);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={cn("flex items-center", splitLinkClass(active))}>
        <Link
          href={item.href}
          className="py-2 pl-3 pr-1 rounded-l-lg !text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="py-2 pl-1 pr-2 rounded-r-lg text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`${item.label} menu`}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown
            className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <ul
            role="menu"
            className="w-72 overflow-hidden rounded-xl border border-cream-dark bg-white p-2 shadow-xl"
          >
            {item.children?.map((child) => {
              const childActive = isChildActive(pathname, child);
              return (
                <li key={child.href} role="none">
                  <Link
                    href={child.href}
                    role="menuitem"
                    aria-current={childActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 transition-colors",
                      childActive ? "bg-primary text-white" : "text-navy hover:bg-teal-light/60"
                    )}
                  >
                    <span className="block text-sm font-semibold">{child.label}</span>
                    <span
                      className={cn(
                        "block text-xs leading-snug",
                        childActive ? "text-white/90" : "text-charcoal"
                      )}
                    >
                      {child.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileDropdown({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = isItemActive(pathname, item);
  const [open, setOpen] = useState(active);
  const panelId = `mobile-sub-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div>
      <div className={cn("flex items-stretch text-base", splitLinkClass(active))}>
        <Link
          href={item.href}
          className="flex min-h-[48px] flex-1 items-center rounded-l-lg px-4 py-3 !text-inherit"
          aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="flex min-w-[48px] items-center justify-center rounded-r-lg text-inherit"
          aria-label={`${open ? "Collapse" : "Expand"} ${item.label} menu`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown
            className={cn("w-5 h-5 transition-transform duration-200", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>
      {open && (
        <ul
          id={panelId}
          className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/30 pl-3"
        >
          {item.children?.map((child) => {
            const childActive = isChildActive(pathname, child);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={navLinkClass(childActive, true)}
                  aria-current={childActive ? "page" : undefined}
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const appointmentsActive = isNavActive(pathname, "/appointments");
  const phoneDisplay = SITE.phoneDisplay ?? SITE.phone;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-cream-dark shadow-sm">
      <div className="container py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 overflow-hidden"
            aria-label="Wootton Opticians and Hearing Care home"
          >
            <BrandMark />
            <div className="min-w-0 overflow-hidden">
              <p className="font-heading font-bold text-lg sm:text-xl text-navy leading-none whitespace-nowrap">
                Wootton
              </p>
              <p className="hidden min-[400px]:block text-[11px] sm:text-xs text-charcoal leading-tight whitespace-nowrap truncate mt-0.5 max-w-[11rem] min-[480px]:max-w-none sm:max-w-[14rem] md:max-w-none">
                Opticians &amp; Hearing Care
              </p>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 shrink-0" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                return <DesktopDropdown key={link.href} item={link} pathname={pathname} />;
              }
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

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="hidden lg:flex items-center gap-1.5 text-sm text-navy font-semibold hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" />
              {phoneDisplay}
            </a>
            <Button
              href="/appointments"
              variant={appointmentsActive ? "primary" : "accent"}
              size="sm"
              className={cn(
                "!hidden xl:!inline-flex shrink-0",
                appointmentsActive && "ring-2 ring-primary ring-offset-2"
              )}
              aria-current={appointmentsActive ? "page" : undefined}
            >
              Book Now
            </Button>
            <button
              type="button"
              className="xl:hidden shrink-0 p-2 rounded-lg hover:bg-teal-light min-w-[44px] min-h-[44px] flex items-center justify-center text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-navigation"
            className="xl:hidden mt-3 pb-4 border-t border-cream-dark pt-3"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  return (
                    <MobileDropdown
                      key={link.href}
                      item={link}
                      pathname={pathname}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  );
                }
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
                className="flex items-center gap-2 px-4 py-3 text-navy font-semibold min-h-[48px]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
