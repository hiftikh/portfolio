import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haris Iftikhar",
  description: "Portfolio of Haris Iftikhar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {" "}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
