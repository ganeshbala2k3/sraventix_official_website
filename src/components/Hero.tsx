import Image from "next/image";
import Button from "./ui/Button";
import HeroCarousel from "./HeroCarousel";
import type { CarouselSlide } from "./HeroCarousel";

const SLIDES: CarouselSlide[] = [
  {
    src: "/carousel/carousel-06.jpg",
    alt: "Mission Youth 4 — Prakasam Police Hackathon 2026 event backdrop, presented by Orvion, Prakasam Police, and Sraventix Technologies",
    caption: "Mission Youth 4 · Prakasam Police Hackathon 2026",
  },
  {
    src: "/carousel/carousel-01.jpg",
    alt: "Student teams collaborating at laptops during a Sraventix-powered hackathon",
    caption: "120+ students, one hall, 24 hours of building",
  },
  {
    src: "/carousel/carousel-05.jpg",
    alt: "A participant presenting an AI-powered Unified Safety, Traffic & Legal Hub dashboard on stage",
    caption: "Real problem statements, real AI systems",
  },
  {
    src: "/carousel/carousel-07.jpg",
    alt: "A participant pitching a crowd management and riot prevention solution to the audience",
    caption: "Pitching solutions that solve real public-safety problems",
  },
  {
    src: "/carousel/carousel-03.jpg",
    alt: "Participants huddled around a table, mentoring and refining their project",
    caption: "Mentorship at the table, not just in a slide deck",
  },
  {
    src: "/carousel/carousel-08.jpg",
    alt: "A senior Prakasam Police officer reviewing a student team's project on stage",
    caption: "Evaluated by the industry and law-enforcement experts it's built for",
  },
  {
    src: "/carousel/carousel-10.jpg",
    alt: "The Sraventix Technologies team with Prakasam Police officials and hackathon participants on stage",
    caption: "Sraventix Technologies, with Prakasam Police and Orvion",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-blue/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-32 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-emerald/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-text-secondary uppercase">
              Sraventix Technologies LLP
            </span>

            <h1 className="mt-6 text-[clamp(2.25rem,4vw+1rem,4rem)] leading-[1.1] font-bold text-text-heading">
              Transforming potential into professional excellence.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.7] text-text-body lg:mx-0">
              Sraventix Technologies LLP is a technology &amp; workforce
              development company — bridging education, technology, and
              industry through lifelong, outcome-driven, framework-based
              learning for students, professionals, and organizations.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button as="a" href="#framework" variant="primary">
                Explore Programs
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Partner With Us
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[500px] lg:mx-0 lg:max-w-none">
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

        <div className="mt-20 lg:mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wide text-blue uppercase">
              Sraventix In Action
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
              Moments worth sharing
            </h2>
            <p className="mt-4 text-lg leading-[1.7] text-text-body">
              A look inside our hackathons, mentorship sessions, and
              industry collaborations in action.
            </p>
          </div>

          <div className="mt-10">
            <HeroCarousel slides={SLIDES} />
          </div>
        </div>
      </div>
    </section>
  );
}
