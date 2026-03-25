import {
  Facebook02Icon,
  InstagramIcon,
  Mail01Icon,
  TelephoneIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const logoSrc = "/images/logo.png";

const sponsorGroups = [
  {
    category: "organizer",
    logos: [{ src: "/images/logo.png", alt: "Unforecast Project" }],
  },
  {
    category: "diamondSponsor",
    logos: [
      {
        src: "/images/sponsors/diamon-sponsor-british-university-vietnam.png",
        alt: "Diamond Sponsor - British University Vietnam",
      },
    ],
  },
  {
    category: "goldSponsor",
    logos: [
      {
        src: "/images/sponsors/gold-sponsor-ce-entertainment.png",
        alt: "Gold Sponsor - CE Entertainment",
      },
      {
        src: "/images/sponsors/gold-sponsor-phuong-bac-jsc.png",
        alt: "Gold Sponsor - Phuong Bac JSC",
      },
      {
        src: "/images/sponsors/gold-sponsor-la-miel.png",
        alt: "Gold Sponsor - La Miel",
      },
    ],
  },
  {
    category: "silverSponsor",
    logos: [
      {
        src: "/images/sponsors/silver-sponsor-softe-florals.jpg",
        alt: "Silver Sponsor - Softé Florals",
      },
      {
        src: "/images/sponsors/silver-sponsor-sowon-com-bui-han-quoc.jpg",
        alt: "Silver Sponsor - Sowon Com Bui Han Quoc",
      },
      {
        src: "/images/sponsors/silver-sponsor-oh-mine.jpg",
        alt: "Silver Sponsor - Oh Mine",
      },
    ],
  },
  {
    category: "bronzeSponsor",
    logos: [
      {
        src: "/images/sponsors/bronze-sponsor-one-percent.png",
        alt: "Bronze Sponsor - One Percent",
      },
      {
        src: "/images/sponsors/bronze-sponsor-moment-coffee-lab.png",
        alt: "Bronze Sponsor - Moment Coffee Lab",
      },
      {
        src: "/images/sponsors/bronze-sponsor-anh-phi-ban-tao.png",
        alt: "Bronze Sponsor - Anh Phi Ban Tao",
      },
    ],
  },
  {
    category: "coordinator",
    logos: [
      {
        src: "/images/sponsors/coordinator-event-club-of-buv.png",
        alt: "Coordinator - Event Club of BUV",
      },
      {
        src: "/images/sponsors/coordinator-buv-cook-and-eat.png",
        alt: "Coordinator - BUV Cook and Eat",
      },
    ],
  },
];

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
      <div className="mb-6 flex w-full max-w-7xl flex-wrap items-start justify-center gap-x-8 gap-y-6 border-b border-[rgba(255,255,255,0.08)] pb-6">
        {sponsorGroups.map(({ category, logos }) => (
          <section
            key={category}
            aria-label={category}
            className="flex min-w-35 flex-col flex-wrap items-center gap-3"
          >
            <p className="text-foreground/90 text-center font-sans text-sm leading-5 font-semibold tracking-[0.08em] uppercase">
              {t(category)}
            </p>
            <div className="flex items-center justify-center gap-2">
              {logos.map(({ src, alt }) => (
                <div
                  key={src}
                  className="flex h-10 items-center opacity-85 transition-opacity duration-200 hover:opacity-100"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={160}
                    height={40}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="flex w-full max-w-7xl flex-col items-center gap-6 lg:flex-row lg:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src={logoSrc}
            alt={t("logoAlt")}
            width={40}
            height={40}
            className="object-cover"
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
