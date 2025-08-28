'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsOfService() {
    const sections = [
        {
            id: "acceptance",
            title: "Acceptance of Terms",
            icon: Shield,
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        By accessing and using our website and services, you accept and agree to be bound by
                        the terms and provision of this agreement. If you do not agree to abide by the above,
                        please do not use this service.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 text-sm">
                            <strong>Important:</strong> These terms create a legally binding agreement between you and Prashant Advisory.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: "services",
            title: "Description of Service",
            icon: FileText,
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Prashant Sapkota Financial Advisory provides comprehensive financial planning and
                        advisory services including but not limited to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-gray-800 font-medium">Investment planning and portfolio management</span>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-gray-800 font-medium">Retirement planning strategies</span>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-gray-800 font-medium">Insurance analysis and recommendations</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-gray-800 font-medium">Tax planning strategies</span>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-gray-800 font-medium">Estate planning coordination</span>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-gray-800 font-medium">Financial education and guidance</span>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: "relationship",
            title: "Professional Relationship",
            icon: Shield,
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        Our services are provided on a fee-for-service basis as outlined in our advisory
                        agreement. We act as a fiduciary and will always put your best interests first in
                        our recommendations and advice.
                    </p>
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200">
                        <h4 className="font-semibold text-emerald-800 mb-2">Fiduciary Commitment</h4>
                        <p className="text-emerald-700 text-sm leading-relaxed">
                            As your financial advisor, we are legally and ethically bound to act in your best interest at all times.
                            This means we will provide recommendations based on what's best for you, not what's most profitable for us.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "confidentiality",
            title: "Confidentiality",
            icon: Shield,
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        All information shared with us during the course of our professional relationship
                        will be kept strictly confidential and will not be disclosed to third parties
                        without your explicit consent, except as required by law.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-800 mb-2">What We Protect:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Personal and financial information</li>
                            <li>• Investment goals and strategies</li>
                            <li>• Family and estate planning details</li>
                            <li>• All communications and documents</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "risks",
            title: "Investment Risks",
            icon: AlertCircle,
            content: (
                <div className="space-y-4">
                    <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                        <div className="flex items-start space-x-3">
                            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-amber-800 mb-2">Important Risk Disclosure</h4>
                                <p className="text-amber-700 leading-relaxed">
                                    All investments carry risk of loss. Past performance does not guarantee future results.
                                    We will work with you to understand your risk tolerance and create an appropriate
                                    investment strategy, but we cannot guarantee investment returns.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                            <h5 className="font-medium text-gray-800 mb-2">Market Risk</h5>
                            <p className="text-sm text-gray-600">Values may fluctuate with market conditions</p>
                        </div>
                        <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                            <h5 className="font-medium text-gray-800 mb-2">Inflation Risk</h5>
                            <p className="text-sm text-gray-600">Purchasing power may decrease over time</p>
                        </div>
                        <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                            <h5 className="font-medium text-gray-800 mb-2">Liquidity Risk</h5>
                            <p className="text-sm text-gray-600">Some investments may be difficult to sell quickly</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "liability",
            title: "Limitation of Liability",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    Our liability for any claim arising from our services shall be limited to the fees
                    paid for such services. We shall not be liable for any indirect, incidental, or
                    consequential damages.
                </p>
            )
        },
        {
            id: "termination",
            title: "Termination",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        Either party may terminate our advisory relationship at any time with written notice.
                        Upon termination, you will be responsible for fees incurred up to the termination date.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 text-sm">
                            <strong>Notice Period:</strong> We recommend providing at least 30 days written notice for a smooth transition.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "governing-law",
            title: "Governing Law",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of Ontario,
                    Canada, without regard to its conflict of law provisions.
                </p>
            )
        },
        {
            id: "changes",
            title: "Changes to Terms",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        We reserve the right to modify these terms at any time. Changes will be effective
                        immediately upon posting to our website. Your continued use of our services constitutes
                        acceptance of any changes.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-green-800 text-sm">
                            We will notify existing clients of any material changes via email or during regular communications.
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="py-16 gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white max-w-4xl mx-auto"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Clear, transparent terms that protect both you and our practice while ensuring
                            the highest standards of professional service.
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-sm text-gray-200">Last updated: January 15, 2025</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                                >
                                    <div className="p-8">
                                        <div className="flex items-start space-x-4 mb-6">
                                            {section.icon && (
                                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <section.icon className="w-6 h-6 text-emerald-600" />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                                    {section.title}
                                                </h2>
                                                <div>{section.content}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Contact Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl border border-emerald-200 overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                                Contact Information
                                            </h2>
                                            <p className="text-gray-700 leading-relaxed mb-6">
                                                If you have any questions about these Terms of Service, please don't hesitate to contact us:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-emerald-100">
                                                        <Mail className="w-5 h-5 text-emerald-600" />
                                                        <div>
                                                            <p className="font-medium text-gray-900">Email</p>
                                                            <p className="text-sm text-gray-600">saprashant123@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-emerald-100">
                                                        <Phone className="w-5 h-5 text-emerald-600" />
                                                        <div>
                                                            <p className="font-medium text-gray-900">Phone</p>
                                                            <p className="text-sm text-gray-600">+1 2269751978</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-emerald-100">
                                                        <MapPin className="w-5 h-5 text-emerald-600" />
                                                        <div>
                                                            <p className="font-medium text-gray-900">Licensed In</p>
                                                            <p className="text-sm text-gray-600">Ontario, Canada under FSRA</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-emerald-100">
                                                        <Shield className="w-5 h-5 text-emerald-600" />
                                                        <div>
                                                            <p className="font-medium text-gray-900">Regulatory Authority</p>
                                                            <p className="text-sm text-gray-600">Financial Services Regulatory Authority of Ontario</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Footer Disclaimer */}
            <section className="py-12 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <AlertCircle className="w-6 h-6 text-amber-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white mb-4 text-xl">Important Regulatory Disclosure</h3>
                                    <div className="space-y-3">
                                        <p className="text-gray-300 leading-relaxed">
                                            <strong className="text-white">Prashant Advisory</strong> is a marketing name used by{' '}
                                            <strong className="text-white">Prashant Sapkota</strong>, a licensed life insurance agent in Ontario
                                            under the Financial Services Regulatory Authority of Ontario (FSRA). Insurance and financial services
                                            are offered through World Financial Group Insurance Agency of Canada Inc.
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            Prashant Advisory is not a separate legal entity. Any references to "firm" or "agency" represent
                                            the marketing identity of the licensed associate.
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-gray-700">
                                        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
                                            <span>Licensed under FSRA</span>
                                            <span>•</span>
                                            <span>Ontario, Canada</span>
                                            <span>•</span>
                                            <span>World Financial Group Insurance Agency of Canada Inc.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}