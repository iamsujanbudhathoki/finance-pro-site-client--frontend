import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

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
      <body className="font-inter">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}