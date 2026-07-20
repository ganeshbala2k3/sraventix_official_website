"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption: string;
};

const AUTOPLAY_MS = 5000;

export default function HeroCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex((i + slides.length) % slides.length),
    [slides.length],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Sraventix Technologies in action"
      className="group relative mx-auto aspect-[4/3] w-full max-h-[640px] overflow-hidden rounded-image border border-border bg-surface-alt shadow-md sm:aspect-[16/9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 40) prev();
        else if (delta < -40) next();
        touchStartX.current = null;
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
            i === index
              ? "z-10 scale-100 opacity-100"
              : "pointer-events-none z-0 scale-[1.03] opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1320px) 1320px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent px-6 pt-24 pb-11 sm:px-8 sm:pb-12">
            <p className="text-base font-semibold text-white sm:text-lg">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-md transition-transform duration-200 hover:scale-105 hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-md transition-transform duration-200 hover:scale-105 hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" strokeWidth={2} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full shadow-sm transition-all duration-200 ${
              i === index ? "w-9 bg-white" : "w-2 bg-white/60 hover:bg-white/85"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
