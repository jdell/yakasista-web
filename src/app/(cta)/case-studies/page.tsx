import type { Metadata } from "next";
import { PageIntro, Photo } from "@/components/ui";

export const metadata: Metadata = { title: "Case studies" };

const STEPS = [
  ["A resident reports", "Someone sees something worrying and reports it from their phone in under a minute — what, where and when."],
  ["Personal details come out", "AI removes names and identifying details and sorts the report into a category, so it can be shared without singling anyone out."],
  ["A coordinator reviews", "A local volunteer coordinator checks the report before it goes on the village map."],
  ["Neighbours are alerted", "Residents nearby get an alert, and patterns across reports are flagged before anyone has to join the dots by hand."],
];

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-20 md:pt-20">
      <PageIntro eyebrow="Case studies" title="VillageWatch: from a report to a safer street.">
        <p>How a village uses VillageWatch to turn what residents notice into something neighbours can act on.</p>
      </PageIntro>
      <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
        <ol className="space-y-4">
          {STEPS.map(([title, body], i) => (
            <li key={title} className="flex gap-5 rounded-[28px] border border-line bg-card p-6 sm:p-7">
              <span className="font-serif text-4xl leading-none text-green">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-serif text-2xl tracking-tight">{title}</h2>
                <p className="mt-2 leading-relaxed text-sage">{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <Photo label="A quiet high street" className="h-[420px] lg:sticky lg:top-24 lg:h-[520px]" />
      </div>
      <p className="mt-12 rounded-[28px] border border-dashed border-line px-6 py-5 text-sage">
        <span className="caption mr-3">Note</span>
        More stories will follow as communities and councils start using our products.
      </p>
    </section>
  );
}
