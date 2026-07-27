import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Workflow,
  Cloud,
  Layers,
  Terminal,
  Users,
  Megaphone,
  Landmark,
  Calculator,
  Clock,
  CalendarDays,
  Ticket,
  BadgeCheck,
  ArrowLeft,
  Check,
  Download,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import { getCourse, getCourseSlugs } from "@/lib/courses";
import { CONTACT, SITE_URL, SITE_NAME, waLink } from "@/lib/site";
import programsData from "@/data/programs.json";

const ICONS: Record<string, LucideIcon> = {
  Workflow,
  Cloud,
  Layers,
  Terminal,
  Users,
  Megaphone,
  Landmark,
  Calculator,
};

const TRACK_LABELS: Record<string, string> = {
  technical: "Technical Programs",
  management: "Management Programs",
};

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.tagline,
    alternates: { canonical: `/programs/${course.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/programs/${course.slug}`,
      siteName: SITE_NAME,
      title: `${course.title} | ${SITE_NAME}`,
      description: course.tagline,
      locale: "en_IN",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${course.title} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | ${SITE_NAME}`,
      description: course.tagline,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const Icon = ICONS[course.icon] ?? Workflow;
  const trackLabel = TRACK_LABELS[course.track] ?? "Programs";
  const livePrice = programsData.livePrice;
  const selfPacedPrice = programsData.selfPacedPrice;

  if (course.launched === false) {
    return (
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <Reveal>
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-blue"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              All Programs
            </Link>

            <div className="mt-8 flex flex-col items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-[16px] bg-blue/10 text-blue">
                <Icon className="h-8 w-8" strokeWidth={2} />
              </span>
              <span className="mt-4 text-sm font-semibold tracking-wide text-blue uppercase">
                {trackLabel}
              </span>
              <h1 className="mt-2 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold tracking-tight text-text-heading">
                {course.title}
              </h1>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-text-body">
                {course.tagline}
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-700 uppercase">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                Coming Soon
              </span>

              <p className="mt-5 max-w-md text-base leading-relaxed text-text-body">
                {`Our team is planning the best way to launch ${course.title} — we're finalizing the curriculum, batches, and pricing. Want to be the first to know when it's ready?`}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3">
                <Button
                  as="a"
                  href={waLink(`Hi! Please notify me when the ${course.title} course launches.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Notify Me on WhatsApp
                </Button>
                <span className="text-sm text-text-muted">
                  Or call us: {CONTACT.phoneDisplay}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  const outcomes = course.outcomes ?? [];
  const tools = course.tools ?? [];
  const syllabus = course.syllabus ?? [];
  const projects = course.projects ?? [];
  const faqs = course.faqs ?? [];

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description ?? course.tagline,
    url: `${SITE_URL}/programs/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: [
      { "@type": "Offer", category: "Live", price: livePrice.replace(/[^\d]/g, ""), priceCurrency: "INR" },
      { "@type": "Offer", category: "Self-Paced", price: selfPacedPrice.replace(/[^\d]/g, ""), priceCurrency: "INR" },
    ],
    hasCourseInstance: [
      { "@type": "CourseInstance", courseMode: "Online", courseWorkload: course.duration ?? "" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-blue"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              All Programs
            </Link>

            <div className="mt-6 flex items-start gap-4">
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-[14px] bg-blue/10 text-blue">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <div>
                <span className="text-sm font-semibold tracking-wide text-blue uppercase">
                  {trackLabel}
                </span>
                <h1 className="mt-1 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold tracking-tight text-text-heading">
                  {course.title}
                </h1>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-body">
              {course.description ?? course.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-text-muted" strokeWidth={2} />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-text-muted" strokeWidth={2} />
                Next batch: {course.nextBatch}
              </span>
              <span className="flex items-center gap-1.5">
                <Ticket className="h-4 w-4 text-text-muted" strokeWidth={2} />
                {course.seatsLeft ?? 0} seats left
              </span>
              {course.certificate && (
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-emerald" strokeWidth={2} />
                  Certificate on completion
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 grid gap-4 rounded-card border border-border bg-surface-alt p-6 sm:grid-cols-2 md:p-8">
              <div className="flex items-center justify-between gap-4 rounded-[12px] bg-white p-5 shadow-sm">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">Live</p>
                  <p className="mt-1 text-2xl font-bold text-text-heading">{livePrice}</p>
                </div>
                <Button
                  as="a"
                  href={waLink(`Hi! I want to register for the ${course.title} Live course. Please share the next batch details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Register Now
                </Button>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-[12px] bg-white p-5 shadow-sm">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">Self-Paced</p>
                  <p className="mt-1 text-2xl font-bold text-text-heading">{selfPacedPrice}</p>
                </div>
                <Button
                  as="a"
                  href={waLink(`Hi! I want to register for the ${course.title} Self-Paced course. Please share enrollment details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  Register Now
                </Button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Button
                as="a"
                href={waLink(`Hi! Please send me the ${course.title} course brochure.`)}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="gap-2"
              >
                <Download className="h-4 w-4" strokeWidth={2} />
                Download Brochure
              </Button>
              <span className="text-sm text-text-muted">
                Or call us: {CONTACT.phoneDisplay}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-xl font-bold text-text-heading">What you&apos;ll learn</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-base leading-relaxed text-text-body">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-emerald" strokeWidth={2} />
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-14 text-xl font-bold text-text-heading">Tools & technologies</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-body"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-xl font-bold text-text-heading">Syllabus</h2>
            <div className="mt-5">
              <Accordion
                defaultOpenId={syllabus[0]?.module}
                items={syllabus.map((mod) => ({
                  id: mod.module,
                  title: mod.module,
                  content: (
                    <ul className="space-y-1.5">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-text-muted" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  ),
                }))}
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-14 text-xl font-bold text-text-heading">Projects you&apos;ll build</h2>
            <ul className="mt-5 space-y-3">
              {projects.map((project) => (
                <li
                  key={project}
                  className="rounded-card border border-border bg-surface-alt p-5 text-base leading-relaxed text-text-body"
                >
                  {project}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-xl font-bold text-text-heading">Live vs Self-Paced</h2>
            <div className="mt-5 overflow-x-auto rounded-card border border-border bg-white">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-5 py-3.5 font-semibold text-text-heading">&nbsp;</th>
                    <th className="px-5 py-3.5 font-semibold text-text-heading">Live — {livePrice}</th>
                    <th className="px-5 py-3.5 font-semibold text-text-heading">Self-Paced — {selfPacedPrice}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-text-body">
                  <tr>
                    <td className="px-5 py-3.5 text-text-secondary">Format</td>
                    <td className="px-5 py-3.5">Instructor-led batches</td>
                    <td className="px-5 py-3.5">Recorded, self-guided</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 text-text-secondary">Doubt clearing</td>
                    <td className="px-5 py-3.5">Real-time, in session</td>
                    <td className="px-5 py-3.5">WhatsApp support</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 text-text-secondary">Mentorship</td>
                    <td className="px-5 py-3.5">Included</td>
                    <td className="px-5 py-3.5">Not included</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 text-text-secondary">Pace</td>
                    <td className="px-5 py-3.5">Fixed batch schedule</td>
                    <td className="px-5 py-3.5">Your own schedule</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 text-text-secondary">Projects & certificate</td>
                    <td className="px-5 py-3.5">Included</td>
                    <td className="px-5 py-3.5">Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-14 text-xl font-bold text-text-heading">Frequently asked questions</h2>
            <div className="mt-5">
              <Accordion
                items={faqs.map((faq, i) => ({
                  id: `faq-${i}`,
                  title: faq.q,
                  content: faq.a,
                }))}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 text-center lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <h2 className="text-xl font-bold text-white">
              Ready to start {course.title}?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Message us on WhatsApp and our counselor will confirm your seat within one business day.
            </p>
          </div>
          <Button
            as="a"
            href={waLink(`Hi! I want to register for the ${course.title} course. Please share the next batch details.`)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="flex-none"
          >
            Register on WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
