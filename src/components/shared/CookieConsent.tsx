"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function updateConsent(value: "accepted" | "declined") {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: value }));
  }

  function accept() {
    updateConsent("accepted");
  }

  function decline() {
    updateConsent("declined");
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 shadow-2xl"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          We use cookies to improve your experience and analyse site traffic. By
          continuing, you agree to our{" "}
          <Link href="/cookies" className="text-primary underline">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary underline">
            Privacy Policy
          </Link>
          . GDPR compliant.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button size="sm" onClick={accept}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
