import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGroteskFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HeadlineIQ: Smarter Headlines, Smarter Youp",
  description: "Stay informed with HeadlineIQ, the AI-driven platform for personalized news. Get updates in your preferred language via email, SMS, or a custom feed. With smart curation and concise summaries, HeadlineIQ delivers the news that matters most to you—anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${spaceGroteskFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
