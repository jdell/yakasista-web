import Link from "next/link";

/** Shown before the footer on every page except Contact. */
export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] bg-pine px-8 py-10 text-parchment sm:px-12 md:flex-row md:items-center">
        <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Have a local problem software could help with?</h2>
        <Link href="/contact" className="shrink-0 rounded-[99px] bg-parchment px-6 py-3 font-medium text-pine hover:bg-card">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
