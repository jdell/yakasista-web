import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// The wordmark's face, as on the original holding site. Latin glyphs, light weight only.
const notoSerif = Noto_Serif_JP({ variable: "--font-noto-serif", subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  metadataBase: new URL("https://yakasista.com"),
  title: "Yakasista Ltd — AI-powered software for communities",
  description:
    "Yakasista Ltd is a UK software company in Cambridge building AI-powered tools for community safety, local government and education.",
  openGraph: {
    title: "Yakasista Ltd",
    description: "AI-powered software for communities.",
    url: "https://yakasista.com",
    siteName: "Yakasista Ltd",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${notoSerif.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
