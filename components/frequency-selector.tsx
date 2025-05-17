"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function FrequencySelector() {
  const [frequency, setFrequency] = useState<string>("Daily")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-gray-700 bg-gray-800">
          <Clock className="mr-2 h-4 w-4" />
          {frequency}
          <Calendar className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
        <DropdownMenuItem onClick={() => setFrequency("Daily")} className="hover:bg-gray-700">
          Daily
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFrequency("Weekly")} className="hover:bg-gray-700">
          Weekly
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFrequency("Monthly")} className="hover:bg-gray-700">
          Monthly
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
