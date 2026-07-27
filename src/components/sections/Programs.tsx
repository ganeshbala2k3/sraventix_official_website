"use client";

import { useState, type ReactNode } from "react";
import {
  Workflow,
  Cloud,
  Layers,
  Terminal,
  Users,
  Megaphone,
  Landmark,
  Calculator,
  Download,
  X,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { CONTACT, waLink } from "@/lib/site";
import programsData from "@/data/programs.json";

type Course = {
  title: string;
  icon: LucideIcon;
  body: string;
};

type Track = {
  id: string;
  label: string;
  courses: Course[];
};

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

const LIVE_PRICE = programsData.livePrice;
const SELF_PACED_PRICE = programsData.selfPacedPrice;

const TRACKS: Track[] = programsData.tracks.map((track) => ({
  ...track,
  courses: track.courses.map((course) => ({
    ...course,
    icon: ICONS[course.icon],
  })),
}));

type ModalState = {
  course: Course;
  action: "register" | "brochure";
};

export default function Programs({ mascot }: { mascot?: ReactNode }) {
  const [activeId, setActiveId] = useState(TRACKS[0].id);
  const [modal, setModal] = useState<ModalState | null>(null);

  const active = TRACKS.find((t) => t.id === activeId) ?? TRACKS[0];
  const ModalIcon = modal?.course.icon;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="flex items-end justify-between gap-10">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            Our Programs
          </span>
          <h1 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold tracking-tight text-text-heading">
            Programs built for real career outcomes.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-body">
            Every program runs Live or Self-Paced — choose the technical or
            management track that matches where you want to go.
          </p>
        </div>
        {mascot && (
          <div className="hidden w-56 shrink-0 xl:block">{mascot}</div>
        )}
        </div>
        </Reveal>

        <div className="mt-10 inline-flex rounded-button border border-border bg-surface-alt p-1">
          {TRACKS.map((track) => {
            const isActive = track.id === activeId;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveId(track.id)}
                aria-pressed={isActive}
                className={`rounded-[8px] px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-text-heading shadow-sm"
                    : "text-text-secondary hover:text-text-heading"
                }`}
              >
                {track.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {active.courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <Reveal key={`${active.id}-${course.title}`} delay={i * 60}>
              <div
                className="flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md lg:p-8"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-blue/10 text-blue">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-text-secondary">
                    Live + Self-Paced
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-bold text-text-heading">
                  {course.title}
                </h2>
                <p className="mt-2 flex-1 text-base leading-relaxed text-text-body">
                  {course.body}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">
                      Live
                    </p>
                    <p className="mt-1 text-xl font-bold text-text-heading">
                      {LIVE_PRICE}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">
                      Self-Paced
                    </p>
                    <p className="mt-1 text-xl font-bold text-text-heading">
                      {SELF_PACED_PRICE}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <Button
                    as="button"
                    variant="primary"
                    className="w-full"
                    onClick={() => setModal({ course, action: "register" })}
                  >
                    Register Now
                  </Button>
                  <Button
                    as="button"
                    variant="secondary"
                    className="w-full gap-2"
                    onClick={() => setModal({ course, action: "brochure" })}
                  >
                    <Download className="h-4 w-4" strokeWidth={2} />
                    Download Brochure
                  </Button>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {modal && ModalIcon && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/50 px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-md rounded-modal border border-border bg-white p-8 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModal(null)}
              aria-label="Close"
              className="absolute top-5 right-5 text-text-muted transition-colors duration-200 hover:text-navy"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-blue/10 text-blue">
              <ModalIcon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-text-heading">
              {modal.action === "register" ? "Register" : "Download Brochure"}{" "}
              — {modal.course.title}
            </h3>
            {modal.action === "register" ? (
              <p className="mt-3 text-base leading-relaxed text-text-body">
                Seats for {modal.course.title} are limited. Live batches run
                at {LIVE_PRICE} and Self-Paced access is {SELF_PACED_PRICE}.
                Message us on WhatsApp and our counselor will confirm your
                seat within one business day.
              </p>
            ) : (
              <p className="mt-3 text-base leading-relaxed text-text-body">
                We&apos;ll send you the full {modal.course.title} curriculum,
                schedule, and pricing — straight to your WhatsApp.
              </p>
            )}
            <div className="mt-6 flex gap-3">
              <Button
                as="a"
                href={waLink(
                  modal.action === "register"
                    ? `Hi! I want to register for the ${modal.course.title} course. Please share the next batch details.`
                    : `Hi! Please send me the ${modal.course.title} course brochure.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="flex-1 justify-center"
                onClick={() => setModal(null)}
              >
                {modal.action === "register"
                  ? "Register on WhatsApp"
                  : "Get it on WhatsApp"}
              </Button>
              <Button
                as="button"
                variant="secondary"
                className="flex-1 justify-center"
                onClick={() => setModal(null)}
              >
                Close
              </Button>
            </div>
            <p className="mt-4 text-center text-xs text-text-muted">
              Or call us: {CONTACT.phoneDisplay}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
