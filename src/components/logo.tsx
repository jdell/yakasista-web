import Image from "next/image";
import Link from "next/link";

/** The mark (280 × 450) and YAKASISTA in Newsreader, tracked .3em. */
export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Yakasista Ltd — home">
      <Image src="/logo.png" alt="" width={19} height={30} priority />
      <span aria-hidden className="mr-[-0.3em] font-serif text-[17px] tracking-[0.3em] text-wordmark uppercase max-[359px]:hidden sm:text-lg">
        Yakasista
      </span>
    </Link>
  );
}
