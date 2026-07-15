"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Search } from "lucide-react"
import { TcSearchForm } from "./TcSearchForm" 

const TcSearchCard = () => {
  return (
    <Card className="bg-white shadow-2xl shadow-black/10 w-full p-10 border-t-9 border-secondary">
        <CardHeader className="flex items-center gap-3  ">
            <Search size={40} className="bg-accent/20 p-2 text-accent rounded-lg"  />
            <h1 className="text-2xl font-semibold">Lookup Certificate</h1>
        </CardHeader>

        <CardContent>
          <TcSearchForm />
        </CardContent>
    </Card>
  )
}

export default TcSearchCard