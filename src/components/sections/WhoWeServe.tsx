import { GraduationCap, Briefcase, Building2 } from "lucide-react";

const AUDIENCES = [
  {
    title: "Students",
    icon: GraduationCap,
    body: "Build job-ready skills in emerging technologies through structured, mentor-led programs designed to bridge the gap between college and career.",
  },
  {
    title: "Professionals",
    icon: Briefcase,
    body: "Upskill and reskill with practical, outcome-driven learning paths that keep pace with fast-moving technology and career demands.",
  },
  {
    title: "Organizations",
    icon: Building2,
    body: "Partner with us for workforce transformation programs that turn training investment into measurable business outcomes.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-surface-alt py-24">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            Who We Serve
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
            Built for every stage of the workforce journey.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="rounded-card border border-border bg-white p-8 shadow-sm transition-transform duration-[250ms] hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-blue/10 text-blue">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-text-heading">
                  {a.title}
                </h3>
                <p className="mt-3 text-base leading-[1.7] text-text-body">
                  {a.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
