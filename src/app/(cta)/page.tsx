import Link from "next/link";
import { Photo } from "@/components/ui";

const PRODUCTS = [
  {
    name: "VillageWatch",
    status: "Live",
    tone: "text-green",
    labelTone: "text-green!",
    dot: "bg-green",
    line: "See something, say something, safely.",
    body: "Residents report what they see. Each report is anonymised and categorised, incidents are mapped, and neighbours are alerted.",
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
    body: "Records parish and town council meetings and drafts minutes in statutory form, ready for the clerk to check and approve.",
    href: "https://clerkly.app",
    linkLabel: "clerkly.app",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="caption">Yakasista Ltd · Cambridge</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Safer streets start with <em className="text-green">good neighbours.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage">
            We build friendly, careful software for villages, neighbourhoods and the councils that serve them — tools
            that help people look out for each other.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#products" className="rounded-[99px] bg-pine px-6 py-3 font-medium text-parchment hover:bg-green">
              See our products
            </a>
            <Link href="/contact" className="rounded-[99px] border border-line bg-card px-6 py-3 font-medium hover:border-sage">
              Say hello
            </Link>
          </div>
        </div>
        <Photo label="Village green at dusk" className="h-[420px]" />
      </section>

      <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20">
        <p className="caption">Our products</p>
        <div className="mt-6 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="flex flex-col rounded-[30px] border border-line bg-card p-8 sm:p-10">
              <p className={`caption flex items-center gap-2 ${p.labelTone}`}>
                <span className={`size-2 rounded-full ${p.dot}`} aria-hidden />
                {p.status}
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-tight">{p.name}</h2>
              <p className="mt-2 font-serif text-xl text-ink italic">{p.line}</p>
              <p className="mt-4 flex-1 leading-relaxed text-sage">{p.body}</p>
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
