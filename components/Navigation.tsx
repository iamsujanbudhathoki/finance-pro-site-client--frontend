'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center space-x-2 ${
                scrolled ? '' : 'drop-shadow-lg'
              }`}
            >
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">PS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-montserrat font-bold text-xl transition-colors duration-300 ${
                  scrolled ? 'text-deep-blue' : 'text-white drop-shadow-md'
                }`}>
                  Prashant Sapkota
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-gray-200 drop-shadow-md'
                }`}>Financial Advisor</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-300 relative group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-deep-blue' 
                    : 'text-white hover:text-emerald-200 drop-shadow-md'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-custom transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Button
              asChild
              className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 animate-pulse-soft"
            >
              <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled 
                ? 'text-deep-blue hover:bg-gray-100' 
                : 'text-white hover:bg-white/10 drop-shadow-md'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 hover:text-deep-blue font-medium py-2 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <Button
                    asChild
                    className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}