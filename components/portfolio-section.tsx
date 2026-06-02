"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Portfolio = {
  title: string;
  description: string;
  image: string;
  github?: string;
  site?: string;
};

const PORTFOLIOS: Portfolio[] = [
  {
    title: "Monetra",
    description:
      "Offline-first personal finance app with income/expense tracking, budget management, spending reports, and AI-powered financial insights via Groq. Built with React Native, Expo, and SQLite.",
    image: "/monetra.webp",
    github: "https://github.com/wididikyy/monetra",
  },
  {
    title: "IjenLabs",
    description:
      "Company portfolio and service website for a Banyuwangi-based software house offering web/mobile development, AI automation, and custom ERP systems. Built with Next.js and headless WordPress.",
    image: "/ijenlabs.webp",
    site: "https://ijenlabs.com/",
  },
  {
    title: "Banana88 Trans",
    description:
      "Transportation and tourism booking website for a Banyuwangi company operating since 2013, offering car rentals, tour packages, and travel services. Built with WordPress.",
    image: "/banana88trans.webp",
    site: "https://banana88trans.com/",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function PortfolioSection() {
  return (
    <section className="mb-20 md:mb-28">
      <h3 className="mb-8 text-4xl lg:text-6xl leading-tight">Portfolio Showcase</h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {PORTFOLIOS.map((item) => (
          <motion.div key={item.title} variants={cardVariants}>
            <Card className="flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200 p-0 h-full">
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="flex flex-col gap-3 p-5 flex-1">
                <h4 className="text-xl font-semibold leading-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
              </CardContent>
              {(item.github || item.site) && (
                <CardFooter className="flex gap-2 px-5 pb-5">
                  {item.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={item.github} target="_blank" rel="noopener noreferrer">GitHub</Link>
                    </Button>
                  )}
                  {item.site && (
                    <Button asChild size="sm">
                      <Link href={item.site} target="_blank" rel="noopener noreferrer">Visit Site</Link>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
