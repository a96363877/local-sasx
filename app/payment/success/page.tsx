"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { usePayment } from "@/contexts/payment-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SuccessPage() {
  const router = useRouter()
  const { paymentData } = usePayment()

  useEffect(() => {
    if (paymentData.status !== "completed") {
      router.push("/invoice")
    }
  }, [paymentData, router])

  return (
    <div className="max-w-md mx-auto p-4 space-y-6" dir="rtl">
      <Card>
        <CardHeader>
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-center">تم الدفع بنجاح</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-4 space-y-2">
            <div className="flex justify-between">
              <span>رقم الفاتورة:</span>
              <span>{paymentData.invoiceNumber}</span>
            </div>
            <div className="flex justify-between">
              <span>المبلغ المدفوع:</span>
              <span>{paymentData.amount} د.ك</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="outline" onClick={() => router.push("/")}>
            العودة للرئيسية
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

