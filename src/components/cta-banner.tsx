/** Shown before the footer on every page except Contact. Design 2a: the button is the address itself. */
export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-16">
      <div className="flex flex-col items-start justify-between gap-8 rounded-[32px] bg-pine p-8 text-parchment sm:p-14 md:flex-row md:items-center">
        <h2 className="max-w-2xl font-serif text-[clamp(30px,4vw,42px)] leading-tight">
          Have a local problem software could help with?
        </h2>
        <a
          href="mailto:info@yakasista.com"
          className="shrink-0 rounded-[99px] bg-parchment px-6 py-3 font-medium text-pine hover:bg-card"
        >
          info@yakasista.com
        </a>
      </div>
    </section>
  );
}
