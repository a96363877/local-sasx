import { PaymentProvider } from '@/contexts/payment-context';
import type React from 'react'; // Added import for React

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

import './globals.css';
