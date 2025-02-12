'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePayment } from '@/contexts/payment-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type React from 'react'; // Added import for React

export default function InvoicePage() {
  const router = useRouter();
  const { paymentData, setPaymentData } = usePayment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/payment');
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6" dir="rtl">
      <div className="w-full h-32 relative rounded-lg overflow-hidden">
        <Image
          src={`/`}
          alt="Customer Service Banner"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg"
            alt="Tasdeed Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-bold">الفاتورة:</span>
            <span>{paymentData.invoiceNumber || '4526888'}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">القيمة:</span>
            <span>{paymentData.amount || '5.000'} دينار كويتي</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>الإسم</Label>
            <Input
              required
              placeholder="إدخال الإسم"
              className="text-right"
              onChange={(e: { target: { value: any } }) =>
                setPaymentData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label>رقم الهاتف</Label>
            <Input
              required
              type="tel"
              placeholder="إدخال رقم الهاتف"
              className="text-right"
              onChange={(e: { target: { value: any } }) =>
                setPaymentData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </div>

          <Button type="submit" className="w-full">
            الإنتقال إلى صفحة الدفع
          </Button>
        </form>
      </div>

      <footer className="text-center text-sm text-gray-600">
        <p>© All Rights Reserved, Copyright 2025</p>
        <p>The Shared Electronic Banking Services Company - KNET</p>
      </footer>
    </div>
  );
}
