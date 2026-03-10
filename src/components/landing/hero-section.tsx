import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Calendar04Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FadeUpMount } from "./motion";

const heroImage =
  "https://www.figma.com/api/mcp/asset/0047e038-4f12-41b1-8d39-03c6f2b055cc";
const heroImageOverlay =
  "https://www.figma.com/api/mcp/asset/cd5312bb-8076-4b9c-b111-bfcfa260876f";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section
      id="hero"
      className="bg-background relative flex min-h-screen flex-col items-center overflow-hidden pb-10"
      aria-label={t("sectionLabel")}
    >
      {/* Cinematic backdrop */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 mix-blend-screen"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full scale-125 object-cover object-top md:scale-150"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImageOverlay}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,14,27,0) 0%, rgba(1,14,27,0.5) 50%, #010E1B 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={cn(
          "relative flex w-full flex-1 flex-col items-center justify-center px-6 pt-24 pb-12 text-center",
          locale === "vi" ? "max-w-5xl" : "max-w-4xl",
        )}
      >
        {/* Title block */}
        <FadeUpMount delay={0.2}>
          <div className="flex flex-col items-center gap-0 drop-shadow-md">
            <h1 className="font-display text-gold text-center text-[40px] leading-tight font-bold sm:text-[56px] md:text-[72px] md:leading-24">
              {t("title")}
            </h1>
            <p
              className={cn(
                "font-display text-foreground text-center text-[40px] leading-tight font-bold sm:text-[56px] md:text-[72px] md:leading-24",
              )}
            >
              {t("tagline")}
            </p>
          </div>
        </FadeUpMount>

        {/* Subtitle */}
        <FadeUpMount delay={0.45}>
          <p className="text-secondary mt-4 max-w-2xl font-sans text-[20px] leading-7 font-normal">
            {t("description")}
          </p>
        </FadeUpMount>

        {/* Slogan */}
        <FadeUpMount delay={0.55}>
          <p className="text-gold-muted mt-6 font-sans text-sm font-medium tracking-[0.15em]">
            {t("slogan")}
          </p>
        </FadeUpMount>

        {/* Metadata row */}
        <FadeUpMount delay={0.65}>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
            {/* Date */}
            <div className="flex w-fit items-center justify-center gap-2">
              <HugeiconsIcon icon={Calendar04Icon} className="text-gold" />
              <span className="text-foreground font-sans text-base leading-6 font-medium tracking-[0.4px] whitespace-nowrap">
                {t("date")}
              </span>
            </div>

            {/* Divider — hidden on mobile */}
            <span
              className="text-gold-muted hidden font-sans text-base font-medium select-none sm:inline"
              aria-hidden="true"
            >
              |
            </span>

            {/* Location */}
            <div className="flex w-fit justify-center gap-2 sm:items-start md:items-center">
              <HugeiconsIcon icon={Location01Icon} className="text-gold" />
              <span className="text-foreground text-center font-sans text-base leading-6 font-medium tracking-[0.4px]">
                {t("venueLine1")}
                <br />
                {t("venueLine2")}
              </span>
            </div>
          </div>
        </FadeUpMount>
      </div>
    </section>
  );
}
