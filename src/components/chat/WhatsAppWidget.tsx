"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";

type Option = {
  label: string;
  next?: string;
  wa?: string;
  tel?: boolean;
  href?: string;
};

type Node = {
  bot: string;
  options: Option[];
};

const BACK: Option = { label: "← Main menu", next: "start" };

const NODES: Record<string, Node> = {
  start: {
    bot: "Hi! 👋 Welcome to Sraventix Technologies. I can help you with courses, fees, and placement support. What would you like to know?",
    options: [
      { label: "Courses & fees", next: "courses" },
      { label: "Live vs Self-Paced", next: "modes" },
      { label: "Placement support", next: "placement" },
      { label: "How do I enroll?", next: "enroll" },
      { label: "Talk to a counselor", next: "counselor" },
    ],
  },
  courses: {
    bot: "We run two tracks:\n\n💻 Technical — DevOps, Cloud Computing, MERN Stack, Python\n📊 Management — HR, Digital Marketing, Taxation, Accounting\n\nEvery course is available Live (₹4,999) or Self-Paced (₹1,999).",
    options: [
      { label: "Get a course brochure", next: "brochure" },
      { label: "How do I enroll?", next: "enroll" },
      {
        label: "Ask on WhatsApp",
        wa: "Hi! I'd like to know more about your courses and fees.",
      },
      BACK,
    ],
  },
  modes: {
    bot: "Live (₹4,999): instructor-led batches, real-time doubt clearing, mentorship, and hands-on projects.\n\nSelf-Paced (₹1,999): recorded content you complete on your own schedule.\n\nBoth include a completion certificate and placement support.",
    options: [
      { label: "Courses & fees", next: "courses" },
      { label: "How do I enroll?", next: "enroll" },
      {
        label: "Ask on WhatsApp",
        wa: "Hi! I'd like to understand the difference between Live and Self-Paced courses.",
      },
      BACK,
    ],
  },
  placement: {
    bot: "We provide genuine placement support — resume building, mock interviews, and connections to our hiring-partner network.\n\nTo be transparent: we don't guarantee jobs or internships. Support, preparation, and referrals — yes. Promises — no.",
    options: [
      { label: "Read the full policy", href: "/placement-policy" },
      {
        label: "Ask on WhatsApp",
        wa: "Hi! I'd like to know more about your placement support.",
      },
      BACK,
    ],
  },
  enroll: {
    bot: "Enrolling is simple:\n\n1. Message us on WhatsApp with your course name\n2. Our counselor confirms fees, batch dates, and payment\n3. Your seat is confirmed within one business day",
    options: [
      {
        label: "Register on WhatsApp",
        wa: "Hi! I want to register for a course. Please share the next batch details.",
      },
      { label: "Courses & fees", next: "courses" },
      BACK,
    ],
  },
  brochure: {
    bot: "Happy to share a brochure! Tap below and tell us which course you're interested in — we'll send the details on WhatsApp.",
    options: [
      {
        label: "Request brochure on WhatsApp",
        wa: "Hi! Please send me the course brochure for: ",
      },
      BACK,
    ],
  },
  counselor: {
    bot: `You can reach our team directly — we typically reply within a few hours (Mon–Sat).\n\n📞 ${CONTACT.phoneDisplay}`,
    options: [
      {
        label: "Chat on WhatsApp",
        wa: "Hi! I'd like to talk to a counselor about your courses.",
      },
      { label: "Call us", tel: true },
      BACK,
    ],
  },
};

type Message = { from: "bot" | "user"; text: string };

function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: NODES.start.bot },
  ]);
  const [nodeId, setNodeId] = useState("start");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const choose = (option: Option) => {
    if (!option.next) return;
    const next = NODES[option.next];
    setMessages((m) => [...m, { from: "user", text: option.label.replace("← ", "") }]);
    setTyping(true);
    setNodeId("");
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: next.bot }]);
      setNodeId(option.next as string);
    }, 500);
  };

  const node = NODES[nodeId];

  return (
    <>
      {/* Floating action button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform duration-200 hover:scale-105"
      >
        {open ? <X className="h-6 w-6" strokeWidth={2} /> : <WhatsAppIcon />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Sraventix chat assistant"
          className="fixed right-5 bottom-24 z-40 flex h-[min(560px,calc(100dvh-8rem))] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-modal border border-border bg-white shadow-md"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-navy px-5 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Sraventix Assistant
              </p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                Typically replies in a few hours
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-surface-alt px-4 py-4"
          >
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    message.from === "user"
                      ? "rounded-br-md bg-blue text-white"
                      : "rounded-bl-md border border-border bg-white text-text-body"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <p className="rounded-2xl rounded-bl-md border border-border bg-white px-4 py-2.5 text-sm text-text-muted">
                  typing…
                </p>
              </div>
            )}
          </div>

          {/* Options */}
          {node && (
            <div className="flex flex-wrap gap-2 border-t border-border bg-white px-4 py-3">
              {node.options.map((option) =>
                option.wa ? (
                  <a
                    key={option.label}
                    href={waLink(option.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {option.label}
                  </a>
                ) : option.tel ? (
                  <a
                    key={option.label}
                    href={`tel:${CONTACT.phoneE164}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-text-body transition-colors duration-200 hover:border-blue/40 hover:text-blue"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    {option.label}
                  </a>
                ) : option.href ? (
                  <Link
                    key={option.label}
                    href={option.href}
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text-body transition-colors duration-200 hover:border-blue/40 hover:text-blue"
                  >
                    {option.label}
                  </Link>
                ) : (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => choose(option)}
                    className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text-body transition-colors duration-200 hover:border-blue/40 hover:text-blue"
                  >
                    {option.label}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
