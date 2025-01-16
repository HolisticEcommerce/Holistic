'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

export default function HealthcareCaseStudy() {
  const [isVisible] = useState(true);

  const metrics = [
    { label: 'Diagnosis Accuracy', value: '40%', description: 'Improvement in diagnostic accuracy' },
    { label: 'Processing Time', value: '60%', description: 'Reduction in processing time' },
    { label: 'Patient Satisfaction', value: '95%', description: 'Overall patient satisfaction rate' },
    { label: 'Cost Reduction', value: '35%', description: 'Decrease in operational costs' }
  ];

  const features = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate medical image analysis and diagnosis suggestions.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous patient monitoring system with instant alerts and notifications for critical changes.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
    },
    {
      title: 'Secure Data Management',
      description: 'HIPAA-compliant data storage and management system with advanced encryption.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop'
    }
  ];

  return (
    <main className="bg-slate-900">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-grow w-full max-w-7xl mx-auto pt-24 pb-16">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link 
              href="/case-study"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
            >
              <FiArrowLeft className="mr-2" />
              Back to Case Studies
            </Link>

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 text-transparent bg-clip-text">
                AI-Powered Healthcare Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl">
                Revolutionizing patient care through advanced AI diagnostics and seamless healthcare management.
              </p>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-xl overflow-hidden mb-16"
            >
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop"
                alt="Healthcare AI Platform"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            </motion.div>

            {/* Key Metrics */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Key Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                  >
                    <div className="text-3xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                    <p className="text-gray-400">{metric.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-colors duration-300"
                  >
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                Transform Your Healthcare
                <FiExternalLink className="ml-2 animate-pulse" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
