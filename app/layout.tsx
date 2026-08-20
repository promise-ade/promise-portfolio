import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const siteTitle = "Promise Adeleye — Product Manager";
const siteDescription =
  "Promise Adeleye is a Product Manager focused on solving meaningful product problems and building digital experiences that balance user value and business growth.";

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
};

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Promise Adeleye",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "Promise Adeleye",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable}`}
    >
      <body id="top" className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
