import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Software Developer | Software developer",
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
  authors: [{ name: "Software Developer", url: "https://example.com" }],
  creator: "Software Developer",
  publisher: "Software Developer",
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Software Developer | Software developer",
    description:
      "Fullstack developer specializing in Next.js, NestJS, and TypeScript. Design and development of modern websites and applications.",
    siteName: "Software Developer Portfolio",
    images: [
      {
        url: "https://example.com/me.png",
        width: 600,
        height: 600,
        alt: "Software Developer Portfolio Preview",
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
