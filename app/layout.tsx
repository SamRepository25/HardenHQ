import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hardenhq.onrender.com'),
  title: {
    default: 'HardenHQ — Website Security Analyzer',
    template: '%s | HardenHQ',
  },
  description:
    'Analyze websites for security vulnerabilities, HTTPS status, security headers, and get actionable recommendations. Free, instant, no signup required.',
  keywords: [
    'website security analyzer',
    'security headers check',
    'HTTPS checker',
    'SSL certificate checker',
    'CSP analyzer',
    'HSTS check',
    'vulnerability scanner',
    'web security audit',
  ],
  authors: [{ name: 'HardenHQ' }],
  creator: 'HardenHQ',
  themeColor: '#0a0e1a',
  openGraph: {
    title: 'HardenHQ — Website Security Analyzer',
    description:
      'Analyze websites for security vulnerabilities, HTTPS status, security headers, and get actionable recommendations.',
    type: 'website',
    siteName: 'HardenHQ',
    url: 'https://hardenhq.onrender.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HardenHQ — Website Security Analyzer',
    description:
      'Analyze websites for security vulnerabilities, HTTPS status, security headers, and get actionable recommendations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'HardenHQ',
  description:
    'Website security analyzer that analyzes HTTPS, security headers, SSL certificates, and vulnerabilities.',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  url: 'https://hardenhq.onrender.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
