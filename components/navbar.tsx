"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { ToggleMode } from "@/components/toggle-mode";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#portfolio", label: "Portfolio" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-12 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity duration-200"
        >
          Widi Diky.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <ToggleMode />
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ToggleMode />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="size-9 flex items-center justify-center rounded-full border border-foreground hover:bg-accent transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <RiCloseLine className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <RiMenuLine className="h-[1.2rem] w-[1.2rem]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-12 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 border-b border-border/30 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
