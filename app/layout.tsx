import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlotte Mangéli | Procurement & Supply Chain Leader",
  description: "Senior procurement and supply chain leader advancing critical infrastructure across Africa.",
  openGraph: {
    title: "Charlotte Mangéli | Procurement & Supply Chain Leader",
    description: "Senior procurement and supply chain leader advancing critical infrastructure across Africa.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Charlotte Mangéli — Procurement, Supply Chain, Africa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlotte Mangéli | Procurement & Supply Chain Leader",
    description: "Senior procurement and supply chain leader advancing critical infrastructure across Africa.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
