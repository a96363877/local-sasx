"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface ViolationResultProps {
  civilId: string
  violations: {
    id: string
    number: string
    amount: number
    plateNumber: string
    date: string
    isSelected?: boolean
  }[]
}

export function ViolationResult({ civilId, violations }: ViolationResultProps) {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6 text-right" dir="rtl">
      <div className="space-y-4">
        {violations.map((violation) => (
          <div key={violation.id} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-start gap-4">
              <Checkbox id={violation.id} />
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">رقم المخالفة:</span>
                  <span className="text-blue-600">{violation.number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">قيمة المخالفة:</span>
                  <span>{violation.amount} د.ك</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">رقم اللوحة:</span>
                  <span className="text-gray-600">{violation.plateNumber || "غير متوفر / غير متوفر"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">تاريخ المخالفة:</span>
                  <span>{violation.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 text-center px-4">
        بعد إجراء عملية الدفع.. يرجى عدم محاولة الدفع مرة أخرى حيث يجري تحديث البيانات خلال 15 دقيقة
      </p>

      <Button className="w-full text-lg py-6" size="lg">
        ادفع
      </Button>

      <div className="flex justify-center gap-2">
        <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
          غير قابلة للدفع الكترونيا
        </Button>
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
          قابلة للدفع الكترونيا
        </Button>
      </div>
    </div>
  )
}

