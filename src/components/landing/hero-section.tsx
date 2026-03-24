import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FadeUpMount } from "./motion";

const heroImage = "/images/backgrounds/hero-bg.jpg";
const heroImageOverlay = "/images/backgrounds/hero-overlay.jpg";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const titleLine1 = t("titleLine1");
  const titleLine2 = t("titleLine2");

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
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="scale-125 object-cover object-top md:scale-150"
          sizes="100vw"
        />
        <Image
          src={heroImageOverlay}
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="via-background/50 to-background pointer-events-none absolute inset-0 bg-linear-to-b from-transparent opacity-90"
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
          <div className="flex flex-col items-center drop-shadow-md">
            <h1 className="font-display text-gold max-w-4xl text-center text-5xl leading-tight font-bold sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
            </h1>
          </div>
        </FadeUpMount>

        {/* Subtitle */}
        <FadeUpMount delay={0.45}>
          <p className="text-secondary mt-4 max-w-2xl font-sans text-xl leading-7 font-normal">
            {t("description")}
          </p>
        </FadeUpMount>

        {/* Slogan */}
        <FadeUpMount delay={0.55}>
          <p className="text-gold-muted mt-6 font-sans text-sm font-medium tracking-widest">
            {t("slogan")}
          </p>
        </FadeUpMount>
      </div>
    </section>
  );
}
