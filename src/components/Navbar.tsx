"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#framework", label: "Framework" },
  { href: "#programs", label: "Programs" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-border bg-white">
      <nav className="mx-auto flex h-full max-w-[1320px] items-center justify-between px-8">
        <a href="#top" onClick={() => setOpen(false)} className="shrink-0">
          <Logo className="h-9 sm:h-10" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-body transition-colors duration-200 hover:text-blue"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="#contact" variant="primary" className="h-11 px-6">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-button text-navy md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-8 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-text-body"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="#contact"
              variant="primary"
              onClick={() => setOpen(false)}
              className="justify-center"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
