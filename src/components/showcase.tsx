import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PhoneShot, ScreenshotStage } from "@/components/ui";
import { cn } from "@/components/cn";

/**
 * A supplied product image. Drop a file at public/images/vw-map.png and
 * redeploy: it replaces the hero screenshots below.
 * Checked at build time (these pages are static).
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
/* The village map — the home page's one image, in the hero            */
/* ------------------------------------------------------------------ */

/**
 * VillageWatch's map in dark mode — its own demo-data screenshots, desktop
 * and phone overlapping. The hero's image (420px, #dfe7dc); the "products"
 * variant (taller, lighter green-grey) is not used on the home page.
 */
export function MapStage({ variant = "products", className }: { variant?: "hero" | "products"; className?: string }) {
  const src = supplied("vw-map.png");
  const hero = variant === "hero";
  return (
    <ScreenshotStage className={cn(hero ? "h-[420px] text-left" : "h-[420px] bg-[#e8ece6] md:h-[480px]", className)}>
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
              priority={hero}
              className="h-auto w-full"
            />
          </div>
          <PhoneShot
            src="/screenshots/villagewatch-phone.png"
            alt="VillageWatch on a phone: the same map"
            width={150}
            intrinsic={[375, 812]}
            priority={hero}
            className="absolute right-[5%] bottom-[-90px] rotate-6 md:right-[8%] md:bottom-[-120px] md:w-[210px]!"
          />
        </>
      )}
      <Caption>VillageWatch · demo data</Caption>
    </ScreenshotStage>
  );
}
