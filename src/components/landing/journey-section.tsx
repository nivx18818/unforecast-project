import { useTranslations } from "next-intl";
import { getGalleryImages } from "@/lib/gallery/get-gallery-images";
import JourneyPhaseSection from "./journey-phase-section";

const preEventImages = getGalleryImages(["pre-event"]);
const mainEventImages = getGalleryImages(["main-event", "highlight"]);
const postEventRecapImages = getGalleryImages(["post-event", "highlight"]);

const mainEventVideoEmbedUrl =
  "https://www.youtube-nocookie.com/embed/L2zt_Y5loFc?rel=0";

const postEventVideoEmbedUrl =
  "https://www.youtube-nocookie.com/embed/qQ0t3VO7gB8?rel=0";

export default function JourneySection() {
  const t = useTranslations("journey");

  return (
    <section id="journey" className="bg-background relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-12 xl:px-24">
        <JourneyPhaseSection
          className="pt-24 pb-24"
          eyebrow={t("preEventEyebrow")}
          heading={t("preEventHeading")}
          paragraphs={[t("preEventBody")]}
          images={preEventImages}
        />

        <JourneyPhaseSection
          className="pt-12 pb-24"
          eyebrow={t("mainEventEyebrow")}
          heading={t("mainEventHeading")}
          paragraphs={[t("mainEventBody").split("\n")[0]]}
          images={mainEventImages}
          galleryHref="/gallery/main-event"
          galleryLabel={t("viewGalleryBtn")}
          videoEmbedUrl={mainEventVideoEmbedUrl}
          videoTitle="Unforecast Project main event recap video"
        />

        <JourneyPhaseSection
          id="post-event"
          className="pt-12 pb-24"
          eyebrow={t("postEventEyebrow")}
          heading={t("postEventHeading")}
          paragraphs={[
            t("postEventBody1"),
            t("postEventBody2"),
            t("postEventBody3"),
            t("postEventBody4"),
          ]}
          images={postEventRecapImages}
          galleryHref="/gallery/post-event"
          galleryLabel={t("viewGalleryBtn")}
          videoEmbedUrl={postEventVideoEmbedUrl}
          videoTitle="Unforecast Project post-event recap video"
        />
      </div>
    </section>
  );
}
