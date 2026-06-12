"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  return (
    <section className="relative flex items-end mt-16 mb-16 md:mb-12 rounded-lg overflow-hidden min-h-[50vh] md:min-h-[60vh]">
      <Image
        src="/bg.webp"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

      <div className="relative z-10 p-8 md:p-12">
        <motion.h1
          className="text-4xl md:text-6xl tracking-tighter leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          Full-Stack & Mobile Developer.
        </motion.h1>
        <motion.h2
          className="mt-3 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          Check out my{" "}
          <Link
            href="https://github.com/wididikyy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground hover:dark:text-chart-2 duration-200 transition-colors"
          >
            GitHub
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.linkedin.com/in/wididiky/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground hover:dark:text-chart-2 duration-200 transition-colors"
          >
            LinkedIn
          </Link>
          .
        </motion.h2>
      </div>
    </section>
  );
}
