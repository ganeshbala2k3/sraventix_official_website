/**
 * Manages rotation across the Groq API keys configured in the environment.
 *
 * Strategy: round-robin with per-key cooldowns. Each call to `getNextAvailableKey`
 * advances the rotation pointer, skipping any key still cooling down from a prior
 * rate-limit response. A key automatically becomes eligible again once its cooldown
 * expires — no manual reset required.
 */

type KeyState = {
  key: string;
  cooldownUntil: number; // epoch ms; 0 means available now
};

const DEFAULT_COOLDOWN_SECONDS = 20;

function loadKeys(): KeyState[] {
  return [process.env.GROQ_API_KEY_1, process.env.GROQ_API_KEY_2, process.env.GROQ_API_KEY_3]
    .filter((key): key is string => Boolean(key && key.trim()))
    .map((key) => ({ key: key.trim(), cooldownUntil: 0 }));
}

const keys: KeyState[] = loadKeys();
let pointer = 0;

export class NoAvailableKeyError extends Error {
  constructor() {
    super("All configured Groq API keys are currently rate-limited.");
    this.name = "NoAvailableKeyError";
  }
}

export function getKeyCount(): number {
  return keys.length;
}

/** Returns the next available (not cooling down) key and advances the rotation pointer. */
export function getNextAvailableKey(): string {
  if (keys.length === 0) {
    throw new Error(
      "No Groq API keys configured. Set GROQ_API_KEY_1, GROQ_API_KEY_2, and/or GROQ_API_KEY_3 in your environment.",
    );
  }

  const now = Date.now();
  for (let i = 0; i < keys.length; i++) {
    const idx = (pointer + i) % keys.length;
    if (keys[idx].cooldownUntil <= now) {
      pointer = (idx + 1) % keys.length;
      return keys[idx].key;
    }
  }

  throw new NoAvailableKeyError();
}

/** Marks a key as rate-limited so it's skipped until the cooldown passes, then rotates on seamlessly. */
export function markKeyRateLimited(key: string, retryAfterSeconds = DEFAULT_COOLDOWN_SECONDS): void {
  const entry = keys.find((k) => k.key === key);
  if (entry) {
    const seconds = Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0 ? retryAfterSeconds : DEFAULT_COOLDOWN_SECONDS;
    entry.cooldownUntil = Date.now() + seconds * 1000;
  }
}
