import Image from "next/image";
import { useTranslations } from "next-intl";
import { SlideIn } from "./motion";

export default function VenueSection() {
  const t = useTranslations("venue");

  return (
    <section
      id="venue"
      className="bg-background/30 flex w-full items-center justify-center px-6 py-16 md:p-24"
      aria-label={t("sectionLabel")}
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-20">
        {/* ── Media block ─────────────────────────────── */}
        <SlideIn direction="left" className="relative w-full min-w-0 flex-1">
          {/* Offset gold wash panel — hidden on mobile to prevent viewport overflow */}
          <div
            className="rounded-media-xl bg-gold-dim pointer-events-none absolute inset-[16px_-16px_-16px_16px] hidden md:block"
            aria-hidden="true"
          />
          {/* Photo */}
          <div className="rounded-media-xl relative aspect-4/3 w-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/venue-ballroom.jpg"
              alt={t("imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold tint overlay */}
            <div
              className="bg-primary/10 pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
          </div>
        </SlideIn>

        {/* ── Text block ────────────────────────────── */}
        <SlideIn
          direction="right"
          delay={0.1}
          className="flex min-w-0 flex-1 flex-col items-start gap-4"
        >
          <span className="text-primary font-sans text-sm leading-5 font-bold tracking-[2.8px] uppercase">
            {t("eyebrow")}
          </span>
          <h2 className="font-display text-foreground text-[36px] leading-[1.1] font-bold md:text-[48px] md:leading-12">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <div className="pt-2">
            <p className="text-secondary font-sans text-[18px] leading-[29.25px] font-normal md:max-w-119.25">
              {t("body")}
            </p>
          </div>
          <div className="flex flex-col pt-2 pb-4">
            <p className="text-foreground font-sans text-[18px] leading-7 font-medium">
              {t("addressLine1")}
            </p>
            <p className="text-muted-foreground font-sans text-[16px] leading-6 font-normal">
              {t("addressLine2")}
            </p>
          </div>
          {/* Directions link */}
          <a
            href="https://maps.app.goo.gl/v4Ewg8xRkrU6fnzA7"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary text-primary focus-visible:outline-ring inline-flex items-center gap-2 border-b pb-1.25 font-sans text-[18px] leading-7 font-medium tracking-[0.45px] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t("directions")}
            <svg
              className="h-[9.333px] w-[9.333px] fill-current"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M7.102 5.25H0V4.083H7.102L3.835 0.817L4.667 0L9.333 4.667L4.667 9.333L3.835 8.517L7.102 5.25z" />
            </svg>
          </a>
        </SlideIn>
      </div>
    </section>
  );
}
