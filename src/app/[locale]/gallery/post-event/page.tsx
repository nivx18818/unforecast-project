import { type Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import GalleryClient from "../gallery-client";
import { getGalleryImages } from "../get-gallery-images";

export const metadata: Metadata = {
  title: "Post Event Gallery | Ceremony of Gratitude and Growth",
  description: "View the full post-event gallery from the Unforecast Project.",
};

export default async function PostEventGalleryPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  setRequestLocale(params.locale);

  const tPostEvent = await getTranslations({
    locale: params.locale,
    namespace: "postEventRecap",
  });

  const tHeader = await getTranslations({
    locale: params.locale,
    namespace: "header",
  });

  const images = getGalleryImages(["post-event"]);

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
            {tPostEvent("eyebrow")}
          </span>
          <h1 className="font-display text-foreground text-[32px] leading-10 font-bold md:text-[48px] md:leading-12">
            {tPostEvent("heading")}
          </h1>
        </div>

        <GalleryClient initialImages={images} />
      </div>
    </main>
  );
}
