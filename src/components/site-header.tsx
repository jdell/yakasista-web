import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
];

/** Sticky frosted header. Full nav from md up; a dropdown menu below. */
export function SiteHeader() {
  return (
    <header className="frosted sticky top-0 z-40 border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-3.5 py-2 text-[15px] text-sage hover:bg-card hover:text-ink">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 rounded-[99px] bg-pine px-5 py-2.5 text-[15px] font-medium text-parchment hover:bg-green">
            Get in touch
          </Link>
        </nav>
        <MobileMenu nav={NAV} />
      </div>
    </header>
  );
}
