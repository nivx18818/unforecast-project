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
      className="bg-background relative overflow-hidden"
    >
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

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12 xl:px-24">
        <div className="relative overflow-hidden pt-24 pb-20">
          <div className="relative flex w-full flex-col gap-20">
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
    </section>
  );
}
