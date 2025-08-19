'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen relative gradient-primary flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-emerald-custom/20 rounded-full text-emerald-200 font-medium text-xs sm:text-sm"
            >
              Certified Financial Advisor
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight text-shadow"
            >
              Secure Your Financial Future with
              <span className="text-emerald-custom block mt-1 sm:mt-2">
                Expert Guidance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
            >
              Personalized financial planning, investment strategies, and wealth management 
              solutions tailored to help you achieve your life goals and dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 animate-pulse-soft animate-glow"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-black hover:bg-white hover:text-deep-blue font-montserrat font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-custom rounded-full"></div>
                <span>2+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-custom rounded-full"></div>
                <span>hu Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-custom rounded-full"></div>
                <span>FSRA licensed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative pointer-events-none">
              {/* Photo Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl pointer-events-auto"
              >
                <div className="w-full h-full bg-gradient-to-br from-emerald-custom/20 to-white/10 flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-white/90 flex items-center justify-center">
                    {/* <span className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-deep-blue">PS</span> */}
                    <img src="/main_hero_image.jpeg" alt="" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements (Decorative) */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-custom/20 rounded-full backdrop-blur-sm flex items-center justify-center pointer-events-none"
              >
                <span className="text-emerald-200 font-bold text-xs sm:text-sm">FSRA</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center pointer-events-none"
              >
                <span className="text-white font-bold text-[10px] sm:text-xs">2+</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-emerald-custom transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24}   />
        </motion.div>
      </motion.button>
    </section>
  );
}