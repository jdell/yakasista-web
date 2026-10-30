import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yakasista.com"),
  title: "Yakasista Ltd — Software for community safety and local government",
  description:
    "Yakasista Ltd is a UK software company in Cambridge building AI-powered tools that help communities report, coordinate and stay safe.",
  openGraph: {
    title: "Yakasista Ltd",
    description: "Software for community safety and local government.",
    url: "https://yakasista.com",
    siteName: "Yakasista Ltd",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
