import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";

// The active phase index (1-based index 1 = phase 02 = main event)
const ACTIVE_PHASE_INDEX = 2;
const bgImage = "/images/backgrounds/journey-bg.jpg";

const sectionGradient = {
  background:
    "linear-gradient(180deg, #0d1721 0%, rgba(1,14,27,0) 25%, rgba(1,14,27,0) 75%, #010E1B 100%)",
};

export default function ProjectPhasesSection() {
  const t = useTranslations("projectPhases");
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
    <section
      id="project-phases"
      className="bg-background relative flex flex-col"
    >
      {/* ── Phases Wrapper ─────────────────────── */}
      <div className="relative w-full overflow-hidden">
        {/* Background photo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover object-[50%_22%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={sectionGradient}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12 xl:px-24">
          <div className="relative flex w-full flex-col gap-20 overflow-hidden pt-24 pb-20">
            <FadeUp className="flex w-full flex-col items-center gap-4 text-center">
              <span className="eyebrow">{t("eyebrow")}</span>
              <h2 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
                {t("heading")}
              </h2>
            </FadeUp>

            <StaggerContainer className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
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
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12 xl:px-24">
        {/* ── Post-Event / Charity ─────────────────────── */}
        <div className="relative flex flex-col gap-16 pt-24 pb-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Text and context */}
            <FadeUp className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-gold font-sans text-sm leading-5 font-bold tracking-[2.8px] uppercase">
                  {t("postEvent.eyebrow")}
                </span>
                <h2 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
                  {t("postEvent.heading")}
                </h2>
              </div>
              <div className="text-muted-foreground flex flex-col gap-4 font-sans text-base leading-6">
                <p>{t("postEvent.body1")}</p>
                <p>{t("postEvent.body2")}</p>
                <p>{t("postEvent.body3")}</p>
              </div>
            </FadeUp>

            <FadeUp className="relative aspect-4/3 w-full overflow-hidden rounded-[32px] border border-white/10 md:aspect-3/2 lg:aspect-square xl:aspect-4/3">
              <Image
                src="/images/gallery/post-event/orphanage.jpg"
                alt={t("postEvent.heading")}
                fill
                className="object-cover"
              />
              <div className="from-background/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-60" />
            </FadeUp>
          </div>

          {/* Donation Card */}
          <FadeUp className="flex w-full flex-col">
            <div className="shadow-gold-subtle border-gold/30 bg-card/60 flex w-full flex-col overflow-hidden rounded-[32px] border p-8 backdrop-blur-md md:flex-row md:items-center md:justify-between md:gap-16 md:rounded-media-xl md:p-12 lg:p-16">
              <div className="flex flex-1 flex-col gap-8 md:gap-12">
                <h3 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[40px]">
                  {t("postEvent.donationHeading")}
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <p className="text-muted-foreground text-sm tracking-wider uppercase">
                      {t("postEvent.accountNameLabel")}
                    </p>
                    <p className="text-foreground text-lg font-bold">
                      {t("postEvent.accountName")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-muted-foreground text-sm tracking-wider uppercase">
                      {t("postEvent.accountNumberLabel")}
                    </p>
                    <p className="text-foreground text-lg font-bold">
                      {t("postEvent.accountNumber")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-muted-foreground text-sm tracking-wider uppercase">
                      {t("postEvent.bankNameLabel")}
                    </p>
                    <p className="text-foreground font-medium">
                      {t("postEvent.bankName")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-muted-foreground text-sm tracking-wider uppercase">
                      {t("postEvent.transferNoteLabel")}
                    </p>
                    <p className="text-foreground font-medium">
                      {t("postEvent.transferNote")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-12 aspect-square w-full max-w-70 shrink-0 self-center overflow-hidden rounded-[32px] border border-white/20 bg-white p-4 md:mt-0 md:max-w-[320px]">
                <Image
                  src="/images/gallery/post-event/qr-donation.jpg"
                  alt="Donation QR Code"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
