'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Calculator, PieChart, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const downloads = [
  {
    icon: Calculator,
    title: 'Financial Health Checklist',
    description: 'A comprehensive 25-point checklist to assess your current financial situation and identify areas for improvement.',
    category: 'Assessment',
    format: 'PDF',
    pages: '8 pages',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
    slug: 'financial-health-checklist',
  },
  {
    icon: PieChart,
    title: 'Budget Planning Worksheet',
    description: 'Easy-to-use spreadsheet template for creating and tracking your monthly budget with built-in formulas.',
    category: 'Budgeting',
    format: 'Excel',
    pages: '3 sheets',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
    slug: 'budget-planning-worksheet',
  },
  {
    icon: TrendingUp,
    title: 'Investment Strategy Guide',
    description: 'Learn the fundamentals of investing with this beginner-friendly guide covering asset allocation and risk management.',
    category: 'Investing',
    format: 'PDF',
    pages: '15 pages',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400',
    slug: 'investment-strategy-guide',
  },
  {
    icon: Shield,
    title: 'Insurance Needs Calculator',
    description: 'Determine how much life and disability insurance you need with this interactive calculator and planning guide.',
    category: 'Insurance',
    format: 'Excel',
    pages: '5 sheets',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400',
    slug: 'insurance-needs-calculator',
  },
  {
    icon: FileText,
    title: 'Retirement Planning Workbook',
    description: 'Step-by-step workbook to help you calculate retirement needs and create a savings strategy that works.',
    category: 'Retirement',
    format: 'PDF',
    pages: '20 pages',
    image: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=400',
    slug: 'retirement-planning-workbook',
  },
  {
    icon: Calculator,
    title: 'Debt Payoff Planner',
    description: 'Compare debt payoff strategies and create a personalized plan to become debt-free faster.',
    category: 'Debt Management',
    format: 'Excel',
    pages: '4 sheets',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
    slug: 'debt-payoff-planner',
  },
];

import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import Image from 'next/image';

export default function FreeDownloads() {
  const router = useRouter();

  const handleDownloadClick = (slug: string) => {
    NProgress.start();
    router.push(`/resources/download/${slug}`);
  };

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
              <Download className="w-10 h-10 text-emerald-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold mb-4 lg:mb-6">
              Free Financial Resources
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Download our collection of practical tools, worksheets, and guides to help you 
              take control of your finances and build lasting wealth.
            </p>
            <div className="flex justify-center">
              <div className="bg-emerald-custom/20 rounded-full px-6 py-3">
                <span className="text-emerald-200 font-semibold">
                  All resources are completely free - no email required
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloads Grid */}
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
              Choose Your Resources
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Each resource is designed to provide immediate value and actionable insights 
              for your financial journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {downloads.map((download, index) => (
              <motion.div
                key={download.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={download.image}
                    alt={download.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <download.icon className="w-6 h-6 text-emerald-custom" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">{download.category}</div>
                    <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {download.format} • {download.pages}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-montserrat font-bold text-deep-blue mb-3">
                  {download.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {download.description}
                </p>

                <Button
                  onClick={() => handleDownloadClick(download.slug)}
                  className="w-full bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Get It Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-blue mb-4 lg:mb-6">
              Need More Personalized Help?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              While these resources provide great starting points, sometimes you need 
              personalized guidance to address your specific situation and goals.
            </p>
            <Button
              size="lg"
              className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
            >
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}