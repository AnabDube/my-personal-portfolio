"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ResumeButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ResumeButton({ variant = "default", size = "default", className }: ResumeButtonProps) {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/docs/resume.pdf"
    link.download = "Anab_Dube_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant={variant} size={size} onClick={handleDownload} className={cn("gap-2", className)}>
      <Download className="h-4 w-4" />
      Download Resume
    </Button>
  )
}
