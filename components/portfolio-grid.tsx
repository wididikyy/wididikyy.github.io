"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type Portfolio = {
  title: string;
  description: string;
  image: string;
  github?: string;
  site?: string;
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function PortfolioGrid({ items }: { items: Portfolio[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map((item) => (
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
  );
}
