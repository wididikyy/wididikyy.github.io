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
    type: "education",
    status: "completed",
    title: "S1 Informatics Engineering",
    organization: "STIKOM PGRI Banyuwangi · Banyuwangi, East Java",
    period: "Graduated Sep 2024",
    description:
      "Bachelor's degree in Informatics Engineering with a focus on software development and mobile applications.",
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
    title: "WordPress Developer",
    organization: "Jupitr Agency",
    period: "Aug 2025 – Present",
    description:
      "Building and maintaining WordPress-based web solutions for clients at Jupitr Agency.",
  },
];

const CAREER_ICON = {
  work: RiBriefcase2Line,
  education: RiGraduationCapLine,
  achievement: RiTrophyLine,
} as const;

export function CareerSection() {
  return (
    <section className="mb-20 md:mb-28">
      <div className="md:grid md:grid-cols-2 md:gap-x-16 items-start">
        <h3 className="mb-8 md:mb-0 text-4xl lg:text-6xl leading-tight">Career Journey</h3>
        <TimelineSteps>
          {CAREER.map((entry, index) => {
            const Icon = CAREER_ICON[entry.type];
            const isLast = index === CAREER.length - 1;
            return (
              <TimelineStepsItem key={entry.title} status={entry.status}>
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
                  <TimelineStepsDescription>{entry.description}</TimelineStepsDescription>
                </TimelineStepsContent>
              </TimelineStepsItem>
            );
          })}
        </TimelineSteps>
      </div>
    </section>
  );
}
