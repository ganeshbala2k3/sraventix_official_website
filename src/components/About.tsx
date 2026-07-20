import { Compass, Rocket, Target, Lightbulb } from "lucide-react";

const PILLARS = [
  {
    label: "Vision",
    icon: Compass,
    body: "To become the world's most trusted workforce transformation platform by continuously bridging the gap between education, technology, and industry through lifelong, outcome-driven learning.",
  },
  {
    label: "Mission",
    icon: Rocket,
    body: "Empower students, professionals, and organizations with industry-relevant knowledge, practical experience, and emerging technologies that create measurable career and business outcomes.",
  },
  {
    label: "Purpose",
    icon: Target,
    body: "We exist to transform potential into professional excellence.",
  },
  {
    label: "Core Belief",
    icon: Lightbulb,
    body: "Learning is valuable only when it creates capability. Capability is valuable only when it creates impact.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            Who We Are
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
            An EdTech company built on outcomes, not just content.
          </h2>
          <p className="mt-4 text-lg leading-[1.7] text-text-body">
            Sraventix Technologies LLP exists at the intersection of
            education, technology, and industry — where what people learn
            translates directly into what they can do.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="rounded-card border border-border bg-white p-8 shadow-sm transition-transform duration-[250ms] hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-blue/10 text-blue">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-text-heading">
                  {pillar.label}
                </h3>
                <p className="mt-3 text-base leading-[1.7] text-text-body">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
