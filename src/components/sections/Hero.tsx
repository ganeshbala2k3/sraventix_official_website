import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-blue/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-32 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-emerald/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
           

            <h1 style={{ "--hero-delay": "90ms" } as CSSProperties} className="hero-enter mt-6 text-[clamp(2.25rem,4vw+1rem,4rem)] leading-[1.1] font-bold text-text-heading">
              Transforming potential into professional excellence.
            </h1>

            <p style={{ "--hero-delay": "180ms" } as CSSProperties} className="hero-enter mx-auto mt-6 max-w-xl text-lg leading-[1.7] text-text-body lg:mx-0">
              Sraventix Technologies is a technology &amp; workforce
              development company — bridging education, technology, and
              industry through lifelong, outcome-driven, framework-based
              learning for students, professionals, and organizations.
            </p>

            <div style={{ "--hero-delay": "270ms" } as CSSProperties} className="hero-enter mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button as="a" href="/programs" variant="primary">
                Explore Programs
              </Button>
              <Button as="a" href="/contact" variant="secondary">
                Partner With Us
              </Button>
            </div>
          </div>

          <div style={{ "--hero-delay": "200ms" } as CSSProperties} className="hero-enter relative mx-auto w-full max-w-[440px] sm:max-w-[500px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square w-full">
              <Image
                src="/hero_media/righthero.svg"
                alt="Illustration of a Sraventix Technologies learner working at a laptop during a live training session, with expert mentorship, practical learning, and progress-tracking highlights"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 500px, 440px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
