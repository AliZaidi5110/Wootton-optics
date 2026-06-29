import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "nhs-eye-test",
    title: "NHS Eye Tests",
    description:
      "Full NHS-funded sight tests for eligible patients including vision assessment and eye health checks.",
    icon: "eye",
    href: "/#optics-services",
    features: [
      "Free for eligible patients",
      "Vision and eye health examination",
      "NHS voucher toward glasses",
      "Referrals when needed",
    ],
    price: "Free for eligible patients",
  },
  {
    id: "private-eye-test",
    title: "Private Eye Tests",
    description:
      "Extended private sight tests with digital retinal imaging and detailed clinical time.",
    icon: "eye",
    href: "/#optics-services",
    features: [
      "Longer appointment time",
      "Digital retinal photography",
      "Same-day results",
      "Advanced screening included",
    ],
    price: "From £55",
  },
  {
    id: "specialist-contact-lenses",
    title: "Specialist Contact Lenses",
    description:
      "Expert fitting for toric, multifocal, rigid, and specialty contact lenses.",
    icon: "contact",
    href: "/#optics-services",
    features: [
      "Complex prescriptions",
      "Trial lenses included",
      "Ongoing aftercare",
      "All major brands",
    ],
  },
  {
    id: "dry-eye-assessment",
    title: "Dry Eye Assessment",
    description:
      "Clinical assessment and personalised treatment for dry, gritty, or watery eyes.",
    icon: "eye",
    href: "/#optics-services",
    features: [
      "Root cause identification",
      "Personalised treatment plan",
      "Lifestyle and product advice",
      "Follow-up monitoring",
    ],
  },
  {
    id: "myopia-management",
    title: "Myopia Management",
    description:
      "Evidence-based programmes to slow short-sightedness progression in children.",
    icon: "eye",
    href: "/#optics-services",
    features: [
      "Specialist contact lens options",
      "Spectacle lens programmes",
      "Regular monitoring",
      "Long-term eye health benefits",
    ],
  },
  {
    id: "glaucoma-screening",
    title: "Glaucoma Screening",
    description:
      "Early detection screening including pressure checks and optic nerve assessment.",
    icon: "eye",
    href: "/#optics-services",
    features: [
      "Intraocular pressure measurement",
      "Optic nerve assessment",
      "Visual field testing",
      "Specialist referral",
    ],
  },
  {
    id: "child-eye-tests",
    title: "Children's Eye Tests",
    description:
      "Child-friendly examinations to support learning, development, and eye health.",
    icon: "eye",
    href: "/#optics-services",
    features: [
      "Age-appropriate testing",
      "Lazy eye and squint detection",
      "NHS tests for eligible children",
      "Parent guidance included",
    ],
    price: "Free for eligible children under the NHS",
  },
  {
    id: "free-hearing-screening",
    title: "Free Hearing Screenings",
    description:
      "Quick, no-obligation hearing checks to identify whether a full assessment is needed.",
    icon: "ear",
    href: "/#hearing-services",
    features: [
      "Completely free",
      "15–20 minute appointment",
      "Clear results on the day",
      "No obligation",
    ],
    price: "Free",
  },
  {
    id: "free-hearing-consultation",
    title: "Free Hearing Consultations",
    description:
      "Comprehensive audiometric assessment and honest advice from qualified audiologists.",
    icon: "ear",
    href: "/#hearing-services",
    features: [
      "Full hearing assessment",
      "Lifestyle discussion",
      "Transparent recommendations",
      "No sales pressure",
    ],
    price: "Free initial consultation",
  },
  {
    id: "ear-wax-removal",
    title: "Ear Wax Removal",
    description:
      "Safe professional wax removal by microsuction or irrigation in our Northampton clinic.",
    icon: "ear",
    href: "/#hearing-services",
    features: [
      "Microsuction available",
      "Immediate relief",
      "Hearing aid users welcome",
      "Trained clinicians",
    ],
    price: "£35 per ear · £70 for both ears",
  },
  {
    id: "hearing-aids",
    title: "Hearing Aid Supply & Fitting",
    description:
      "Digital hearing aids from leading brands with custom programming and expert fitting.",
    icon: "volume",
    href: "/#hearing-services",
    features: [
      "All major brands",
      "Custom programming",
      "Rechargeable options",
      "Ongoing aftercare",
    ],
  },
  {
    id: "hearing-aid-maintenance",
    title: "Hearing Aid Maintenance",
    description:
      "Cleaning, servicing, reprogramming, and repairs to keep aids performing optimally.",
    icon: "heart",
    href: "/#hearing-services",
    features: [
      "Professional cleaning",
      "Reprogramming as needed",
      "Fast repairs",
      "Accessories in stock",
    ],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Book Your Appointment",
    description:
      "Schedule online, by phone, or visit our Wootton Hope Drive clinic. Choose hearing, optical, or both services.",
  },
  {
    step: 2,
    title: "Comprehensive Assessment",
    description:
      "Our qualified professionals conduct thorough tests using the latest diagnostic equipment.",
  },
  {
    step: 3,
    title: "Personalised Recommendations",
    description:
      "We explain your results clearly and recommend solutions tailored to your lifestyle and budget.",
  },
  {
    step: 4,
    title: "Fitting & Adjustment",
    description:
      "Expert fitting ensures comfort and optimal performance. We fine-tune until everything is perfect.",
  },
  {
    step: 5,
    title: "Ongoing Aftercare",
    description:
      "Regular check-ups, adjustments, and support ensure lasting satisfaction with your hearing or vision solution.",
  },
];
