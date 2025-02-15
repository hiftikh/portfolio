import "./globals.css";
import { Mulish } from "next/font/google";
import type { Metadata } from "next";
import Navigation from "@/components/Page/Navigation";
import Footer from "@/components/Page/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Haris Iftikhar",
    default: "Haris Iftikhar",
  },
  description: "Digital Portfolio of Haris Iftikhar.",
  creator: "Haris Iftikhar",
  publisher: "Haris Iftikhar",
  keywords: [
    "Next.js",
    "React",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      template: "%s | Haris Iftikhar",
      default: "",
    },
    siteName: "Haris Iftikhar",
    url: "harisiftikhar.com",
    images: {
      url: "/img/og.png",
      width: 1200,
      height: 630,
      alt: "Haris Iftikhar",
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("meow");
  return (
    <html lang="en" className={font.className}>
      <body className="flex flex-col min-h-screen transition-colors duration-500 ease-in-out">
        <Navigation />
        <main className="mt-10 mx-auto w-10/12 lg:max-w-6xl">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
      <GoogleAnalytics gaId="G-S3DJMMDR8G" />
      <SpeedInsights />
    </html>
  );
}
