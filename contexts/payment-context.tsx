"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface PaymentData {
  invoiceNumber: string
  amount: number
  name?: string
  phone?: string
  status: "pending" | "processing" | "completed" | "failed"
}

interface PaymentContextType {
  paymentData: PaymentData
  setPaymentData: React.Dispatch<React.SetStateAction<PaymentData>>
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    invoiceNumber: "",
    amount: 0,
    status: "pending",
  })
  const [step, setStep] = useState(1)

  return (
    <PaymentContext.Provider value={{ paymentData, setPaymentData, step, setStep }}>{children}</PaymentContext.Provider>
  )
}

export function usePayment() {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider")
  }
  return context
}

