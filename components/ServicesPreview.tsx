'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, PiggyBank, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Shield,
    title: 'Insurance Planning',
    description: 'Comprehensive life, health, and disability insurance solutions to protect your family and assets.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Management',
    description: 'Strategic portfolio management and investment advice to grow your wealth over time.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: PiggyBank,
    title: 'Retirement Planning',
    description: 'Plan for a comfortable retirement with personalized strategies and savings optimization.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Debt Management',
    description: 'Effective strategies to pay down debt and improve your overall financial health.',
    color: 'bg-orange-100 text-orange-600',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-deep-blue mb-6">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From insurance and investments to retirement planning and debt management, 
            I provide holistic financial solutions tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-3 group-hover:text-emerald-custom transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}