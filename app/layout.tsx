import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/next';
config.autoAddCss = false;

const cairo = Cairo({
  subsets: ['arabic'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'الدكتور في الكيمياء',
  description: 'د/ عبدالله مقبل',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${cairo.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
