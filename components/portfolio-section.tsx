import { Portfolio, PortfolioGrid } from "@/components/portfolio-grid";

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

export function PortfolioSection() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="p-8 md:p-12">
        <h3 className="mb-8 text-4xl lg:text-6xl leading-tight">Portfolio Showcase</h3>
        <PortfolioGrid items={PORTFOLIOS} />
      </div>
    </section>
  );
}
