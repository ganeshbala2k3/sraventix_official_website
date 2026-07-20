"use client";

import { useState } from "react";
import { Mail, MapPin, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";

const INPUT_CLASSES =
  "h-13 w-full rounded-input border border-divider bg-white px-4 text-base text-text-heading placeholder-text-muted outline-none transition-colors duration-200 focus:border-2 focus:border-blue";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm font-semibold tracking-wide text-blue uppercase">
              Get In Touch
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
              Let&apos;s build measurable outcomes together.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-[1.7] text-text-body">
              Whether you&apos;re a learner ready to LEAP, or an organization
              looking for a workforce transformation partner — we&apos;d love
              to hear from you.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-text-body">
                <Mail className="h-5 w-5 text-blue" strokeWidth={2} />
                <a
                  href="mailto:hello@sraventix.in"
                  className="text-sm transition-colors duration-200 hover:text-blue"
                >
                  hello@sraventix.in
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
          </div>

          <form
            className="space-y-5 rounded-card border border-border bg-white p-8 shadow-sm md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
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
              {sent ? "Message received — thank you!" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
