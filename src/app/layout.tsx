import type { Metadata } from "next";
import { Geist_Mono, Vazirmatn } from "next/font/google";
import { cn } from "@/lib/utils";
import AppProvider from "./app-provider";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Arash | Software Engineer",
    template: "%s | proarash",
  },
  description:
    "Design and development of various websites and web applications using Next.js, NestJS, TypeScript, and Golang.",
  keywords: [
    "Next.js developer",
    "NestJS backend",
    "Golang developer",
    "Go backend engineer",
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
  authors: [{ name: "Arash", url: "https://proarash.github.io" }],
  creator: "Arash",
  publisher: "Arash",
  metadataBase: new URL("https://proarash.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://proarash.github.io",
    title: {
      default: "Arash | Software Engineer",
      template: "%s | proarash",
    },
    description:
      "Software engineer specializing in Next.js, NestJS, TypeScript, and Golang. Design and development of modern websites and applications.",
    siteName: "proarash",
    images: [
      {
        url: "/me.png",
        width: 600,
        height: 600,
        alt: "Arash | Software Engineer",
      },
    ],
    locale: "fa_IR",
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
      lang="fa"
      dir="rtl"
      className={cn("font-sans", vazirmatn.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
