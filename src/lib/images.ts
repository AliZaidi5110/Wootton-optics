/** Optimised static image paths — only reference assets that exist in /public */
export const IMAGES = {
  clinic: "/wootton-clinic.jpg",
  og: "/wootton-clinic.jpg",
  logo: "/wootton-clinic.jpg",
} as const;

export const DEFAULT_OG_IMAGE = IMAGES.og;
