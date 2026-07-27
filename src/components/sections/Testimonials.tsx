import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import testimonials from "@/data/testimonials.json";

const AVATAR_COLORS = ["bg-blue", "bg-emerald", "bg-navy"];

export default function Testimonials() {
  return (
    <section className="border-t border-border bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wide text-blue uppercase">
              Success Stories
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
              What our learners say
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-card border border-border bg-white p-8 shadow-sm">
                <Quote
                  className="h-8 w-8 flex-none text-blue/20"
                  strokeWidth={2}
                  fill="currentColor"
                />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-text-body">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                  <span
                    className={`flex h-11 w-11 flex-none items-center justify-center rounded-full text-sm font-bold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                    aria-hidden
                  >
                    {testimonial.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text-heading">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
