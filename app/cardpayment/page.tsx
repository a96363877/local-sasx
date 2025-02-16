"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FullPageLoader } from "@/components/loader"

export default function PaymentForm() {
  const [step, setStep] = useState<"payment" | "otp">("payment")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvc, setCvc] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false)
      setStep("otp")
    }, 1500)
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      alert("Payment successful!")
      // Reset form
      setStep("payment")
      setCardNumber("")
      setExpiryDate("")
      setCvc("")
      setOtp("")
    }, 1500)
  }

  return (
    <Card className="w-full max-w-md mx-auto my-32">
      {isLoading?<FullPageLoader/>:null}
      <CardHeader>
        <CardTitle>{step === "payment" ? "تفاصيل الدفع" : "التحقق من العملية"}</CardTitle>
        <CardDescription>
          {step === "payment"
            ? "أدخل تفاصيل بطاقتك للمتابعة بالدفع."
            : "أدخل رمز OTP المرسل إلى رقم هاتفك المحمول المسجل."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === "payment" ? (
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">رقم البطاقة</Label>
              <Input
                id="cardNumber"
                placeholder="#### #### #### ####"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">تاريخ الأنتهاء</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value)} required />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "معالجة..." : "متابعة للدفع"}
              <CreditCard className="ml-2 h-4 w-4" />
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">*رمز التحقق OTP</Label>
              <Input id="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify OTP"}
              <Lock className="ml-2 h-4 w-4" />
            </Button>
        
          </form>
        )}
      </CardContent>
   
    </Card>
  )
}

