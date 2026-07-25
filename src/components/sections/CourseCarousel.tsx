"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

type Slide = {
  headline: string;
  subheading: string;
  body: string;
};

const SLIDES: Slide[] = [
  {
    headline: "Skills Designed to Accelerate Your Career",
    subheading: "Learn from industry experts. Build skills that matter.",
    body: "Every Sraventix program is designed to accelerate your career — with practical, job-ready skills built for today's fastest-growing industries.",
  },
  {
    headline: "Master the Art of Learning",
    subheading: "Unlock your potential with expert-led courses.",
    body: "From web development to AI, gain the skills employers are looking for in today's competitive market.",
  },
  {
    headline: "Code Your Way to Success",
    subheading: "Hands-on coding experience awaits.",
    body: "Join thousands of students who have transformed their careers through our comprehensive programming courses.",
  },
  {
    headline: "Innovate with Technology",
    subheading: "Stay ahead in the digital age.",
    body: "Learn cutting-edge technologies and prepare for the future of work with our industry-relevant curriculum.",
  },
  {
    headline: "Educate. Empower. Excel.",
    subheading: "Your journey to excellence starts here.",
    body: "Discover personalized learning paths, expert mentorship, and real-world projects to build your portfolio.",
  },
];

const AUTOPLAY_MS = 6000;

export default function CourseCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex((i + SLIDES.length) % SLIDES.length),
    [],
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
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = SLIDES[index];

  return (
    <section className="bg-surface-alt py-20 lg:py-28">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Why learn with Sraventix"
        className="relative mx-auto max-w-4xl px-6 lg:px-8"
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
        <div className="min-h-[280px] text-center sm:min-h-[240px]">
          <p className="text-sm font-semibold tracking-wide text-blue uppercase">
            {slide.subheading}
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold tracking-tight text-text-heading">
            {slide.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-body">
            {slide.body}
          </p>
          <div className="mt-8">
            <Button as="a" href="/programs" variant="primary">
              Explore Courses
            </Button>
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-0 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-colors duration-200 hover:bg-surface sm:flex"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute top-1/2 right-0 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-colors duration-200 hover:bg-surface sm:flex"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="mt-10 flex justify-center gap-2.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.headline}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index
                  ? "w-8 bg-blue"
                  : "w-2 bg-divider hover:bg-text-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
