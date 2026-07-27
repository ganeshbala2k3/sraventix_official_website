/** Shared text-processing helpers used by the predefined-response matcher and the relevance gate. */

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "do", "does", "did", "i", "you", "he", "she", "it", "we", "they",
  "me", "my", "your", "his", "her", "its", "our", "their",
  "and", "or", "but", "if", "then", "so", "to", "of", "in", "on", "at",
  "for", "with", "about", "as", "this", "that", "these", "those",
  "what", "which", "who", "whom", "when", "where", "why", "how",
  "can", "could", "should", "would", "will", "shall", "may", "might", "must",
  "please", "tell", "know", "want", "need", "like", "just", "get", "got", "have", "has",
]);

/** Lowercases, strips punctuation, and collapses whitespace. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Splits into meaningful lowercase word tokens, dropping stopwords and very short words. */
export function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length >= 3 && !STOPWORDS.has(word));
}
