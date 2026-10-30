import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-20 md:pt-20">
      <PageIntro eyebrow="Services" title="Software shaped around how your place works.">
        <p>
          Every village, parish and neighbourhood runs a little differently. We start from how things already work
          and build the smallest useful thing.
        </p>
      </PageIntro>
      <div className="mt-14 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        <article className="flex flex-col rounded-[32px] border border-line bg-card p-8 sm:p-10">
          <p className="caption">01</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight">Use our products</h2>
          <p className="mt-4 leading-relaxed text-sage">
            VillageWatch for community safety reporting, and Clerkly for council minutes. Set up for your place, with
            help getting your community or clerk started.
          </p>
          <ul className="mt-6 space-y-2 text-sage">
            <li>· Set-up and onboarding</li>
            <li>· Training for coordinators and clerks</li>
            <li>· Ongoing support</li>
          </ul>
          <Link href="/#products" className="mt-auto pt-8 font-medium text-green hover:underline">
            See the products →
          </Link>
        </article>
        <article className="flex flex-col rounded-[32px] bg-pine p-8 text-parchment sm:p-10">
          <p className="caption text-parchment/70!">02</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight">Build something new</h2>
          <p className="mt-4 leading-relaxed text-parchment/85">
            Have a local problem that off-the-shelf software doesn&apos;t fit? We design and build small, careful tools
            with councils and community organisations — from a first conversation to something people use.
          </p>
          <ul className="mt-6 space-y-2 text-parchment/85">
            <li>· Discovery with the people who&apos;ll use it</li>
            <li>· Design and build</li>
            <li>· Hosting in the UK</li>
          </ul>
          <Link href="/contact" className="mt-auto self-start pt-8">
            <span className="inline-block rounded-[99px] bg-parchment px-6 py-3 font-medium text-pine hover:bg-card">
              Tell us about it
            </span>
          </Link>
        </article>
      </div>
    </section>
  );
}
