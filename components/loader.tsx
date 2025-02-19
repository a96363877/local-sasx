import { Loader2 } from "lucide-react"
import React from "react"

export  function FullPageLoader() {
  return (
    <div className="flex flex-col justify-center ">
    
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 h-full w-full">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

