'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CaseStudyContent() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 }
      };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="container mx-auto px-2 md:px-4">
          <motion.div
            {...animationProps}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Our Case Studies</h1>
            <p className="text-xl text-gray-600">
              Explore our successful projects and transformative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case study cards will go here */}
          </div>
        </div>
      )}
    </main>
  );
}
