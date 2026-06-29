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
    image: "/products/ite-hearing-aid.jpg",
  },
  {
    id: "cic-invisible",
    name: "Completely-in-Canal",
    type: "CIC",
    description:
      "Highly discreet hearing solution. Sits deep in the ear canal for maximum discretion.",
    features: [
      "Near-invisible profile",
      "Natural wind performance",
      "Custom fitted",
      "Push-button control",
      "Suitable for mild to moderate loss",
    ],
    image: "/products/cic-hearing-aid.jpg",
  },
  {
    id: "iic-micro",
    name: "Invisible-in-Canal",
    type: "IIC",
    description:
      "One of the most discreet options available. Sits deep in the ear canal and is highly discreet when fitted correctly.",
    features: [
      "Highly discreet when fitted correctly",
      "Premium sound quality",
      "Smartphone compatible",
      "Automatic environment detection",
      "Premium comfort coating",
    ],
    image: "/products/iic-hearing-aid.jpg",
  },
];
