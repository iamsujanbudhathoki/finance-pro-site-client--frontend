'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, PiggyBank, CreditCard, Calculator, FileText, Users, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: 'Insurance Planning',
    subtitle: 'Protect What Matters Most',
    description: 'Comprehensive insurance solutions to safeguard your family and assets against life\'s uncertainties.',
    features: [
      'Life Insurance Analysis',
      'Disability Income Protection',
      'Health Insurance Guidance',
      'Long-term Care Planning',
      'Business Insurance Solutions'
    ],
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Management',
    subtitle: 'Grow Your Wealth Strategically',
    description: 'Professional portfolio management and investment strategies tailored to your risk tolerance and goals.',
    features: [
      'Portfolio Construction',
      'Risk Assessment & Management',
      'Asset Allocation Strategies',
      'Tax-Efficient Investing',
      'Regular Portfolio Reviews'
    ],
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: PiggyBank,
    title: 'Retirement Planning',
    subtitle: 'Secure Your Golden Years',
    description: 'Comprehensive retirement strategies to ensure you can maintain your lifestyle when you stop working.',
    features: [
      '401(k) Optimization',
      'IRA Planning & Rollovers',
      'Social Security Strategies',
      'Retirement Income Planning',
      'Estate Planning Coordination'
    ],
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Debt Management',
    subtitle: 'Break Free from Debt',
    description: 'Strategic debt reduction plans to improve your financial health and accelerate wealth building.',
    features: [
      'Debt Consolidation Strategies',
      'Payoff Planning & Prioritization',
      'Credit Score Improvement',
      'Budget Optimization',
      'Financial Behavior Coaching'
    ],
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    icon: Calculator,
    title: 'Financial Planning',
    subtitle: 'Comprehensive Life Planning',
    description: 'Holistic financial planning that addresses all aspects of your financial life and future goals.',
    features: [
      'Goal-Based Planning',
      'Cash Flow Management',
      'Tax Planning Strategies',
      'Education Funding',
      'Major Purchase Planning'
    ],
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    subtitle: 'Legacy & Wealth Transfer',
    description: 'Protect and transfer your wealth according to your wishes while minimizing taxes and complications.',
    features: [
      'Will & Trust Guidance',
      'Beneficiary Designations',
      'Power of Attorney Setup',
      'Tax-Efficient Transfers',
      'Charitable Planning'
    ],
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    textColor: 'text-red-600',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery Meeting',
    description: 'We start with a comprehensive discussion about your financial situation, goals, and concerns.',
  },
  {
    step: '02',
    title: 'Analysis & Strategy',
    description: 'I analyze your current position and develop a customized strategy tailored to your needs.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Together, we implement your financial plan with ongoing support and guidance.',
  },
  {
    step: '04',
    title: 'Monitoring & Updates',
    description: 'Regular reviews ensure your plan stays aligned with your evolving life and goals.',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              Comprehensive Financial Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              From insurance and investments to retirement planning and debt management, 
              I provide holistic solutions to secure your financial future.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-montserrat font-bold text-deep-blue mb-2">
                  {service.title}
                </h3>
                
                <p className={`font-medium ${service.textColor} mb-4`}>
                  {service.subtitle}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-custom flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
              My Planning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to understanding your needs and creating a financial 
              plan that evolves with your life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200">
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-custom rounded-full"></div>
                  </div>
                )}
                
                <div className="w-24 h-24 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-montserrat font-bold text-white">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a free consultation to discuss your goals and learn how 
              my services can help you achieve financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}