'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SocialMediaPlatform() {
  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-teal-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
            Social Media Management Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive platform for managing social media presence and analyzing engagement metrics.
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500">
              <div className="absolute inset-0 bg-slate-900/50" />
            </div>
            {/* Add actual project image here */}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400">
                Our social media management platform empowers businesses to streamline their social 
                media operations, analyze performance metrics, and optimize their content strategy 
                across multiple platforms from a single dashboard.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-emerald-400 font-bold text-2xl">500K+</div>
                <div className="text-sm text-gray-400">Posts Managed</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-emerald-400 font-bold text-2xl">+300%</div>
                <div className="text-sm text-gray-400">Engagement</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-emerald-400 font-bold text-2xl">1000+</div>
                <div className="text-sm text-gray-400">Active Clients</div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'].map((tech, index) => (
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
                title: 'Content Calendar',
                description: 'Visual content planning and scheduling',
                icon: '📅'
              },
              {
                title: 'Analytics Dashboard',
                description: 'Comprehensive performance metrics and insights',
                icon: '📊'
              },
              {
                title: 'Auto-Posting',
                description: 'Automated content publishing across platforms',
                icon: '🚀'
              },
              {
                title: 'Engagement Tracking',
                description: 'Real-time monitoring of user interactions',
                icon: '👥'
              },
              {
                title: 'Content Library',
                description: 'Centralized media asset management',
                icon: '🗄️'
              },
              {
                title: 'Team Collaboration',
                description: 'Multi-user workflow and approval system',
                icon: '🤝'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                platform: 'Instagram',
                features: [
                  'Story scheduling',
                  'Hashtag analytics',
                  'Engagement tracking',
                  'Media optimization'
                ]
              },
              {
                platform: 'Twitter',
                features: [
                  'Thread creation',
                  'Trend analysis',
                  'Automated posting',
                  'Engagement monitoring'
                ]
              },
              {
                platform: 'LinkedIn',
                features: [
                  'Business page management',
                  'Article publishing',
                  'Lead generation',
                  'Analytics tracking'
                ]
              },
              {
                platform: 'Facebook',
                features: [
                  'Page management',
                  'Ad integration',
                  'Audience insights',
                  'Content scheduling'
                ]
              }
            ].map((platform, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">{platform.platform}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="text-emerald-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Results */}
            <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Client Success</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  300% increase in social engagement
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  50% reduction in posting time
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  200% growth in follower base
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  40% increase in conversion rate
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Client Testimonial</h2>
              <blockquote className="text-gray-400 italic">
              &quot;This platform has revolutionized how we manage our social media presence. The 
                automation features and analytics insights have helped us grow our audience 
                significantly while saving valuable time.&quot;
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                <div className="ml-4">
                  <div className="text-white font-bold">Jessica Martinez</div>
                  <div className="text-gray-400 text-sm">Social Media Director, BrandGrowth</div>
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
            Ready to transform your social media strategy?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur transition duration-1000 group-hover:blur-xl" />
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full leading-none">
              Start Free Trial
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
