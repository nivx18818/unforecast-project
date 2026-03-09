"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { HugeiconsIcon } from "@hugeicons/react";
import { Globe02Icon } from "@hugeicons/core-free-icons";
import { useRouter, usePathname } from "@/i18n/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const logoSrc =
  "https://www.figma.com/api/mcp/asset/ec354a9e-f10f-42d3-b685-7bc82eae20ab";

export default function HeaderBar() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: t("navDiscovery"), href: "#discovery" },
    { label: t("navJourney"), href: "#journey" },
    { label: t("navSchedule"), href: "#schedule" },
    { label: t("navVenue"), href: "#venue" },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => {
    router.replace(pathname, { locale: locale === "en" ? "vi" : "en" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-6 py-3 md:px-12">
      {/* Blur layer */}
      <div className="from-gold/30 absolute inset-0 -z-10 bg-linear-to-b to-transparent mask-[linear-gradient(to_bottom,black,transparent)] backdrop-blur-xs [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

      <div className="m-auto flex max-w-7xl items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="focus-visible:outline-ring flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={t("backToTop")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt={t("logoAlt")}
            className="size-12 object-cover"
          />
          <span
            className="font-display text-foreground hidden text-[20px] leading-7 font-bold tracking-[0.5px] whitespace-nowrap md:inline"
            aria-hidden="true"
          >
            {t("brandName")}
          </span>
        </button>

        {/* Nav links (hidden on mobile) + always-visible controls */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Nav links — only on lg+ (hidden on mobile & tablet) */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label={t("navLabel")}
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
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
          </nav>

          {/* Language switcher */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleLang}
                aria-label={t("switchLang")}
                className={cn(
                  "text-secondary font-sans text-sm leading-5 font-medium tracking-[0.35px]",
                  "hover:text-foreground transition-colors duration-200",
                  "focus-visible:outline-ring rounded focus-visible:outline-2 focus-visible:outline-offset-2",
                )}
              >
                <HugeiconsIcon icon={Globe02Icon} />
                <span className="sr-only">{t("switchLang")}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{t("switchLang")}</TooltipContent>
          </Tooltip>

          {/* RSVP pill */}
          <button
            onClick={() => scrollTo("#rsvp")}
            className={cn(
              "rounded-pill border-gold h-10 border px-4 md:px-6",
              "bg-gold-dim text-gold",
              "font-sans text-sm leading-5 font-bold tracking-[0.7px] uppercase",
              "hover:bg-gold hover:text-primary-foreground transition-all duration-200",
              "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
          >
            {t("rsvp")}
          </button>
        </div>
      </div>
    </header>
  );
}
