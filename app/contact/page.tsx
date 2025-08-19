'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 2269751978',
    subtitle: 'Call for immediate assistance',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'saprashant123@gmail.com',
    subtitle: 'Send us your questions',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: '7420 Airport Rd, Mississauga, Ontario',
    subtitle: 'Visit us in person',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM',
    subtitle: 'When we\'re available',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
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
              Let's Start Your Financial Journey
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ready to take control of your financial future? Get in touch today to schedule 
              your free consultation and discover how I can help you achieve your goals.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg animate-pulse-soft"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-montserrat font-bold text-deep-blue mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                I'm here to answer your questions and help you make informed financial decisions. 
                Reach out through any of these channels, and I'll get back to you promptly.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-emerald-custom" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-deep-blue mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 font-medium mb-1 whitespace-pre-line">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-500">
                        {info.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-emerald-50 rounded-xl"
              >
                <h3 className="font-montserrat font-semibold text-deep-blue mb-4">
                  Why Schedule a Consultation?
                </h3>
                <ul className="space-y-2">
                  {[
                    'Completely free, no obligations',
                    'Personalized financial assessment',
                    'Clear, actionable recommendations',
                    'Understand all your options'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-custom" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-montserrat font-bold text-deep-blue mb-2">
                    Send Me a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full"
                        placeholder="Tell me about your financial goals and how I can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold py-4 text-lg group"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-custom mx-auto mb-4" />
                  <h3 className="text-2xl font-montserrat font-bold text-deep-blue mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours to discuss 
                    your financial goals and how I can help.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-emerald-custom text-emerald-custom hover:bg-emerald-custom hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat font-bold mb-6">
              Prefer to Schedule Directly?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Skip the form and book your free consultation directly through my calendar. 
              Choose a time that works best for you.
            </p>
            <Button
              size="lg"
              className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Available Times
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}