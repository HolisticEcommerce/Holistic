'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiArrowLeft } from 'react-icons/fi';

export default function WebDevelopmentService() {
  const [isVisible] = useState(true);

  const features = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive frontend development with the latest technologies',
      icon: '💻',
      details: [
        'React.js & Next.js',
        'Responsive layouts',
        'Performance optimization',
        'Modern UI frameworks'
      ]
    },
    {
      title: 'Backend Development',
      description: 'Robust backend systems that power your web applications',
      icon: '⚙️',
      details: [
        'Node.js & Express',
        'Database design',
        'API development',
        'Security implementation'
      ]
    },
    {
      title: 'Full Stack Solutions',
      description: 'End-to-end web development services for complete applications',
      icon: '🚀',
      details: [
        'Full stack integration',
        'Cloud deployment',
        'Testing & QA',
        'Maintenance & support'
      ]
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Java']
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
    },
    {
      category: 'DevOps',
      items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Web Development Services
            <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Building Powerful Web Applications
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We build scalable, high-performance web applications using modern technologies and best practices.
            From simple websites to complex web applications, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-24"
        >
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop"
            alt="Web Development Process"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mix-blend-multiply" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-900 p-1 rounded-2xl h-full">
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <FiCheck className="text-emerald-400 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gray-900 p-1 rounded-xl">
                  <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {tech.category}
                    </h3>
                    <ul className="space-y-2">
                      {tech.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <FiCheck className="text-emerald-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s create a powerful web application that scales with your business.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Development
            <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
