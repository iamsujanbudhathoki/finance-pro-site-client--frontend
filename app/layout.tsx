
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

import { ProgressBar } from '@/components/ProgressBar';


const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prashant Sapkota - Trusted Financial Advisor & Investment Expert',
  description: 'Expert financial advisory services including insurance, investments, retirement planning, and debt management. Book your free consultation today with certified advisor Prashant Sapkota.',
  keywords: 'financial advisor, investment planning, insurance, retirement planning, debt management, financial consultant',
  authors: [{ name: 'Prashant Sapkota' }],
  openGraph: {
    title: 'Prashant Sapkota - Trusted Financial Advisor',
    description: 'Expert financial advisory services. Book your free consultation today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <link rel="icon" href="/advisory_logo.svg" sizes="any" />
      <body className="font-inter bg-white">
      <ProgressBar />
        <Navigation />
        <main className="bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}