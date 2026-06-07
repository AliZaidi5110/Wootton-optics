export const SITE = {
  name: "Wootton Hearing & Optics",
  hearingName: "Wootton Hearing Care Ltd",
  opticsName: "Wootton Optics",
  tagline: "Personalized care. Quality you deserve. Family you trust.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.woottonhearing.co.uk",
  description:
    "Family-run hearing aids and optical services in Ilford, Essex. Expert hearing care, eye tests, and premium eyewear near London.",
  phone: "+44 20 8554 1234",
  email: "info@woottonhearing.co.uk",
  address: {
    street: "555-557 Cranbrook Road",
    city: "Ilford",
    county: "Essex",
    postcode: "IG2 6HE",
    country: "UK",
    full: "555-557 Cranbrook Road, Ilford, IG2 6HE, UK",
  },
  coordinates: { lat: 51.5792, lng: 0.0678 },
  hours: {
    weekdays: "Mon–Fri: 9:00 AM – 6:00 PM",
    saturday: "Sat: 9:00 AM – 4:00 PM",
    sunday: "Sun: Closed",
  },
  social: {
    facebook: "https://facebook.com/woottonhearing",
    instagram: "https://instagram.com/woottonhearing",
    whatsapp: "https://wa.me/442085541234",
    youtube: "https://youtube.com/@woottonhearing",
  },
} as const;

export const KEYWORDS = [
  "hearing aids Ilford",
  "eye test Ilford",
  "optician Ilford",
  "optical services Essex",
  "hearing care London",
  "hearing test Ilford",
  "eye care Ilford",
  "audiologist Essex",
  "designer glasses Ilford",
  "free hearing test Ilford",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/optics", label: "Eye Care" },
  { href: "/hearing", label: "Hearing Care" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/care-packages", label: "Care Packages" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;
