import {
  Facebook02Icon,
  InstagramIcon,
  Mail01Icon,
  TelephoneIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const logoSrc =
  "https://www.figma.com/api/mcp/asset/ec354a9e-f10f-42d3-b685-7bc82eae20ab";

const socialLinks = [
  {
    icon: Mail01Icon,
    label: "Email Unforecast Project",
    href: "mailto:unforecastproject@gmail.com",
  },
  {
    icon: TelephoneIcon,
    label: "Call Unforecast Project",
    href: "tel:+84904240405",
  },
  {
    icon: Facebook02Icon,
    label: "Unforecast Project on Facebook",
    href: "https://www.facebook.com/unforecastproject",
  },
  {
    icon: InstagramIcon,
    label: "Unforecast Project on Instagram",
    href: "https://www.instagram.com/unforecastproject/",
  },
];

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center border-t border-[rgba(255,255,255,0.1)] bg-background py-7 px-12 w-full"
      aria-label="Site footer"
    >
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Brand */}
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="Unforecast Project"
            className="size-12 object-cover"
          />
          <span className="font-display font-bold text-[20px] leading-7 tracking-[0.5px] text-foreground whitespace-nowrap">
            Unforecast Project
          </span>
        </div>

        {/* Copyright */}
        <p className="font-sans font-normal text-sm leading-5 text-muted-foreground whitespace-nowrap">
          © 2026 Unforecast Project. All rights reserved.
        </p>

        {/* Social links */}
        <nav
          className="flex items-center gap-6"
          aria-label="Social media links"
        >
          {socialLinks.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded"
            >
              <HugeiconsIcon icon={icon} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
