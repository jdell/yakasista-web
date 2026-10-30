import Link from "next/link";
import { MapStage, ReportPreviewStage } from "@/components/showcase";

const PRODUCTS = [
  {
    name: "VillageWatch",
    status: "Live",
    tone: "text-green",
    labelTone: "text-green!",
    dot: "bg-green",
    line: "See something, say something, safely.",
    body: "VillageWatch lets residents report what they see. Each report is anonymised and categorised, incidents are mapped, and neighbours are alerted.",
    href: "https://villagewatch.app",
    linkLabel: "Visit villagewatch.app",
  },
  {
    name: "Clerkly",
    status: "Coming soon",
    tone: "text-rose",
    labelTone: "text-rose!",
    dot: "bg-rose",
    line: "Minutes, minus the evenings.",
    body: "Clerkly records parish and town council meetings and drafts minutes in statutory form, ready for the clerk to check and approve.",
    href: "https://clerkly.app",
    linkLabel: "clerkly.app",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — design 2a: centred, 48px 64px 0 */}
      <section className="mx-auto max-w-7xl px-5 pt-10 text-center md:px-16 md:pt-12">
        <p className="text-[15px] font-medium text-green">AI-powered software for communities</p>
        <h1 className="mx-auto mt-5 max-w-5xl font-serif text-[clamp(44px,8vw,92px)] leading-[1.02] tracking-tight text-balance">
          Safer streets start with <em className="text-green">good neighbours.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-[18px] leading-relaxed text-sage sm:text-[21px]">
          We build friendly, careful software for villages, neighbourhoods and the councils that serve them — tools that
          help people look out for each other.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#products" className="rounded-[99px] bg-pine px-6 py-3 font-medium text-parchment hover:bg-green">
            See our products
          </a>
          <Link href="/contact" className="rounded-[99px] border-[1.5px] border-pine px-6 py-3 font-medium text-pine hover:bg-card">
            Say hello
          </Link>
        </div>

        <ReportPreviewStage className="mt-14" />
      </section>

      {/* Products — 88px 64px, two columns, 64px gap */}
      <section id="products" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-16 md:py-[88px]">
        <p className="caption">Our products</p>
        <MapStage className="mt-8" />
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="flex flex-col rounded-[30px] border border-line bg-card p-8 sm:p-10">
              <p className="flex items-center gap-3">
                <span className="caption text-ink!">{p.name}</span>
                <span className={`caption flex items-center gap-1.5 ${p.labelTone}`}>
                  <span className={`size-2 rounded-full ${p.dot}`} aria-hidden />
                  {p.status}
                </span>
              </p>
              <h2 className="mt-5 font-serif text-[clamp(34px,4vw,48px)] leading-[1.08] tracking-tight">{p.line}</h2>
              <p className="mt-5 flex-1 leading-relaxed text-sage">{p.body}</p>
              <a href={p.href} rel="noopener" className={`mt-8 font-medium hover:underline ${p.tone}`}>
                {p.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
