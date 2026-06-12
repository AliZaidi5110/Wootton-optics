"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export const SLIDE_INTERVAL_MS = 7000;

export interface HeroSlideImage {
  src: string;
  alt: string;
}

interface HeroImageSliderProps {
  images: HeroSlideImage[];
}

export function HeroImageSlider({ images }: HeroImageSliderProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [images.length, prefersReducedMotion]);

  const activeImage = images[index];

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover"
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="100vw"
            quality={index === 0 ? 85 : 75}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-deep/95 via-navy/88 to-navy-deep/75" />

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 z-[2] flex gap-2">
          {images.map((image, i) => (
            <span
              key={image.src}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2 bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
