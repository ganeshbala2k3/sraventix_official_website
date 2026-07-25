"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, TrendingUp, Briefcase } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { label: "Students", value: 10000, suffix: "+", icon: Users },
  { label: "Courses", value: 35, suffix: "+", icon: BookOpen },
  { label: "Success", value: 98, suffix: "%", icon: TrendingUp },
  { label: "Placements", value: 100, suffix: "+", icon: Briefcase },
];

const COUNT_MS = 1400;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);
  const started = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            io.disconnect();
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / COUNT_MS, 1);
              setProgress(easeOutCubic(t));
              if (t < 1) requestAnimationFrame(tick);
            };
            setProgress(0);
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wide text-white/60 uppercase">
              By The Numbers
            </span>
            <h2 className="mt-3 text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] leading-[1.15] font-bold text-white">
              Our Impact in Numbers
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            const shown = Math.round(stat.value * progress);
            return (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="flex flex-col items-center text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="mt-4 text-4xl font-bold tracking-tight text-white tabular-nums sm:text-5xl">
                    {shown.toLocaleString("en-IN")}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-sm font-medium tracking-wide text-white/60 uppercase">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
