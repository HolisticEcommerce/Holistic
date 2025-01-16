import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Fintech Case Study | Holistic',
  description: 'Discover our innovative fintech transformation solutions.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function FintechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
