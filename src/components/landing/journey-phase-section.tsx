import type { ComponentProps } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/lib/gallery/types";
import { FadeIn, FadeUp } from "./motion";

const DESKTOP_MOSAIC_CLASSES = [
  "absolute left-[33.97%] top-[76.56%] h-[23.43%] w-[32.05%]",
  "absolute left-0 top-0 h-[23.43%] w-[32.05%]",
  "absolute left-0 top-[25.93%] h-[74.06%] w-[32.05%]",
  "absolute left-[33.97%] top-0 h-[74.06%] w-[32.05%]",
  "absolute left-[67.94%] top-0 h-[23.43%] w-[32.05%]",
  "absolute left-[67.94%] top-[25.93%] h-[23.43%] w-[32.05%]",
  "absolute left-[67.94%] top-[51.87%] h-[48.12%] w-[32.05%]",
];

const photoTintStyle = {
  background:
    "radial-gradient(ellipse at 50% 50%, rgba(227,170,49,1) 0%, rgba(0,0,0,1) 100%)",
};

interface JourneyPhaseSectionProps {
  id?: string;
  className?: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  images: GalleryImage[];
  galleryHref?: ComponentProps<typeof Link>["href"];
  galleryLabel?: string;
  videoEmbedUrl?: string;
  videoTitle?: string;
}

export default function JourneyPhaseSection({
  id,
  className,
  eyebrow,
  heading,
  paragraphs,
  images,
  galleryHref,
  galleryLabel,
  videoEmbedUrl,
  videoTitle,
}: JourneyPhaseSectionProps) {
  const showGalleryButton =
    galleryHref !== undefined && galleryLabel !== undefined;
  const showVideo = videoEmbedUrl !== undefined && videoTitle !== undefined;
  const mosaicImages = images.slice(0, DESKTOP_MOSAIC_CLASSES.length);

  const introContent = (
    <FadeUp className="flex w-full max-w-175.75 flex-col gap-2">
      <span className="text-gold font-sans text-sm leading-5 font-bold tracking-[2.8px] uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
        {heading}
      </h2>
      <div className="text-muted-foreground mt-2 space-y-4 font-sans text-base leading-6">
        {paragraphs.map((paragraph, index) => (
          <p key={`${heading}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </FadeUp>
  );

  return (
    <div id={id} className={cn("relative flex flex-col gap-16", className)}>
      {showGalleryButton ? (
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          {introContent}
          <FadeUp className="shrink-0">
            <Button
              asChild
              variant="ghost"
              className="hover:text-gold transition-all duration-300"
            >
              <Link href={galleryHref} className="flex items-center gap-2">
                <span>{galleryLabel}</span>
                <HugeiconsIcon icon={ArrowRight02Icon} />
              </Link>
            </Button>
          </FadeUp>
        </div>
      ) : (
        introContent
      )}

      <>
        <FadeIn className="grid grid-cols-2 gap-2 md:hidden">
          {mosaicImages.map((image) => (
            <div
              key={image.id}
              className="rounded-card-sm relative aspect-3/4 overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.id}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </FadeIn>

        <FadeIn className="relative mx-auto hidden aspect-1248/960 w-full overflow-clip md:block">
          {mosaicImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "rounded-card-sm overflow-hidden",
                DESKTOP_MOSAIC_CLASSES[index],
              )}
            >
              <Image
                src={image.src}
                alt={image.id}
                fill
                className="rounded-card-sm object-cover"
                sizes="33vw"
              />
              <div
                className="rounded-card-sm pointer-events-none absolute inset-0 opacity-10"
                style={photoTintStyle}
                aria-hidden="true"
              />
            </div>
          ))}
        </FadeIn>
      </>

      {showVideo ? (
        <FadeUp className="w-full pt-2">
          <div className="bg-background/60 shadow-gold-subtle rounded-card-lg border-primary/30 relative mx-auto aspect-video w-full max-w-5xl overflow-hidden border">
            <iframe
              src={videoEmbedUrl}
              title={videoTitle}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </FadeUp>
      ) : null}
    </div>
  );
}
