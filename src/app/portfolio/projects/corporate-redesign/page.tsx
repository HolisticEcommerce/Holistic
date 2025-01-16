'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CorporateRedesign() {
  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
            Corporate Website Redesign
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A complete transformation of a corporate website focusing on user experience and modern design principles.
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-slate-900/50" />
            </div>
            {/* Add actual project image here */}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400">
                This corporate website redesign project focused on modernizing the client&quot;s online presence 
                while improving user experience and conversion rates. The new design implements modern web 
                technologies and design principles to create an engaging and effective platform.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-purple-400 font-bold text-2xl">+150%</div>
                <div className="text-sm text-gray-400">Conversion Rate</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-purple-400 font-bold text-2xl">+200%</div>
                <div className="text-sm text-gray-400">Engagement</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-purple-400 font-bold text-2xl">98%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'React', 'GSAP', 'Strapi', 'TailwindCSS', 'Three.js'].map((tech, index) => (
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

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: 'Research',
                description: 'User research, competitor analysis, and stakeholder interviews',
                icon: '🔍'
              },
              {
                phase: 'Wireframing',
                description: 'Low-fidelity wireframes and information architecture',
                icon: '✏️'
              },
              {
                phase: 'Visual Design',
                description: 'High-fidelity designs and interactive prototypes',
                icon: '🎨'
              },
              {
                phase: 'Implementation',
                description: 'Development and deployment of the new website',
                icon: '🚀'
              }
            ].map((phase, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <div className="text-3xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.phase}</h3>
                <p className="text-gray-400">{phase.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Improvements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'User Experience',
                improvements: [
                  'Streamlined navigation structure',
                  'Improved mobile responsiveness',
                  'Faster page load times',
                  'Enhanced accessibility'
                ]
              },
              {
                title: 'Visual Design',
                improvements: [
                  'Modern, clean aesthetic',
                  'Consistent brand identity',
                  'Dynamic animations',
                  'Improved visual hierarchy'
                ]
              },
              {
                title: 'Performance',
                improvements: [
                  '40% faster load times',
                  'Optimized images and assets',
                  'Improved SEO rankings',
                  'Better mobile performance'
                ]
              },
              {
                title: 'Conversion Optimization',
                improvements: [
                  'Strategic CTA placement',
                  'Simplified contact forms',
                  'Clear value propositions',
                  'Improved lead generation'
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.improvements.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="text-purple-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before & After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-xl overflow-hidden bg-slate-800/50">
              {/* Add before image here */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-slate-900/80 rounded-lg">
                <span className="text-white font-medium">Before</span>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden bg-slate-800/50">
              {/* Add after image here */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-slate-900/80 rounded-lg">
                <span className="text-white font-medium">After</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20"
        >
          <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Client Testimonial</h2>
            <blockquote className="text-gray-400 italic text-lg">
            &quot;The redesign has completely transformed our online presence. We&quot;ve seen a significant 
              increase in engagement and conversions, and the feedback from our customers has been 
              overwhelmingly positive. The team&quot;s attention to detail and understanding of our brand 
              was exceptional.&quot;
            </blockquote>
            <div className="mt-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="ml-4">
                <div className="text-white font-bold">Emily Rodriguez</div>
                <div className="text-gray-400 text-sm">Marketing Director, TechCorp</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Ready to transform your digital presence?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur transition duration-1000 group-hover:blur-xl" />
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full leading-none">
              Start Your Redesign
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
