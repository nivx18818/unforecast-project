import RouteLoadingScreen from "@/components/landing/route-loading-screen";
import { getTranslations } from "next-intl/server";

export default async function LocaleLoading() {
  const t = await getTranslations("loading");

  return (
    <RouteLoadingScreen
      title={t("homeTitle")}
      subtitle={t("homeSubtitle")}
      brandLabel={t("brand")}
      loadingLabel={t("label")}
    />
  );
}
