import Image from "next/image";
import { useTranslations } from "next-intl";
import { TeamGrid } from "./team-grid";
import type { Member } from "./team-grid";
import { FadeUp } from "./motion";
import ScrollArrow from "./scroll-arrow";

const bgImage = "/images/backgrounds/discovery-bg-1.png";
const bgImage2 = "/images/backgrounds/discovery-bg-2.png";
const bgImage3 = "/images/backgrounds/discovery-bg-3.png";

// Static image paths (not translatable)
const memberImages = [
  "/images/team/thao.png",
  "/images/team/thu.png",
  "/images/team/han.png",
  "/images/team/ha.png",
];

export default function DiscoverySection() {
  const t = useTranslations("discovery");
  const membersData = t.raw("members") as Array<{
    name: string;
    role: string;
    bio: string;
  }>;
  const members: Member[] = membersData.map((m, i) => ({
    ...m,
    src: memberImages[i],
  }));

  return (
    <section id="discovery" className="bg-background relative overflow-hidden">
      {/* ── Team Hero State ──────────────────────────────── */}
      <div className="relative flex min-h-[50vh] items-center justify-center px-6 py-24 lg:min-h-screen">
        {/* Background photo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <Image src={bgImage} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        {/* Gradient overlay */}
        <div
          className="from-background pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-linear-to-b to-transparent"
          aria-hidden="true"
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent"
          aria-hidden="true"
        />

        {/* Heading */}
        <FadeUp className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-foreground text-5xl leading-tight font-bold lg:text-[72px] lg:leading-18">
            {t("headline1")}
            <br />
            <span className="text-primary mt-2 block font-normal italic">
              {t("headline2")}
            </span>
          </h2>
          <div className="mt-8 flex flex-col items-center gap-2 lg:mt-4">
            <span className="eyebrow">{t("scrollCta")}</span>
            <ScrollArrow className="mt-1" />
          </div>
        </FadeUp>
      </div>

      {/* ── Team Grid State ──────────────────────────────── */}
      <div className="relative flex min-h-screen items-center justify-center px-6 py-24 lg:px-0 lg:py-0">
        {/* Background photo */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
          aria-hidden="true"
        >
          <Image
            src={bgImage2}
            alt=""
            fill
            className="scale-[1.38] object-cover object-[50%_50%]"
          />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div
          className="from-background pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-linear-to-b to-transparent"
          aria-hidden="true"
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent"
          aria-hidden="true"
        />

        {/* Member cards */}
        <TeamGrid members={members} />
      </div>

      {/* ── Our Story ──────────────────────────────────────── */}
      <div className="relative flex min-h-[50vh] items-center justify-center py-24 lg:min-h-screen">
        {/* Background photo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <Image src={bgImage3} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div
          className="from-background pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-linear-to-b to-transparent"
          aria-hidden="true"
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent"
          aria-hidden="true"
        />

        <FadeUp className="relative z-10 flex max-w-3xl flex-col items-center gap-8 px-6 text-center lg:gap-12">
          <h2 className="font-display text-primary text-4xl leading-tight font-bold lg:text-[48px] lg:leading-12">
            {t("storyHeading")}
          </h2>
          <div className="divider-gold" aria-hidden="true" />
          <div className="text-foreground space-y-6 font-sans text-lg leading-relaxed font-normal lg:text-[20px] lg:leading-7">
            <p>{t("storyParagraph1")}</p>
            <p>{t("storyParagraph2")}</p>
            <p>{t("storyParagraph3")}</p>
          </div>
          <div className="divider-gold" aria-hidden="true" />
        </FadeUp>
      </div>
    </section>
  );
}
