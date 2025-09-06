'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Calendar, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const teamMembers = [
  {
    id: 'prashant-sapkota',
    name: 'Prashant Sapkota',
    role: 'Lead Financial Advisor & Team Leader',
    credentials: 'WFG Licensed, Equitable Life Licensed',
    specialties: ['Life Insurance', 'Investment Planning', 'Retirement Strategies'],
    bio: 'Former cybersecurity professional turned financial entrepreneur. Specializes in helping families achieve financial freedom through comprehensive planning and protection strategies.',
    image: 'PS',
    linkedin: '#',
    email: 'prashant@financialadvisor.com',
    phone: '(555) 123-4567',
    experience: '5+ years',
    clientsFocused: 'Families & Entrepreneurs',
  },
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Senior Investment Specialist',
    credentials: 'WFG Licensed, Investment Advisor',
    specialties: ['Segregated Funds', 'TFSA/RRSP', 'Portfolio Management'],
    bio: 'Dedicated to helping clients build wealth through strategic investment planning. Specializes in tax-advantaged investment strategies and retirement planning.',
    image: 'SM',
    linkedin: '#',
    email: 'sarah@financialadvisor.com',
    phone: '(555) 123-4568',
    experience: '4+ years',
    clientsFocused: 'Young Professionals',
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'Life Insurance Specialist',
    credentials: 'WFG Licensed, Life Insurance Expert',
    specialties: ['Term Life', 'Whole Life', 'Critical Illness'],
    bio: 'Passionate about protecting families through comprehensive life insurance solutions. Helps clients understand their coverage needs and find the right protection.',
    image: 'MC',
    linkedin: '#',
    email: 'michael@financialadvisor.com',
    phone: '(555) 123-4569',
    experience: '3+ years',
    clientsFocused: 'Growing Families',
  },
  {
    id: 'jennifer-rodriguez',
    name: 'Jennifer Rodriguez',
    role: 'Business Solutions Advisor',
    credentials: 'WFG Licensed, Business Insurance Specialist',
    specialties: ['Key Person Insurance', 'Group Benefits', 'Business Succession'],
    bio: 'Specializes in helping business owners protect their companies and employees. Expert in business insurance solutions and succession planning.',
    image: 'JR',
    linkedin: '#',
    email: 'jennifer@financialadvisor.com',
    phone: '(555) 123-4570',
    experience: '6+ years',
    clientsFocused: 'Business Owners',
  },
  {
    id: 'david-thompson',
    name: 'David Thompson',
    role: 'Retirement Planning Specialist',
    credentials: 'WFG Licensed, Retirement Planning Expert',
    specialties: ['RRSP/RRIF', 'Pension Planning', 'Annuities'],
    bio: 'Helps clients plan for a secure retirement through strategic savings and investment planning. Expert in government benefits optimization.',
    image: 'DT',
    linkedin: '#',
    email: 'david@financialadvisor.com',
    phone: '(555) 123-4571',
    experience: '7+ years',
    clientsFocused: 'Pre-Retirees',
  },
  {
    id: 'lisa-park',
    name: 'Lisa Park',
    role: 'Family Financial Planner',
    credentials: 'WFG Licensed, Family Planning Specialist',
    specialties: ['RESP', 'Family Protection', 'Education Planning'],
    bio: 'Dedicated to helping families plan for their children\'s future through education savings and comprehensive family financial planning.',
    image: 'LP',
    linkedin: '#',
    email: 'lisa@financialadvisor.com',
    phone: '(555) 123-4572',
    experience: '4+ years',
    clientsFocused: 'Young Families',
  },
];

export default function Team() {
  const handleAdvisorSelect = (advisorId: string, advisorName: string) => {
    // Store advisor info in localStorage to pass to consultation page
    localStorage.setItem('selectedAdvisor', JSON.stringify({
      id: advisorId,
      name: advisorName
    }));
    
    // Navigate to consultation page
    window.location.href = '/book-consultation';
  };

  return (
    <div className="pt-20 bg-white">
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
              Meet Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              A dedicated group of licensed financial professionals committed to helping 
              families achieve financial security and build lasting wealth.
            </p>
            <div className="flex justify-center">
              <div className="bg-emerald-custom/20 rounded-full px-6 py-3">
                <span className="text-emerald-200 font-semibold">
                  Choose your preferred advisor below
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
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
              Licensed Financial Professionals
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Each team member brings specialized expertise and is committed to providing 
              personalized financial solutions for your unique situation.
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
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                    <span className="text-white font-montserrat font-bold text-2xl sm:text-3xl">
                      {member.image}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl font-montserrat font-bold text-deep-blue mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-emerald-custom font-semibold mb-2">
                    {member.role}
                  </p>
                  
                  <p className="text-sm text-gray-500 mb-3">
                    {member.credentials}
                  </p>

                  <div className="flex justify-center space-x-4 text-xs text-gray-600 mb-4">
                    <div>
                      <span className="font-semibold">{member.experience}</span>
                      <div>Experience</div>
                    </div>
                    <div>
                      <span className="font-semibold">{member.clientsFocused}</span>
                      <div>Focus</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-deep-blue mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-50 text-emerald-custom px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact & Select */}
                <div className="space-y-3">
                  <Button
                    onClick={() => handleAdvisorSelect(member.id, member.name)}
                    className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book with {member.name.split(' ')[0]}
                  </Button>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-600 transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-blue mb-8">
              Why Choose Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-emerald-custom" />
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Licensed Professionals
                </h3>
                <p className="text-gray-600">
                  All team members are fully licensed and continuously trained
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-custom" />
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Specialized Expertise
                </h3>
                <p className="text-gray-600">
                  Each advisor specializes in specific areas to serve you better
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-emerald-custom" />
                </div>
                <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                  Personalized Service
                </h3>
                <p className="text-gray-600">
                  Choose the advisor that best matches your needs and goals
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
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Choose your preferred advisor above or book a general consultation 
              and we'll match you with the best team member for your needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
            >
              <Link href="/book-consultation">
                <Calendar className="w-5 h-5 mr-2" />
                Book General Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}