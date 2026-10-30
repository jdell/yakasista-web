import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PhoneShot, ScreenshotStage } from "@/components/ui";
import { cn } from "@/components/cn";

/**
 * Supplied product images. Drop a file at public/images/vw-report.png or
 * vw-map.png and redeploy: it replaces the stand-in below. Checked at build
 * time (these pages are static).
 */
function supplied(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "images", file)) ? `/images/${file}` : null;
}

function Caption({ children }: { children: React.ReactNode }) {
  return <span className="caption absolute bottom-4 left-5 rounded-full bg-card/90 px-3 py-1.5">{children}</span>;
}

/** A supplied composite image, shown whole inside the stage. */
function SuppliedImage({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-contain p-4 sm:p-6" />;
}

/* ------------------------------------------------------------------ */
/* Hero: the public report preview                                     */
/* ------------------------------------------------------------------ */

/**
 * Stand-in for the VillageWatch public report page until a screenshot of it
 * (with demo data) is supplied: a report's shape — category pill, heading,
 * text, pattern note — with no invented report text.
 */
function ReportSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex flex-col", compact ? "gap-2.5 p-3.5" : "gap-3.5 p-6")} aria-hidden>
      <div className="flex items-center gap-2">
        <span className={cn("rounded-full bg-[#fde8e4]", compact ? "h-3.5 w-12" : "h-5 w-20")} />
        <span className={cn("rounded-full bg-[#e7ece6]", compact ? "h-3.5 w-16" : "h-5 w-28")} />
      </div>
      <span className={cn("rounded bg-ink/80", compact ? "h-3 w-4/5" : "h-5 w-3/4")} />
      <span className={cn("rounded bg-ink/15", compact ? "h-2 w-full" : "h-3 w-full")} />
      <span className={cn("rounded bg-ink/15", compact ? "h-2 w-11/12" : "h-3 w-11/12")} />
      <span className={cn("rounded bg-ink/15", compact ? "h-2 w-2/3" : "h-3 w-2/3")} />
      <div className={cn("rounded-xl border border-[#f2dfb0] bg-[#fdf6e3]", compact ? "mt-1 h-10" : "mt-2 h-16")} />
      <span className={cn("rounded bg-ink/10", compact ? "h-2 w-1/2" : "h-3 w-1/2")} />
    </div>
  );
}

export function ReportPreviewStage({ className }: { className?: string }) {
  const src = supplied("vw-report.png");
  return (
    <ScreenshotStage className={cn("h-[420px] text-left", className)}>
      {src ? (
        <SuppliedImage src={src} alt="VillageWatch's public report page on a laptop and a phone" />
      ) : (
        <>
          {/* Desktop browser window, left */}
          <div className="absolute top-10 left-[4%] w-[86%] -rotate-2 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl md:top-12 md:left-[10%] md:w-[60%]">
            <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f4f4f2] px-4 py-2.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#e0a097]" />
              <span className="size-2.5 rounded-full bg-[#e8cf8f]" />
              <span className="size-2.5 rounded-full bg-[#a9cf9f]" />
              <span className="ml-3 h-4 w-48 rounded-full bg-white" />
            </div>
            <ReportSkeleton />
          </div>
          {/* Phone, right, overlapping */}
          <div className="absolute right-[5%] bottom-[-60px] w-[150px] rotate-6 overflow-hidden rounded-[28px] border-[6px] border-ink bg-white shadow-2xl md:right-[12%] md:bottom-[-110px] md:w-[200px]">
            <div className="mx-auto mt-2 h-3 w-14 rounded-full bg-ink" aria-hidden />
            <ReportSkeleton compact />
            <div className="h-24" aria-hidden />
          </div>
          <span className="sr-only">Illustration of the VillageWatch public report page</span>
        </>
      )}
      <Caption>VillageWatch — Public report preview</Caption>
    </ScreenshotStage>
  );
}

/* ------------------------------------------------------------------ */
/* Products: the village map                                           */
/* ------------------------------------------------------------------ */

/** VillageWatch's map in dark mode — its own demo-data screenshots. */
export function MapStage({ className }: { className?: string }) {
  const src = supplied("vw-map.png");
  return (
    <ScreenshotStage className={cn("h-[420px] bg-[#e8ece6] md:h-[480px]", className)}>
      {src ? (
        <SuppliedImage src={src} alt="VillageWatch's village map on a laptop and a phone" />
      ) : (
        <>
          <div className="absolute top-10 left-[4%] w-[86%] -rotate-2 overflow-hidden rounded-2xl border border-black/10 shadow-xl md:top-12 md:left-[6%] md:w-[66%]">
            <Image
              src="/screenshots/villagewatch-desktop.png"
              alt="VillageWatch on a laptop: the village map with pins, the reports list, timeline and filters"
              width={1280}
              height={720}
              sizes="(min-width: 768px) 66vw, 86vw"
              className="h-auto w-full"
            />
          </div>
          <PhoneShot
            src="/screenshots/villagewatch-phone.png"
            alt="VillageWatch on a phone: the same map"
            width={150}
            intrinsic={[375, 812]}
            className="absolute right-[5%] bottom-[-90px] rotate-6 md:right-[8%] md:bottom-[-120px] md:w-[210px]!"
          />
        </>
      )}
      <Caption>VillageWatch · demo data</Caption>
    </ScreenshotStage>
  );
}
