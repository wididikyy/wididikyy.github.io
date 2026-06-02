import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CareerSection } from "@/components/career-section";
import { PortfolioSection } from "@/components/portfolio-section";

export default function Home() {
  return (
    <main className="container mx-auto px-12 bg-background dark:bg-background">
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <PortfolioSection />
    </main>
  );
}
