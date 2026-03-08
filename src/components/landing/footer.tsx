const logoSrc =
  "https://www.figma.com/api/mcp/asset/ec354a9e-f10f-42d3-b685-7bc82eae20ab";
const emailIcon =
  "https://www.figma.com/api/mcp/asset/92686c8c-95d2-47c1-81d7-aacd839056b2";
const phoneIcon =
  "https://www.figma.com/api/mcp/asset/d79a8d94-db62-42db-86f1-dcf7adade6bb";
const facebookIcon =
  "https://www.figma.com/api/mcp/asset/f2627a02-d4c3-4557-9073-d4552194594e";
const instagramIcon =
  "https://www.figma.com/api/mcp/asset/86cc9d8f-13b4-43e7-a86b-4283c93aff24";

const socialLinks = [
  {
    icon: emailIcon,
    label: "Email Unforecast Project",
    href: "mailto:contact@unforecastproject.com",
    width: 20,
    height: 16,
  },
  {
    icon: phoneIcon,
    label: "Call Unforecast Project",
    href: "tel:+84",
    width: 18,
    height: 18,
  },
  {
    icon: facebookIcon,
    label: "Unforecast Project on Facebook",
    href: "https://facebook.com",
    width: 22,
    height: 16,
  },
  {
    icon: instagramIcon,
    label: "Unforecast Project on Instagram",
    href: "https://instagram.com",
    width: 20,
    height: 20,
  },
];

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center border-t border-[rgba(255,255,255,0.1)] bg-background py-7 px-12"
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
          {socialLinks.map(({ icon, label, href, width, height }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 rounded"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon}
                alt=""
                width={width}
                height={height}
                aria-hidden="true"
                className="block"
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
