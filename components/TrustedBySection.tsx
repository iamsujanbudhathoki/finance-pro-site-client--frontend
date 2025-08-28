'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const companies = [
  { name: 'Fidelity', initials: 'FI' },
  { name: 'Charles Schwab', initials: 'CS' },
  { name: 'Vanguard', initials: 'VG' },
  { name: 'Edward Jones', initials: 'EJ' },
  { name: 'Merrill Lynch', initials: 'ML' },
  { name: 'Morgan Stanley', initials: 'MS' },
  { name: 'Goldman Sachs', initials: 'GS' },
  { name: 'JP Morgan', initials: 'JPM' },
  { name: 'Wells Fargo', initials: 'WF' },
  { name: 'Bank of America', initials: 'BOA' },
];

export function TrustedBySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= companies.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const visibleCompanies = companies.slice(currentIndex, currentIndex + 3);
  if (visibleCompanies.length < 3) {
    visibleCompanies.push(...companies.slice(0, 3 - visibleCompanies.length));
  }

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-deep-blue mb-4 lg:mb-6">
            Trusted By Impact-Driven Leaders
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with industry-leading financial institutions to provide 
            comprehensive solutions for our clients' success.
          </p>
        </motion.div>

        {/* Desktop View - All logos visible */}
        <div className="hidden lg:grid lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8 items-center mb-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4 lg:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
            >
              <div className="relative w-20 h-12 lg:w-24 lg:h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-r from-deep-blue to-emerald-custom rounded flex items-center justify-center">
                  <span className="text-white font-montserrat font-bold text-xs lg:text-sm">
                    {company.initials}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet View - Scrollable carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  className="flex-shrink-0 w-1/3 px-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                    <div className="relative w-16 h-10 sm:w-20 sm:h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <div className="w-full h-full bg-gradient-to-r from-deep-blue to-emerald-custom rounded flex items-center justify-center">
                        <span className="text-white font-montserrat font-bold text-xs">
                          {company.initials}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(companies.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index * 3)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / 3) === index ? 'bg-emerald-custom' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 lg:mt-12"
        >
          <p className="text-gray-500 italic text-sm sm:text-base">
            "Working with established financial institutions ensures our clients receive 
            the highest quality products and services backed by industry expertise."
          </p>
        </motion.div>
      </div>
    </section>
  );
}