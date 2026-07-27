import Link from "next/link";
import Logo from "./Logo";
import { CONTACT, waLink } from "@/lib/site";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/placement-policy", label: "Placement & Internship Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1320px] px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1.2fr_1fr]">
          <div>
            <Logo className="h-11" />
            <p className="mt-4 max-w-sm text-sm leading-[1.7] text-text-secondary">
              A technology &amp; workforce development company empowering
              students, professionals, and organizations through
              industry-driven education.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading">Legal</h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="transition-colors duration-200 hover:text-blue"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hi! I'd like to know more about Sraventix programs.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-blue"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors duration-200 hover:text-blue"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
              <li>Sraventix Technologies</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-text-muted">
            &copy; {year} Sraventix Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
