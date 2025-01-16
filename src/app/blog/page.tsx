'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    category: 'Technology',
    readTime: '5 min read',
    date: 'Jan 5, 2024',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop',
    tags: ['Web Development', 'Future Tech', 'Trends']
  },
  {
    title: 'Mastering User Experience Design',
    excerpt: 'Essential principles and practices for creating exceptional user experiences.',
    category: 'Design',
    readTime: '7 min read',
    date: 'Jan 3, 2024',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['UX Design', 'UI', 'User Research']
  },
  {
    title: 'AI in Modern Applications',
    excerpt: 'How artificial intelligence is transforming modern application development.',
    category: 'AI & ML',
    readTime: '6 min read',
    date: 'Jan 1, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['AI', 'Machine Learning', 'Innovation']
  }
];

const featuredPost = {
  title: 'Revolutionary Approaches to Digital Innovation',
  excerpt: 'Discover how cutting-edge technologies are reshaping the digital landscape and creating new opportunities for businesses and developers alike.',
  category: 'Innovation',
  readTime: '8 min read',
  date: 'Jan 8, 2024',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  tags: ['Innovation', 'Digital Transformation', 'Technology']
};

const categories = ['All', 'Technology', 'Design', 'AI & ML', 'Innovation'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
            Our Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights, thoughts and trends from our experts on technology, design and innovation.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-slate-900 p-1 rounded-2xl">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Featured Image */}
                  <div className="relative md:w-1/2 h-64 md:h-auto rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors duration-300" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FiCalendar className="mr-2" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FiClock className="mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-400 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/posts/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center space-x-2 text-emerald-400 group/link"
                    >
                      <span>Read More</span>
                      <FiArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
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
                  {/* Blog Post Image */}
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link 
                        href={`/blog/posts/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-white text-lg font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-emerald-500/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-500/30"
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>

                  {/* Blog Post Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <FiClock className="text-emerald-400" />
                        <span className="text-sm text-gray-400">{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <Link 
                      href={`/blog/posts/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block"
                    >
                      <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-xl group/button hover:bg-emerald-500/20 transition-colors duration-300">
                        <span className="text-sm font-medium text-emerald-400">Read More</span>
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
