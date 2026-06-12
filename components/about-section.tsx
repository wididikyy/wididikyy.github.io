"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;
const inView = { once: true, amount: 0.15 };

export function AboutSection() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="md:grid md:grid-cols-2 md:gap-x-16 p-8 md:p-12 items-start">
        <motion.h3
          className="mb-6 md:mb-0 text-4xl lg:text-6xl leading-tight"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ duration: 0.5, ease }}
        >
          About Me
        </motion.h3>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.webp"
              alt="Widi Diky"
              width={48}
              height={48}
              className="shrink-0 object-cover rounded-full bg-accent"
            />
            <span className="font-semibold text-lg">Widi Diky</span>
          </div>
          <p className="text-lg leading-relaxed">
            Full-Stack and Mobile Developer with 3+ years of experience across
            frontend, mobile, and backend development. Built responsive web apps
            with React.js and Next.js, cross-platform mobile apps with Flutter,
            and backend systems with Laravel. Currently at Jupitr Agency as a
            Backend WordPress Developer — building custom plugins, ACF post
            types, and WPCode solutions for clients. National 1st-place winner
            in Mobile Programming at the 2023 Indoneris IT Competition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
