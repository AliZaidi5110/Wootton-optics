import { eyeCareServices, type EyeCareService } from "./eye-care-services";
import { hearingCareServices } from "./hearing-care-services";
import { eyeCareNorthamptonPath, moreFromLinks as eyeMoreFromLinks } from "./eye-care-hub";

export type CareFamily = "eye" | "hearing";

type Link = { href: string; label: string };

export type CareFamilyConfig = {
  /** Breadcrumb label and nav name */
  label: string;
  hubPath: string;
  appointmentHref: string;
  /** Appointment link for the Hearing Aid / secondary buttons */
  services: EyeCareService[];
  exploreHeading: string;
  /** Hub link + any extra top-level pages, listed before the services */
  exploreLeading: Link[];
  /** Row linking across to the other family ("Eye care at Wootton Opticians: ...") */
  crossLinks?: { heading: string; links: Link[] };
  moreFromLinks: Link[];
};

export const CARE_FAMILIES: Record<CareFamily, CareFamilyConfig> = {
  eye: {
    label: "Eye Care",
    hubPath: "/optics",
    appointmentHref: "/appointments?service=eye-test",
    services: eyeCareServices,
    exploreHeading: "Explore more eye care at Wootton Opticians",
    exploreLeading: [
      { href: "/optics", label: "Eye care hub: opticians in Northampton" },
      { href: eyeCareNorthamptonPath, label: "Eye care in Northampton" },
    ],
    moreFromLinks: eyeMoreFromLinks,
  },
  hearing: {
    label: "Hearing Care",
    hubPath: "/hearing",
    appointmentHref: "/appointments?service=hearing-test",
    services: hearingCareServices,
    exploreHeading: "Explore more hearing care at Wootton Hearing Care",
    exploreLeading: [{ href: "/hearing", label: "Hearing care hub: hearing care in Northampton" }],
    crossLinks: {
      heading: "Eye care at Wootton Opticians",
      links: [
        { href: "/optics", label: "Eye care hub" },
        { href: eyeCareNorthamptonPath, label: "Eye care in Northampton" },
      ],
    },
    moreFromLinks: [
      { href: "/services", label: "All services and prices" },
      { href: "/about", label: "About us" },
      { href: "/blog", label: "Advice and blog" },
      { href: "/contact", label: "Contact us" },
      { href: "/appointments", label: "Book an appointment" },
    ],
  },
};
