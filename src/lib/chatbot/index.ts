import { matchPredefined } from "./predefinedResponses";
import { askAI, AI_UNKNOWN_SENTINEL } from "./aiInteraction";
import { withWhatsAppFooter } from "./whatsapp";
import { isRelevantQuery } from "./relevance";
import { getKnowledgeBaseText } from "./knowledgeBase";

export type ChatSource = "predefined" | "ai" | "unavailable" | "error";
export type ChatResult = { reply: string; source: ChatSource };

const UNAVAILABLE_MESSAGE =
  "I don't have that information right now. I can only answer questions about Sraventix Technologies' programs, pricing, policies, and contact details.";

/**
 * Single entry point for the chatbot. Routing order (cheapest first):
 *   1. Predefined JS matcher (greetings, identity, FAQs) — zero API calls.
 *   2. Relevance gate — rejects off-topic questions before ever calling the LLM.
 *   3. Groq LLM, grounded strictly in the JSON knowledge base, with automatic key rotation.
 * Every branch returns through `withWhatsAppFooter` so every response ends with the
 * WhatsApp contact section, per spec.
 */
export async function handleChatMessage(rawMessage: string): Promise<ChatResult> {
  const message = rawMessage?.trim();
  if (!message) {
    return { reply: withWhatsAppFooter("Please type a question and I'll do my best to help!"), source: "predefined" };
  }

  const predefined = matchPredefined(message);
  if (predefined) {
    return { reply: withWhatsAppFooter(predefined), source: "predefined" };
  }

  if (!isRelevantQuery(message)) {
    return { reply: withWhatsAppFooter(UNAVAILABLE_MESSAGE), source: "unavailable" };
  }

  try {
    const aiReply = await askAI(message, getKnowledgeBaseText());
    if (aiReply.includes(AI_UNKNOWN_SENTINEL)) {
      return { reply: withWhatsAppFooter(UNAVAILABLE_MESSAGE), source: "unavailable" };
    }
    return { reply: withWhatsAppFooter(aiReply), source: "ai" };
  } catch {
    return { reply: withWhatsAppFooter(UNAVAILABLE_MESSAGE), source: "error" };
  }
}
