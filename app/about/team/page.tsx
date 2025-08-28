'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: 'Prashant Sapkota',
    role: 'Founder & Lead Financial Advisor',
    credentials: 'CFP®, ChFC, FRM',
    bio: 'With over 10 years of experience, Prashant specializes in comprehensive financial planning and wealth management for impact-driven leaders.',
    image: 'PS',
    linkedin: '#',
    email: 'prashant@financialadvisor.com',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Investment Strategist',
    credentials: 'CFA, MBA',
    bio: 'Sarah brings 8 years of institutional investment experience, focusing on portfolio optimization and risk management strategies.',
    image: 'SM',
    linkedin: '#',
    email: 'sarah@financialadvisor.com',
  },
  {
    name: 'Michael Chen',
    role: 'Retirement Planning Specialist',
    credentials: 'CFP®, RICP',
    bio: 'Michael helps clients navigate complex retirement decisions with expertise in Social Security optimization and tax-efficient strategies.',
    image: 'MC',
    linkedin: '#',
    email: 'michael@financialadvisor.com',
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Insurance & Risk Advisor',
    credentials: 'CLU, ChFC',
    bio: 'Jennifer specializes in comprehensive insurance planning and risk management solutions for families and business owners.',
    image: 'JR',
    linkedin: '#',
    email: 'jennifer@financialadvisor.com',
  },
  {
    name: 'David Thompson',
    role: 'Tax Strategy Consultant',
    credentials: 'CPA, PFS',
    bio: 'David provides advanced tax planning strategies and works closely with clients to optimize their overall financial efficiency.',
    image: 'DT',
    linkedin: '#',
    email: 'david@financialadvisor.com',
  },
  {
    name: 'Lisa Park',
    role: 'Client Success Manager',
    credentials: 'MBA, FPQP',
    bio: 'Lisa ensures exceptional client experiences and coordinates comprehensive financial planning implementations across our team.',
    image: 'LP',
    linkedin: '#',
    email: 'lisa@financialadvisor.com',
  },
];

export default function Team() {
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
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              A dedicated group of financial professionals committed to helping 
              impact-driven leaders achieve their goals and create lasting success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
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
              Expert Professionals, Personalized Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together decades of combined experience across 
              all areas of financial planning and wealth management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                    <span className="text-white font-montserrat font-bold text-3xl">
                      {member.image}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-montserrat font-bold text-deep-blue mb-2">
                  {member.name}
                </h3>
                
                <p className="text-emerald-custom font-semibold mb-2">
                  {member.role}
                </p>
                
                <p className="text-sm text-gray-500 mb-4">
                  {member.credentials}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
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
              Why Our Team Makes the Difference
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-custom">50+</span>
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Years Combined Experience
                </h3>
                <p className="text-gray-600">
                  Decades of expertise across all financial planning disciplines
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-custom">15+</span>
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Professional Certifications
                </h3>
                <p className="text-gray-600">
                  Advanced credentials ensuring the highest quality advice
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-custom">100%</span>
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Client-Focused Approach
                </h3>
                <p className="text-gray-600">
                  Every decision made with your best interests in mind
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}