export interface CarePackage {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  accentColor: "sunny" | "primary" | "gold";
  icon: string;
  featured?: boolean;
  bestFor: string;
  ctaVariant: "gold" | "primary" | "accent";
}

export const carePackages: CarePackage[] = [
  {
    id: "essential",
    name: "Essential Care",
    price: "Free",
    period: "initial consultation",
    description: "Perfect for new patients exploring their hearing and vision needs.",
    features: [
      "Free initial hearing or eye consultation",
      "Comprehensive assessment report",
      "Personalised recommendations",
      "NHS eligibility guidance",
      "No obligation to purchase",
    ],
    accentColor: "sunny",
    icon: "star",
    bestFor: "New patients & budget-conscious",
    ctaVariant: "gold",
  },
  {
    id: "complete",
    name: "Complete Care",
    price: "From £29",
    period: "per month",
    description: "Our most popular package for patients committed to long-term care.",
    features: [
      "Annual hearing & eye check-ups",
      "Priority appointment booking",
      "Free adjustments & reprogramming",
      "Cleaning & maintenance included",
      "Non-tolerance guarantee",
      "10% off accessories & lenses",
    ],
    accentColor: "primary",
    icon: "heart",
    featured: true,
    bestFor: "Long-term committed care",
    ctaVariant: "primary",
  },
  {
    id: "premium",
    name: "Premium Care",
    price: "From £59",
    period: "per month",
    description: "Comprehensive premium care for discerning patients who want the very best.",
    features: [
      "Everything in Complete Care",
      "Home visit option available",
      "Premium lens & hearing aid upgrades",
      "Dedicated family clinician",
      "Same-day emergency appointments",
      "Lifetime warranty on selected products",
      "Annual designer frame allowance",
    ],
    accentColor: "gold",
    icon: "crown",
    bestFor: "Premium comprehensive care",
    ctaVariant: "gold",
  },
];
