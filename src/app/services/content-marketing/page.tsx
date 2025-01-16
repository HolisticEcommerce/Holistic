'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContentMarketingService() {
  const features = [
    {
      title: 'Content Strategy',
      description: 'Strategic content planning aligned with your business goals',
      icon: '📝'
    },
    {
      title: 'Blog Writing',
      description: 'SEO-optimized blog posts that engage and inform your audience',
      icon: '✍️'
    },
    {
      title: 'Social Media Content',
      description: 'Engaging social media content that builds brand awareness',
      icon: '📱'
    },
    {
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions',
      icon: '📧'
    },
    {
      title: 'Content Distribution',
      description: 'Multi-channel content distribution for maximum reach',
      icon: '🌐'
    },
    {
      title: 'Performance Analysis',
      description: 'Content performance tracking and optimization',
      icon: '📊'
    }
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute h-[500px] w-[500px] -left-48 top-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse" />
          <div className="absolute h-[600px] w-[600px] -right-48 bottom-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse animation-delay-2000" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-8">
              <Image
                src="/icons/content-marketing.svg"
                alt="Content Marketing Services"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Content Marketing
              <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Engage and Convert Your Audience
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Content marketing is the best way to improve your website and provide 
              higher value to your web pages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Strategy
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col">
                  <span className="text-3xl mb-4">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Engaging Content?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s develop a content strategy that connects with your audience and drives results.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Creating Content
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
