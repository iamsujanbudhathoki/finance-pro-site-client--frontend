'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Users, AlertTriangle, Mail, Phone, MapPin, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "overview",
      title: "Privacy Overview",
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            At Prashant Advisory, we take your privacy seriously. This policy explains how we collect,
            use, protect, and share your personal information when you use our financial advisory services.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
            <h4 className="font-semibold text-emerald-800 mb-2">Our Commitment</h4>
            <p className="text-emerald-700 text-sm leading-relaxed">
              We are committed to maintaining the confidentiality and security of your personal information.
              We will never sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      icon: Database,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            To provide you with comprehensive financial advisory services, we may collect various types of information:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Personal Information
              </h4>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• Full name and contact details</li>
                <li>• Date of birth and social insurance number</li>
                <li>• Employment information and income</li>
                <li>• Family and beneficiary information</li>
                <li>• Government-issued identification</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Financial Information
              </h4>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Bank account and investment details</li>
                <li>• Assets, liabilities, and net worth</li>
                <li>• Insurance policies and coverage</li>
                <li>• Tax information and returns</li>
                <li>• Financial goals and risk tolerance</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Additional Information</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Website Usage</h5>
                <p className="text-sm text-gray-600">IP address, browser type, pages visited</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Communication</h5>
                <p className="text-sm text-gray-600">Email correspondence, meeting notes</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Professional</h5>
                <p className="text-sm text-gray-600">Advisory agreements, service preferences</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: FileText,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            We use your personal information solely to provide you with professional financial advisory services:
          </p>
          <div className="grid gap-4">
            <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-1">Financial Planning & Analysis</h4>
                <p className="text-emerald-700 text-sm">Creating personalized financial plans, investment strategies, and recommendations</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">Account Management</h4>
                <p className="text-blue-700 text-sm">Managing your accounts, processing transactions, and providing ongoing support</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-1">Regulatory Compliance</h4>
                <p className="text-purple-700 text-sm">Meeting legal requirements, reporting obligations, and maintaining proper records</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">Communication & Updates</h4>
                <p className="text-amber-700 text-sm">Providing market updates, policy changes, and important account notifications</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800 mb-2">We Do NOT Sell Your Information</h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  We will never sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We may share your information only in these limited circumstances:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Service Providers</h4>
              <p className="text-gray-600 text-sm mb-2">
                With trusted partners who help us provide services (insurance companies, investment firms, custodians)
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-500">
                All service providers are contractually bound to protect your information
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Legal Requirements</h4>
              <p className="text-gray-600 text-sm mb-2">
                When required by law, regulation, or court order (tax reporting, regulatory compliance)
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-500">
                Only the minimum information required will be shared
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">With Your Consent</h4>
              <p className="text-gray-600 text-sm mb-2">
                When you explicitly authorize us to share information with specific parties
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-500">
                You can withdraw consent at any time in writing
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            We implement comprehensive security measures to protect your personal information:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Technical Safeguards
                </h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure servers and databases</li>
                  <li>• Regular security updates and patches</li>
                  <li>• Firewall and intrusion detection</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Administrative Safeguards
                </h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Employee training on privacy policies</li>
                  <li>• Strict access controls to sensitive data</li>
                  <li>• Confidentiality agreements for staff</li>
                  <li>• Regular audits and compliance reviews</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Physical Safeguards
                </h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Secure office facilities</li>
                  <li>• Restricted access to file storage</li>
                  <li>• Shredding and secure disposal of records</li>
                  <li>• CCTV and access monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or request deletion of your personal information. You may also:
          </p>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2">
            <li>Request a copy of the personal data we hold about you</li>
            <li>Correct inaccuracies in your personal information</li>
            <li>Withdraw consent for certain data uses</li>
            <li>File a complaint with a privacy regulator</li>
          </ul>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-emerald-600" /> info@prashantadvisory.com</p>
            <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-600" /> +1 2269751978</p>
            <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-purple-600" /> </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 mb-8 text-center"
      >
        Privacy Policy
      </motion.h1>

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            id={section.id}
            className="scroll-mt-24"
          >
            <div className="flex items-center mb-4">
              <section.icon className="w-6 h-6 text-emerald-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            </div>
            <div>{section.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}