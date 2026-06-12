import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
// import { CatIntro } from "@/components/cat-intro";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://wididikyy-jupitragency.vercel.app";
const DESCRIPTION =
  "Full-Stack and Mobile Developer with 3+ years of experience building responsive web and mobile applications. Skilled in React.js, Next.js, Laravel, and Flutter.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Widi Diky – Full-Stack & Mobile Developer",
    template: "%s | Widi Diky",
  },
  description: DESCRIPTION,
  keywords: [
    "Widi Diky",
    "Full-Stack Developer",
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
    title: "Widi Diky – Full-Stack & Mobile Developer",
    description: DESCRIPTION,
    images: [
      {
        url: "/bg.webp",
        width: 1200,
        height: 600,
        alt: "Widi Diky – Full-Stack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Widi Diky – Full-Stack & Mobile Developer",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Widi Diky",
  url: "https://wididikyy-jupitragency.vercel.app",
  image: "https://wididikyy-jupitragency.vercel.app/bg.webp",
  jobTitle: ["Full-Stack Developer", "Mobile Developer"],
  description:
    "Full-Stack and Mobile Developer with 3+ years of experience building responsive web and mobile applications. Skilled in React.js, Next.js, Laravel, and Flutter.",
  sameAs: [
    "https://github.com/wididikyy",
    "https://www.linkedin.com/in/wididiky/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Flutter",
    "Laravel",
    "WordPress",
  ],
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
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <CatIntro /> */}
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
