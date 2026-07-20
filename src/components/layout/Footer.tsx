import Link from "next/link";
import Logo from "./Logo";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1320px] px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
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
            <h3 className="text-sm font-semibold text-text-heading">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href="mailto:info@sraventix.in"
                  className="transition-colors duration-200 hover:text-blue"
                >
                  info@sraventix.in
                </a>
              </li>
              <li>Ongole, Andhra Pradesh, India</li>
              <li>Sraventix Technologies LLP</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-text-muted">
            &copy; {year} Sraventix Technologies LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
