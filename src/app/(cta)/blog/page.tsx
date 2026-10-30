import type { Metadata } from "next";
import { PageIntro, Photo } from "@/components/ui";

export const metadata: Metadata = { title: "Blog" };

const POSTS = [
  { title: "Why anonymity matters in neighbourhood reporting", tag: "Community safety" },
  { title: "What a parish clerk's evening looks like", tag: "Local government" },
  { title: "Building software for places, not markets", tag: "How we work" },
];

export default function Blog() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-20 md:pt-20">
      <PageIntro eyebrow="Blog" title="Notes from the village green.">
        <p>Writing on community safety, local councils and how we build. The first posts are on their way.</p>
      </PageIntro>
      <div className="mt-14 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {POSTS.map((post) => (
          <article key={post.title} className="flex flex-col overflow-hidden rounded-[28px] border border-line bg-card">
            <Photo label={post.tag} className="h-52 rounded-none border-0 border-b" />
            <div className="flex flex-1 flex-col p-7">
              <span className="caption self-start rounded-full border border-line px-2.5 py-1">Draft</span>
              <h2 className="mt-4 font-serif text-2xl leading-snug tracking-tight">{post.title}</h2>
              <p className="mt-auto pt-6 text-sm text-sage">Coming soon</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
