import { cn } from "@/lib/utils";

const scheduleItems = [
  {
    time: "13:00 – 13:45",
    events: ["Check-in", "Welcome drink"],
    side: "right" as const,
  },
  {
    time: "13:45 – 14:30",
    events: ["Showcase and interactive zone", "Graduation gallery"],
    side: "left" as const,
  },
  {
    time: "14:30 – 16:15",
    events: ["Main ceremony"],
    side: "right" as const,
  },
  {
    time: "16:15 – 17:00",
    events: ["Networking session", "Tea break"],
    side: "left" as const,
  },
];

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="flex flex-col items-center justify-center gap-12 md:gap-16 px-6 py-16 md:px-24 md:py-24 bg-background max-w-5xl mx-auto w-full"
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-12 text-foreground text-center">
          Event Schedule
        </h2>
        <p className="font-sans text-base md:text-lg leading-6 text-muted-foreground text-center">
          We are honored and delighted to welcome you!
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-8 md:gap-12 w-full max-w-3xl">
        {/* Center line (Desktop) / Left line (Mobile) */}
        <div
          className="absolute left-[15px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px pointer-events-none bg-primary/20"
          aria-hidden="true"
        />

        {scheduleItems.map(({ time, events, side }) => {
          const isRight = side === "right";

          return (
            <div
              key={time}
              className="relative flex flex-col md:flex-row md:items-center justify-between w-full pl-12 md:pl-0 gap-1 md:gap-0"
            >
              {/* Dot mapping to the line */}
              <div
                className="absolute left-[15px] md:left-1/2 -translate-x-1/2 top-[8px] md:top-1/2 md:-translate-y-1/2 size-3 rounded-pill bg-primary z-10 shadow-[var(--shadow-gold-dot)]"
                aria-hidden="true"
              />

              {/* Left column */}
              <div
                className={cn(
                  "flex-1 min-w-0 flex flex-col",
                  isRight
                    ? "order-1 md:order-none items-start md:items-end"
                    : "order-2 md:order-none mt-1 md:mt-0 items-start md:items-end md:pr-8",
                )}
              >
                {isRight ? (
                  <time className="font-sans font-bold text-lg md:text-[20px] leading-7 tracking-[1px] text-primary whitespace-normal md:whitespace-nowrap md:text-right md:pr-8">
                    {time}
                  </time>
                ) : (
                  <div className="flex flex-col items-start md:items-end gap-1 w-full">
                    {events.map((e) => (
                      <p
                        key={e}
                        className="font-sans font-normal text-lg md:text-[20px] leading-7 text-foreground md:text-right whitespace-normal"
                      >
                        {e}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Right column */}
              <div
                className={cn(
                  "flex-1 min-w-0 flex flex-col items-start",
                  !isRight
                    ? "order-1 md:order-none"
                    : "order-2 md:order-none mt-1 md:mt-0 md:pl-8",
                )}
              >
                {!isRight ? (
                  <time className="font-sans font-bold text-lg md:text-[20px] leading-7 tracking-[1px] text-primary whitespace-normal md:whitespace-nowrap md:pl-8">
                    {time}
                  </time>
                ) : (
                  <div className="flex flex-col items-start gap-1 w-full">
                    {events.map((e) => (
                      <p
                        key={e}
                        className="font-sans font-normal text-lg md:text-[20px] leading-7 text-foreground whitespace-normal"
                      >
                        {e}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
