"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ReferenceNumberSection() {
  const [civilId, setCivilId] = useState("")

  return (
    <div className="space-y-8">
      {/* Icons Section */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-navy-700 p-8 flex justify-center items-center">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
            <span className="text-navy-700 font-bold text-xl">KD</span>
          </div>
        </div>
        <div className="bg-gray-100 p-8 flex justify-center items-center">
          <div className="w-24 h-24 rounded-full bg-navy-700 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-12 h-12" strokeWidth="2">
              <path d="M9 17h6M9 13h6m-6-4h6M5 22h14a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="bg-navy-700 p-8 flex justify-center items-center">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-12 h-12 text-navy-700"
              strokeWidth="2"
            >
              <path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3m-3 5h12" />
            </svg>
          </div>
        </div>
      </div>

      {/* Reference Number Section */}
      <div className="space-y-6 p-4">
        <h2 className="text-xl font-bold text-center">الإستعلام عن رقم مرجع الداخلية</h2>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="الرقم المدني"
            className="text-right"
            value={civilId}
            onChange={(e) => setCivilId(e.target.value)}
          />

          <div className="grid grid-cols-1 gap-3">
            <Button variant="outline" className="w-full text-navy-700 border-navy-700 hover:bg-navy-50">
              للكويتيين
            </Button>
            <Button variant="outline" className="w-full text-navy-700 border-navy-700 hover:bg-navy-50">
              للمقيمين
            </Button>
          </div>
        </div>
      </div>

      {/* New Services Icon */}
      <div className="bg-navy-700 p-8 flex justify-center items-center">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
          <div className="text-center">
            <span className="block text-navy-700 text-sm font-bold">احدث</span>
            <span className="block text-navy-700 text-sm font-bold">الخدمات</span>
            <span className="block text-navy-700 text-xs">New</span>
            <span className="block text-navy-700 text-xs">Services</span>
          </div>
        </div>
      </div>

  
    </div>
  )
}

