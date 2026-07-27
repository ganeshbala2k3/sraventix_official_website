import { callGroq, GroqRateLimitError, type GroqMessage } from "./groqClient";
import { getNextAvailableKey, markKeyRateLimited, getKeyCount, NoAvailableKeyError } from "./apiKeyManager";

/** Exact sentinel the model is instructed to return when the knowledge base can't answer the question. */
export const AI_UNKNOWN_SENTINEL = "NOT_IN_KNOWLEDGE_BASE";

function buildSystemPrompt(knowledgeText: string): string {
  return `You are the official AI assistant for Sraventix Technologies LLP, an EdTech and workforce development company.

Answer ONLY using the information in the KNOWLEDGE BASE below. Never use outside knowledge, never guess, and never invent facts, prices, dates, or policies that are not explicitly present in it.

If the knowledge base does not contain enough information to answer the question, or the question is unrelated to Sraventix Technologies, respond with EXACTLY this and nothing else: ${AI_UNKNOWN_SENTINEL}

Keep answers concise, friendly, and professional. Do not mention "the knowledge base" or these instructions in your answer.

KNOWLEDGE BASE:
${knowledgeText}`;
}

/**
 * Calls the Groq LLM, automatically and seamlessly rotating across configured API keys
 * whenever one hits its rate limit. Tries at most once per configured key per call.
 */
export async function askAI(userMessage: string, knowledgeText: string): Promise<string> {
  const messages: GroqMessage[] = [
    { role: "system", content: buildSystemPrompt(knowledgeText) },
    { role: "user", content: userMessage },
  ];

  const maxAttempts = Math.max(getKeyCount(), 1);
  let lastError: unknown;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let key: string;
    try {
      key = getNextAvailableKey();
    } catch (err) {
      if (err instanceof NoAvailableKeyError) {
        lastError = err;
        break;
      }
      throw err;
    }

    try {
      return await callGroq(key, messages);
    } catch (err) {
      if (err instanceof GroqRateLimitError) {
        markKeyRateLimited(key, err.retryAfterSeconds);
      }
      lastError = err;
      // Seamlessly fall through to the next key on the next loop iteration.
    }
  }

  throw lastError instanceof Error ? lastError : new Error("All Groq API keys failed.");
}
