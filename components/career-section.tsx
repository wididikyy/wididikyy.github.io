"use client";

import { motion } from "framer-motion";
import {
  TimelineSteps,
  TimelineStepsConnector,
  TimelineStepsContent,
  TimelineStepsDescription,
  TimelineStepsHeader,
  TimelineStepsIcon,
  TimelineStepsItem,
  TimelineStepsTime,
  TimelineStepsTitle,
} from "@/components/ui/timeline-steps";
import {
  RiBriefcase2Line,
  RiGraduationCapLine,
  RiTrophyLine,
} from "@remixicon/react";

type CareerEntry = {
  type: "work" | "education" | "achievement";
  status: "completed" | "current" | "upcoming";
  title: string;
  organization: string;
  period: string;
  description: string;
};

const CAREER: CareerEntry[] = [
  {
    type: "work",
    status: "completed",
    title: "Frontend Developer",
    organization: "CV. Blambangan Dev · Banyuwangi, East Java",
    period: "Feb 2022 – Jul 2023",
    description:
      "Designed and developed responsive user interfaces, implemented new features that improved user experience, and enhanced site performance through code fixes and optimization.",
  },
  {
    type: "work",
    status: "completed",
    title: "Mobile Flutter Developer",
    organization: "CV. Blambangan Dev · Banyuwangi, East Java",
    period: "Feb 2022 – Jul 2023",
    description:
      "Designed and developed innovative responsive mobile applications, implemented new features that enhanced functionality and performance, and collaborated with the design team to create intuitive user interfaces.",
  },
  {
    type: "achievement",
    status: "completed",
    title: "1st Place – Indoneris National IT Competition",
    organization: "Mobile Programming · National Competition",
    period: "2023",
    description:
      "Achieved first place in the Mobile Programming category at the Indoneris National IT Competition.",
  },
  {
    type: "work",
    status: "completed",
    title: "Fullstack Developer",
    organization: "PT. Cahaya Solusindo · Banyuwangi, East Java",
    period: "Oct 2024 – Jun 2025",
    description:
      "Developed IPTV applications for Android/Android TV, IPTV Admin Website, Company Profile Website, HRMS system, and Inventory Management System using Laravel, React, Next.js, and Flutter.",
  },
  {
    type: "work",
    status: "current",
    title: "Backend WordPress Developer",
    organization: "Jupitr Agency · Bali",
    period: "Aug 2025 – Present",
    description:
      "Building custom WordPress solutions including ACF post types, custom code via WPCode, and developing custom plugins tailored to client needs.",
  },
];

const CAREER_ICON = {
  work: RiBriefcase2Line,
  education: RiGraduationCapLine,
  achievement: RiTrophyLine,
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function CareerSection() {
  return (
    <section className="mb-20 md:mb-28">
      <div className="md:grid md:grid-cols-2 md:gap-x-16 items-start">
        <h3 className="mb-8 md:mb-0 text-4xl lg:text-6xl leading-tight">
          Career Journey
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <TimelineSteps>
            {CAREER.map((entry, index) => {
              const Icon = CAREER_ICON[entry.type];
              const isLast = index === CAREER.length - 1;
              return (
                <motion.div
                  key={entry.title}
                  variants={itemVariants}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <TimelineStepsItem status={entry.status}>
                    {!isLast && <TimelineStepsConnector status={entry.status} />}
                    <TimelineStepsHeader>
                      <TimelineStepsIcon
                        size="default"
                        variant={entry.status === "current" ? "primary" : "outline"}
                      >
                        <Icon />
                      </TimelineStepsIcon>
                      <TimelineStepsTitle>{entry.title}</TimelineStepsTitle>
                    </TimelineStepsHeader>
                    <TimelineStepsContent>
                      <TimelineStepsTime>{entry.period}</TimelineStepsTime>
                      <TimelineStepsDescription className="font-medium text-foreground/70">
                        {entry.organization}
                      </TimelineStepsDescription>
                      <TimelineStepsDescription>
                        {entry.description}
                      </TimelineStepsDescription>
                    </TimelineStepsContent>
                  </TimelineStepsItem>
                </motion.div>
              );
            })}
          </TimelineSteps>
        </motion.div>
      </div>
    </section>
  );
}
