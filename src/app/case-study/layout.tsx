import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Holistic',
  description: 'Explore our collection of case studies showcasing successful digital transformations and innovative solutions.',
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
