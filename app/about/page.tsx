'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Lightbulb, Shield, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';



const values = [
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'Your financial well-being and goals are always my top priority in every decision and recommendation.',
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    textColor: 'text-red-600',
  },
  {
    icon: Award,
    title: 'Excellence & Expertise',
    description: 'Continuous learning and professional development ensure you receive the highest quality financial advice.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Users,
    title: 'Trust & Transparency',
    description: 'Building long-term relationships through honest communication and transparent fee structures.',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Focused on measurable outcomes that help you achieve your financial objectives and life goals.',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We operate with unwavering honesty and transparency, always putting your best interests first.',
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Growth',
    description: 'We continuously evolve our strategies and embrace new approaches to deliver the best outcomes.',
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
  },
];

const teamMembers = [
  {
    name: 'Prashant Sapkota',
    role: 'Founder & Lead Financial Advisor',
    credentials: 'FSRA License, FSRA licensed, FRM',
    bio: 'With over 2 years of experience, Prashant specializes in comprehensive financial planning and wealth management for impact-driven leaders.',
    image: 'PS',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Investment Strategist',
    credentials: 'CFA, MBA',
    bio: 'Sarah brings 8 years of institutional investment experience, focusing on portfolio optimization and risk management strategies.',
    image: 'SM',
  },
  {
    name: 'Michael Chen',
    role: 'Retirement Planning Specialist',
    credentials: 'CFP®, RICP',
    bio: 'Michael helps clients navigate complex retirement decisions with expertise in Social Security optimization and tax-efficient strategies.',
    image: 'MC',
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Insurance & Risk Advisor',
    credentials: 'CLU, ChFC',
    bio: 'Jennifer specializes in comprehensive insurance planning and risk management solutions for families and business owners.',
    image: 'JR',
  },
  {
    name: 'David Thompson',
    role: 'Tax Strategy Consultant',
    credentials: 'CPA, PFS',
    bio: 'David provides advanced tax planning strategies and works closely with clients to optimize their overall financial efficiency.',
    image: 'DT',
  },
  {
    name: 'Lisa Park',
    role: 'Client Success Manager',
    credentials: 'MBA, FPQP',
    bio: 'Lisa ensures exceptional client experiences and coordinates comprehensive financial planning implementations across our team.',
    image: 'LP',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold mb-4 lg:mb-6">
                About Prashant Sapkota
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 lg:mb-8 leading-relaxed">
                Your dedicated financial advisor committed to helping impact-driven leaders
                achieve financial security and create lasting positive change.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-emerald-200">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">FSRA License</div>
                  <div className="text-xs sm:text-sm">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">2+</div>
                  <div className="text-xs sm:text-sm">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm">Clients</div>
                </div>
              </div>
            </motion.div>

        
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center order-1 lg:order-2 relative"
            >
              {/* Background glow */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-emerald-400/20 blur-2xl rounded-full" />
              </div>

              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/main_hero_image.jpeg"
                  alt="Hero Image"
                  width={300}   // smaller for about section
                  height={300}
                  className="rounded-2xl object-cover"
                />
              </div>
            </motion.div>
            


          </div>
        </div>
      </section>

      {/* What We Do Section */}
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
              What Do We Do?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Community, Coaching, and Experiences for Impact-Driven Leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Community Coaching',
                description: 'Join a supportive community of like-minded leaders working together to achieve financial independence and create positive impact.',
                icon: Users,
              },
              {
                title: '1:1 Coaching',
                description: 'Personalized financial guidance tailored to your unique situation, goals, and vision for creating meaningful change.',
                icon: Heart,
              },
              {
                title: 'In-Person Experience',
                description: 'Immersive workshops and retreats designed to accelerate your financial growth and leadership development.',
                icon: TrendingUp,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 lg:mb-6">
                  <service.icon className="w-6 h-6 text-emerald-custom" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To empower impact-driven leaders to achieve financial freedom and create
              lasting positive change in their communities through personalized guidance,
              strategic planning, and comprehensive support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto"
          >
            <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed text-center italic mb-6 lg:mb-8">
              "We believe that when impact-driven leaders achieve financial security,
              they can focus on what matters most – creating positive change in the world."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">PS</span>
              </div>
              <div className="text-left">
                <div className="font-montserrat font-semibold text-deep-blue">Prashant Sapkota</div>
                <div className="text-gray-600">Founder & Lead Financial Advisor</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide every decision we make and
              every relationship we build with our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 lg:w-16 lg:h-16 ${value.color} rounded-xl flex items-center justify-center mb-4 lg:mb-6`}>
                  <value.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-bold text-deep-blue mb-3 lg:mb-4">
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

      {/* Team Section */}
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
              Our Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated group of financial professionals committed to helping
              impact-driven leaders achieve their goals and create lasting success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Profile Image */}
                <div className="relative mb-4 lg:mb-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                    <span className="text-white font-montserrat font-bold text-2xl sm:text-3xl">
                      {member.image}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-lg sm:text-xl font-montserrat font-bold text-deep-blue mb-2">
                  {member.name}
                </h3>

                <p className="text-emerald-custom font-semibold mb-2">
                  {member.role}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  {member.credentials}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}