"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive } from "@/components/nav-links";

/**
 * Small-screen menu: a <details> dropdown (works without JS). The header stays
 * mounted across client-side navigation, so close it whenever the route changes.
 */
export function MobileMenu({ nav }: { nav: { href: string; label: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="group relative md:hidden">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-[99px] border border-line bg-card px-4 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
        Menu
        <span aria-hidden className="transition group-open:rotate-180">▾</span>
      </summary>
      <nav aria-label="Main" className="absolute right-0 mt-2 flex w-56 flex-col rounded-[20px] border border-line bg-card p-2 shadow-lg">
        {nav.map((n) => {
          const active = isActive(n.href, pathname);
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={active ? "rounded-xl px-3 py-2.5 font-medium text-green" : "rounded-xl px-3 py-2.5 hover:bg-parchment"}
            >
              {n.label}
            </Link>
          );
        })}
        <Link href="/contact" className="mt-1 rounded-[99px] bg-pine px-4 py-2.5 text-center font-medium text-parchment">
          Get in touch
        </Link>
      </nav>
    </details>
  );
}
