"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Mail, MapPin, Building2, Phone, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { CONTACT, waLink } from "@/lib/site";

const INPUT_CLASSES =
  "h-13 w-full rounded-input border border-divider bg-white px-4 text-base text-text-heading placeholder-text-muted outline-none transition-colors duration-200 focus:border-2 focus:border-blue";

export default function Contact({ mascot }: { mascot?: ReactNode }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Hi! I'm reaching out via the Sraventix website.",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
          <div>
            <span className="text-sm font-semibold tracking-wide text-blue uppercase">
              Get In Touch
            </span>
            <h1 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
              Let&apos;s build measurable outcomes together.
            </h1>
            <p className="mt-4 max-w-md text-lg leading-[1.7] text-text-body">
              Whether you&apos;re a learner ready to LEAP, or an organization
              looking for a workforce transformation partner — we&apos;d love
              to hear from you.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-text-body">
                <Phone className="h-5 w-5 text-blue" strokeWidth={2} />
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="text-sm transition-colors duration-200 hover:text-blue"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-body">
                <MessageCircle className="h-5 w-5 text-blue" strokeWidth={2} />
                <a
                  href={waLink("Hi! I'd like to know more about Sraventix programs.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-blue"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-body">
                <Mail className="h-5 w-5 text-blue" strokeWidth={2} />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm transition-colors duration-200 hover:text-blue"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-body">
                <MapPin className="h-5 w-5 text-blue" strokeWidth={2} />
                <span className="text-sm">Ongole, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-text-body">
                <Building2 className="h-5 w-5 text-blue" strokeWidth={2} />
                <span className="text-sm">Sraventix Technologies LLP</span>
              </div>
            </div>

            {mascot && <div className="mt-10 hidden max-w-xs lg:block">{mascot}</div>}
          </div>
          </Reveal>

          <Reveal delay={120}>
          <form
            className="space-y-5 rounded-card border border-border bg-white p-8 shadow-sm md:p-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-text-body"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className={INPUT_CLASSES}
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-body"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className={INPUT_CLASSES}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-text-body"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={`${INPUT_CLASSES} h-auto py-3`}
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              {sent ? "Opened WhatsApp — we'll reply soon!" : "Send via WhatsApp"}
            </Button>
            <p className="text-center text-xs leading-relaxed text-text-muted">
              Submitting opens WhatsApp with your message pre-filled — we
              typically reply within a few hours (Mon–Sat).
            </p>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
