import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WIP Solutions - Smart & Robust Code",
  description: "Nearly a decade of delivering high-quality software solutions. Specializing in SaaS, Mobile Apps, E-commerce, Code Modernization, MCP Integration, and AI Chatbots.",
  keywords: ["software development", "SaaS", "mobile apps", "e-commerce", "code modernization", "MCP", "AI chatbots", "web development"],
  authors: [{ name: "WIP Solutions" }],
  creator: "WIP Solutions",
  publisher: "WIP Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wipsolutions.com",
    title: "WIP Solutions - Smart & Robust Code",
    description: "Nearly a decade of delivering high-quality software solutions",
    siteName: "WIP Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIP Solutions - Smart & Robust Code",
    description: "Nearly a decade of delivering high-quality software solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
