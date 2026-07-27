import fs from "fs";
import path from "path";

const KB_DIR = path.join(process.cwd(), "src/data/knowledge-base");

export type KnowledgeBase = Record<string, unknown>;

let kbCache: KnowledgeBase | null = null;
let textCache: string | null = null;
let keywordCache: Set<string> | null = null;

/**
 * Reads every `*.json` file in src/data/knowledge-base and combines them into one
 * object keyed by filename — drop a new file in to add a new knowledge category,
 * no code changes needed.
 */
export function getKnowledgeBase(): KnowledgeBase {
  if (kbCache) return kbCache;

  const files = fs.readdirSync(KB_DIR).filter((file) => file.endsWith(".json"));
  const combined: KnowledgeBase = {};
  for (const file of files) {
    const key = file.replace(/\.json$/, "");
    const raw = fs.readFileSync(path.join(KB_DIR, file), "utf-8");
    combined[key] = JSON.parse(raw);
  }

  kbCache = combined;
  return combined;
}

/** The combined knowledge base as pretty JSON text, suitable for the LLM's system prompt. */
export function getKnowledgeBaseText(): string {
  if (textCache) return textCache;
  textCache = JSON.stringify(getKnowledgeBase(), null, 2);
  return textCache;
}

/** Every distinct word (3+ letters) appearing anywhere in the knowledge base — used by the relevance gate. */
export function getKnowledgeKeywords(): Set<string> {
  if (keywordCache) return keywordCache;
  const matches = getKnowledgeBaseText().toLowerCase().match(/[a-z][a-z'-]{2,}/g) ?? [];
  keywordCache = new Set(matches);
  return keywordCache;
}
