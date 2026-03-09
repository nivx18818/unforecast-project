import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function ScheduleSection() {
  const t = useTranslations("schedule");
  const itemsData = t.raw("items") as Array<{
    time: string;
    events: string[];
  }>;
  const scheduleItems = itemsData.map((item, i) => ({
    ...item,
    side: (i % 2 === 0 ? "right" : "left") as "right" | "left",
  }));

  return (
    <section
      id="schedule"
      className="bg-background mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-12 px-6 py-16 md:gap-16 md:px-24 md:py-24"
    >
      {/* Heading */}
      <div className="flex w-full flex-col items-center gap-4">
        <h2 className="font-display text-foreground text-center text-4xl leading-tight font-bold md:text-5xl md:leading-12 lg:text-[48px]">
          {t("heading")}
        </h2>
        <p className="text-muted-foreground text-center font-sans text-base leading-6 md:text-lg">
          {t("subheading")}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex w-full max-w-3xl flex-col gap-8 md:gap-12">
        {/* Center line (Desktop) / Left line (Mobile) */}
        <div
          className="bg-primary/20 pointer-events-none absolute top-0 bottom-0 left-3.75 w-px -translate-x-1/2 md:left-1/2"
          aria-hidden="true"
        />

        {scheduleItems.map(({ time, events, side }) => {
          const isRight = side === "right";

          return (
            <div
              key={time}
              className="relative flex w-full flex-col justify-between gap-1 pl-12 md:flex-row md:items-center md:gap-0 md:pl-0"
            >
              {/* Dot mapping to the line */}
              <div
                className="rounded-pill bg-primary absolute top-2 left-3.75 z-10 size-3 -translate-x-1/2 shadow-(--shadow-gold-dot) md:top-1/2 md:left-1/2 md:-translate-y-1/2"
                aria-hidden="true"
              />

              {/* Left column */}
              <div
                className={cn(
                  "flex min-w-0 flex-1 flex-col md:pr-8",
                  isRight
                    ? "order-1 items-start md:order-0 md:items-end"
                    : "order-2 mt-1 items-start md:order-0 md:mt-0 md:items-end",
                )}
              >
                {isRight ? (
                  <time className="text-primary font-sans text-lg leading-7 font-bold tracking-[1px] whitespace-normal md:text-right md:text-[20px] md:whitespace-nowrap">
                    {time}
                  </time>
                ) : (
                  <div className="flex w-full flex-col items-start gap-1 md:items-end">
                    {events.map((e) => (
                      <p
                        key={e}
                        className="text-foreground font-sans text-lg leading-7 font-normal whitespace-normal md:text-right md:text-[20px]"
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
                  "flex min-w-0 flex-1 flex-col items-start md:pl-8",
                  !isRight
                    ? "order-1 md:order-0"
                    : "order-2 mt-1 md:order-0 md:mt-0",
                )}
              >
                {!isRight ? (
                  <time className="text-primary font-sans text-lg leading-7 font-bold tracking-[1px] whitespace-normal md:text-[20px] md:whitespace-nowrap">
                    {time}
                  </time>
                ) : (
                  <div className="flex w-full flex-col items-start gap-1">
                    {events.map((e) => (
                      <p
                        key={e}
                        className="text-foreground font-sans text-lg leading-7 font-normal whitespace-normal md:text-[20px]"
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
