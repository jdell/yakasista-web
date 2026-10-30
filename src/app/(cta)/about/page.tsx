import type { Metadata } from "next";
import { PageIntro, Photo } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

const FACTS = [
  ["Registered", "England & Wales"],
  ["Based in", "Cambridge, UK"],
  ["Company No.", "15295324"],
  ["ICO", "ZC233685"],
];

export default function About() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <PageIntro eyebrow="About" title="A small company in Cambridge.">
          <p>
            Yakasista Ltd is a UK-registered software company building AI-powered tools for local government and
            community organisations.
          </p>
          <p className="mt-4">
            We keep our products small, careful and easy to use, because the people using them — volunteer coordinators,
            parish clerks, residents — have better things to do than learn software.
          </p>
        </PageIntro>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-line bg-line">
          {FACTS.map(([label, value]) => (
            <div key={label} className="bg-card p-5 sm:p-6">
              <dt className="caption">{label}</dt>
              <dd className="mt-2 font-serif text-xl">
                {label === "Company No." ? (
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/15295324"
                    rel="noopener"
                    className="hover:text-green hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* Placeholder until assets/bradfield-centre.png is supplied — drop it in public/ and swap this for next/image. */}
      <Photo label="The Bradfield Centre, Cambridge Science Park" arch className="h-[460px] lg:h-[560px]" />
    </section>
  );
}
