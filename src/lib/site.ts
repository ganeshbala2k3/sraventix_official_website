export const SITE_NAME = "Sraventix Technologies LLP";
export const SITE_URL = "https://sraventix.in";
export const GA_MEASUREMENT_ID = "G-DFXE3DLY1N";

export const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/programs", label: "Programs" },
  { path: "/who-we-serve", label: "Who We Serve" },
  { path: "/contact", label: "Contact" },
] as const;

export const LEGAL_ROUTES = [
  { path: "/terms", label: "Terms & Conditions" },
  { path: "/refund-policy", label: "Refund Policy" },
  { path: "/placement-policy", label: "Placement & Internship Policy" },
] as const;

export const CONTACT = {
  email: "info@sraventix.in",
  location: "Ongole, Andhra Pradesh, India",
  phoneDisplay: "+91 8073 873 540",
  phoneE164: "+918073873540",
  whatsappNumber: "918073873540",
} as const;

/** Build a WhatsApp click-to-chat link with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
