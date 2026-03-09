import {
  Facebook02Icon,
  InstagramIcon,
  Mail01Icon,
  TelephoneIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";

const logoSrc =
  "https://www.figma.com/api/mcp/asset/ec354a9e-f10f-42d3-b685-7bc82eae20ab";

const socialLinks = [
  {
    icon: Mail01Icon,
    labelKey: "emailLabel" as const,
    href: "mailto:unforecastproject@gmail.com",
  },
  {
    icon: TelephoneIcon,
    labelKey: "callLabel" as const,
    href: "tel:+84904240405",
  },
  {
    icon: Facebook02Icon,
    labelKey: "facebookLabel" as const,
    href: "https://www.facebook.com/unforecastproject",
  },
  {
    icon: InstagramIcon,
    labelKey: "instagramLabel" as const,
    href: "https://www.instagram.com/unforecastproject/",
  },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="bg-background flex w-full flex-col items-center border-t border-[rgba(255,255,255,0.1)] px-6 py-7 md:px-12"
      aria-label={t("footerLabel")}
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-6 lg:flex-row lg:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt={t("logoAlt")}
            className="size-12 object-cover"
          />
          <span className="font-display text-foreground text-[20px] leading-7 font-bold tracking-[0.5px] whitespace-nowrap">
            {t("brandName")}
          </span>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground font-sans text-sm leading-5 font-normal whitespace-nowrap">
          {t("copyright")}
        </p>

        {/* Social links */}
        <nav className="flex items-center gap-6" aria-label={t("socialLabel")}>
          {socialLinks.map(({ icon, labelKey, href }) => (
            <a
              key={labelKey}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(labelKey)}
              className="focus-visible:outline-ring flex items-center justify-center rounded opacity-70 transition-opacity duration-200 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <HugeiconsIcon icon={icon} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
