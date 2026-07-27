import { getKnowledgeBase } from "./knowledgeBase";
import { normalize, tokenize } from "./utils";

type Faq = { question: string; answer: string; keywords?: string[] };
type ProgramTrack = { name: string; courses: { title: string }[] };

const DYNAMIC_PROGRAM_LIST_SENTINEL = "__DYNAMIC_PROGRAM_LIST__";
const MIN_FAQ_SCORE = 1;

const GREETING_PATTERN = /^(hi|hello|hey|good morning|good afternoon|good evening)\b/;
const THANKS_PATTERN = /\b(thanks|thank you|thx|appreciate it)\b/;
const IDENTITY_PATTERN = /\b(who are you|what are you|are you a bot|are you human)\b/;

/** Builds the "what courses do you offer" answer directly from the knowledge base, so it can never go stale. */
function buildProgramListAnswer(): string {
  const kb = getKnowledgeBase();
  const programs = kb.programs as { tracks?: ProgramTrack[] } | undefined;
  const tracks = programs?.tracks;
  if (!tracks?.length) {
    return "We offer a range of technical and management programs — message us on WhatsApp for the full list.";
  }
  const lines = tracks.map((track) => `${track.name}: ${track.courses.map((c) => c.title).join(", ")}`);
  return `We currently offer:\n${lines.join("\n")}`;
}

function scoreMatch(inputTokens: string[], faq: Faq): number {
  // Match only against the deliberately curated `keywords`, not incidental words from the
  // question's own phrasing (e.g. "course" in "How do I enroll in a course?") — those are too
  // generic and would cause unrelated questions to be hijacked by the wrong FAQ.
  const targetTokens = new Set((faq.keywords ?? []).flatMap(tokenize));
  let overlap = 0;
  for (const token of inputTokens) {
    if (targetTokens.has(token)) overlap++;
  }
  return overlap;
}

/**
 * Attempts to answer instantly via pure JS logic — greetings, identity questions, and
 * FAQ keyword matches. Returns null if nothing matches confidently, meaning the caller
 * should fall through to the AI.
 */
export function matchPredefined(rawInput: string): string | null {
  const input = normalize(rawInput);
  if (!input) return null;

  if (GREETING_PATTERN.test(input)) {
    return "Hi there! 👋 I'm the Sraventix Technologies assistant. Ask me about our programs, pricing, formats, placement support, or policies.";
  }
  if (IDENTITY_PATTERN.test(input)) {
    return "I'm the Sraventix Technologies AI assistant — here to answer questions about our programs and company using our official knowledge base.";
  }
  if (THANKS_PATTERN.test(input)) {
    return "You're welcome! Let me know if there's anything else you'd like to know about Sraventix.";
  }

  const kb = getKnowledgeBase();
  const faqs = (kb.faqs as Faq[] | undefined) ?? [];
  const inputTokens = tokenize(input);
  if (inputTokens.length === 0) return null;

  let best: { faq: Faq; score: number } | null = null;
  for (const faq of faqs) {
    const score = scoreMatch(inputTokens, faq);
    if (score > 0 && (!best || score > best.score)) {
      best = { faq, score };
    }
  }

  if (best && best.score >= MIN_FAQ_SCORE) {
    return best.faq.answer === DYNAMIC_PROGRAM_LIST_SENTINEL ? buildProgramListAnswer() : best.faq.answer;
  }
  return null;
}
