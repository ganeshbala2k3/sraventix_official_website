"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, Send, X } from "lucide-react";
import { waLink } from "@/lib/site";

type Message = { from: "bot" | "user"; text: string };

const WELCOME: Message = {
  from: "bot",
  text: "Hi! I'm Sraventix AI 👋 Ask me anything about our programs, pricing, formats, placement support, or policies — or tap a quick question below.",
};

const QUICK_PROMPTS = [
  "What courses do you offer?",
  "What is the difference between Live and Self-Paced?",
  "Do you offer placement support?",
  "How do I enroll in a course?",
];

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

/** Renders text with raw URLs (e.g. the WhatsApp link in every reply) turned into clickable links. */
function Linkified({ text }: { text: string }) {
  const parts = text.split(URL_PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        URL_PATTERN.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-blue"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export default function SraventixAIWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      const reply = typeof data?.reply === "string" ? data.reply : "Sorry, something went wrong. Please try again.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Sorry, I couldn't reach the server. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const showQuickPrompts = messages.length === 1;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Sraventix AI" : "Chat with Sraventix AI"}
        aria-expanded={open}
        className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue text-white shadow-md transition-transform duration-200 hover:scale-105"
      >
        {open ? <X className="h-6 w-6" strokeWidth={2} /> : <Bot className="h-6 w-6" strokeWidth={2} />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Sraventix AI assistant"
          className="fixed right-5 bottom-24 z-40 flex h-[min(560px,calc(100dvh-8rem))] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-modal border border-border bg-white shadow-md"
        >
          <div className="flex items-center gap-3 bg-navy px-5 py-4">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue text-white">
              <Bot className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">Sraventix AI</p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                Answers from our official knowledge base
              </p>
            </div>
            <a
              href={waLink("Hi! I'd like to talk to a counselor about your courses.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp instead"
              title="Prefer WhatsApp? Chat with our team directly."
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors duration-200 hover:bg-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface-alt px-4 py-4">
            {messages.map((message, i) => (
              <div key={i} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    message.from === "user"
                      ? "rounded-br-md bg-blue text-white"
                      : "rounded-bl-md border border-border bg-white text-text-body"
                  }`}
                >
                  <Linkified text={message.text} />
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <p className="rounded-2xl rounded-bl-md border border-border bg-white px-4 py-2.5 text-sm text-text-muted">
                  Thinking…
                </p>
              </div>
            )}
          </div>

          {showQuickPrompts && (
            <div className="flex max-h-32 flex-wrap gap-2 overflow-y-auto border-t border-border bg-white px-4 py-3">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => send(prompt)}
                  disabled={loading}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-text-body transition-colors duration-200 hover:border-blue/40 hover:text-blue disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border bg-white px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about programs, pricing, policies…"
              disabled={loading}
              className="flex-1 rounded-full border border-border px-4 py-2 text-sm text-text-body outline-none focus:border-blue/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-blue text-white transition-colors duration-200 hover:bg-blue-hover disabled:opacity-40"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
