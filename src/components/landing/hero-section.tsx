import { cn } from "@/lib/utils";

const heroImage =
  "https://www.figma.com/api/mcp/asset/0047e038-4f12-41b1-8d39-03c6f2b055cc";
const heroImageOverlay =
  "https://www.figma.com/api/mcp/asset/cd5312bb-8076-4b9c-b111-bfcfa260876f";
const calendarIcon =
  "https://www.figma.com/api/mcp/asset/dae2cc78-0602-46ac-bd7d-8bb46814eef8";
const locationIcon =
  "https://www.figma.com/api/mcp/asset/b808b315-840b-4143-8c33-64fb272869c6";

export default function HeroSection() {
  return (
    <section
      className="bg-background relative flex min-h-screen flex-col items-center overflow-hidden pb-10"
      aria-label="Hero"
    >
      {/* Cinematic backdrop */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 mix-blend-screen"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full scale-125 object-cover object-top md:scale-150"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImageOverlay}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,14,27,0) 0%, rgba(1,14,27,0.5) 50%, #010E1B 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
        {/* Title block */}
        <div className="flex flex-col items-center gap-0 drop-shadow-md">
          <h1 className="font-display text-gold text-[72px] leading-24 font-bold whitespace-nowrap">
            Unforecast Project
          </h1>
          <p
            className={cn(
              "font-display text-foreground text-[72px] leading-24 font-bold whitespace-nowrap",
            )}
          >
            Ceremony of Gratitude and Growth
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-secondary mt-4 max-w-2xl font-sans text-[20px] leading-7 font-normal">
          A capstone project by final-year BUV Events Management students
        </p>

        {/* Metadata row */}
        <div className="mt-6 flex items-center gap-8">
          {/* Date */}
          <div className="flex w-50 items-center justify-end gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={calendarIcon}
              alt=""
              className="size-6"
              aria-hidden="true"
            />
            <span className="text-foreground font-sans text-base leading-6 font-medium tracking-[0.4px] whitespace-nowrap">
              March 14th, 2026
            </span>
          </div>

          {/* Divider */}
          <span
            className="text-gold-muted font-sans text-base font-medium select-none"
            aria-hidden="true"
          >
            |
          </span>

          {/* Location */}
          <div className="flex w-50 items-center justify-start gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={locationIcon}
              alt=""
              className="size-6"
              aria-hidden="true"
            />
            <span className="text-foreground font-sans text-base leading-6 font-medium tracking-[0.4px]">
              British University Vietnam
              <br />
              Ecopark
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
