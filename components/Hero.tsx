'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ChevronDown, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NProgress from 'nprogress';

export function Hero() {
  const router = useRouter();

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleConsultationClick = () => {
    NProgress.start();
    router.push('/book-consultation');
  };

  return (
    <section className="min-h-screen relative gradient-primary flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="inline-block px-4 py-2 bg-emerald-custom/20 rounded-full text-emerald-200 font-medium text-sm cursor-text select-text"
              style={{
                userSelect: 'text',
                WebkitUserSelect: 'text',
                MozUserSelect: 'text',
                msUserSelect: 'text',
                WebkitTouchCallout: 'default'
              }}
            >
              Certified Financial Advisor
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight text-shadow cursor-text select-text"
              style={{
                userSelect: 'text',
                WebkitUserSelect: 'text',
                MozUserSelect: 'text',
                msUserSelect: 'text',
                WebkitTouchCallout: 'default'
              }}
            >
              <span className="select-text">Secure Your Financial Future with</span>
              <span className="text-emerald-custom block mt-2 select-text">
                Expert Guidance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-200 max-w-xl leading-relaxed cursor-text select-text"
              style={{
                userSelect: 'text',
                WebkitUserSelect: 'text',
                MozUserSelect: 'text',
                msUserSelect: 'text',
                WebkitTouchCallout: 'default'
              }}
            >
              Personalized financial planning, investment strategies, and wealth management 
              solutions tailored to help you achieve your life goals and dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={handleConsultationClick}
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 animate-pulse-soft animate-glow"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-deep-blue font-montserrat font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-custom rounded-full select-none"></div>
                <span 
                  className="cursor-text select-text"
                  style={{
                    userSelect: 'text',
                    WebkitUserSelect: 'text',
                    MozUserSelect: 'text',
                    msUserSelect: 'text'
                  }}
                >
                  2+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-custom rounded-full select-none"></div>
                <span 
                  className="cursor-text select-text"
                  style={{
                    userSelect: 'text',
                    WebkitUserSelect: 'text',
                    MozUserSelect: 'text',
                    msUserSelect: 'text'
                  }}
                >
                  500+ Clients Served
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-custom rounded-full select-none"></div>
                <span 
                  className="cursor-text select-text"
                  style={{
                    userSelect: 'text',
                    WebkitUserSelect: 'text',
                    MozUserSelect: 'text',
                    msUserSelect: 'text'
                  }}
                >
                  FSRA licensed
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="relative flex justify-center lg:justify-end select-none"
          >
            <div className="relative">
              {/* Photo Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              >
                <div className="w-full h-full bg-gradient-to-br from-emerald-custom/20 to-white/10 flex items-center justify-center">
                  <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-6xl lg:text-7xl font-montserrat font-bold text-deep-blue">PS</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-custom/20 rounded-full backdrop-blur-sm flex items-center justify-center select-none"
              >
                <span className="text-emerald-200 font-bold text-sm">FSRA</span>
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
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center select-none"
              >
                <span className="text-white font-bold text-xs">2+</span>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-emerald-custom transition-colors duration-300 select-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}