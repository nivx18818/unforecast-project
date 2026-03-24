import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FadeUp, FadeIn } from "./motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const galleryImages = [
  {
    src: "/images/gallery/pre-event/DSC04304.jpg",
    alt: "DSC04304",
    className: "absolute left-[33.97%] top-[76.56%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/pre-event/DSC04278.jpg",
    alt: "DSC04278",
    className: "absolute left-0 top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/pre-event/DSC04267.jpg",
    alt: "DSC04267",
    className: "absolute left-0 top-[25.93%] w-[32.05%] h-[74.06%]",
  },
  {
    src: "/images/gallery/pre-event/DSC04250.jpg",
    alt: "DSC04250",
    className: "absolute left-[33.97%] top-0 w-[32.05%] h-[74.06%]",
  },
  {
    src: "/images/gallery/pre-event/DSC04203.jpg",
    alt: "DSC04203",
    className: "absolute left-[67.94%] top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/pre-event/DSC04179.jpg",
    alt: "DSC04179",
    className: "absolute left-[67.94%] top-[25.93%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/pre-event/IMG_6171.jpg",
    alt: "IMG_6171",
    className: "absolute left-[67.94%] top-[51.87%] w-[32.05%] h-[48.12%]",
  },
];

const mainEventImages = [
  {
    src: "/images/gallery/main-event/highlight/QTIEN.T_236.JPG",
    alt: "QTIEN.T_236",
    className: "absolute left-[33.97%] top-[76.56%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/main-event/highlight/QTIEN.T_29.JPG",
    alt: "QTIEN.T_29",
    className: "absolute left-0 top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/main-event/highlight/QTIEN.T_153.JPG",
    alt: "QTIEN.T_153",
    className: "absolute left-0 top-[25.93%] w-[32.05%] h-[74.06%]",
  },
  {
    src: "/images/gallery/main-event/highlight/QTIEN.T_106.JPG",
    alt: "QTIEN.T_106",
    className: "absolute left-[33.97%] top-0 w-[32.05%] h-[74.06%]",
  },
  {
    src: "/images/gallery/main-event/highlight/QTIEN.T_110.JPG",
    alt: "QTIEN.T_110",
    className: "absolute left-[67.94%] top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/main-event/highlight/QTIEN.T_192.JPG",
    alt: "QTIEN.T_192",
    className: "absolute left-[67.94%] top-[25.93%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "/images/gallery/main-event/highlight/QTIEN.T_159.JPG",
    alt: "QTIEN.T_159",
    className: "absolute left-[67.94%] top-[51.87%] w-[32.05%] h-[48.12%]",
  },
];

export default function JourneySection() {
  const t = useTranslations("journey");

  return (
    <section id="journey" className="bg-background relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12 xl:px-24">
        {/* ── Pre-Event Recap / Gallery ─────────────────────── */}
        <div className="relative flex flex-col gap-16 pt-24 pb-24">
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

        {/* ── Main Event Recap / Gallery ─────────────────────── */}
        <div className="relative flex flex-col gap-16 pt-12 pb-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            {/* Text intro */}
            <FadeUp className="flex w-full max-w-175.75 flex-col gap-2">
              <span className="text-gold font-sans text-sm leading-5 font-bold tracking-[2.8px] uppercase">
                {t("mainEventEyebrow")}
              </span>
              <h2 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
                {t("mainEventHeading")}
              </h2>
              <div className="text-muted-foreground mt-2 space-y-4 font-sans text-base leading-6">
                <p>{t("mainEventBody").split("\n")[0]}</p>
              </div>
            </FadeUp>
            <FadeUp className="shrink-0">
              <Button
                asChild
                variant="ghost"
                className="hover:text-gold transition-all duration-300"
              >
                <Link href="/gallery" className="flex items-center gap-2">
                  <span>{t("viewGalleryBtn")}</span>
                  <HugeiconsIcon icon={ArrowRight02Icon} />
                </Link>
              </Button>
            </FadeUp>
          </div>

          {/* Masonry gallery — mobile: simple 2-col grid; desktop: absolute mosaic */}
          {/* Mobile grid */}
          <FadeIn className="grid grid-cols-2 gap-2 md:hidden">
            {mainEventImages.map(({ src, alt }) => (
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
            {mainEventImages.map(({ src, alt, className }) => (
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
