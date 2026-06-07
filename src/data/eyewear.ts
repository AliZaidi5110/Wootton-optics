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
];
