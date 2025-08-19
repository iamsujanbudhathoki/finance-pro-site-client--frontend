import { Metadata } from 'next';
import { BlogList } from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Financial Insights & Tips - Prashant Sapkota Blog',
  description: 'Expert financial advice, investment tips, and wealth management insights from certified financial advisor Prashant Sapkota.',
  keywords: 'financial advice, investment tips, retirement planning, wealth management, financial blog',
};

export default function BlogPage() {
  return <BlogList />;
}