'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Users, TrendingUp } from 'lucide-react';

const missionPoints = [
  {
    icon: Target,
    title: 'Clear Purpose',
    description: 'To empower individuals and families to achieve financial independence through personalized guidance and strategic planning.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description: 'We believe every client deserves compassionate, honest advice that puts their best interests first, always.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Building stronger communities by helping families secure their financial futures and achieve their dreams.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'Committed to ongoing education and innovation to provide the most effective financial strategies available.',
  },
];

export default function Mission() {
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
              Our Mission
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Empowering impact-driven leaders to achieve financial freedom and create 
              lasting positive change in their communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-8">
                Transforming Lives Through Financial Wisdom
              </h2>
              <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  At the heart of everything we do is a simple belief: everyone deserves access to 
                  expert financial guidance that helps them build wealth, protect their families, 
                  and create the life they envision.
                </p>
                <p className="text-lg">
                  We exist to bridge the gap between complex financial concepts and practical, 
                  actionable strategies that real people can implement. Our mission extends beyond 
                  individual success – we're building a community of financially empowered leaders 
                  who make positive impacts in their families, businesses, and communities.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-6 h-6 text-emerald-custom" />
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-3">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-8">
              Our Vision for the Future
            </h2>
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "We envision a world where financial literacy and strategic planning are accessible 
                to everyone, where families feel confident about their financial futures, and where 
                business leaders can focus on creating positive impact knowing their financial 
                foundation is secure."
              </p>
              <div className="w-16 h-1 bg-emerald-custom mx-auto rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}