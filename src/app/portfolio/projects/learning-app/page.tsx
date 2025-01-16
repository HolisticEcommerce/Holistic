'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LearningApp() {
  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-yellow-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-transparent bg-clip-text">
            Educational Learning App
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            An interactive mobile learning platform that makes education engaging and accessible through gamification.
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500">
              <div className="absolute inset-0 bg-slate-900/50" />
            </div>
            {/* Add actual project image here */}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400">
                Our educational learning app transforms traditional learning into an engaging, 
                interactive experience. Through gamification elements and personalized learning 
                paths, we&quot;ve created a platform that makes education both effective and enjoyable.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-orange-400 font-bold text-2xl">100K+</div>
                <div className="text-sm text-gray-400">Active Students</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-orange-400 font-bold text-2xl">500+</div>
                <div className="text-sm text-gray-400">Courses</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-orange-400 font-bold text-2xl">92%</div>
                <div className="text-sm text-gray-400">Completion Rate</div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['Flutter', 'Firebase', 'Unity', 'Node.js', 'MongoDB', 'WebRTC'].map((tech, index) => (
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
                title: 'Interactive Learning',
                description: 'Engaging lessons with multimedia content',
                icon: '🎯'
              },
              {
                title: 'Progress Tracking',
                description: 'Detailed analytics and learning insights',
                icon: '📈'
              },
              {
                title: 'Gamification',
                description: 'Rewards, badges, and achievement system',
                icon: '🎮'
              },
              {
                title: 'Live Sessions',
                description: 'Real-time interactive tutoring',
                icon: '🎥'
              },
              {
                title: 'Personalization',
                description: 'Adaptive learning paths and recommendations',
                icon: '🎨'
              },
              {
                title: 'Social Learning',
                description: 'Peer interaction and group activities',
                icon: '👥'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Adaptive Learning',
                features: [
                  'Personalized learning paths',
                  'AI-driven content recommendations',
                  'Progress-based difficulty adjustment',
                  'Learning style adaptation'
                ]
              },
              {
                title: 'Gamification Elements',
                features: [
                  'Achievement badges',
                  'Progress milestones',
                  'Learning streaks',
                  'Competitive leaderboards'
                ]
              },
              {
                title: 'Interactive Content',
                features: [
                  '3D visualizations',
                  'Interactive simulations',
                  'AR learning experiences',
                  'Practice exercises'
                ]
              },
              {
                title: 'Social Features',
                features: [
                  'Study groups',
                  'Peer assessments',
                  'Discussion forums',
                  'Collaborative projects'
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="text-orange-400 mr-2">✓</span>
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
              <h2 className="text-2xl font-bold text-white mb-6">Learning Outcomes</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <span className="text-orange-400 mr-2">✓</span>
                  92% course completion rate
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-orange-400 mr-2">✓</span>
                  85% improvement in test scores
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-orange-400 mr-2">✓</span>
                  95% student satisfaction rate
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-orange-400 mr-2">✓</span>
                  3x increase in study time
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Student Testimonial</h2>
              <blockquote className="text-gray-400 italic">
              &quot;This app has completely changed how I learn. The interactive lessons and 
                gamification make studying fun, and I&apos;ve seen a significant improvement in 
                my understanding and retention of the material.&quot;
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
                <div className="ml-4">
                  <div className="text-white font-bold">Alex Thompson</div>
                  <div className="text-gray-400 text-sm">Student, Computer Science</div>
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
            Ready to transform your learning experience?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur transition duration-1000 group-hover:blur-xl" />
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full leading-none">
              Start Learning
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
