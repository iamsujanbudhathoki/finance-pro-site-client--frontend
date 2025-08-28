'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NProgress from 'nprogress';

const servicesDropdown = [
  { href: '/services/coaching', label: '1:1 Coaching' },
  { href: '/services/community', label: 'Community Coaching' },
  { href: '/services/experience', label: 'In-Person Experience' },
];

const resourcesDropdown = [
  { href: '/blog', label: 'Blog' },
  { href: '/resources/downloads', label: 'Free Downloads' },
  { href: '/resources/workshops', label: 'Upcoming Workshops' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  // Check if current page is home page
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    NProgress.start();
    router.push(href);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Determine if we should use light theme based on page type and scroll
  const shouldUseLightTheme = !isHomePage || scrolled;

  const DropdownMenu = ({ items, label }: any ) => (
    <div className="relative group">
      <button
        className={`flex items-center space-x-1 font-medium transition-all duration-300 relative group ${shouldUseLightTheme
          ? 'text-gray-700 hover:text-deep-blue'
          : 'text-white hover:text-emerald-200 drop-shadow-md'
          }`}
        onMouseEnter={() => setActiveDropdown(label)}
      >
        <span>{label}</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-custom transition-all duration-300 group-hover:w-full"></span>
      </button>

      <AnimatePresence>
        {activeDropdown === label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
            onMouseEnter={() => setActiveDropdown(label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-emerald-custom hover:bg-emerald-50 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${shouldUseLightTheme
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-black/20 backdrop-blur-sm'
        }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center space-x-2 ${!shouldUseLightTheme ? 'drop-shadow-lg' : ''
                }`}
            >
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">PS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-montserrat font-bold text-xl transition-colors duration-300 ${shouldUseLightTheme ? 'text-deep-blue' : 'text-white drop-shadow-md'
                  }`}>
                  Prashant Sapkota
                </h1>
                <p className={`text-sm transition-colors duration-300 ${shouldUseLightTheme ? 'text-gray-600' : 'text-gray-200 drop-shadow-md'
                  }`}>Financial Advisor</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 desktop-menu">
            <Link
              href="/about"
              className={`font-medium transition-all duration-300 relative group ${shouldUseLightTheme
                ? 'text-gray-700 hover:text-deep-blue'
                : 'text-white hover:text-emerald-200 drop-shadow-md'
                }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/about');
              }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-custom transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <DropdownMenu items={servicesDropdown} label="Services" />
            <DropdownMenu items={resourcesDropdown} label="Resources" />

            <Button
              asChild
              className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <Link
                href="/book-consultation"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/book-consultation');
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button - Made sure it's visible */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${shouldUseLightTheme
                ? 'text-deep-blue hover:bg-gray-100'
                : 'text-white hover:bg-white/10 drop-shadow-md'
                } ${isOpen ? 'bg-white/10' : ''}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full"
                />
                <motion.div
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
              >
                <div className="px-6 py-8">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                        <span className="text-white font-bold text-sm">PS</span>
                      </div>
                      <div>
                        <h2 className="font-bold text-deep-blue">Prashant Sapkota</h2>
                        <p className="text-xs text-gray-600">Financial Advisor</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    <Link
                      href="/about"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('/about');
                      }}
                      className="block text-gray-700 hover:text-deep-blue hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      About
                    </Link>

                    {/* Mobile Services Accordion */}
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === 'Services' ? null : 'Services')}
                        className="w-full flex items-center justify-between text-gray-700 hover:text-deep-blue hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                      >
                        <span>Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'Services' ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === 'Services' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-2 space-y-1">
                              {servicesDropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.href);
                                  }}
                                  className="block text-gray-600 hover:text-deep-blue hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Mobile Resources Accordion */}
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === 'Resources' ? null : 'Resources')}
                        className="w-full flex items-center justify-between text-gray-700 hover:text-deep-blue hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                      >
                        <span>Resources</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'Resources' ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === 'Resources' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-2 space-y-1">
                              {resourcesDropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.href);
                                  }}
                                  className="block text-gray-600 hover:text-deep-blue hover:bg-gray-50 px-4 py-2 rounded-md transition-colors duration-300"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-6 border-t border-gray-200 mt-6">
                      <Button
                        asChild
                        className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                      >
                        <Link
                          href="/book-consultation"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('/book-consultation');
                          }}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Book Consultation
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}