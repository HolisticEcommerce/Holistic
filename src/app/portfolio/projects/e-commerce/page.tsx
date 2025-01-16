'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ECommerceProject() {
  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Modern E-commerce Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive e-commerce solution featuring advanced filtering, real-time search, and seamless payment integration.
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {/* Project Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500">
              <div className="absolute inset-0 bg-slate-900/50" />
            </div>
            {/* Add actual project image here */}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400">
                This modern e-commerce platform was built to provide businesses with a powerful, 
                scalable solution for online retail. The platform features advanced product filtering, 
                real-time search capabilities, and seamless payment integration.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-blue-400 font-bold text-2xl">10K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-blue-400 font-bold text-2xl">$2M+</div>
                <div className="text-sm text-gray-400">Sales Generated</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-blue-400 font-bold text-2xl">4.9</div>
                <div className="text-sm text-gray-400">User Rating</div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe', 'AWS'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-800 rounded-full text-sm text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Filtering',
                description: 'Powerful product filtering and search capabilities for enhanced user experience',
                icon: '🔍'
              },
              {
                title: 'Secure Payments',
                description: 'Integration with multiple payment gateways ensuring secure transactions',
                icon: '🔒'
              },
              {
                title: 'Real-time Analytics',
                description: 'Comprehensive analytics dashboard for tracking sales and user behavior',
                icon: '📊'
              },
              {
                title: 'Inventory Management',
                description: 'Automated inventory tracking and management system',
                icon: '📦'
              },
              {
                title: 'Mobile Responsive',
                description: 'Fully responsive design optimized for all devices',
                icon: '📱'
              },
              {
                title: 'Customer Support',
                description: 'Integrated customer support system with chat functionality',
                icon: '💬'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Development Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <div className="space-y-12">
              {[
                {
                  phase: 'Planning',
                  description: 'Requirements gathering and project scope definition',
                  duration: '2 weeks'
                },
                {
                  phase: 'Design',
                  description: 'UI/UX design and prototyping',
                  duration: '3 weeks'
                },
                {
                  phase: 'Development',
                  description: 'Frontend and backend implementation',
                  duration: '8 weeks'
                },
                {
                  phase: 'Testing',
                  description: 'Quality assurance and performance optimization',
                  duration: '2 weeks'
                },
                {
                  phase: 'Deployment',
                  description: 'Launch and post-deployment monitoring',
                  duration: '1 week'
                }
              ].map((phase, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <h3 className="text-xl font-bold text-white mb-2">{phase.phase}</h3>
                  <p className="text-gray-400 mb-2">{phase.description}</p>
                  <span className="text-sm text-blue-400">{phase.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results & Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Results */}
            <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Project Results</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <span className="text-green-400 mr-2">✓</span>
                  200% increase in online sales
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-green-400 mr-2">✓</span>
                  50% reduction in cart abandonment
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-green-400 mr-2">✓</span>
                  35% improvement in user engagement
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-green-400 mr-2">✓</span>
                  4.9/5 customer satisfaction rating
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Client Testimonial</h2>
              <blockquote className="text-gray-400 italic">
              &quot;The e-commerce platform has transformed our business. The team&apos;s attention to detail
                and commitment to excellence has resulted in a solution that exceeded our expectations.&quot;
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="ml-4">
                  <div className="text-white font-bold">John Smith</div>
                  <div className="text-gray-400 text-sm">CEO, TechRetail Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Ready to transform your e-commerce business?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur transition duration-1000 group-hover:blur-xl" />
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full leading-none">
              Start Your Project
              <svg
                className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
