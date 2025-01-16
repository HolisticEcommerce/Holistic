'use client';

import dynamic from 'next/dynamic';

// Dynamic imports with loading states
const Header = dynamic(() => import("@/components/layout/Header"), {
  loading: () => <div className="h-16 bg-[#0f1729] animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  loading: () => <div className="h-64 bg-[#0f1729] animate-pulse" />,
});

const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"), {
  ssr: false,
  loading: () => null,
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
