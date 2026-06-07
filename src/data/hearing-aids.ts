import type { HearingAid } from "@/types";

export const hearingAids: HearingAid[] = [
  {
    id: "bte-premium",
    name: "Behind-the-Ear Premium",
    type: "BTE",
    description:
      "Powerful and versatile, ideal for mild to profound hearing loss. Discreet modern designs with advanced connectivity.",
    features: [
      "Bluetooth streaming",
      "Rechargeable battery",
      "AI noise reduction",
      "App control",
      "Telecoil compatible",
    ],
    priceRange: "£1,295 – £2,495",
    image: "/products/bte-hearing-aid.jpg",
  },
  {
    id: "ric-discreet",
    name: "Receiver-in-Canal",
    type: "RIC",
    description:
      "Our most popular style. Nearly invisible with natural sound quality. Perfect for mild to severe hearing loss.",
    features: [
      "Ultra-discreet design",
      "Natural sound processing",
      "Wind noise management",
      "Direct smartphone streaming",
      "Remote adjustments",
    ],
    priceRange: "£1,495 – £2,995",
    image: "/products/ric-hearing-aid.jpg",
  },
  {
    id: "ite-custom",
    name: "In-the-Ear Custom",
    type: "ITE",
    description:
      "Custom-moulded to your ear canal for a secure, comfortable fit. Available in full and half-shell designs.",
    features: [
      "Custom ear impression",
      "Easy to handle controls",
      "Directional microphones",
      "Feedback cancellation",
      "Multiple colour options",
    ],
    priceRange: "£995 – £1,895",
    image: "/products/ite-hearing-aid.jpg",
  },
  {
    id: "cic-invisible",
    name: "Completely-in-Canal",
    type: "CIC",
    description:
      "Virtually invisible hearing solution. Sits deep in the ear canal for maximum discretion.",
    features: [
      "Near-invisible profile",
      "Natural wind performance",
      "Custom fitted",
      "Push-button control",
      "Suitable for mild to moderate loss",
    ],
    priceRange: "£1,195 – £2,195",
    image: "/products/cic-hearing-aid.jpg",
  },
  {
    id: "iic-micro",
    name: "Invisible-in-Canal",
    type: "IIC",
    description:
      "The most discreet hearing aid available. Placed deep in the canal, invisible to others.",
    features: [
      "100% invisible when worn",
      "Premium sound quality",
      "Smartphone compatible",
      "Automatic environment detection",
      "Premium comfort coating",
    ],
    priceRange: "£1,795 – £3,495",
    image: "/products/iic-hearing-aid.jpg",
  },
];
