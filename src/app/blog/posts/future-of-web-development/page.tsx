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
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                Technology
              </span>
              <div className="flex items-center text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Jan 5, 2024</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FiClock className="mr-2" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              The Future of Web Development
            </h1>

            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&h=900&fit=crop"
                alt="The Future of Web Development"
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
              Exploring upcoming trends and technologies that will shape the future of web development.
              As we move forward into an increasingly digital world, the landscape of web development
              continues to evolve at an unprecedented pace.
            </p>

            <h2>The Rise of AI-Powered Development</h2>
            <p>
              Artificial Intelligence is revolutionizing how we approach web development. From automated
              code generation to intelligent debugging tools, AI is becoming an indispensable part of
              the modern developer&apos;s toolkit.
            </p>

            <h2>Web Assembly and the Future of Performance</h2>
            <p>
              WebAssembly is enabling near-native performance in web applications, opening up new
              possibilities for complex applications running directly in the browser.
            </p>

            <h2>The Evolution of Frontend Frameworks</h2>
            <p>
              Modern frontend frameworks are becoming more sophisticated, with improved performance,
              better developer experience, and enhanced capabilities for building complex applications.
            </p>

            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-wrap gap-3">
                <FiTag className="text-gray-400 mt-1" />
                {['Web Development', 'Future Tech', 'Trends'].map((tag) => (
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
