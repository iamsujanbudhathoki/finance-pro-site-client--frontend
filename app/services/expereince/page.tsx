'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const experiences = [
  {
    title: 'Financial Freedom Intensive',
    duration: '3-Day Weekend Retreat',
    location: 'Mountain Resort, Colorado',
    description: 'An immersive experience designed to transform your relationship with money and create a clear path to financial independence.',
    highlights: [
      'Comprehensive financial assessment and planning',
      'Investment strategy workshop',
      'Debt elimination masterclass',
      'Mindset transformation sessions',
      'Networking with like-minded leaders',
      'One-on-one coaching sessions',
    ],
  },
  {
    title: 'Impact Leader Summit',
    duration: '2-Day Conference',
    location: 'Downtown Convention Center',
    description: 'Connect with other impact-driven leaders while learning advanced financial strategies for scaling your influence.',
    highlights: [
      'Keynote presentations from industry experts',
      'Breakout sessions on specialized topics',
      'Networking opportunities',
      'Resource marketplace',
      'Action planning workshops',
      'Follow-up support program',
    ],
  },
];

const benefits = [
  {
    icon: Target,
    title: 'Accelerated Results',
    description: 'Intensive, focused learning that produces breakthrough results in a short time frame.',
  },
  {
    icon: Users,
    title: 'Network Building',
    description: 'Connect with other impact-driven leaders and build lasting professional relationships.',
  },
  {
    icon: MapPin,
    title: 'Immersive Environment',
    description: 'Step away from daily distractions and fully focus on your financial transformation.',
  },
];

export default function InPersonExperience() {
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
              <MapPin className="w-10 h-10 text-emerald-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold mb-4 lg:mb-6">
              In-Person Experience
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Immersive workshops and retreats designed to accelerate your financial growth 
              and leadership development through intensive, hands-on learning experiences.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
              >
                <Link href="/book-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve Your Spot
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-blue mb-4 lg:mb-6">
              Upcoming Experiences
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully designed in-person experiences that combine expert 
              instruction with peer learning and networking opportunities.
            </p>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-deep-blue mb-4">
                      {experience.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center space-x-2 text-emerald-custom">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-emerald-custom">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    <Button
                      asChild
                      className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                    >
                      <Link href="/book-consultation">
                        Learn More & Register
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h4 className="text-xl font-montserrat font-semibold text-deep-blue mb-6">
                    What You'll Experience:
                  </h4>
                  <ul className="space-y-3">
                    {experience.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-custom mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
              Why In-Person Experiences Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              There's something powerful about learning alongside others in a focused, 
              distraction-free environment that accelerates transformation.
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
                "The Financial Freedom Intensive was a game-changer. In just three days, 
                I gained more clarity about my financial future than I had in years of 
                trying to figure it out on my own. The combination of expert teaching 
                and connecting with other leaders was incredibly powerful."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-custom to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  LM
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-semibold text-deep-blue">Lisa Martinez</div>
                  <div className="text-gray-600">Social Enterprise Founder</div>
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
              Ready for Your Transformation?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Join us for an intensive, life-changing experience that will accelerate your 
              financial growth and connect you with a community of impact-driven leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 animate-glow"
              >
                <Link href="/book-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve Your Spot
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Get More Info
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