import { useTranslations } from "next-intl";
import { FadeUp } from "./motion";

export default function VenueSection() {
  const t = useTranslations("venue");

  return (
    <section
      id="venue"
      className="bg-background flex w-full flex-col items-center justify-center px-6 pb-16 md:pb-24"
      aria-label={t("sectionLabel")}
    >
      <FadeUp className="flex w-full max-w-3xl flex-col items-center gap-4 text-center">
        <span className="text-primary font-sans text-sm leading-5 font-bold tracking-[2.8px] uppercase">
          {t("eyebrow")}
        </span>
        <div className="flex flex-col pt-2 pb-6">
          <p className="font-display text-foreground text-[28px] leading-9 font-bold md:text-[36px] md:leading-10">
            {t("addressLine1")}
          </p>
          <p className="text-muted-foreground mt-2 font-sans text-[18px] leading-7 font-normal">
            {t("addressLine2")}
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/poZiMt8JPbVB9qek8?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-ring inline-flex h-12 items-center justify-center rounded-full px-8 font-sans text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {t("directions")}
        </a>
      </FadeUp>
    </section>
  );
}
