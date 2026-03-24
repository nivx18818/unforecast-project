import { type Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import fs from "fs";
import path from "path";
import sizeOf from "image-size";
import GalleryClient from "./gallery-client";
import { Link } from "@/i18n/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "Gallery | Ceremony of Gratitude and Growth",
  description: "View the full gallery from the Unforecast Project event.",
};

export default async function GalleryPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  setRequestLocale(params.locale);
  const tJourney = await getTranslations({
    locale: params.locale,
    namespace: "journey",
  });
  const tHeader = await getTranslations({
    locale: params.locale,
    namespace: "header",
  });

  // Fetch images from the main-event directory
  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "gallery",
    "main-event",
  );
  const files = fs.readdirSync(directory);

  const images = files
    .filter((file) => file.match(/\.(jpg|jpeg|png)$/i))
    .map((file) => {
      const filePath = path.join(directory, file);
      const buffer = fs.readFileSync(filePath);
      const dimensions = sizeOf(buffer);
      return {
        id: file,
        src: `/images/gallery/main-event/${file}`,
        width: dimensions.width || 800,
        height: dimensions.height || 600,
      };
    });

  return (
    <main className="bg-background relative min-h-screen pt-32 pb-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12 xl:px-24">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex w-fit items-center gap-2 transition-colors"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} />
          <span>{tHeader("navHero")}</span>
        </Link>
        <div className="mb-12 flex w-full flex-col gap-2">
          <span className="text-gold font-sans text-sm leading-5 font-bold tracking-[2.8px] uppercase">
            {tJourney("mainEventEyebrow")}
          </span>
          <h1 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
            {tJourney("mainEventHeading")}
          </h1>
        </div>
        <GalleryClient initialImages={images} />
      </div>
    </main>
  );
}
