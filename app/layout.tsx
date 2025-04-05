import { Analytics } from "@vercel/analytics/react";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { GeistSans } from 'geist/font/sans';
import 'katex/dist/katex.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Metadata, Viewport } from "next";
import { Syne } from 'next/font/google';
import { Tajawal } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from './providers';

const tajawal = Tajawal({
    subsets: ['arabic'],
    weight: ['200', '300', '400', '500', '700', '800', '900'],
    variable: '--font-tajawal',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thaki.ai"),
  title: "ذكي 🤖",
  description: "محرك بحث ذكي مدعوم بالذكاء الاصطناعي يساعدك في العثور على المعلومات على الإنترنت",
  openGraph: {
    url: "https://thaki.ai",
    siteName: "ذكي 🤖",
    title: 'ذكي - محرك بحث ذكي',
    description: 'محرك بحث ذكي مدعوم بالذكاء الاصطناعي مع قدرات RAG والبحث المتقدمة',
    images: [
      {
        url: 'https://thaki.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ar-SA',
    type: 'website',
  },
  keywords: [
    "thaki.ai",
    "thaki ai",
    "ذكي",
    "ذكي اي اي",
    "محرك بحث ذكي",
    "محرك بحث",
    "ذكاء اصطناعي",
    "بحث",
    "AI",
    "search engine",
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'ذكي - محرك بحث ذكي',
    description: 'محرك بحث ذكي مدعوم بالذكاء الاصطناعي مع قدرات RAG والبحث المتقدمة',
    creator: '@thaki_ai',
    images: ['https://thaki.vercel.app/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' }
  ],
}

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
   preload: true,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize Speed Insights
  injectSpeedInsights();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head />
      <body className={`${GeistSans.variable} ${syne.variable} ${tajawal.variable} font-sans antialiased`} suppressHydrationWarning>
        <NuqsAdapter>
          <Providers>
            <Toaster position="top-center" />
            {children}
          </Providers>
        </NuqsAdapter>
        <Analytics />
      </body>
    </html>
  );
}
