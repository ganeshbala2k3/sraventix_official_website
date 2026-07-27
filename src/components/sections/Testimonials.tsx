import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import YouTubeFacade from "@/components/ui/YouTubeFacade";
import testimonials from "@/data/testimonials.json";
import videoTestimonials from "@/data/video-testimonials.json";

const AVATAR_COLORS = ["bg-blue", "bg-emerald", "bg-navy"];

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: videoTestimonials.map((video, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "VideoObject",
      name: `Sraventix Technologies — ${video.caption}`,
      description: `A learner testimonial: ${video.caption}.`,
      thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    },
  })),
};

export default function Testimonials() {
  return (
    <section className="border-t border-border bg-white py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wide text-blue uppercase">
              Success Stories
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
              Real learners. Real results.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-body">
              Hear it straight from the people who&apos;ve been through the
              program — then read what they had to say.
            </p>
          </div>
        </Reveal>

        {/* Video testimonials */}
        <Reveal delay={80}>
          <div className="mt-14">
            <h3 className="text-sm font-semibold tracking-wide text-text-secondary uppercase">
              Watch their stories
            </h3>
            <div className="mt-5 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0">
              {videoTestimonials.map((video) => (
                <div
                  key={video.youtubeId}
                  className="w-[72%] flex-none snap-center sm:w-auto"
                >
                  <YouTubeFacade
                    youtubeId={video.youtubeId}
                    caption={video.caption}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Text testimonials */}
        <div className="mt-16">
          <Reveal delay={120}>
            <h3 className="text-sm font-semibold tracking-wide text-text-secondary uppercase">
              In their words
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={160 + i * 80}>
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

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-4 rounded-card bg-surface-alt p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-lg font-bold text-text-heading">
                Ready to write your own success story?
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Explore our programs and find the track that fits you.
              </p>
            </div>
            <Button as="a" href="/programs" variant="primary" className="flex-none">
              Explore Programs
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
