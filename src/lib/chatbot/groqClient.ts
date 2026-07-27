/** Thin, dependency-free wrapper around Groq's OpenAI-compatible chat completions endpoint. */

const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.1-8b-instant";

export type GroqMessage = { role: "system" | "user" | "assistant"; content: string };

export class GroqRateLimitError extends Error {
  retryAfterSeconds: number;
  constructor(retryAfterSeconds: number) {
    super("Groq API key hit its rate limit.");
    this.name = "GroqRateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

function parseRetryAfter(res: Response): number {
  const header = res.headers.get("retry-after");
  const seconds = header ? Number(header) : NaN;
  return Number.isFinite(seconds) && seconds > 0 ? seconds : 20;
}

/** Sends a chat completion request with a single Groq API key. Throws GroqRateLimitError on 429. */
export async function callGroq(apiKey: string, messages: GroqMessage[]): Promise<string> {
  const res = await fetch(GROQ_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.2,
      max_tokens: 400,
    }),
  });

  if (res.status === 429) {
    throw new GroqRateLimitError(parseRetryAfter(res));
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Groq API error (${res.status}): ${text.slice(0, 200)}`);
  }

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== "string") {
    throw new Error("Groq API returned an unexpected response shape.");
  }
  return content.trim();
}
