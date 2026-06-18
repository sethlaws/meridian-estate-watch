"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Meridian Estate Watch"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-navy-200 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+17048791198"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone size={15} />
              1-704-879-1198
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm px-4 py-2 rounded transition-colors"
            >
              Get a Free Consultation
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded hover:bg-navy-800 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy-100 hover:text-white py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center bg-gold-500 text-navy-900 font-semibold text-sm px-4 py-2 rounded mt-2"
            >
              Get a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
