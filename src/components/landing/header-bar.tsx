"use client";

import { cn } from "@/lib/utils";

const logoSrc =
  "https://www.figma.com/api/mcp/asset/ec354a9e-f10f-42d3-b685-7bc82eae20ab";

const navLinks = [
  { label: "Discovery", href: "#discovery" },
  { label: "Journey", href: "#journey" },
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
];

export default function HeaderBar() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4">
      {/* Brand */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded"
        aria-label="Back to top"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Unforecast Project logo"
          className="size-12 object-cover"
        />
        <span
          className="font-display font-bold text-[20px] leading-7 tracking-[0.5px] text-foreground whitespace-nowrap"
          aria-hidden="true"
        >
          Unforecast Project
        </span>
      </button>

      {/* Nav */}
      <nav className="flex items-center gap-8" aria-label="Main navigation">
        {navLinks.map(({ label, href }) => (
          <button
            key={label}
            onClick={() => scrollTo(href)}
            className={cn(
              "font-sans font-medium text-sm leading-5 tracking-[0.35px] text-secondary",
              "transition-colors duration-200 hover:text-foreground",
              "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded",
            )}
          >
            {label}
          </button>
        ))}

        {/* RSVP pill */}
        <button
          onClick={() => scrollTo("#rsvp")}
          className={cn(
            "h-10 px-6 rounded-pill border border-gold",
            "bg-gold-dim text-gold",
            "font-sans font-bold text-sm leading-5 tracking-[0.7px] uppercase",
            "transition-all duration-200 hover:bg-gold hover:text-primary-foreground",
            "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
          )}
        >
          RSVP
        </button>
      </nav>
    </header>
  );
}
