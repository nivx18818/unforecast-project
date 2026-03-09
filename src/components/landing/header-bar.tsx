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
    <header className="fixed top-0 right-0 left-0 z-50 px-12 py-3">
      {/* Blur layer */}
      <div className="from-gold/30 absolute inset-0 -z-10 bg-linear-to-b to-transparent mask-[linear-gradient(to_bottom,black,transparent)] backdrop-blur-xs [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

      <div className="m-auto flex max-w-7xl items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="focus-visible:outline-ring flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Back to top"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="Unforecast Project logo"
            className="size-12 object-cover"
          />
          <span
            className="font-display text-foreground text-[20px] leading-7 font-bold tracking-[0.5px] whitespace-nowrap"
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
                "text-secondary font-sans text-sm leading-5 font-medium tracking-[0.35px]",
                "hover:text-foreground transition-colors duration-200",
                "focus-visible:outline-ring rounded focus-visible:outline-2 focus-visible:outline-offset-2",
              )}
            >
              {label}
            </button>
          ))}

          {/* RSVP pill */}
          <button
            onClick={() => scrollTo("#rsvp")}
            className={cn(
              "rounded-pill border-gold h-10 border px-6",
              "bg-gold-dim text-gold",
              "font-sans text-sm leading-5 font-bold tracking-[0.7px] uppercase",
              "hover:bg-gold hover:text-primary-foreground transition-all duration-200",
              "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
          >
            RSVP
          </button>
        </nav>
      </div>
    </header>
  );
}
