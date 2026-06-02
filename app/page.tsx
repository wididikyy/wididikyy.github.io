import { AboutSection } from "@/components/about-section";
import { CareerSection } from "@/components/career-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { SectionAnimate } from "@/components/section-animate";

export default function Home() {
  return (
    <main className="container mx-auto px-12 bg-background dark:bg-background">
      <SectionAnimate>
        <HeroSection />
      </SectionAnimate>
      <SectionAnimate delay={0.1}>
        <AboutSection />
      </SectionAnimate>
      <SectionAnimate delay={0.1}>
        <CareerSection />
      </SectionAnimate>
      <SectionAnimate delay={0.1}>
        <PortfolioSection />
      </SectionAnimate>
    </main>
  );
}
