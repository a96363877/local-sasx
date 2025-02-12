'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Calendar,
  CreditCard,
  FileText,
  MapPin,
  Menu,
  UserCheck,
} from 'lucide-react';
import type React from 'react'; // Added import for React
import { useRouter } from 'next/navigation';
import { ViolationResult } from '@/components/violation-result';

export default function Home() {
  const router = useRouter();
  const handlePayClicked = () => {
    router.push('/invoice');
  };
  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <button className="p-2 text-navy-700">
              <Menu className="h-6 w-6" />
            </button>
            <Image
              src={`/`}
              alt="Kuwait Ministry of Interior Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Traffic Department Logo */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg"
            alt="Traffic Department Logo"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        </div>
        <h2 className="text-center text-xl font-bold text-navy-700 mt-2">
          الإدارة العامة للمرور
        </h2>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-4 bg-navy-700 p-4 rounded-lg">
          <ServiceButton
            icon={<FileText />}
            text="الخدمات الالكترونية لرخص السوق"
          />
          <ServiceButton icon={<CreditCard />} text="دفع المخالفات" />
          <ServiceButton
            icon={<Calendar />}
            text="نظام مواعيد اختبار القيادة"
          />
          <ServiceButton icon={<FileText />} text="معاملات المرور" />
          <ServiceButton icon={<MapPin />} text="مواقع الإدارة العامة للمرور" />
          <ServiceButton
            icon={<UserCheck />}
            text="شروط منح رخص السوق لغير الكويتيين"
          />
        </div>
      </div>

      {/* Login Form */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">الإدارة العامة للمرور</h3>

          <RadioGroup defaultValue="individuals" className="mb-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="individuals" />
                <span>الأفراد</span>
              </Label>
              <Label className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="companies" />
                <span>الشركات</span>
              </Label>
            </div>
          </RadioGroup>

          <div className="space-y-4">
            <div>
              <Label>الرقم المدني أو الرقم الموحد</Label>
              <Input className="text-right" />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              إستعلام
            </Button>
            <ViolationResult civilId={'112322'} violations={undefined!} />
            <p className="text-sm text-gray-600 text-center">
              بعد إجراء عملية الدفع، يرجى عدم محاولة الدفع مرة أخرى حيث يجب
              تحديث البيانات خلال 15 دقيقة
            </p>

            <Button onClick={handlePayClicked} className="w-full">
              ادفع
            </Button>

            <div className="flex justify-center gap-2">
              <Button variant="outline" className="text-red-600 border-red-600">
                غير قابلة للدفع الكترونيا
              </Button>
              <Button
                variant="outline"
                className="text-green-600 border-green-600"
              >
                قابلة للدفع الكترونيا
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-700 text-white py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-300">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-300">
              YouTube
            </a>
          </div>
          <p className="text-center text-sm">
            © جميع الحقوق محفوظة - وزارة الداخلية الكويتية 2025-2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceButton({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button className="flex items-center gap-3 w-full bg-navy-800 hover:bg-navy-900 text-white p-4 rounded-lg transition-colors">
      {icon}
      <span>{text}</span>
    </button>
  );
}
