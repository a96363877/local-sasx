"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ViolationResultProps {
  civilId: string
  setchecked:any
  violations: {
    id: string
    number: string
    amount: number
    plateNumber: string
    date: string
    isSelected?: boolean
  }[]
}

 const violations= [
    {
      id: "1",
      number: "F-197141",
      amount: 5,
      plateNumber: "غير متوفر / غير متوفر",
      date: "25-12-2024",
    },
  ]

export function ViolationResult({ civilId,setchecked }: ViolationResultProps) {
  

  return (
    <div className="bg-white rounded-lg p-6 space-y-6 text-right" dir="rtl">
      <div className="space-y-4">
        {violations.map((violation) => (
          <div key={violation.id} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-start gap-4">
              <input type="checkbox" id={violation.id}  onChange={(e)=>setchecked(e.target.checked)}/>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">رقم المخالفة:</span>
                  <span className="text-blue-600">{violation.number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">قيمة المخالفة:</span>
                  <span>{civilId} د.ك</span>
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
    </div>
  )
}

