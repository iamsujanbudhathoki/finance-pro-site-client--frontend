'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const workshops = [
  {
    title: 'Financial Planning 101',
    date: 'March 15, 2025',
    time: '2:00 PM - 4:00 PM EST',
    format: 'Virtual Workshop',
    capacity: '50 participants',
    price: 'Free',
    description: 'Learn the fundamentals of financial planning including budgeting, saving, and setting financial goals.',
    topics: [
      'Creating a realistic budget that works',
      'Building an emergency fund strategy',
      'Setting and achieving financial goals',
      'Understanding different types of accounts',
      'Q&A session with expert guidance',
    ],
    status: 'Open for Registration',
  },
  {
    title: 'Investment Strategies for Beginners',
    date: 'March 28, 2025',
    time: '7:00 PM - 9:00 PM EST',
    format: 'Virtual Workshop',
    capacity: '30 participants',
    price: 'Free',
    description: 'Demystify investing with this beginner-friendly workshop covering the basics of building wealth through investments.',
    topics: [
      'Investment fundamentals and terminology',
      'Understanding risk and return',
      'Asset allocation strategies',
      'Getting started with index funds',
      'Common investment mistakes to avoid',
    ],
    status: 'Open for Registration',
  },
  {
    title: 'Retirement Planning Workshop',
    date: 'April 10, 2025',
    time: '6:00 PM - 8:00 PM EST',
    format: 'Virtual Workshop',
    capacity: '40 participants',
    price: 'Free',
    description: 'Plan for a secure retirement with strategies for saving, investing, and maximizing your retirement accounts.',
    topics: [
      '401(k) optimization strategies',
      'IRA vs. Roth IRA decisions',
      'Social Security planning',
      'Healthcare costs in retirement',
      'Creating multiple income streams',
    ],
    status: 'Open for Registration',
  },
  {
    title: 'Debt Freedom Masterclass',
    date: 'April 25, 2025',
    time: '1:00 PM - 3:00 PM EST',
    format: 'Virtual Workshop',
    capacity: '60 participants',
    price: 'Free',
    description: 'Learn proven strategies to eliminate debt faster and build a strong financial foundation.',
    topics: [
      'Debt avalanche vs. snowball methods',
      'Negotiating with creditors',
      'Consolidation strategies',
      'Preventing future debt',
      'Building wealth after debt freedom',
    ],
    status: 'Open for Registration',
  },
];

export default function UpcomingWorkshops() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-emerald-custom/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-emerald-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold mb-4 lg:mb-6">
              Upcoming Workshops
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Join our free educational workshops designed to help you master different 
              aspects of personal finance and build lasting wealth.
            </p>
            <div className="flex justify-center">
              <div className="bg-emerald-custom/20 rounded-full px-6 py-3">
                <span className="text-emerald-200 font-semibold">
                  All workshops are completely free to attend
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-blue mb-4 lg:mb-6">
              Choose Your Workshop
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Each workshop is designed to provide practical, actionable knowledge 
              you can implement immediately.
            </p>
          </motion.div>

          <div className="space-y-6 lg:space-y-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 p-6 lg:p-8">
                  {/* Workshop Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-emerald-100 text-emerald-custom px-3 py-1 rounded-full text-sm font-medium">
                        {workshop.status}
                      </span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {workshop.price}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-deep-blue mb-4">
                      {workshop.title}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-emerald-custom" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-emerald-custom" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-emerald-custom" />
                        <span>{workshop.format}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-emerald-custom" />
                        <span>{workshop.capacity}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {workshop.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold text-deep-blue mb-3">
                        What You'll Learn:
                      </h4>
                      <ul className="space-y-2">
                        {workshop.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-custom mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Registration */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 h-full flex flex-col justify-between">
                      <div>
                        <h4 className="font-montserrat font-semibold text-deep-blue mb-4 text-center">
                          Reserve Your Spot
                        </h4>
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-emerald-custom mb-2">
                            {workshop.price}
                          </div>
                          <div className="text-sm text-gray-600">
                            Limited to {workshop.capacity.split(' ')[0]} people
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        size="lg"
                        className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-blue mb-6">
              Why Attend Our Workshops?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-custom" />
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Expert Instruction
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn from certified financial professionals with real-world experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-custom" />
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Actionable Content
                </h3>
                <p className="text-gray-600 text-sm">
                  Walk away with practical strategies you can implement immediately
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-emerald-custom" />
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Interactive Format
                </h3>
                <p className="text-gray-600 text-sm">
                  Ask questions and get personalized guidance during Q&A sessions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-4 lg:mb-6">
              Want More Personalized Guidance?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              While workshops provide great foundational knowledge, sometimes you need 
              one-on-one guidance tailored to your specific situation.
            </p>
            <Button
              size="lg"
              className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
            >
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}