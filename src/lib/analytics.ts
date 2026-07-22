/** Fire a GA4 event when analytics consent is present and gtag is loaded. */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;
  if (localStorage.getItem("cookie-consent") !== "accepted") return;

  const gtag = (
    window as Window & {
      gtag?: (...args: unknown[]) => void;
    }
  ).gtag;

  if (typeof gtag !== "function") return;

  gtag("event", eventName, params);
}

export function trackBookingSubmit(service: string) {
  trackEvent("generate_lead", {
    event_category: "appointment",
    event_label: service,
    service,
  });
  trackEvent("book_appointment", {
    event_category: "conversion",
    service,
  });
}

export function trackBookCtaClick(label: string, href: string) {
  trackEvent("select_content", {
    event_category: "cta",
    event_label: label,
    link_url: href,
    content_type: "book_now",
  });
}
