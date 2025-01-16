import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Holistic Ecommerce",
  description: "Your one-stop solution for all ecommerce needs",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f1729" />
      </head>
      <body className={`min-h-screen bg-[#0f1729] text-white antialiased ${inter.className}`}>
        <SpeedInsights />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
