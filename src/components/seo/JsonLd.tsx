import { SITE_NAME, SITE_URL, CONTACT } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "Sraventix",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/sraventix-logo.png`,
  email: CONTACT.email,
  telephone: CONTACT.phoneE164,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.phoneE164,
    contactType: "customer service",
    availableLanguage: ["English", "Telugu"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ongole",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  description:
    "A technology & workforce development company bridging education, technology, and industry through lifelong, outcome-driven, framework-based learning.",
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
