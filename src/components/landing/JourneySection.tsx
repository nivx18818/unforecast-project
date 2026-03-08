import { cn } from "@/lib/utils";

const bgImage =
  "https://www.figma.com/api/mcp/asset/e52ac47a-3344-498c-a568-bbeff81977ee";

const phases = [
  {
    number: "01",
    date: "March 02 – 03, 2026",
    title: "Pre-event: Mini Cultural Fair",
    active: false,
  },
  {
    number: "02",
    date: "March 14th, 2026",
    title: "Main event: Ceremony of Gratitude & Growth",
    active: true,
  },
  {
    number: "03",
    date: "Tentatively late March 2026",
    title: "Post-event: Charity trip to Saint An Bui Chu Orphanage",
    active: false,
  },
];

const galleryImages = [
  {
    src: "https://www.figma.com/api/mcp/asset/271ae0a2-7827-4734-bf44-f9f158ca38eb",
    alt: "DSC04304",
    className: "absolute left-[33.97%] top-[76.56%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/5957fa8d-b072-4f7a-9429-bb833c49fe3a",
    alt: "DSC04278",
    className: "absolute left-0 top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/a40a73d0-500f-4fbe-b0a6-1ce9d8246108",
    alt: "DSC04267",
    className: "absolute left-0 top-[25.93%] w-[32.05%] h-[74.06%]",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/f774b13f-b294-436d-b4da-334aa045f9f2",
    alt: "DSC04250",
    className: "absolute left-[33.97%] top-0 w-[32.05%] h-[74.06%]",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/3ef21697-6c8b-459b-80b5-d22744c350b8",
    alt: "DSC04203",
    className: "absolute left-[67.94%] top-0 w-[32.05%] h-[23.43%]",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/bb2aa575-1d33-456f-a35f-99cef3d8e5df",
    alt: "DSC04179",
    className: "absolute left-[67.94%] top-[25.93%] w-[32.05%] h-[23.43%]",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/a8da1d5d-50a2-4177-9eb6-903c09945e43",
    alt: "IMG_6171",
    className: "absolute left-[67.94%] top-[51.87%] w-[32.05%] h-[48.12%]",
  },
];

const sectionGradient = {
  background:
    "linear-gradient(180deg, #010E1B 0%, rgba(1,14,27,0) 40%, rgba(1,14,27,0) 60%, #010E1B 100%)",
};

export default function JourneySection() {
  return (
    <section id="journey" className="relative bg-background overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-[0_0_1348px_0] opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white mix-blend-saturation" />
      </div>
      <div
        className="absolute inset-[0_0_1348px_0] pointer-events-none"
        style={sectionGradient}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl flex flex-col px-6 lg:px-12 xl:px-24">
        {/* ── Project Phases ────────────────────────────────── */}
        <div className="relative overflow-hidden pt-24 pb-20">
          {/* Subtle radial gold glow behind content */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at -5% -5%, rgba(227,170,49,1) 0%, rgba(227,170,49,0) 50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-20 w-full">
            {/* Heading */}
            <div className="flex flex-col gap-4 items-center text-center w-full">
              <span className="eyebrow">Journey</span>
              <h2 className="font-display font-bold text-[48px] leading-12 text-foreground">
                Project Phases
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative flex items-start justify-between">
              {/* Connector line */}
              <div
                className="absolute left-0 right-0 top-5.5 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(227,170,49,0) 0%, rgba(227,170,49,0.4) 50%, rgba(227,170,49,0) 100%)",
                }}
                aria-hidden="true"
              />

              {phases.map(({ number, date, title, active }) => (
                <div key={number} className="relative flex-1 min-w-0">
                  {/* Phase node */}
                  <div className="mb-6">
                    <div
                      className={cn(
                        "size-12 rounded-pill border-2 border-gold flex items-center justify-center",
                        active
                          ? "bg-gold shadow-gold-active"
                          : "bg-transparent shadow-gold-subtle",
                      )}
                      aria-hidden="true"
                    >
                      <span
                        className={cn(
                          "font-sans font-bold text-base leading-6",
                          active ? "text-primary-foreground" : "text-gold",
                        )}
                      >
                        {number}
                      </span>
                    </div>
                  </div>
                  <p className="font-sans font-bold text-sm leading-5 tracking-[0.7px] uppercase text-gold mb-2">
                    {date}
                  </p>
                  <p className="font-display font-normal text-[24px] leading-8 text-foreground pr-16">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Pre-Event Recap / Gallery ─────────────────────── */}
        <div className="relative flex flex-col gap-16 py-0 pb-24">
          {/* Text intro */}
          <div className="flex flex-col gap-2 w-full max-w-[703px]">
            <span className="font-sans font-bold text-sm leading-5 tracking-[2.8px] uppercase text-gold">
              Pre-Event Recap
            </span>
            <h2 className="font-display font-bold text-[48px] leading-12 text-foreground">
              A Glimpse into the Past
            </h2>
            <p className="mt-2 font-sans text-base leading-6 text-muted-foreground">
              <strong className="font-bold text-muted-foreground">
                Mini Cultural Fair:
              </strong>{" "}
              Featuring local specialties and traditional food from the four
              hometown cities of 4 team organizers: Nam Dinh, Bac Ninh, Hai
              Phong, Hanoi. A charity fundraising campaign organised by
              Unforecast Project, where cultural spirit and regional stories are
              brought to life through food, interactive activities, and shared
              experiences.
            </p>
          </div>

          {/* Masonry gallery */}
          <div className="relative w-full aspect-[1248/960] mx-auto overflow-clip">
            {galleryImages.map(({ src, alt, className }) => (
              <div
                key={alt}
                className={cn("rounded-card-sm overflow-hidden", className)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-cover rounded-card-sm"
                />
                {/* Subtle gold radial tint on each photo */}
                <div
                  className="absolute inset-0 rounded-card-sm pointer-events-none opacity-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, rgba(227,170,49,1) 0%, rgba(0,0,0,1) 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
