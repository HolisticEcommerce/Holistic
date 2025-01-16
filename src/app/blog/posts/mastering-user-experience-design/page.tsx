'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiCalendar, FiArrowLeft, FiTag } from 'react-icons/fi';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <main className="relative z-10 pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Hero Section */}
        <article className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                Design
              </span>
              <div className="flex items-center text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Jan 3, 2024</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FiClock className="mr-2" />
                <span>7 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Mastering User Experience Design
            </h1>

            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=900&fit=crop"
                alt="Mastering User Experience Design"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-xl text-gray-300 mb-8">
              Essential principles and practices for creating exceptional user experiences. Learn how
              to design interfaces that not only look beautiful but also provide meaningful and
              efficient interactions for users.
            </p>

            <h2>Understanding User Psychology</h2>
            <p>
              Great UX design starts with understanding how users think and behave. We&apos;ll explore
              cognitive psychology principles that inform better design decisions.
            </p>

            <h2>The Importance of User Research</h2>
            <p>
              Effective user research is the foundation of successful UX design. Learn about different
              research methodologies and how to apply them in your design process.
            </p>

            <h2>Designing for Accessibility</h2>
            <p>
              Creating inclusive designs that work for everyone is not just good practice - it&apos;s
              essential. Discover how to make your designs accessible to all users.
            </p>

            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-wrap gap-3">
                <FiTag className="text-gray-400 mt-1" />
                {['UX Design', 'UI', 'User Research'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </article>
      </main>
    </div>
  );
}
