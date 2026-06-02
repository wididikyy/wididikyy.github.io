import { ToggleMode } from "@/components/toggle-mode";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Widi Diky.</h1>
      <div className="flex md:flex-col items-center justify-center flex-col-reverse md:items-end md:justify-end gap-4 mt-5">
        <ToggleMode />
        <h2 className="text-center md:text-left text-lg">
          Check out my{" "}
          <Link href="https://github.com/wididikyy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary hover:dark:text-chart-2 duration-200 transition-colors">
            GitHub
          </Link>{" "}
          and{" "}
          <Link href="https://www.linkedin.com/in/wididiky/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary hover:dark:text-chart-2 duration-200 transition-colors">
            LinkedIn
          </Link>
          .
        </h2>
      </div>
    </section>
  );
}
