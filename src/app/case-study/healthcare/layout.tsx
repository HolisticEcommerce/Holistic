import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Case Study | Holistic',
  description: 'Explore our healthcare digital transformation case studies.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
