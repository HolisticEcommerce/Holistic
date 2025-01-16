'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HealthcareApp() {
  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-transparent bg-clip-text">
            Healthcare Mobile App
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive healthcare management solution that empowers patients and healthcare providers.
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-500">
              <div className="absolute inset-0 bg-slate-900/50" />
            </div>
            {/* Add actual project image here */}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400">
                The Healthcare Mobile App is designed to streamline patient care and medical practice 
                management. It provides real-time health monitoring, appointment scheduling, and secure 
                communication between patients and healthcare providers.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-cyan-400 font-bold text-2xl">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-cyan-400 font-bold text-2xl">100K+</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-cyan-400 font-bold text-2xl">4.8</div>
                <div className="text-sm text-gray-400">App Rating</div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['React Native', 'Firebase', 'Node.js', 'Express', 'MongoDB', 'WebRTC'].map((tech, index) => (
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
                title: 'Appointment Scheduling',
                description: 'Easy-to-use interface for booking and managing medical appointments',
                icon: '📅'
              },
              {
                title: 'Telemedicine',
                description: 'Secure video consultations with healthcare providers',
                icon: '🎥'
              },
              {
                title: 'Health Monitoring',
                description: 'Real-time tracking of vital signs and health metrics',
                icon: '❤️'
              },
              {
                title: 'Medical Records',
                description: 'Secure storage and access to patient medical history',
                icon: '📋'
              },
              {
                title: 'Medication Reminders',
                description: 'Automated reminders for medication and appointments',
                icon: '⏰'
              },
              {
                title: 'Secure Messaging',
                description: 'HIPAA-compliant communication system',
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data Security',
                description: 'Implementing HIPAA-compliant security measures and encryption protocols.',
                solution: 'Utilized advanced encryption and secure socket layers for data transmission.'
              },
              {
                title: 'Real-time Communication',
                description: 'Establishing stable video consultations and instant messaging.',
                solution: 'Integrated WebRTC and Socket.io for reliable real-time communications.'
              },
              {
                title: 'Offline Functionality',
                description: 'Ensuring app functionality without internet connection.',
                solution: 'Implemented robust offline-first architecture with local data sync.'
              },
              {
                title: 'Cross-platform Compatibility',
                description: 'Maintaining consistent experience across iOS and Android.',
                solution: 'Leveraged React Native and platform-specific optimizations.'
              }
            ].map((challenge, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-gray-400 mb-4">{challenge.description}</p>
                <div className="text-cyan-400">
                  <strong className="text-sm uppercase">Solution:</strong>
                  <p className="mt-1">{challenge.solution}</p>
                </div>
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
              <h2 className="text-2xl font-bold text-white mb-6">Project Impact</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  40% reduction in appointment no-shows
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  60% increase in patient engagement
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  30% improvement in medication adherence
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  25% reduction in administrative costs
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Healthcare Provider Feedback</h2>
              <blockquote className="text-gray-400 italic">
              &quot;This app has revolutionized how we interact with patients. The telemedicine features
                and health monitoring capabilities have significantly improved patient care and outcomes.&quot;
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" />
                <div className="ml-4">
                  <div className="text-white font-bold">Dr. Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">Medical Director, HealthFirst Clinic</div>
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
            Ready to transform your healthcare practice with modern technology?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur transition duration-1000 group-hover:blur-xl" />
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full leading-none">
              Schedule a Demo
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
