'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock } from 'react-icons/fi';

const caseStudies = [
  {
    title: "Digital Transformation for E-commerce Giant",
    category: "E-commerce",
    description: "Complete digital overhaul resulting in 150% increase in online sales and improved customer satisfaction.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    link: "/case-study/ecommerce",
    metrics: {
      'Sales Increase': '150%',
      'Better Engagement': '45%',
      'Faster Loading': '3x'
    },
    tags: ["E-commerce", "Digital Transformation", "UX Design"],
    duration: '6 months',
    industry: 'Technology'
  },
  {
    title: "AI-Powered Healthcare Solutions",
    category: "Healthcare",
    description: "Implementing AI diagnostics system that improved accuracy by 40% and reduced waiting times.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    link: "/case-study/healthcare",
    metrics: {
      'More Accuracy': '40%',
      'Faster Diagnosis': '60%',
      'User Satisfaction': '95%'
    },
    tags: ["Healthcare", "Artificial Intelligence", "Machine Learning"],
    duration: '4 months',
    industry: 'Healthcare'
  },
  {
    title: "Financial Technology Innovation",
    category: "FinTech",
    description: "Revolutionary banking app that processed $2B in transactions with zero downtime.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    link: "/case-study/fintech",
    metrics: {
      'Processed': '$2B',
      'Downtime': 'Zero',
      'Active Users': '2M+'
    },
    tags: ["FinTech", "Mobile App", "Cloud Infrastructure"],
    duration: '8 months',
    industry: 'Finance'
  }
];

const categories = ['All', 'E-commerce', 'Healthcare', 'FinTech'];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Case Studies
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our success stories and discover how we&apos;ve helped businesses achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-slate-900 p-1 rounded-2xl h-full">
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl h-full">
                  {/* Case Study Image */}
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link
                        href={study.link}
                        className="text-white text-lg font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-emerald-500/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-500/30 z-10"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </div>

                  {/* Case Study Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        {study.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <FiClock className="text-emerald-400" />
                        <span className="text-sm text-gray-400">{study.duration}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {study.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-900/50 rounded-xl border border-emerald-500/10 hover:border-emerald-500/20 transition-colors duration-300">
                      {Object.entries(study.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-emerald-400 font-bold">{value}</div>
                          <div className="text-xs text-gray-500">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <Link href={study.link}>
                      <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-xl group/button hover:bg-emerald-500/20 transition-colors duration-300">
                        <span className="text-sm font-medium text-emerald-400">View Details</span>
                        <FiArrowRight className="text-emerald-400 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
