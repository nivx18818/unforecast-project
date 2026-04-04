import { redirect } from "@/i18n/navigation";

export default async function GalleryRedirectPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  redirect({ href: "/gallery/main-event", locale: params.locale });
}
