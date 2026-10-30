import Image from "next/image";

const EMAIL = "info@yakasista.com";
const COMPANY_NUMBER = "15295324";
const ICO_NUMBER = "ZC233685";

type Product = {
  name: string;
  tagline: string;
  body: string;
  status: "Live" | "Coming soon";
  /** Omit for products with nowhere public to link yet. */
  href?: string;
  linkLabel?: string;
};

const PRODUCTS: Product[] = [
  {
    name: "VillageWatch",
    tagline: "Community safety reporting",
    body: "Residents report what they see. AI anonymises each report and categorises it, incidents are mapped, and residents are alerted.",
    status: "Live",
    href: "https://villagewatch.app",
    linkLabel: "Visit villagewatch.app",
  },
  {
    name: "Clerkly",
    tagline: "AI-powered parish council minute-taker",
    body: "Records council meetings and drafts minutes in statutory format, ready for the clerk to check and approve.",
    status: "Coming soon",
    href: "https://clerkly.app",
    linkLabel: "Coming soon at clerkly.app",
  },
  {
    name: "PromptClass",
    tagline: "Classroom app for teaching prompt engineering",
    body: "Students write and test prompts, AI scores each submission against a rubric, and teachers review before progression unlocks. Five exercises from clear prompts to prompt debugging.",
    status: "Coming soon",
  },
];

const STATUS_STYLE: Record<Product["status"], string> = {
  Live: "bg-emerald-50 text-emerald-700",
  "Coming soon": "bg-brand-soft text-brand",
};

/** The Yakasista mark (from the original holding site), 280 × 450. */
function Mark({ height = 32 }: { height?: number }) {
  return <Image src="/logo.png" alt="" width={Math.round((height * 280) / 450)} height={height} priority />;
}

/**
 * The logo lockup, as on the original holding site: the mark, then
 * "YAKASISTA" in light Noto Serif JP, uppercase, widely tracked, in grey.
 * The negative right margin cancels the trailing letter-space so the
 * lockup sits on its glyphs.
 */
function Lockup({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <span className="flex items-center gap-2 sm:gap-3" aria-label="Yakasista Ltd">
      <Mark height={size === "md" ? 32 : 28} />
      <span
        aria-hidden
        className={
          size === "md"
            ? "font-serif text-[15px] font-light tracking-[4px] max-[359px]:hidden text-[#6b7280] uppercase -mr-[4px] sm:text-xl sm:tracking-[12px] sm:-mr-[12px]"
            : "font-serif text-base font-light tracking-[8px] text-[#6b7280] uppercase -mr-[8px]"
        }
      >
        Yakasista
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-2 px-4 sm:px-5">
          <a href="#top" className="shrink-0 whitespace-nowrap">
            <Lockup />
          </a>
          <nav aria-label="Main" className="flex items-center gap-0.5 text-[13px] sm:gap-1 sm:text-sm">
            {[
              ["#about", "About"],
              ["#products", "Products"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-md px-1.5 py-2 text-muted hover:bg-canvas hover:text-ink sm:px-3">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-line bg-canvas">
          <div className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
            <p className="text-sm font-medium tracking-wide text-brand">Cambridge, United Kingdom</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">Yakasista Ltd</h1>
            <p className="mt-5 max-w-2xl text-2xl font-medium text-ink sm:text-3xl">
              AI-powered software for communities
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              We build AI-powered tools that help communities report, coordinate, and stay safe.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#products" className="rounded-md bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand/90">
                Our products
              </a>
              <a href={`mailto:${EMAIL}`} className="rounded-md border border-line bg-white px-5 py-3 text-sm font-medium hover:border-brand">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="scroll-mt-16">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <h2 className="text-3xl font-semibold tracking-tight">Products</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <article key={p.name} className="flex flex-col rounded-xl border border-line p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap ${STATUS_STYLE[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand">{p.tagline}</p>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">{p.body}</p>
                  {p.href && (
                    <a href={p.href} className="mt-6 text-sm font-medium text-brand hover:underline" rel="noopener">
                      {p.linkLabel} →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 border-y border-line bg-canvas">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr]">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Yakasista Ltd is a UK-registered software company based in Cambridge, building AI-powered tools for
                local government and community organisations.
              </p>
              <dl className="grid gap-4 rounded-xl border border-line bg-white p-6 text-base sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">Registered</dt>
                  <dd className="mt-1 font-medium text-ink">England &amp; Wales</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">Based in</dt>
                  <dd className="mt-1 font-medium text-ink">Cambridge, United Kingdom</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">Company No.</dt>
                  <dd className="mt-1 font-medium text-ink">
                    <a
                      href={`https://find-and-update.company-information.service.gov.uk/company/${COMPANY_NUMBER}`}
                      className="hover:text-brand hover:underline"
                      rel="noopener"
                    >
                      {COMPANY_NUMBER}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">ICO Registration</dt>
                  <dd className="mt-1 font-medium text-ink">{ICO_NUMBER}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr]">
            <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
            <dl className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium tracking-wide text-muted uppercase">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href={`mailto:${EMAIL}`} className="font-medium text-brand hover:underline">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-wide text-muted uppercase">Location</dt>
                <dd className="mt-1 text-lg font-medium">Cambridge, United Kingdom</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      {/* Trading disclosure: company name, England & Wales, company number.
          The registered office address is deliberately not shown (owner's
          decision: it is a home address). The 2015 Trading Disclosures Regs
          expect it on the site — add a registered office service address here
          if one is taken on. */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-start sm:justify-between">
          <Lockup size="sm" />
          <div className="flex flex-col gap-1 sm:text-right">
            <span>© 2026 Yakasista Ltd · Registered in England &amp; Wales</span>
            <span>
              Company No. {COMPANY_NUMBER} · ICO Registration: {ICO_NUMBER}
            </span>
            <span>Cambridge, United Kingdom</span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        // Static, first-party JSON: safe to inline.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Yakasista Ltd",
            legalName: "Yakasista Ltd",
            url: "https://www.yakasista.com/",
            logo: "https://www.yakasista.com/logo.png",
            email: EMAIL,
            identifier: { "@type": "PropertyValue", name: "UK Company Number", value: COMPANY_NUMBER },
          }),
        }}
      />
    </>
  );
}
