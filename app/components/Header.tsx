"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Certifications", href: "/certifications" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-brutalist">
        <nav className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Dixanta<span className="text-muted">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="uppercase-spaced hover:text-muted transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:dixanta@example.com"
              className="px-6 py-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-0.5 bg-white transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border mt-4 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="uppercase-spaced hover:text-muted transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:dixanta@example.com"
                className="px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all text-center uppercase-spaced"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
