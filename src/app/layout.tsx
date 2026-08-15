import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Arash Ghanbari | Software developer",
  description:
    "Design and development of various websites and web applications using modern and up-to-date frameworks.",
  keywords: [
    "Next.js developer",
    "NestJS backend",
    "TypeScript fullstack developer",
    "React frontend engineer",
    "Node.js expert",
    "personal website design",
    "fullstack programming",
    "web development services",
    "JavaScript developer portfolio",
    "Frontend and Backend",
    "modern web application",
    "Software engineer freelance",
    "SEO friendly web design",
  ],
  authors: [{ name: "Arash Ghanbari", url: "https://arash.vip" }],
  creator: "Arash Ghanbari",
  publisher: "Arash Ghanbari",
  metadataBase: new URL("https://arash.vip"),
  alternates: {
    canonical: "https://arash.vip",
  },
  openGraph: {
    type: "website",
    url: "https://arash.vip",
    title: "Arash Ghanbari | Software developer",
    description:
      "Fullstack developer specializing in Next.js, NestJS, and TypeScript. Design and development of modern websites and applications.",
    siteName: "Arash Ghanbari Portfolio",
    images: [
      {
        url: "https://arash.vip/me.png",
        width: 600,
        height: 600,
        alt: "Arash Ghanbari Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
