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
      className="relative flex flex-col items-center min-h-240 overflow-hidden bg-background pb-20"
      aria-label="Hero"
    >
      {/* Cinematic backdrop */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-60 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top scale-125 md:scale-150"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImageOverlay}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,14,27,0) 0%, rgba(1,14,27,0.5) 50%, #010E1B 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center w-full max-w-4xl px-6 pt-32 pb-20 text-center">
        {/* Title block */}
        <div className="flex flex-col items-center gap-0 drop-shadow-md">
          <h1 className="font-display font-bold text-[72px] leading-24 text-gold whitespace-nowrap">
            Unforecast Project
          </h1>
          <p
            className={cn(
              "font-display font-bold text-[72px] leading-24 text-foreground whitespace-nowrap",
            )}
          >
            Ceremony of Gratitude and Growth
          </p>
        </div>

        {/* Subtitle */}
        <p className="mt-4 font-sans font-normal text-[20px] leading-7 text-secondary max-w-2xl">
          A capstone project by final-year BUV Events Management students
        </p>

        {/* Metadata row */}
        <div className="mt-6 flex items-center gap-8">
          {/* Date */}
          <div className="flex items-center gap-2 w-50 justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={calendarIcon}
              alt=""
              className="size-6"
              aria-hidden="true"
            />
            <span className="font-sans font-medium text-base leading-6 tracking-[0.4px] text-foreground whitespace-nowrap">
              March 14th, 2026
            </span>
          </div>

          {/* Divider */}
          <span
            className="font-sans font-medium text-base text-gold-muted select-none"
            aria-hidden="true"
          >
            |
          </span>

          {/* Location */}
          <div className="flex items-center gap-2 w-50 justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={locationIcon}
              alt=""
              className="size-6"
              aria-hidden="true"
            />
            <span className="font-sans font-medium text-base leading-6 tracking-[0.4px] text-foreground">
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
