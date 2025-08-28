'use client';

import { CTASection } from '@/components/CTASection';
import { Hero } from '@/components/Hero';
import { ServicesPreview } from '@/components/ServicesPreview';
import { StatsSection } from '@/components/StatsSection';
import { TrustedBySection } from '@/components/TrustedBySection';

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