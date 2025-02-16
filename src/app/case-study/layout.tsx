import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Holistic',
  description: 'Explore our collection of case studies showcasing successful digital transformations and innovative solutions.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
