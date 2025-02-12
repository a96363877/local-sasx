"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { usePayment } from "@/contexts/payment-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react" // Added import for React

export default function PaymentPage() {
  const router = useRouter()
  const { paymentData, setPaymentData } = usePayment()

  useEffect(() => {
    if (!paymentData.name || !paymentData.phone) {
      router.push("/invoice")
    }
  }, [paymentData, router])

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Update payment status
      setPaymentData((prev) => ({ ...prev, status: "processing" }))

      // Save to Firebase
      const paymentRef = doc(db, "payments", paymentData.invoiceNumber)
      await setDoc(paymentRef, {
        ...paymentData,
        timestamp: new Date().toISOString(),
      })

      // Simulate payment processing
      setTimeout(() => {
        setPaymentData((prev) => ({ ...prev, status: "completed" }))
        router.push("/payment/success")
      }, 2000)
    } catch (error) {
      console.error("Payment failed:", error)
      setPaymentData((prev) => ({ ...prev, status: "failed" }))
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-6" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle>تفاصيل الدفع</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePayment} className="space-y-4">
            <div className="space-y-2">
              <Label>رقم البطاقة</Label>
              <Input required placeholder="**** **** **** ****" className="text-right" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>تاريخ الإنتهاء</Label>
                <Input required placeholder="MM/YY" className="text-right" />
              </div>
              <div className="space-y-2">
                <Label>CVV</Label>
                <Input required placeholder="***" className="text-right" />
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <div className="flex justify-between">
                <span>المبلغ:</span>
                <span>{paymentData.amount} د.ك</span>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={paymentData.status === "processing"}>
              {paymentData.status === "processing" ? "جاري المعالجة..." : "إتمام الدفع"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-500">المعاملات آمنة ومشفرة</p>
        </CardFooter>
      </Card>
    </div>
  )
}

