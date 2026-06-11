import Link from "next/link";
import { RiGithubLine, RiLinkedinLine } from "@remixicon/react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Widi Diky. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/wididikyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <RiGithubLine className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/wididiky/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <RiLinkedinLine className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
