import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Header with loading fallback
export const DynamicHeader = dynamic(() => import('@/components/layout/Header'), {
  ssr: true, // Enable server-side rendering
  loading: () => <div className="h-16 bg-[#0f1729] animate-pulse"></div>,
});

// Dynamically import Footer with loading fallback
export const DynamicFooter = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true, // Enable server-side rendering
  loading: () => <div className="h-16 bg-[#0f1729] animate-pulse"></div>,
});

// Dynamically import FloatingButtons without SSR
export const DynamicFloatingButtons = dynamic(() => import('@/components/FloatingButtons'), {
  ssr: false, // Disable server-side rendering
  loading: () => null, // No loading UI
});
