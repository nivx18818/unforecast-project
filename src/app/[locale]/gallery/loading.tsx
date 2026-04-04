import RouteLoadingScreen from "@/components/landing/route-loading-screen";
import { getTranslations } from "next-intl/server";

export default async function GalleryLoading() {
  const t = await getTranslations("loading");

  return (
    <RouteLoadingScreen
      title={t("galleryTitle")}
      subtitle={t("gallerySubtitle")}
      brandLabel={t("brand")}
      loadingLabel={t("label")}
    />
  );
}
