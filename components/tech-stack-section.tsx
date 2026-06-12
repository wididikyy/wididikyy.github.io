"use client";

import { useEffect, useRef } from "react";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss,
  siFlutter,
  siLaravel,
  siNodedotjs,
  siWordpress,
  siGit,
} from "simple-icons";

function iconHtml(path: string, label: string) {
  return `<span style="display:inline-flex;align-items:center;gap:5px;">
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="flex-shrink:0;"><path d="${path}"/></svg>
    ${label}
  </span>`;
}

const ALL_TECHS = [
  iconHtml(siReact.path, "React.js"),
  iconHtml(siNextdotjs.path, "Next.js"),
  iconHtml(siTypescript.path, "TypeScript"),
  iconHtml(siJavascript.path, "JavaScript"),
  iconHtml(siHtml5.path, "HTML5"),
  iconHtml(siCss.path, "CSS3"),
  iconHtml(siFlutter.path, "Flutter"),
  iconHtml(siReact.path, "React Native"),
  iconHtml(siLaravel.path, "Laravel"),
  iconHtml(siNodedotjs.path, "Node.js"),
  iconHtml(siWordpress.path, "WordPress"),
  iconHtml(siGit.path, "Git"),
  `<span style="display:inline-flex;align-items:center;gap:5px;">
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="flex-shrink:0;"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2zm0 3a1 1 0 0 0-1 1v5.586L7.707 8.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L13 11.586V6a1 1 0 0 0-1-1z"/></svg>
    REST API
  </span>`,
];

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: { destroy?: () => void } | null = null;
    let cancelled = false;

    import("TagCloud").then(({ default: TagCloud }) => {
      if (cancelled || !containerRef.current) return;
      instance = TagCloud(containerRef.current, ALL_TECHS, {
        radius: 160,
        maxSpeed: "slow",
        initSpeed: "slow",
        keep: true,
        useHTML: true,
        direction: 135,
      } as never);
    });

    return () => {
      cancelled = true;
      instance?.destroy?.();
    };
  }, []);

  return (
    <section className="mb-16 md:mb-20">
      <div className="md:grid md:grid-cols-2 md:gap-x-16 items-center p-8 md:p-12">
        <h3 className="mb-8 md:mb-0 text-4xl lg:text-6xl leading-tight">
          Tech Stack
        </h3>
        <div
          ref={containerRef}
          className="mx-auto"
          style={{ width: 360, height: 360 }}
        />
      </div>
    </section>
  );
}
