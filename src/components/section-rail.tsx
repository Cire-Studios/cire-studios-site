"use client";

import { useEffect, useState } from "react";
import { portfolioCategories } from "@/content/portfolio";

const sections = [
  { id: "intro", label: "Studio", short: "01" },
  ...portfolioCategories.map((category, index) => ({
    id: category.anchor,
    label:
      category.id === "board-games"
        ? "Board"
        : category.id === "games"
          ? "Games"
          : category.id === "web"
            ? "Web"
            : category.id === "mobile"
              ? "Mobile"
              : "Books",
    short: String(index + 2).padStart(2, "0"),
  })),
  {
    id: "contact",
    label: "Contact",
    short: String(portfolioCategories.length + 2).padStart(2, "0"),
  },
];

function getActiveSectionId() {
  const doc = document.documentElement;
  const maxScroll = doc.scrollHeight - window.innerHeight;
  const distanceFromBottom = maxScroll - window.scrollY;

  // Short final section (Contact) often never reaches the viewport marker.
  // When near the page bottom, force the last section active.
  if (maxScroll > 0 && distanceFromBottom <= window.innerHeight * 0.35) {
    return sections[sections.length - 1].id;
  }

  // Active = last section whose top has crossed ~1/3 down the viewport.
  const marker = window.innerHeight * 0.33;
  let current = sections[0].id;

  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= marker) {
      current = section.id;
    }
  }

  return current;
}

export default function SectionRail() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActiveId(getActiveSectionId());
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active =
    sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <>
      {/* Mobile / tablet: compact top status */}
      <div className="pointer-events-none fixed top-[3.65rem] inset-x-0 z-40 lg:hidden">
        <div className="border-b border-zinc-900/90 bg-[#080808]/85 backdrop-blur-md">
          <div className="container mx-auto flex items-center justify-between px-6 py-2">
            <p className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.28em] uppercase text-zinc-500">
              {active.short}
            </p>
            <p className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.22em] uppercase text-white">
              {active.label}
            </p>
          </div>
          <div className="h-px w-full bg-zinc-900">
            <div
              className="h-px bg-white transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Desktop: bold side rail */}
      <nav
        aria-label="Page sections"
        className="pointer-events-none fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 lg:block xl:right-8"
      >
        <div className="pointer-events-auto relative flex flex-col items-end gap-0">
          <div
            className="absolute top-0 bottom-0 right-0 w-px bg-zinc-800"
            aria-hidden
          >
            <div
              className="absolute top-0 right-0 w-px origin-top bg-white transition-transform duration-150 ease-out"
              style={{
                height: "100%",
                transform: `scaleY(${progress})`,
              }}
            />
          </div>

          <ul className="relative flex flex-col gap-3 py-1 pr-4">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`group flex items-center justify-end gap-3 transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-zinc-600 hover:text-zinc-300"
                    }`}
                  >
                    <span
                      className={`font-[family-name:var(--font-display)] text-[10px] tracking-[0.28em] uppercase transition-opacity ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-70"
                      }`}
                    >
                      {section.label}
                    </span>
                    <span
                      className={`font-[family-name:var(--font-display)] text-[10px] tabular-nums tracking-[0.2em] ${
                        isActive
                          ? "text-white"
                          : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      {section.short}
                    </span>
                    <span
                      className={`block h-px transition-all duration-300 ${
                        isActive
                          ? "w-6 bg-white"
                          : "w-2 bg-zinc-700 group-hover:w-4 group-hover:bg-zinc-500"
                      }`}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
