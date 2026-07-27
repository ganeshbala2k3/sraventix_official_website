import { tokenize } from "./utils";
import { getKnowledgeKeywords } from "./knowledgeBase";

/**
 * Common company-related words that should count as relevant even if a specific
 * synonym doesn't appear verbatim in the knowledge base text (e.g. "enrol" vs "enroll").
 */
const GENERIC_COMPANY_WORDS = new Set([
  "course", "courses", "program", "programs", "fee", "fees", "price", "pricing", "cost",
  "certificate", "certification", "placement", "refund", "enroll", "enrol", "register",
  "batch", "schedule", "duration", "contact", "location", "address", "whatsapp", "phone",
  "email", "live", "selfpaced", "sraventix", "company", "career", "job", "internship",
]);

/** Heuristic, JS-only relevance check: does the query share vocabulary with the knowledge base? */
export function isRelevantQuery(input: string): boolean {
  const tokens = tokenize(input);
  if (tokens.length === 0) return false;

  const kbWords = getKnowledgeKeywords();
  return tokens.some((token) => kbWords.has(token) || GENERIC_COMPANY_WORDS.has(token));
}
