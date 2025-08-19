'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Free 30-minute consultation',
  'Personalized financial assessment',
  'No obligation or pressure',
  'Expert guidance and recommendations',
];

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-deep-blue mb-6">
              Ready to Take Control of Your Financial Future?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Schedule a free consultation today and discover how personalized financial planning 
              can help you achieve your goals and secure your family's future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-montserrat font-semibold text-deep-blue mb-6">
                  What You'll Get:
                </h3>
                <ul className="space-y-3 text-left">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-custom flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-bold px-12 py-6 text-xl group transition-all duration-300 animate-pulse-soft"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Your Free Consultation
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
                <p className="text-sm text-gray-500 mt-4">
                  Takes less than 2 minutes to schedule
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500"
          >
            <p>
              Join hundreds of satisfied clients who have transformed their financial lives. 
              <br className="hidden sm:block" />
              Your journey to financial freedom starts with a single conversation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}