import { DownloadForm } from '@/components/DownloadForm';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


const downloadResources = {
  'financial-health-checklist': {
    title: 'Financial Health Checklist',
    description: 'A comprehensive 25-point checklist to assess your current financial situation and identify areas for improvement.',
    format: 'PDF',
    pages: '8 pages',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Comprehensive financial assessment',
      'Identify improvement areas',
      'Track your progress',
      'Professional guidance included',
    ],
  },
  'budget-planning-worksheet': {
    title: 'Budget Planning Worksheet',
    description: 'Easy-to-use spreadsheet template for creating and tracking your monthly budget with built-in formulas.',
    format: 'Excel',
    pages: '3 sheets',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Built-in formulas for calculations',
      'Monthly tracking system',
      'Expense categorization',
      'Visual progress charts',
    ],
  },
  'investment-strategy-guide': {
    title: 'Investment Strategy Guide',
    description: 'Learn the fundamentals of investing with this beginner-friendly guide covering asset allocation and risk management.',
    format: 'PDF',
    pages: '15 pages',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Beginner-friendly explanations',
      'Asset allocation strategies',
      'Risk management techniques',
      'Real-world examples',
    ],
  },
  'insurance-needs-calculator': {
    title: 'Insurance Needs Calculator',
    description: 'Determine how much life and disability insurance you need with this interactive calculator and planning guide.',
    format: 'Excel',
    pages: '5 sheets',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Interactive calculations',
      'Personalized recommendations',
      'Coverage gap analysis',
      'Planning worksheets',
    ],
  },
  'retirement-planning-workbook': {
    title: 'Retirement Planning Workbook',
    description: 'Step-by-step workbook to help you calculate retirement needs and create a savings strategy that works.',
    format: 'PDF',
    pages: '20 pages',
    image: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Step-by-step guidance',
      'Retirement calculations',
      'Savings strategies',
      'Action planning tools',
    ],
  },
  'debt-payoff-planner': {
    title: 'Debt Payoff Planner',
    description: 'Compare debt payoff strategies and create a personalized plan to become debt-free faster.',
    format: 'Excel',
    pages: '4 sheets',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Strategy comparison tools',
      'Personalized payoff plans',
      'Progress tracking',
      'Motivation features',
    ],
  },
};

export async function generateStaticParams() {
  const slugs = Object.keys(downloadResources);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: DownloadPageProps): Promise<Metadata> {
  const resource = downloadResources[params.slug as keyof typeof downloadResources];
  
  if (!resource) {
    return {
      title: 'Resource Not Found',
    };
  }

  return {
    title: `${resource.title} - Free Download`,
    description: resource.description,
  };
}

interface DownloadPageProps {
  params: {
    slug: string;
  };
}

export default function DownloadPage({ params }: DownloadPageProps) {
  const resource = downloadResources[params.slug as keyof typeof downloadResources];

  if (!resource) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-deep-blue mb-4">Resource Not Found</h1>
          <Link href="/resources/downloads" className="text-emerald-custom hover:underline">
            Back to Downloads
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/resources/downloads"
              className="inline-flex items-center space-x-2 text-emerald-200 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Downloads</span>
            </Link>

            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                {resource.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                {resource.description}
              </p>
              <div className="flex justify-center items-center space-x-6 text-emerald-200">
                <div className="text-center">
                  <div className="text-lg font-bold">{resource.format}</div>
                  <div className="text-sm">Format</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{resource.pages}</div>
                  <div className="text-sm">Content</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">Free</div>
                  <div className="text-sm">Price</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Resource Preview */}
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-montserrat font-bold text-deep-blue mb-6">
                  What You'll Get:
                </h3>
                <ul className="space-y-3">
                  {resource.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-custom mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Form */}
              <div>
                <DownloadForm resource={resource} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}