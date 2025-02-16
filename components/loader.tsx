import { Loader2 } from "lucide-react"
import React from "react"

export  function FullPageLoader() {
  return (

    
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 h-full w-full">
    <div className="flex flex-col justify-center items-center  ">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
          <span className="mt-2 font-bold animate">الرجاء الأنتظار ...</span>
          </div>
    </div>
  )
}

