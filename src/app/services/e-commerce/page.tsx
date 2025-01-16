'use client';

import Link from 'next/link';

export default function ECommerceService() {
  const features = [
    {
      title: 'Online Store Setup',
      description: 'Complete e-commerce solution setup with payment integration',
      icon: '🛍️'
    },
    {
      title: 'Product Management',
      description: 'Easy-to-use dashboard for managing products and inventory',
      icon: '📦'
    },
    {
      title: 'Secure Payments',
      description: 'Integration with secure payment gateways and checkout process',
      icon: '🔒'
    }
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          E-Commerce Services
          <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
            Build Your Online Store
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Selling Online
          </Link>
        </div>
      </div>
    </main>
  );
}
