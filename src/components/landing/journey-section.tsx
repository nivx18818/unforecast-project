import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem, FadeIn } from "./motion";

const bgImage = "/images/backgrounds/journey-bg.jpg";

// The active phase index (1-based index 1 = phase 02 = main event)
const ACTIVE_PHASE_INDEX = 1;

const galleryImages = [
  {
    src: "/images/gallery/DSC04304.jpg",
    alt: "DSC04304",
    className: "absolute left-[33.97%] top-[76.56%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/DSC04278.jpg",
    alt: "DSC04278",
    className: "absolute left-0 top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/DSC04267.jpg",
    alt: "DSC04267",
    className: "absolute left-0 top-[25.93%] w-[32.05%] h-[74.06%]",
  },
  {
    src: "/images/gallery/DSC04250.jpg",
    alt: "DSC04250",
    className: "absolute left-[33.97%] top-0 w-[32.05%] h-[74.06%]",
  },
  {
    src: "/images/gallery/DSC04203.jpg",
    alt: "DSC04203",
    className: "absolute left-[67.94%] top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/DSC04179.jpg",
    alt: "DSC04179",
    className: "absolute left-[67.94%] top-[25.93%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/IMG_6171.jpg",
    alt: "IMG_6171",
    className: "absolute left-[67.94%] top-[51.87%] w-[32.05%] h-[48.12%]",
  },
];

const sectionGradient = {
  background:
    "linear-gradient(180deg, #010E1B 0%, rgba(1,14,27,0) 40%, rgba(1,14,27,0) 60%, #010E1B 100%)",
};

export default function JourneySection() {
  const t = useTranslations("journey");
  const phasesData = t.raw("phases") as Array<{
    number: string;
    date: string;
    title: string;
  }>;
  const phases = phasesData.map((p, i) => ({
    ...p,
    active: i === ACTIVE_PHASE_INDEX,
  }));

  return (
    <section id="journey" className="bg-background relative overflow-hidden">
      {/* Background photo */}
      <div
        className="pointer-events-none absolute inset-[0_0_1348px_0] opacity-40"
        aria-hidden="true"
      >
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover object-[50%_15%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white mix-blend-saturation" />
      </div>
      <div
        className="pointer-events-none absolute inset-[0_0_1348px_0]"
        style={sectionGradient}
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12 xl:px-24">
        {/* ── Project Phases ────────────────────────────────── */}
        <div className="relative overflow-hidden pt-24 pb-20">
          {/* Subtle radial gold glow behind content */}
          {/* <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at -5% -5%, rgba(227,170,49,1) 0%, rgba(227,170,49,0) 50%)",
            }}
            aria-hidden="true"
          /> */}

          <div className="relative flex w-full flex-col gap-20">
            {/* Heading */}
            <FadeUp className="flex w-full flex-col items-center gap-4 text-center">
              <span className="eyebrow">{t("eyebrow")}</span>
              <h2 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
                {t("heading")}
              </h2>
            </FadeUp>

            {/* Timeline */}
            <StaggerContainer className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              {/* Connector line — desktop only */}
              <div
                className="pointer-events-none absolute top-5.5 right-0 left-0 hidden h-px md:block"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(227,170,49,0) 0%, rgba(227,170,49,0.4) 50%, rgba(227,170,49,0) 100%)",
                }}
                aria-hidden="true"
              />

              {phases.map(({ number, date, title, active }) => (
                <StaggerItem key={number} className="relative min-w-0 flex-1">
                  {/* Phase node */}
                  <div className="mb-6">
                    <div
                      className={cn(
                        "rounded-pill border-gold flex size-12 items-center justify-center border-2",
                        active
                          ? "bg-gold shadow-gold-active"
                          : "shadow-gold-subtle bg-transparent",
                      )}
                      aria-hidden="true"
                    >
                      <span
                        className={cn(
                          "font-sans text-base leading-6 font-bold",
                          active ? "text-primary-foreground" : "text-gold",
                        )}
                      >
                        {number}
                      </span>
                    </div>
                  </div>
                  <p className="text-gold mb-2 font-sans text-sm leading-5 font-bold tracking-[0.7px] uppercase">
                    {date}
                  </p>
                  <p className="font-display text-foreground pr-0 text-[22px] leading-7 font-normal md:pr-16 md:text-[24px] md:leading-8">
                    {title}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* ── Pre-Event Recap / Gallery ─────────────────────── */}
        <div className="relative flex flex-col gap-16 py-0 pb-24">
          {/* Text intro */}
          <FadeUp className="flex w-full max-w-175.75 flex-col gap-2">
            <span className="text-gold font-sans text-sm leading-5 font-bold tracking-[2.8px] uppercase">
              {t("preEventEyebrow")}
            </span>
            <h2 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
              {t("galleryHeading")}
            </h2>
            <p className="text-muted-foreground mt-2 font-sans text-base leading-6">
              <strong className="text-muted-foreground font-bold">
                {t("galleryBodyBold")}
              </strong>{" "}
              {t("galleryBody")}
            </p>
          </FadeUp>

          {/* Masonry gallery — mobile: simple 2-col grid; desktop: absolute mosaic */}
          {/* Mobile grid */}
          <FadeIn className="grid grid-cols-2 gap-2 md:hidden">
            {galleryImages.map(({ src, alt }) => (
              <div
                key={alt}
                className="rounded-card-sm relative aspect-3/4 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </FadeIn>
          {/* Desktop mosaic */}
          <FadeIn className="relative mx-auto hidden aspect-1248/960 w-full overflow-clip md:block">
            {galleryImages.map(({ src, alt, className }) => (
              <div
                key={alt}
                className={cn("rounded-card-sm overflow-hidden", className)}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="rounded-card-sm object-cover"
                  sizes="33vw"
                />
                {/* Subtle gold radial tint on each photo */}
                <div
                  className="rounded-card-sm pointer-events-none absolute inset-0 opacity-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, rgba(227,170,49,1) 0%, rgba(0,0,0,1) 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
