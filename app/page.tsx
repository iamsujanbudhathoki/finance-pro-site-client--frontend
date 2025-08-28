'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { ServicesPreview } from '@/components/ServicesPreview';
import { TrustedBySection } from '@/components/TrustedBySection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServicesPreview />
      <TrustedBySection />
      <StatsSection />
      <CTASection />
    </div>
  );
}