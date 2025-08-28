'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface DownloadFormProps {
  resource: {
    title: string;
    description: string;
    format: string;
    pages: string;
  };
}

export function DownloadForm({ resource }: DownloadFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Simulate download start
    setTimeout(() => {
      // In a real implementation, this would trigger the actual download
      alert(`Download started for ${resource.title}`);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {!isSubmitted ? (
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-montserrat font-bold text-deep-blue mb-2">
            Get Your Free Resource
          </h2>
          <p className="text-gray-600 mb-8">
            Enter your details below to download this valuable resource instantly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number (Optional)
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full"
                placeholder="(555) 123-4567"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Get It Now - Free Download
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-xl text-center"
        >
          <CheckCircle className="w-16 h-16 text-emerald-custom mx-auto mb-6" />
          <h3 className="text-2xl font-montserrat font-bold text-deep-blue mb-4">
            Download Starting!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you! Your download should start automatically. If it doesn't, 
            please check your downloads folder or contact us for assistance.
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-emerald-custom text-emerald-custom hover:bg-emerald-custom hover:text-white"
            >
              Download Again
            </Button>
            <div>
              <Link
                href="/book-consultation"
                className="text-emerald-custom hover:underline font-medium"
              >
                Want personalized guidance? Book a free consultation →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}