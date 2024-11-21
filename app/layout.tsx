import "./globals.css";
import { Mulish } from "next/font/google";
import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
// import GoogleAnalytics from "@/components/Tools/GoogleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Haris Iftikhar",
    default: "Haris Iftikhar",
  },
  description: "Portfolio of Haris Iftikhar.",
  creator: "Haris Iftikhar",
  publisher: "Haris Iftikhar",
  keywords: ["Next.js", "React", "JavaScript", "Frontend Developer"],
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
  return (
    <html lang="en" className={font.className}>
      <body className="flex flex-col min-h-screen transition-colors duration-500 ease-in-out">
        <Navigation />
        <main className="">
          <div className="mt-10 mx-auto w-10/12 lg:max-w-6xl">{children}</div>
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} />
    </html>
  );
}
