'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { ServicesPreview } from '@/components/ServicesPreview';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <>   

      <Hero />
      <ServicesPreview />
      <StatsSection />
      <CTASection />
    </>
  );
}