import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "hearing-test",
    title: "Hearing Tests",
    description:
      "Comprehensive audiometric assessments using state-of-the-art equipment in our Ilford clinic.",
    icon: "ear",
    href: "/hearing#hearing-test",
    features: [
      "Free initial consultation",
      "Pure tone audiometry",
      "Speech audiometry",
      "Tympanometry",
      "Detailed results explanation",
    ],
    price: "Free consultation",
  },
  {
    id: "hearing-aids",
    title: "Hearing Aids",
    description:
      "Premium hearing aids from leading manufacturers with expert fitting and lifetime aftercare.",
    icon: "volume",
    href: "/hearing#hearing-aids",
    features: [
      "All major brands stocked",
      "Custom programming",
      "Trial periods available",
      "Rechargeable options",
      "5-year warranty on selected models",
    ],
    price: "From £495",
  },
  {
    id: "hearing-aftercare",
    title: "Hearing Aftercare",
    description:
      "Ongoing support, adjustments, and maintenance to keep your hearing aids performing optimally.",
    icon: "heart",
    href: "/hearing#aftercare",
    features: [
      "Free annual check-ups",
      "Cleaning and maintenance",
      "Reprogramming as needed",
      "Battery and accessory supply",
      "Repair services",
    ],
    price: "Included with purchase",
  },
  {
    id: "eye-test",
    title: "Eye Tests",
    description:
      "Thorough eye examinations detecting vision changes and early signs of eye conditions.",
    icon: "eye",
    href: "/optics#eye-test",
    features: [
      "NHS and private tests",
      "Digital retinal imaging",
      "Visual field testing",
      "Glaucoma screening",
      "Children's eye tests",
    ],
    price: "NHS free / Private from £35",
  },
  {
    id: "eyewear",
    title: "Eyewear Collections",
    description:
      "Designer and everyday frames with advanced lens technology for crystal-clear vision.",
    icon: "glasses",
    href: "/optics#collections",
    features: [
      "100+ frame styles",
      "Designer brands",
      "Varifocal specialists",
      "Blue light protection",
      "UV blocking lenses",
    ],
    price: "Frames from £49",
  },
  {
    id: "contact-lenses",
    title: "Contact Lenses",
    description:
      "Expert contact lens fitting and supply for daily, monthly, and specialty lenses.",
    icon: "contact",
    href: "/optics#contact-lenses",
    features: [
      "Free trial lenses",
      "All major brands",
      "Toric and multifocal options",
      "Aftercare appointments",
      "Direct debit schemes",
    ],
    price: "From £15/month",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Book Your Appointment",
    description:
      "Schedule online, by phone, or visit our Cranbrook Road clinic. Choose hearing, optical, or both services.",
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
