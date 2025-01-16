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
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                AI & ML
              </span>
              <div className="flex items-center text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Jan 1, 2024</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FiClock className="mr-2" />
                <span>6 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              AI in Modern Applications
            </h1>

            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop"
                alt="AI in Modern Applications"
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
              How artificial intelligence is transforming modern application development. Discover the
              latest AI technologies and their practical applications in today&apos;s software landscape.
            </p>

            <h2>The AI Revolution in Software Development</h2>
            <p>
              Artificial Intelligence is no longer just a buzzword - it&apos;s becoming an integral part
              of modern software development. From code completion to automated testing, AI is
              enhancing developer productivity in unprecedented ways.
            </p>

            <h2>Practical Applications of AI</h2>
            <p>
              Explore real-world examples of AI integration in modern applications, from natural
              language processing to computer vision and predictive analytics.
            </p>

            <h2>Building AI-First Applications</h2>
            <p>
              Learn about the architectural considerations and best practices for building
              applications with AI capabilities at their core.
            </p>

            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-wrap gap-3">
                <FiTag className="text-gray-400 mt-1" />
                {['AI', 'Machine Learning', 'Innovation'].map((tag) => (
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
