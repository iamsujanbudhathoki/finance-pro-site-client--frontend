'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';
import Image from 'next/image';

const credentials = [
  { title: 'Certified Financial Planner (CFP®)', year: '2018' },
  { title: 'Chartered Financial Consultant (ChFC)', year: '2019' },
  { title: 'Financial Risk Manager (FRM)', year: '2020' },
  { title: 'Investment Advisor Representative', year: '2017' },
];

const values = [
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'Your financial well-being and goals are always my top priority in every decision and recommendation.',
  },
  {
    icon: Award,
    title: 'Excellence & Expertise',
    description: 'Continuous learning and professional development ensure you receive the highest quality financial advice.',
  },
  {
    icon: Users,
    title: 'Trust & Transparency',
    description: 'Building long-term relationships through honest communication and transparent fee structures.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Focused on measurable outcomes that help you achieve your financial objectives and life goals.',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
                Meet Prashant Sapkota
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Your dedicated financial advisor committed to helping you achieve financial 
                security and peace of mind through personalized strategies and expert guidance.
              </p>
              <div className="flex items-center space-x-6 text-emerald-200">
                <div>
                  <div className="text-2xl font-bold">FSRA®</div>
                  <div className="text-sm">Licensed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-sm">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-custom/20 to-white/20 flex items-center justify-center">
                    <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-xl bg-white/90 flex items-center justify-center">
                    <img src="/laptop_look.jpeg" alt="" />
                      {/* <span className="text-6xl lg:text-7xl font-montserrat font-bold text-deep-blue">PS</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
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
              <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
                My Story & Mission
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-700 space-y-6"
            >
              <p>
                My journey in financial planning began over a decade ago when I witnessed firsthand 
                how proper financial guidance could transform lives. After seeing too many families 
                struggle with financial uncertainty despite working hard, I knew I wanted to dedicate 
                my career to helping people achieve financial security and peace of mind.
              </p>
              
              <p>
                I earned my Certified Financial Planner (CFP®) designation and have since helped over 
                500 individuals and families navigate complex financial decisions. Whether it's planning 
                for retirement, protecting against unexpected events, or building wealth for the future, 
                I believe that everyone deserves access to expert financial guidance tailored to their 
                unique circumstances.
              </p>
              
              <p>
                My approach is simple: listen first, understand your goals, and then create a comprehensive 
                strategy that adapts as your life changes. I'm not just here to manage your money – I'm 
                here to be your trusted advisor for life's most important financial decisions.
              </p>
              
              <p>
                When I'm not helping clients achieve their financial dreams, you'll find me spending 
                time with my family, volunteering in the community, and continuously expanding my 
                knowledge through ongoing education and industry certifications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              My Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every interaction and decision I make on behalf of my clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-emerald-custom" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
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
              <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
                Professional Credentials
              </h2>
              <p className="text-xl text-gray-600">
                Continuous education and certifications ensure you receive the highest quality advice.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-custom rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-deep-blue">
                      {credential.title}
                    </h3>
                    <p className="text-gray-600">Earned {credential.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}