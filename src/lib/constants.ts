export const SITE = {
  name: "Wootton Hearing & Optics",
  hearingName: "Wootton Hearing Care Ltd",
  opticsName: "Wootton Optics",
  tagline: "Personalized care. Quality you deserve. Family you trust.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.woottonhearing.co.uk",
  description:
    "Family-run hearing aids and optical services in Northampton. Expert hearing care, eye tests, and premium eyewear in Wootton Fields.",
  phone: "+44 20 8554 1234",
  email: "info@woottonhearing.co.uk",
  address: {
    street: "9 Tudor Court, Wootton Hope Drive",
    city: "Northampton",
    county: "Northamptonshire",
    postcode: "NN4 6FF",
    country: "UK",
    full: "9 Tudor Court, Wootton Hope Drive, Northampton, NN4 6FF, UK",
  },
  coordinates: { lat: 52.218, lng: -0.8925 },
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
  "hearing aids Northampton",
  "eye test Northampton",
  "optician Northampton",
  "optical services Northamptonshire",
  "hearing care Northampton",
  "hearing test Northampton",
  "eye care Northampton",
  "audiologist Northamptonshire",
  "designer glasses Northampton",
  "free hearing test Northampton",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/optics", label: "Eye Care" },
  { href: "/hearing", label: "Hearing Care" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
