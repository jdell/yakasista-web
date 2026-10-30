import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLinks } from "@/components/nav-links";

/** Case studies still exists as a route, but is deliberately not in the nav (design 2a). */
export const NAV = [
  { href: "/#products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

/** Sticky frosted header. Full nav from md up; a dropdown menu below. */
export function SiteHeader() {
  return (
    <header className="frosted sticky top-0 z-40 border-b border-line">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-16">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <NavLinks nav={NAV} />
          <Link href="/contact" className="rounded-[99px] bg-pine px-5 py-2.5 text-[15px] font-medium text-parchment hover:bg-green">
            Get in touch
          </Link>
        </nav>
        <MobileMenu nav={NAV} />
      </div>
    </header>
  );
}
