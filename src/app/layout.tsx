import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yakasista.com"),
  title: { default: "Yakasista Ltd — Software for good neighbours", template: "%s · Yakasista Ltd" },
  description:
    "Yakasista Ltd is a small software company in Cambridge building tools for community safety and local councils: VillageWatch and Clerkly.",
  openGraph: { siteName: "Yakasista Ltd", locale: "en_GB", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${newsreader.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}>
      <body className="flex min-h-svh flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
