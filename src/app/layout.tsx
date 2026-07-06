import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhaskar B | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Bhaskar Kuruvangattil Rejis — Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://3beeez.com/widget-script?installToken=35a67d6815c37f6710610745b03b31dd3068d0e5&position=bottom-right"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
