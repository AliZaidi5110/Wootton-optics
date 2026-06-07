export type BlogCategory = "hearing-health" | "eye-care" | "wellness";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  authorBio: string;
  datePublished: string;
  dateModified: string;
  readTime: number;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: "hearing" | "optics";
  rating: number;
  text: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  qualifications: string[];
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface HearingAid {
  id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  priceRange: string;
  image: string;
}

export interface EyewearFrame {
  id: string;
  name: string;
  brand: string;
  style: string;
  price: string;
  image: string;
}
