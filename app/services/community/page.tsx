'use client';

import { motion } from 'framer-motion';
import { Users, MessageCircle, BookOpen, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  'Monthly group coaching sessions with expert guidance',
  'Private online community for networking and support',
  'Exclusive resources and educational materials',
  'Peer accountability and motivation',
  'Guest expert sessions on specialized topics',
  'Access to group challenges and workshops',
];

const benefits = [
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Connect with like-minded impact-driven leaders who share your values and financial goals.',
  },
  {
    icon: MessageCircle,
    title: 'Ongoing Support',
    description: 'Get answers to your questions and celebrate wins with a community that understands your journey.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Access new content, resources, and expert insights delivered regularly to keep you growing.',
  },
];

export default function CommunityCoaching() {
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
              <Users className="w-10 h-10 text-emerald-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold mb-4 lg:mb-6">
              Community Coaching
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Join a supportive community of impact-driven leaders working together to achieve 
              financial freedom while creating positive change in the world.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
              >
                <Link href="/book-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Join Our Community
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-blue mb-6">
                What's Included in Community Coaching
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our community coaching program combines expert guidance with peer support, 
                creating an environment where impact-driven leaders can learn, grow, and succeed together.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-custom mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-4">
                    Community Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-emerald-custom">150+</div>
                      <div className="text-sm text-gray-600">Active Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-custom">95%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-custom">$2M+</div>
                      <div className="text-sm text-gray-600">Debt Eliminated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-custom">$5M+</div>
                      <div className="text-sm text-gray-600">Wealth Built</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 italic">
                    "The power of community support combined with expert guidance creates 
                    extraordinary results for our members."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Community Coaching Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Research shows that people are more likely to achieve their goals when they have 
              community support and accountability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-emerald-custom" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6 lg:mb-8 italic">
                "The community coaching program changed everything for me. Not only did I learn 
                valuable financial strategies, but I found a group of people who truly understand 
                the challenges of being an impact-driven leader. The support and accountability 
                helped me achieve goals I never thought possible."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-custom to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-semibold text-deep-blue">Michael Chen</div>
                  <div className="text-gray-600">Nonprofit Executive Director</div>
                </div>
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
              Ready to Join Our Community?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Connect with like-minded leaders, accelerate your financial growth, and create 
              the impact you're meant to make. Your community is waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 animate-glow"
              >
                <Link href="/book-consultation">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}