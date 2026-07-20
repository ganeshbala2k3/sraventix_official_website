import Image from "next/image";
import { BookOpen, Users, Hammer, TrendingUp } from "lucide-react";

const STEPS = [
  {
    letter: "L",
    title: "Learn",
    icon: BookOpen,
    body: "Industry-aligned curriculum co-designed with practitioners and mapped to real, emerging job roles — not generic theory.",
  },
  {
    letter: "E",
    title: "Engage",
    icon: Users,
    body: "Hands-on labs, live projects, and mentorship from industry experts that turn concepts into working experience.",
  },
  {
    letter: "A",
    title: "Apply",
    icon: Hammer,
    body: "Capstone projects and real-world problem statements that mirror the challenges learners will face on the job.",
  },
  {
    letter: "P",
    title: "Perform",
    icon: TrendingUp,
    body: "Skill validation, certification, and career or business outcomes that are measured — not assumed.",
  },
];

export default function Framework() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            Framework-Based Learning
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
            The L.E.A.P. Framework
          </h2>
          <p className="mt-4 text-lg leading-[1.7] text-text-body">
            Every Sraventix program follows the same structured path — from
            understanding a concept to demonstrating measurable capability
            with it. It&apos;s how we make sure learning always creates
            impact.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.letter}
                className="rounded-card border border-border bg-white p-8 shadow-sm transition-transform duration-[250ms] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-blue">
                    {step.letter}
                  </span>
                  <Icon className="h-6 w-6 text-text-muted" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-text-heading">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-[1.7] text-text-body">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold tracking-wide text-text-secondary uppercase">
            Proof, not promises
          </p>
          <h3 className="mt-2 text-2xl font-bold text-text-heading">
            Mission Youth 4 · Prakasam Police Hackathon 2026
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-image border border-border shadow-sm">
              <Image
                src="/carousel/carousel-04.jpg"
                alt="Hackathon audience and stage backdrop for Mission Youth 4, presented by Orvion, Prakasam Police, and Sraventix Technologies"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-image border border-border shadow-sm">
              <Image
                src="/carousel/carousel-02.jpg"
                alt="Grand finale leaderboard screen showing shortlisted teams at the Mission Youth 4 hackathon"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
