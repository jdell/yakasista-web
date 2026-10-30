const EMAIL = "info@yakasista.com";

const PRODUCTS = [
  {
    name: "VillageWatch",
    tagline: "Community safety reporting",
    body: "Residents report what they see. AI anonymises each report and categorises it, incidents are mapped, and residents are alerted.",
    status: "Live",
    href: "https://villagewatch.app",
    domain: "villagewatch.app",
  },
  {
    name: "Clerkly",
    tagline: "AI-powered parish council minute-taker",
    body: "Records council meetings and drafts minutes in statutory format, ready for the clerk to check and approve.",
    status: "Coming soon",
    href: "https://clerkly.app",
    domain: "clerkly.app",
  },
];

function Mark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white" aria-hidden>
      Y
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <a href="#top" className="flex shrink-0 items-center gap-2.5 font-semibold whitespace-nowrap">
            <Mark />
            Yakasista Ltd
          </a>
          <nav aria-label="Main" className="flex items-center gap-0.5 text-[13px] sm:gap-1 sm:text-sm">
            {[
              ["#about", "About"],
              ["#products", "Products"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-md px-2 py-2 text-muted hover:bg-canvas hover:text-ink sm:px-3">
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
              Software for community safety and local government
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
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {PRODUCTS.map((p) => (
                <article key={p.name} className="flex flex-col rounded-xl border border-line p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <span
                      className={
                        p.status === "Live"
                          ? "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                          : "rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand"
                      }
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand">{p.tagline}</p>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">{p.body}</p>
                  <a href={p.href} className="mt-6 text-sm font-medium text-brand hover:underline" rel="noopener">
                    {p.status === "Live" ? "Visit" : "Coming soon at"} {p.domain} →
                  </a>
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
                Yakasista Ltd is a UK-registered software company based in Cambridge. We design and build software
                for community safety and local government.
              </p>
              <p>
                The company was founded by Joel Castro, a software engineer with more than 20 years&apos; experience
                building and running production systems.
              </p>
              <dl className="grid gap-4 rounded-xl border border-line bg-white p-6 text-base sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">Registered</dt>
                  <dd className="mt-1 font-medium text-ink">United Kingdom</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">Based in</dt>
                  <dd className="mt-1 font-medium text-ink">Cambridge</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">ICO registration</dt>
                  <dd className="mt-1 font-medium text-ink">ZC233685</dd>
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

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 font-medium text-ink">
            <Mark /> Yakasista Ltd
          </span>
          <span>© 2026 Yakasista Ltd · ICO ZC233685</span>
        </div>
      </footer>
    </>
  );
}
