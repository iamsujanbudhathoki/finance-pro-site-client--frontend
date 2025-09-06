
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    CheckCircle,
    DollarSign,
    Globe,
    Send,
    Star,
    Target,
    TrendingUp,
    Upload,
    Users
} from 'lucide-react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const opportunityTypes = [
    'Financial Services Career',
    'Business Partnership Opportunity',
    'Part-time Income Opportunity',
    'Team Leadership Role',
    'Regional Manager Position',
    'Licensed Agent Position',
    'Recruitment Partnership',
    'General Information Request',
];

const experienceLevels = [
    'No Experience - Complete Beginner',
    'Some Sales Experience',
    'Financial Services Experience',
    'Management/Leadership Experience',
    'Entrepreneur/Business Owner',
    'Licensed Professional',
];

const availabilityOptions = [
    'Full-time (40+ hours/week)',
    'Part-time (20-40 hours/week)',
    'Flexible/As needed',
    'Evenings and Weekends',
    'Remote/Virtual only',
    'In-person preferred',
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Regional Vice President",
        quote: "Prashant Advisort gave me the opportunity to build my own business while helping families secure their financial future. In 3 years, I've achieved financial freedom.",
        years: "3 years with Prashant Advisory"
    },
    {
        name: "Michael Chen",
        role: "Senior Marketing Director",
        quote: "The training and support at Prashant Advisory is unmatched. I went from zero experience to earning six figures while working flexible hours.",
        years: "5 years with Prashant Advisory"
    },
    {
        name: "Jennifer Rodriguez",
        role: "Executive Marketing Director",
        quote: "Prashant Advisory's business opportunity allowed me to retire my husband and spend more time with our kids while building generational wealth.",
        years: "7 years with Prashant Advisory"
    }
];

export default function WorkWithUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        opportunityType: '',
        experienceLevel: '',
        currentSituation: '',
        availability: '',
        incomeGoals: '',
        whyInterested: '',
        resume: null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, resume: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Application submitted:', formData);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                opportunityType: '',
                experienceLevel: '',
                currentSituation: '',
                availability: '',
                incomeGoals: '',
                whyInterested: '',
                resume: null,
            });
        }, 5000);
    };

    return (
        <div className="pt-20">
            {/* Icon Section */}
            <section className="py-10 bg-deep-blue text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-blue rounded-full flex items-center justify-center">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" fill="#2DD4BF"/>
                                <path d="M12 7L15 10L12 13L9 10L12 7Z" fill="white"/>
                                <path d="M12 13V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

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
                            Join Our Growing Team
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Build a rewarding career in financial services or start your own business with WFG. 
                            We offer unlimited earning potential and comprehensive training to help you succeed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Business Opportunity Highlight */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
                                The WFG Business Opportunity
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                World Financial Group offers entrepreneurs a proven system to build their own financial services business
                                with unlimited earning potential and comprehensive support.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {[
                                {
                                    icon: <DollarSign className="w-8 h-8 text-emerald-custom" />,
                                    title: "Unlimited Income",
                                    description: "No salary cap - your income grows with your effort and team's success"
                                },
                                {
                                    icon: <Users className="w-8 h-8 text-emerald-custom" />,
                                    title: "Build Your Team",
                                    description: "Recruit and develop your own team of financial professionals"
                                },
                                {
                                    icon: <Target className="w-8 h-8 text-emerald-custom" />,
                                    title: "Proven System",
                                    description: "Follow our time-tested business model and training programs"
                                },
                                {
                                    icon: <Award className="w-8 h-8 text-emerald-custom" />,
                                    title: "Recognition",
                                    description: "Earn trips, bonuses, and public recognition for your achievements"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="text-center bg-gray-50 rounded-xl p-6"
                                >
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="font-montserrat font-semibold text-deep-blue mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Success Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="bg-emerald-50 rounded-2xl p-8 grid md:grid-cols-3 gap-8 text-center mb-16"
                        >
                            <div>
                                <div className="text-4xl font-bold text-emerald-custom mb-2">10,000+</div>
                                <div className="text-gray-600">Active Associates</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-emerald-custom mb-2">$2B+</div>
                                <div className="text-gray-600">Annual Premiums</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-emerald-custom mb-2">40+</div>
                                <div className="text-gray-600">Years of Success</div>
                            </div>
                        </motion.div>

                        {/* Services List */}
                        <div className="flex flex-wrap justify-center items-center gap-6 text-emerald-custom mb-16">
                            <div className="flex items-center space-x-2">
                                <TrendingUp className="w-5 h-5" />
                                <span>Unlimited Income</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5" />
                                <span>Team Support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Award className="w-5 h-5" />
                                <span>Full Training</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Globe className="w-5 h-5" />
                                <span>Remote Opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
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
                                        Submit Your Application
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        Ready to start your journey with Prashant Advisory? Complete the form below and we'll contact you within 24 hours.
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
                                            <label htmlFor="opportunityType" className="block text-sm font-medium text-gray-700 mb-2">
                                                Opportunity Interest *
                                            </label>
                                            <select
                                                id="opportunityType"
                                                name="opportunityType"
                                                required
                                                value={formData.opportunityType}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            >
                                                <option value="">Select your interest</option>
                                                {opportunityTypes.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-2">
                                                Experience Level *
                                            </label>
                                            <select
                                                id="experienceLevel"
                                                name="experienceLevel"
                                                required
                                                value={formData.experienceLevel}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            >
                                                <option value="">Select your experience</option>
                                                {experienceLevels.map((level) => (
                                                    <option key={level} value={level}>
                                                        {level}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                                                Availability *
                                            </label>
                                            <select
                                                id="availability"
                                                name="availability"
                                                required
                                                value={formData.availability}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            >
                                                <option value="">Select your availability</option>
                                                {availabilityOptions.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="incomeGoals" className="block text-sm font-medium text-gray-700 mb-2">
                                                Income Goals
                                            </label>
                                            <Input
                                                id="incomeGoals"
                                                name="incomeGoals"
                                                type="text"
                                                value={formData.incomeGoals}
                                                onChange={handleInputChange}
                                                className="w-full"
                                                placeholder="e.g., $50,000/year, $5,000/month"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="whyInterested" className="block text-sm font-medium text-gray-700 mb-2">
                                                Why are you interested in Prashant Advisory?
                                            </label>
                                            <Textarea
                                                id="whyInterested"
                                                name="whyInterested"
                                                value={formData.whyInterested}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className="w-full"
                                                placeholder="Tell us about your motivation and goals..."
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                                Resume/CV (Optional)
                                            </label>
                                            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                <label htmlFor="resume" className="cursor-pointer">
                                                    <span className="text-emerald-custom font-medium">Click to upload</span>
                                                    <span className="text-gray-500"> or drag and drop</span>
                                                    <input
                                                        id="resume"
                                                        name="resume"
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                </label>
                                                <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                                                {formData.resume && (
                                                    <p className="text-sm text-emerald-custom mt-2">
                                                        ✓ {formData.resume.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
                                        >
                                            <Send className="w-5 h-5 mr-2" />
                                            Submit My Application
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
                                            Why Choose WFG?
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                'Comprehensive training program for all experience levels',
                                                'Unlimited income potential with performance-based rewards',
                                                'Flexible schedule - work from anywhere',
                                                'Strong team support and mentorship',
                                                'Access to leading financial products and services',
                                                'Recognition programs and career advancement opportunities'
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
                                            Application Process
                                        </h4>
                                        <div className="space-y-3 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                                <span>Submit your application</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                                <span>Initial phone screening within 24 hours</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                                <span>Meet with our team for detailed discussion</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-emerald-custom text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                                                <span>Start your training and onboarding</span>
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
                                                Join Team Prashant
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                "I'm excited to help you build a successful career in financial services. Let's create your path to financial freedom together."
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-deep-blue rounded-xl p-6 text-white">
                                        <h4 className="font-montserrat font-semibold mb-3 flex items-center">
                                            <Star className="w-5 h-5 text-yellow-400 mr-2" />
                                            For Entrepreneurs
                                        </h4>
                                        <p className="text-gray-200 text-sm mb-4">
                                            Ready to build your own financial empire? We offers:
                                        </p>
                                        <ul className="text-sm text-gray-200 space-y-2">
                                            <li>• Own your own business with minimal startup costs</li>
                                            <li>• Build and manage your own team</li>
                                            <li>• Residual income from team production</li>
                                            <li>• Leadership development and training</li>
                                        </ul>
                                        <Button
                                            variant="outline"
                                            className="w-full mt-4 border-emerald-custom text-emerald-custom hover:bg-emerald-custom hover:text-white"
                                        >
                                            Learn More About Business Opportunity
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
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
                                        Application Submitted Successfully!
                                    </h3>
                                    <p className="text-xl text-gray-600 mb-8">
                                        Thank you for your interest in joining our team! We'll review your application and 
                                        contact you within 24 hours to discuss the next steps.
                                    </p>
                                    <div className="bg-emerald-50 rounded-lg p-6 mb-8">
                                        <h4 className="font-semibold text-deep-blue mb-2">What happens next?</h4>
                                        <ul className="text-left text-gray-600 space-y-2">
                                            <li>• We'll review your application and resume</li>
                                            <li>• Initial phone call within 24 hours</li>
                                            <li>• Schedule an interview with our team</li>
                                            <li>• Discuss training and onboarding process</li>
                                            <li>• Welcome you to the Our family!</li>
                                        </ul>
                                    </div>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        variant="outline"
                                        className="border-emerald-custom text-emerald-custom hover:bg-emerald-custom hover:text-white"
                                    >
                                        Submit Another Application
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-montserrat font-bold text-deep-blue mb-6">
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from our team members who have built successful careers with Us
                        </p>
                    </motion.div>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="bg-gray-50 rounded-xl p-6 h-full flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-deep-blue">{testimonial.name}</div>
                                        <div className="text-sm text-emerald-custom font-medium">{testimonial.role}</div>
                                        <div className="text-xs text-gray-500">{testimonial.years}</div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
}
