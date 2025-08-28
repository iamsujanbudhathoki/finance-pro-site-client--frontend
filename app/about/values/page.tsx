'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, Users, Award, Compass } from 'lucide-react';

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We operate with unwavering honesty and transparency, always putting our clients\' best interests ahead of our own.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description: 'Every client relationship is built on authentic care and understanding of their unique circumstances and dreams.',
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Growth',
    description: 'We continuously evolve our strategies and embrace new approaches to deliver the best possible outcomes.',
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Success is measured not just by individual achievements, but by the positive impact we create together.',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'We strive for excellence in every interaction, every strategy, and every outcome we deliver.',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
  },
  {
    icon: Compass,
    title: 'Purpose-Driven',
    description: 'Our work is guided by a clear purpose: empowering others to achieve financial freedom and life fulfillment.',
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
  },
];

export default function Values() {
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
              Our Core Values
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              The fundamental principles that guide every decision we make and 
              every relationship we build with our clients and community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values aren't just words on a page – they're the foundation of how we 
              operate, make decisions, and serve our clients with excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-montserrat font-bold text-deep-blue mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-8">
              Values in Action
            </h2>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "Our values guide us in creating meaningful relationships, delivering exceptional 
                results, and building a legacy of positive impact. When you work with us, you're 
                not just getting financial advice – you're partnering with a team that genuinely 
                cares about your success and is committed to helping you achieve your dreams."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white font-montserrat font-bold text-lg">PS</span>
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-semibold text-deep-blue">Prashant Sapkota</div>
                  <div className="text-gray-600">Founder & Lead Financial Advisor</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}