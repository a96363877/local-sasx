import { PaymentProvider } from '@/contexts/payment-context';
import type React from 'react'; // Added import for React
export const metadata: Metadata = {
  title: 'General Department of Traffic - Ministry of Interior - Kuwait',
  description: 'الإدارة العامة للمرور  ',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <PaymentProvider>{children}</PaymentProvider>
      </body>
    </html>
  );
}

import './globals.css';import { Metadata } from 'next';

