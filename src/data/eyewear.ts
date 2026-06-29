import type { EyewearFrame } from "@/types";

export const eyewearFrames: EyewearFrame[] = [
  {
    id: "classic-tortoise",
    name: "Heritage Tortoise",
    brand: "Wootton Collection",
    style: "Round",
    price: "£129",
    image: "/products/frame-tortoise.jpg",
  },
  {
    id: "modern-metal",
    name: "Sleek Titanium",
    brand: "Ray-Ban",
    style: "Rectangle",
    price: "£189",
    image: "/products/frame-metal.jpg",
  },
  {
    id: "bold-cat-eye",
    name: "Celeste Cat-Eye",
    brand: "Oakley",
    style: "Cat-Eye",
    price: "£159",
    image: "/products/frame-cateye.jpg",
  },
  {
    id: "sport-active",
    name: "Active Pro",
    brand: "Oakley",
    style: "Sport",
    price: "£219",
    image: "/products/frame-sport.jpg",
  },
  {
    id: "minimal-rimless",
    name: "Aero Rimless",
    brand: "Silhouette",
    style: "Rimless",
    price: "£249",
    image: "/products/frame-rimless.jpg",
  },
  {
    id: "kids-flex",
    name: "Flexi Kids",
    brand: "Wootton Collection",
    style: "Children",
    price: "£49",
    image: "/products/frame-kids.jpg",
  },
  {
    id: "designer-aviator",
    name: "Classic Aviator",
    brand: "Ray-Ban",
    style: "Aviator",
    price: "£175",
    image: "/products/frame-aviator.jpg",
  },
  {
    id: "eco-wood",
    name: "Eco Wood Grain",
    brand: "Wootton Collection",
    style: "Square",
    price: "£139",
    image: "/products/frame-wood.jpg",
  },
];

export const lensTechnologies = [
  {
    name: "Varifocal (Progressive)",
    description:
      "Seamless vision at all distances without visible lines. Ideal for presbyopia.",
    benefits: ["No line distortion", "Natural vision transition", "Wide field of view"],
  },
  {
    name: "Blue Light Filtering",
    description:
      "Reduces digital eye strain from screens. Essential for modern lifestyles.",
    benefits: ["Less eye fatigue", "Better sleep quality", "Clear screen vision"],
  },
  {
    name: "Photochromic (Transitions)",
    description:
      "Lenses that darken in sunlight and clear indoors. Two pairs in one.",
    benefits: ["UV protection", "Glare reduction", "Convenience"],
  },
  {
    name: "High-Index Thin Lenses",
    description:
      "Thinner, lighter lenses for strong prescriptions without bulky appearance.",
    benefits: ["Lighter weight", "Slimmer profile", "Better aesthetics"],
  },
  {
    name: "Rodenstock B.I.G. Biometric Lenses",
    description:
      "Biometric Intelligent Glasses tailored using detailed measurements of your individual eye for natural, sharp all-round vision.",
    benefits: [
      "Personalised to your eye biometry",
      "Sharper all-round vision",
      "Natural visual experience",
    ],
  },
  {
    name: "Rodenstock Pro 410 Lenses",
    description:
      "Premium progressive lens design offering wide, comfortable fields of vision at every distance.",
    benefits: ["Wide vision zones", "Smooth distance transitions", "All-day comfort"],
  },
  {
    name: "Rodenstock Road Lenses",
    description:
      "Lenses optimised for driving, helping to reduce glare and improve contrast in low light and challenging conditions.",
    benefits: ["Reduced glare while driving", "Better contrast in low light", "Clearer night vision"],
  },
  {
    name: "Sports Lenses — Biometric Intelligent Glasses",
    description:
      "Sports-focused lens options including Rodenstock Biometric Intelligent Glasses for active lifestyles, with durable materials and precise visual performance.",
    benefits: [
      "Biometric Intelligent Glasses technology",
      "Impact-resistant materials",
      "Wraparound fit options",
      "UV protection",
    ],
  },
];
