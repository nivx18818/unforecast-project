import { cn } from "@/lib/utils";

type RouteLoadingScreenProps = {
  title: string;
  subtitle?: string;
  brandLabel?: string;
  loadingLabel?: string;
  className?: string;
};

export default function RouteLoadingScreen({
  title,
  subtitle = "Please wait a moment while we prepare the next section.",
  brandLabel = "Unforecast Project",
  loadingLabel = "Loading",
  className,
}: RouteLoadingScreenProps) {
  return (
    <section
      className={cn(
        "bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-6",
        className,
      )}
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="from-gold/15 via-background/85 to-background pointer-events-none absolute inset-0 bg-linear-to-b"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 -top-48 h-128 bg-[radial-gradient(ellipse_at_top,var(--gold-dim),transparent_65%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="border-gold/30 bg-surface-glass/80 relative flex w-full max-w-xl flex-col items-center gap-7 rounded-[32px] border px-8 py-12 text-center shadow-(--shadow-elevation) backdrop-blur-md">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span
            className="border-gold/35 animation-duration-[1.8s] absolute inset-0 animate-ping rounded-full border"
            aria-hidden="true"
          />
          <span
            className="border-gold/45 absolute inset-[0.42rem] animate-spin rounded-full border-t-2 border-r-2 border-b-0 border-l-0"
            aria-hidden="true"
          />
          <span className="font-display text-gold text-xl leading-none font-bold">
            U
          </span>
        </div>

        <div className="space-y-3">
          <p className="text-gold font-sans text-xs font-bold tracking-[0.32em] uppercase">
            {brandLabel}
          </p>
          <h1 className="font-display text-foreground text-3xl leading-tight font-bold md:text-4xl">
            {title}
          </h1>
          <p className="text-secondary-text mx-auto max-w-[32ch] font-sans text-sm leading-6">
            {subtitle}
          </p>
        </div>

        <div className="w-full max-w-sm space-y-3" aria-hidden="true">
          <div className="bg-muted h-2 w-full animate-pulse rounded-full" />
          <div className="bg-muted animation-delay-[120ms] h-2 w-[82%] animate-pulse rounded-full" />
          <div className="bg-muted animation-delay-[240ms] h-2 w-[64%] animate-pulse rounded-full" />
        </div>
      </div>

      <span className="sr-only">{loadingLabel}</span>
    </section>
  );
}
