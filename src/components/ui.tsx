import { cn } from "@/components/cn";

/** Image placeholder until real photography exists: warm stripes and a caption. */
export function Photo({ label, className, arch = false }: { label: string; className?: string; arch?: boolean }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={cn(
        "relative flex items-end overflow-hidden border border-line bg-[repeating-linear-gradient(135deg,#efe6d4_0,#efe6d4_14px,#e9dfca_14px,#e9dfca_28px)] p-5",
        arch ? "rounded-[200px_200px_32px_32px]" : "rounded-[32px]",
        className,
      )}
    >
      <span className="caption rounded-full bg-card/90 px-3 py-1.5">{label}</span>
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="caption">{eyebrow}</p>
      <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-6xl">{title}</h1>
      {children && <div className="mt-6 text-lg leading-relaxed text-sage">{children}</div>}
    </div>
  );
}
