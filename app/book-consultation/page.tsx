'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const consultationTypes = [
    'Initial Financial Assessment',
    'Retirement Planning Review',
    'Investment Strategy Discussion',
    'Insurance Needs Analysis',
    'Debt Management Planning',
    'Tax Strategy Consultation',
    'Estate Planning Review',
    'Business Financial Planning',
];

export default function BookConsultation() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        consultationType: '',
        message: '',
        preferredTime: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend and integrate with Calendly
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                consultationType: '',
                message: '',
                preferredTime: '',
            });
        }, 5000);
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
                            Book Your Free Consultation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Take the first step towards financial freedom. Schedule a personalized
                            consultation to discuss your goals and discover how we can help you succeed.
                        </p>
                        <div className="flex justify-center items-center space-x-6 text-emerald-200">
                            <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5" />
                                <span>30 Minutes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>Completely Free</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <User className="w-5 h-5" />
                                <span>No Obligation</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {!isSubmitted ? (
                            <div className="grid lg:grid-cols-2 gap-12">
                                {/* Form */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="bg-white rounded-2xl p-8 shadow-xl"
                                >
                                    <h2 className="text-3xl font-montserrat font-bold text-deep-blue mb-2">
                                        Schedule Your Consultation
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
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
                                                Phone Number *
                                            </label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                                                Consultation Topic *
                                            </label>
                                            <select
                                                id="consultationType"
                                                name="consultationType"
                                                required
                                                value={formData.consultationType}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            >
                                                <option value="">Select a consultation type</option>
                                                {consultationTypes.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                                                Preferred Time
                                            </label>
                                            <Input
                                                id="preferredTime"
                                                name="preferredTime"
                                                type="text"
                                                value={formData.preferredTime}
                                                onChange={handleInputChange}
                                                className="w-full"
                                                placeholder="e.g., Weekday mornings, Tuesday afternoons"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Additional Information
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className="w-full"
                                                placeholder="Tell us about your financial goals or any specific questions you have..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
                                        >
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Schedule My Free Consultation
                                        </Button>
                                    </form>
                                </motion.div>

                                {/* Benefits */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <h3 className="text-2xl font-montserrat font-bold text-deep-blue mb-6">
                                            What to Expect
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                'Comprehensive review of your current financial situation',
                                                'Personalized recommendations based on your goals',
                                                'Clear action steps you can implement immediately',
                                                'No sales pressure or obligation to continue',
                                                'Expert insights from a certified financial planner'
                                            ].map((benefit, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-5 h-5 text-emerald-custom mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-emerald-50 rounded-xl p-6">
                                        <h4 className="font-montserrat font-semibold text-deep-blue mb-3">
                                            Consultation Process
                                        </h4>
                                        <div className="space-y-3 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                                <span>Submit this form</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                                <span>We'll contact you within 24 hours</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                                <span>Schedule your preferred time slot</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                                                <span>Attend your consultation</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-6 shadow-lg">
                                        <div className="text-center">
                                            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden gradient-primary flex items-center justify-center">
                                                <img
                                                    src="/main_hero_image.png"
                                                    alt="Prashant Sapkota"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h4 className="font-montserrat font-semibold text-deep-blue mb-2">
                                                Prashant Sapkota, FSRA
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                "I look forward to learning about your goals and helping you create a clear path to financial success."
                                            </p>
                                        </div>
                                    </div>


                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center py-20"
                            >
                                <div className="bg-white rounded-2xl p-12 shadow-xl max-w-2xl mx-auto">
                                    <CheckCircle className="w-20 h-20 text-emerald-custom mx-auto mb-6" />
                                    <h3 className="text-3xl font-montserrat font-bold text-deep-blue mb-6">
                                        Consultation Request Submitted!
                                    </h3>
                                    <p className="text-xl text-gray-600 mb-8">
                                        Thank you for your interest! We'll review your information and contact you
                                        within 24 hours to schedule your free consultation.
                                    </p>
                                    <div className="bg-emerald-50 rounded-lg p-6 mb-8">
                                        <h4 className="font-semibold text-deep-blue mb-2">What happens next?</h4>
                                        <ul className="text-left text-gray-600 space-y-2">
                                            <li>• We'll call or email you within 24 hours</li>
                                            <li>• We'll schedule a convenient time for your consultation</li>
                                            <li>• You'll receive a confirmation with meeting details</li>
                                            <li>• We'll send you a brief questionnaire to maximize our time together</li>
                                        </ul>
                                    </div>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        variant="outline"
                                        className="border-emerald-custom text-emerald-custom hover:bg-emerald-custom hover:text-white"
                                    >
                                        Schedule Another Consultation
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}