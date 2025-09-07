'use client';

import { motion } from 'framer-motion';
import { User, Target, TrendingUp, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
    'Personalized financial strategy tailored to your unique situation',
    'One-on-one guidance from a certified financial planner',
    'Flexible scheduling to fit your busy lifestyle',
    'Comprehensive review of all financial areas',
    'Ongoing support and accountability',
    'Access to exclusive resources and tools',
];

const process = [
    {
        step: '01',
        title: 'Initial Assessment',
        description: 'We start with a comprehensive review of your current financial situation, goals, and challenges.',
    },
    {
        step: '02',
        title: 'Strategy Development',
        description: 'Together, we create a personalized financial plan that aligns with your values and objectives.',
    },
    {
        step: '03',
        title: 'Implementation',
        description: 'We guide you through implementing your plan with step-by-step support and regular check-ins.',
    },
    {
        step: '04',
        title: 'Ongoing Support',
        description: 'Continuous monitoring and adjustments ensure your plan evolves with your changing needs.',
    },
];

export default function OneOnOneCoaching() {
    return (
        <div className="pt-20">
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
                            <User className="w-10 h-10 text-emerald-200" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold mb-4 lg:mb-6">
                            1:1 Financial Coaching
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                            Personalized financial guidance designed specifically for impact-driven leaders
                            who want to achieve financial freedom while creating positive change.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
                            >
                                <Link href="/book-consultation">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Your Session
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-blue mb-6">
                                Why Choose 1:1 Coaching?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Unlike generic financial advice, our 1:1 coaching provides personalized strategies
                                that align with your unique situation, values, and goals as an impact-driven leader.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-emerald-custom mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden gradient-primary flex items-center justify-center">
                                        <img
                                            src="/main_hero_image.png"
                                            alt="Prashant Sapkota"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-xl font-montserrat font-semibold text-deep-blue mb-4">
                                        Work Directly with Prashant
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Get personalized attention from a certified financial planner with over 2 years
                                        of experience helping impact-driven leaders achieve their financial goals.
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-emerald-custom">FSRA License</div>
                                            <div className="text-sm text-gray-600">Certified</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-emerald-custom">2+</div>
                                            <div className="text-sm text-gray-600">Years</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-emerald-custom">500+</div>
                                            <div className="text-sm text-gray-600">Clients</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
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
                            Our Coaching Process
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            A proven methodology that transforms your financial situation through
                            personalized guidance and strategic implementation.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center relative"
                            >
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200">
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-custom rounded-full"></div>
                                    </div>
                                )}

                                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 lg:mb-6 gradient-accent rounded-full flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl font-montserrat font-bold text-white">
                                        {item.step}
                                    </span>
                                </div>

                                <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-deep-blue mb-3 lg:mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
                            <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6 lg:mb-8 italic">
                                "Working with Prashant through 1:1 coaching completely transformed my approach to money.
                                His personalized guidance helped me pay off $75,000 in debt while building a solid
                                investment portfolio. I finally feel confident about my financial future."
                            </blockquote>
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-custom to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                    SJ
                                </div>
                                <div className="text-left">
                                    <div className="font-montserrat font-semibold text-deep-blue">Sarah Johnson</div>
                                    <div className="text-gray-600">Social Impact Entrepreneur</div>
                                </div>
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
                            Ready to Transform Your Financial Future?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8">
                            Take the first step towards financial freedom with personalized 1:1 coaching.
                            Book your free consultation today and discover how we can help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 animate-glow"
                            >
                                <Link href="/book-consultation">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Free Consultation
                                </Link>
                            </Button>
                         
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}