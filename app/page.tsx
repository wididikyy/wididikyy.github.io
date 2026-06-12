import { AboutSection } from "@/components/about-section";
import { CareerSection } from "@/components/career-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { SectionAnimate } from "@/components/section-animate";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <main className="container mx-auto px-12 bg-background dark:bg-background pt-16">
      <SectionAnimate>
        <HeroSection />
      </SectionAnimate>
      <div id="about" className="scroll-mt-20">
        <SectionAnimate delay={0.1}>
          <AboutSection />
        </SectionAnimate>
      </div>
      <div id="career" className="scroll-mt-20">
        <SectionAnimate delay={0.1}>
          <CareerSection />
        </SectionAnimate>
      </div>
      <div id="tech-stack" className="scroll-mt-20">
        <SectionAnimate delay={0.1}>
          <TechStackSection />
        </SectionAnimate>
      </div>
      <div id="portfolio" className="scroll-mt-20">
        <SectionAnimate delay={0.1}>
          <PortfolioSection />
        </SectionAnimate>
      </div>
    </main>
  );
}
