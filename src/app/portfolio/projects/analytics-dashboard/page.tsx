'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnalyticsDashboard() {
  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
            AI-Powered Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A sophisticated analytics platform leveraging artificial intelligence for real-time insights and predictions.
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
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500">
              <div className="absolute inset-0 bg-slate-900/50" />
            </div>
            {/* Add actual project image here */}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400">
                This AI-powered analytics dashboard revolutionizes how businesses interpret and act on 
                their data. By combining advanced machine learning algorithms with intuitive 
                visualization tools, we&apos;ve created a platform that transforms complex data into 
                actionable insights.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-indigo-400 font-bold text-2xl">1TB+</div>
                <div className="text-sm text-gray-400">Data Processed</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-indigo-400 font-bold text-2xl">99.9%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                <div className="text-indigo-400 font-bold text-2xl">1M+</div>
                <div className="text-sm text-gray-400">Predictions</div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI', 'PostgreSQL'].map((tech, index) => (
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
                title: 'Predictive Analytics',
                description: 'AI-driven predictions and trend analysis',
                icon: '🔮'
              },
              {
                title: 'Real-time Monitoring',
                description: 'Live data tracking and instant alerts',
                icon: '📊'
              },
              {
                title: 'Interactive Visualizations',
                description: 'Dynamic charts and customizable dashboards',
                icon: '📈'
              },
              {
                title: 'Anomaly Detection',
                description: 'Automated identification of data anomalies',
                icon: '🔍'
              },
              {
                title: 'Custom Reports',
                description: 'Automated report generation and scheduling',
                icon: '📑'
              },
              {
                title: 'Data Integration',
                description: 'Seamless integration with multiple data sources',
                icon: '🔄'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/10 group-hover:to-blue-500/10 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Implementation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Machine Learning Pipeline',
                details: [
                  'TensorFlow for predictive modeling',
                  'Automated model retraining',
                  'Feature engineering pipeline',
                  'Model performance monitoring'
                ]
              },
              {
                title: 'Data Processing',
                details: [
                  'Real-time data streaming',
                  'ETL pipeline optimization',
                  'Data validation and cleaning',
                  'Scalable data architecture'
                ]
              },
              {
                title: 'Frontend Architecture',
                details: [
                  'React with TypeScript',
                  'D3.js for visualizations',
                  'WebSocket integration',
                  'Progressive Web App'
                ]
              },
              {
                title: 'Backend Infrastructure',
                details: [
                  'Microservices architecture',
                  'Redis caching layer',
                  'API optimization',
                  'Automated scaling'
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.details.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="text-indigo-400 mr-2">✓</span>
                      {item}
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
              <h2 className="text-2xl font-bold text-white mb-6">Project Impact</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <span className="text-indigo-400 mr-2">✓</span>
                  85% reduction in analysis time
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-indigo-400 mr-2">✓</span>
                  99.9% prediction accuracy
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-indigo-400 mr-2">✓</span>
                  60% increase in data-driven decisions
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="text-indigo-400 mr-2">✓</span>
                  $2M+ cost savings through optimization
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Client Testimonial</h2>
              <blockquote className="text-gray-400 italic">
              &quot;This analytics dashboard has transformed how we make decisions. The AI-powered 
                insights have helped us identify opportunities we would have otherwise missed, 
                and the real-time monitoring has made us much more proactive in our approach.&quot;
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
                <div className="ml-4">
                  <div className="text-white font-bold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">CTO, DataTech Solutions</div>
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
            Ready to transform your data into actionable insights?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur transition duration-1000 group-hover:blur-xl" />
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
