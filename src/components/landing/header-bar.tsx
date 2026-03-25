"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { SlideDownMount } from "./motion";

const logoSrc = "/images/logo.png";

export default function HeaderBar() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: t("navProjectPhases"), href: "#project-phases" },
    { label: t("navPostEvent"), href: "#post-event" },
    { label: t("navDiscovery"), href: "#discovery" },
    { label: t("navJourney"), href: "#journey" },
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

      <SlideDownMount
        className="m-auto flex max-w-7xl items-center justify-between"
        delay={0.1}
      >
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="focus-visible:outline-ring flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={t("backToTop")}
        >
          <Image
            src={logoSrc}
            alt={t("logoAlt")}
            width={40}
            height={40}
            className="object-cover"
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
                {/* <HugeiconsIcon icon={Globe02Icon} /> */}
                <span>{locale == "vi" ? "VI|EN" : "EN|VI"}</span>
                <span className="sr-only">{t("switchLang")}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{t("switchLang")}</TooltipContent>
          </Tooltip>
        </div>
      </SlideDownMount>
    </header>
  );
}
