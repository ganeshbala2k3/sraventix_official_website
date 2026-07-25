import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type Props = {
  label: string;
  title: string;
  effectiveDate: string;
  intro: ReactNode;
  sections: LegalSection[];
};

export default function LegalPage({
  label,
  title,
  effectiveDate,
  intro,
  sections,
}: Props) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            {label}
          </span>
          <h1 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold tracking-tight text-text-heading">
            {title}
          </h1>
          <p className="mt-3 text-sm font-medium text-text-muted">
            Effective date: {effectiveDate}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-body">
            {intro}
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i, 3) * 60}>
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-text-heading">
                  {i + 1}. {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-text-body [&_li]:mt-1.5 [&_ul]:list-disc [&_ul]:pl-5">
                  {section.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
