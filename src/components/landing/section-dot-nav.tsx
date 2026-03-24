"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SECTIONS = [
  { id: "hero", labelKey: "navHero" },
  { id: "project-phases", labelKey: "navProjectPhases" },
  { id: "post-event", labelKey: "navPostEvent" },
  { id: "discovery", labelKey: "navDiscovery" },
  { id: "journey", labelKey: "navJourney" },
] as const;

type LabelKey = (typeof SECTIONS)[number]["labelKey"];

export default function SectionDotNav() {
  const t = useTranslations("header");
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          // Trigger when section crosses the middle band of the viewport
          rootMargin: "-35% 0px -35% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-1/2 right-3 z-40 flex -translate-y-1/2 flex-col gap-3 md:right-5"
      aria-label={t("navLabel")}
    >
      {SECTIONS.map(({ id, labelKey }) => {
        const isActive = activeId === id;
        return (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => scrollTo(id)}
                aria-label={t(labelKey as LabelKey)}
                className={cn(
                  "flex h-2.5 w-2.5 items-center justify-center rounded-full transition-all duration-300",
                  "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
                )}
              >
                <div
                  className={cn(
                    "rounded-full",
                    isActive
                      ? "bg-gold size-2.5 shadow-[0_0_8px_2px_rgba(227,170,49,0.45)]"
                      : "bg-foreground/20 hover:bg-foreground/50 size-2",
                  )}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              {t(labelKey as LabelKey)}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  );
}
