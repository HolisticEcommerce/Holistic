import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from '@/components/FloatingButtons'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Holistic - Digital Solutions",
  description: "Transform your digital presence with Holistic's innovative solutions",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className + " flex flex-col min-h-screen antialiased"}>
        <SpeedInsights />
        <Header />
        <main className="flex-grow pt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
