import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Case Study | Holistic',
  description: 'Learn about our successful e-commerce digital transformation projects.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
