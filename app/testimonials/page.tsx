'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Small Business Owner',
    content: 'Prashant transformed our financial outlook completely. His expertise in retirement planning helped us create a solid strategy that gives us peace of mind for the future. We couldn\'t be happier with the personalized attention and professional service.',
    rating: 5,
    image: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Software Engineer',
    content: 'Working with Prashant was a game-changer for our family. His comprehensive approach to financial planning helped us optimize our investments, reduce debt, and secure proper insurance coverage. Highly recommend his services!',
    rating: 5,
    image: 'MC',
  },
  {
    id: 3,
    name: 'Lisa Martinez',
    title: 'Healthcare Professional',
    content: 'I was overwhelmed by all the financial decisions I needed to make. Prashant made everything clear and manageable. His patient approach and expert guidance helped me create a financial plan that actually works for my busy lifestyle.',
    rating: 5,
    image: 'LM',
  },
  {
    id: 4,
    name: 'David Wilson',
    title: 'Retired Teacher',
    content: 'Prashant helped us navigate the complex world of retirement planning. His strategies for maximizing Social Security benefits and managing our retirement accounts have made our golden years much more comfortable.',
    rating: 5,
    image: 'DW',
  },
  {
    id: 5,
    name: 'Jennifer Brown',
    title: 'Marketing Executive',
    content: 'The debt management strategy Prashant created for us was incredible. We paid off $50,000 in debt in just 3 years while still building our emergency fund. His approach is practical and achievable.',
    rating: 5,
    image: 'JB',
  },
  {
    id: 6,
    name: 'Robert Taylor',
    title: 'Construction Manager',
    content: 'Prashant\'s insurance planning expertise saved our family from financial disaster when I was injured and couldn\'t work. His foresight in recommending disability insurance was invaluable. True professional.',
    rating: 5,
    image: 'RT',
  },
];

const stats = [
  { number: 500, suffix: '+', label: 'Happy Clients' },
  { number: 98, suffix: '%', label: 'Satisfaction Rate' },
  { number: 10, suffix: '+', label: 'Years of Excellence' },
  { number: 50, suffix: 'M+', label: 'Assets Under Management' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

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
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover how personalized financial planning has transformed the lives 
              of hundreds of families and individuals just like you.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
                <span className="ml-4 text-xl font-semibold">4.9/5 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-montserrat font-bold text-emerald-custom mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-lg font-medium text-deep-blue mb-2">
                  {stat.label}
                </div>
                <div className="w-12 h-1 bg-emerald-custom mx-auto rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
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
              What My Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who have achieved their financial goals 
              through personalized planning and expert guidance.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center w-full"
                >
                  <Quote className="w-12 h-12 text-emerald-custom mx-auto mb-6" />
                  
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-custom to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <div className="font-montserrat font-semibold text-lg text-deep-blue">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-custom" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-50 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-emerald-custom" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-emerald-custom' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied clients who have transformed their financial lives. 
              Your success story starts with a single conversation.
            </p>
            <Button
              size="lg"
              className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg animate-pulse-soft"
            >
              Start Your Journey Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}