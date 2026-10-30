"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/cn";

export type NavItem = { href: string; label: string };

/**
 * The page a nav link points at, without its #fragment: Products ("/#products")
 * belongs to the home page, so it is the active link there.
 */
export function isActive(href: string, pathname: string) {
  const path = href.split("#")[0] || "/";
  return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
}

/**
 * Desktop nav links (design 2a): ink, a transparent 2px bottom border and
 * 4px vertical padding; the active one turns village green, border included.
 */
export function NavLinks({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname();
  return nav.map((n) => {
    const active = isActive(n.href, pathname);
    return (
      <Link
        key={n.href}
        href={n.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "border-b-2 py-1 text-[15px] transition-colors",
          active ? "border-green text-green" : "border-transparent text-ink hover:text-green",
        )}
      >
        {n.label}
      </Link>
    );
  });
}
