import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CatIntro } from "@/components/cat-intro";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://wididikyy-jupitragency.vercel.app";
const DESCRIPTION =
  "Front-End and Mobile Developer with 3+ years of experience building responsive web and mobile applications. Skilled in React.js, Next.js, Laravel, and Flutter.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Widi Diky – Front-End & Mobile Developer",
    template: "%s | Widi Diky",
  },
  description: DESCRIPTION,
  keywords: [
    "Widi Diky",
    "Front-End Developer",
    "Mobile Developer",
    "React.js",
    "Next.js",
    "Flutter",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Indonesia",
  ],
  authors: [{ name: "Widi Diky", url: "https://github.com/wididikyy" }],
  creator: "Widi Diky",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Widi Diky",
    title: "Widi Diky – Front-End & Mobile Developer",
    description: DESCRIPTION,
    images: [
      {
        url: "/bg.webp",
        width: 1200,
        height: 600,
        alt: "Widi Diky – Front-End & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Widi Diky – Front-End & Mobile Developer",
    description: DESCRIPTION,
    creator: "@wididikyy",
    images: ["/bg.webp"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CatIntro />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
