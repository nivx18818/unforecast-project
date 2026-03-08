import Image from "next/image";

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="flex items-center justify-center px-6 py-16 md:p-24 bg-background/30 w-full"
      aria-label="Venue"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center max-w-7xl w-full">
        {/* ── Media block ─────────────────────────────── */}
        <div className="relative flex-1 min-w-0 w-full">
          {/* Offset gold wash panel */}
          <div
            className="absolute inset-[16px_-16px_-16px_16px] rounded-media-xl bg-gold-dim pointer-events-none"
            aria-hidden="true"
          />
          {/* Photo */}
          <div className="relative rounded-media-xl overflow-hidden aspect-4/3 w-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/venue-ballroom.jpg"
              alt="Theatre Pod Sir Graeme Davies 3-3 at British University Vietnam"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold tint overlay */}
            <div
              className="absolute inset-0 bg-primary/10 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ── Text block ──────────────────────────────── */}
        <div className="flex-1 min-w-0 flex flex-col items-start gap-4">
          <span className="font-sans font-bold text-sm leading-5 tracking-[2.8px] uppercase text-primary">
            Location
          </span>
          <h2 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] md:leading-12 text-foreground">
            Theatre Pod Sir
            <br />
            Graeme Davies 3-3
          </h2>
          <div className="pt-2">
            <p className="font-sans font-normal text-[18px] leading-[29.25px] text-secondary md:max-w-119.25">
              Set within the campus of British University Vietnam at Ecopark,
              Sir Graeme Davies Theatre Pod 3-3 offers a modern, intimate stage
              for inspiring moments.
            </p>
          </div>
          <div className="flex flex-col pt-2 pb-4">
            <p className="font-sans font-medium text-[18px] leading-7 text-foreground">
              British University Vietnam
            </p>
            <p className="font-sans font-normal text-[16px] leading-6 text-muted-foreground">
              Lot GD-01, Ecopark Urban Area, Hung Yen
            </p>
          </div>
          {/* Directions link */}
          <a
            href="https://maps.app.goo.gl/v4Ewg8xRkrU6fnzA7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pb-1.25 border-b border-primary text-primary font-sans font-medium text-[18px] leading-7 tracking-[0.45px] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
          >
            Get Directions
            <svg
              className="w-[9.333px] h-[9.333px] fill-current"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M7.102 5.25H0V4.083H7.102L3.835 0.817L4.667 0L9.333 4.667L4.667 9.333L3.835 8.517L7.102 5.25z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
