export const SITE = {
  name: "Wootton Optician & Hearing Care",
  hearingName: "Wootton Hearing Care Ltd",
  opticsName: "Wootton Optician",
  tagline: "Personalised care. Quality you deserve. Family you trust.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.woottonopticianshearingcare.co.uk",
  description:
    "Independent, family-run opticians and hearing care in Wootton, Northampton. NHS and private eye tests, designer eyewear, hearing tests, hearing aids and ear wax removal.",
  phone: "+44 1604 875111",
  phoneDisplay: "01604 875111",
  email: "info@woottonhearing.co.uk",
  opticsEmail: "wootton.opticians@live.co.uk",
  companyNumber: "",
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
    monday: "Mon: 9:00 AM – 5:30 PM",
    tuesday: "Tue: 9:00 AM – 5:30 PM",
    wednesday: "Wed: 9:00 AM – 12:00 PM",
    thursday: "Thu: 9:00 AM – 5:30 PM",
    friday: "Fri: 9:00 AM – 5:30 PM",
    saturday: "Sat: 9:00 AM – 12:00 PM",
    sunday: "Sun: Closed",
    lunch: "Lunch: Closed 1:00 PM – 2:00 PM",
    /** Ordered lines for footer / contact display */
    display: [
      "Mon, Tue, Thu, Fri: 9:00 AM – 5:30 PM",
      "Wednesday: 9:00 AM – 12:00 PM",
      "Saturday: 9:00 AM – 12:00 PM",
      "Sunday: Closed",
      "Lunch: Closed 1:00 PM – 2:00 PM",
    ],
  },
  social: {
    facebook: "https://facebook.com/woottonhearing",
    instagram: "https://instagram.com/woottonhearing",
    youtube: "https://youtube.com/@woottonhearing",
  },
  /** Google Maps search — replace with direct Place ID review URL when GBP is claimed */
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Wootton+Opticians+9+Tudor+Court+Northampton+NN4+6FF",
  googleReviewUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    "https://www.google.com/maps/search/?api=1&query=Wootton+Opticians+9+Tudor+Court+Northampton+NN4+6FF",
} as const;

export const EAR_WAX_PRICING = {
  oneEar: 35,
  bothEars: 70,
  display: "£35 per ear · £70 for both ears",
  short: "£35 (one ear) · £70 (both ears)",
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
  "ear wax removal Northampton",
  "Wootton Optician",
  "Wootton Hearing Care",
  "sight test Northampton",
  "NHS eye test Northampton",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/optics", label: "Eye Care" },
  { href: "/hearing", label: "Hearing Care" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
