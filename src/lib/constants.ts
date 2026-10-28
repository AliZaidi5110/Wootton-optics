import { eyeCareServices } from "@/data/eye-care-services";

export const SITE = {
  name: "Wootton Opticians & Hearing Care",
  hearingName: "Wootton Hearing Care Ltd",
  opticsName: "Wootton Opticians",
  tagline: "Personalised care. Quality you deserve. Family you trust.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.woottonopticianshearingcare.co.uk",
  description:
    "Independent, family-run opticians and hearing care in Wootton, Northampton. NHS and private eye tests, designer eyewear, hearing tests, hearing aids and ear wax removal.",
  phone: "+44 1604 875111",
  phoneDisplay: "01604 875111",
  email: "Admin@woottonopticianshearingcare.co.uk",
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

export { CORE_KEYWORDS as KEYWORDS } from "./keywords";

export type NavChild = {
  href: string;
  label: string;
  description: string;
  /** Extra paths that should highlight this entry as active */
  matchPaths?: string[];
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/optics",
        label: "Eye Care",
        description: "Eye tests, glasses, contact lenses and specialist clinics",
        matchPaths: ["/eye-care-northampton", ...eyeCareServices.map((s) => s.path)],
      },
      {
        href: "/hearing",
        label: "Hearing Care",
        description: "Hearing tests, hearing aids and ear wax removal",
        matchPaths: [
          "/free-hearing-test-northampton",
          "/ear-wax-removal-northampton",
          "/hearing-aid-repairs-northampton",
        ],
      },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];
