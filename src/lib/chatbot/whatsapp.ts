import { CONTACT, waLink } from "@/lib/site";

const DEFAULT_MESSAGE = "Hi! I have a question for Sraventix Technologies.";

/** The WhatsApp contact block appended to the end of every chatbot response. */
export function getWhatsAppFooter(): string {
  return [
    "",
    "---",
    `📱 Need more help? Chat with us on WhatsApp: ${waLink(DEFAULT_MESSAGE)}`,
    `📞 Or call: ${CONTACT.phoneDisplay}`,
  ].join("\n");
}

export function withWhatsAppFooter(message: string): string {
  return `${message}${getWhatsAppFooter()}`;
}
