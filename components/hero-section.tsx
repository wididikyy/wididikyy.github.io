"use client";

import { motion } from "framer-motion";
import { ToggleMode } from "@/components/toggle-mode";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <motion.h1
        className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        Widi Diky.
      </motion.h1>
      <motion.div
        className="flex md:flex-col items-center justify-center flex-col-reverse md:items-end md:justify-end gap-4 mt-5"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
      >
        <ToggleMode />
        <h2 className="text-center md:text-left text-lg">
          Check out my{" "}
          <Link
            href="https://github.com/wididikyy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary hover:dark:text-chart-2 duration-200 transition-colors"
          >
            GitHub
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.linkedin.com/in/wididiky/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary hover:dark:text-chart-2 duration-200 transition-colors"
          >
            LinkedIn
          </Link>
          .
        </h2>
      </motion.div>
    </section>
  );
}
