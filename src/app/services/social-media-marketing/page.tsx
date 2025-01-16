'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiArrowLeft, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function SocialMediaMarketingService() {
  const [isVisible] = useState(true);

  const features = [
    {
      title: 'Content Creation',
      description: 'Engaging content that resonates with your audience',
      icon: <FiInstagram className="w-8 h-8" />,
      details: [
        'Visual content design',
        'Copywriting',
        'Video content',
        'Story creation'
      ]
    },
    {
      title: 'Community Management',
      description: 'Build and engage with your social media community',
      icon: <FiFacebook className="w-8 h-8" />,
      details: [
        'Audience engagement',
        'Comment management',
        'Message responses',
        'Community building'
      ]
    },
    {
      title: 'Strategy & Analytics',
      description: 'Data-driven strategies for growth and engagement',
      icon: <FiTwitter className="w-8 h-8" />,
      details: [
        'Performance tracking',
        'Competitor analysis',
        'Trend monitoring',
        'ROI measurement'
      ]
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      description: 'Visual storytelling and brand engagement',
      icon: '📸'
    },
    {
      name: 'Facebook',
      description: 'Community building and targeted advertising',
      icon: '👥'
    },
    {
      name: 'Twitter',
      description: 'Real-time engagement and brand presence',
      icon: '🐦'
    },
    {
      name: 'LinkedIn',
      description: 'Professional networking and B2B marketing',
      icon: '💼'
    }
  ];

  const benefits = [
    {
      title: 'Brand Awareness',
      description: 'Increase visibility and recognition',
      icon: '🎯'
    },
    {
      title: 'Lead Generation',
      description: 'Convert followers into customers',
      icon: '📈'
    },
    {
      title: 'Customer Loyalty',
      description: 'Build lasting relationships',
      icon: '❤️'
    },
    {
      title: 'Market Insights',
      description: 'Understand your audience better',
      icon: '📊'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
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
            Social Media Marketing
            <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              Build Your Brand&apos;s Social Presence
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Engage your audience and grow your brand with strategic social media marketing.
            We help you create meaningful connections and drive results across all platforms.
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
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&h=900&fit=crop"
            alt="Social Media Marketing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 mix-blend-multiply" />
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
              <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-900 p-1 rounded-2xl h-full">
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 h-full">
                  <div className="text-indigo-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <FiCheck className="text-indigo-400 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Platforms We Manage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gray-900 p-1 rounded-xl">
                  <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Benefits of Social Media Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-gray-900 p-1 rounded-xl">
                  <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s create a social media strategy that connects with your audience and drives growth.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
            <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
