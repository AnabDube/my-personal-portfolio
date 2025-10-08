"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { submitContactForm } from "@/app/actions/contact"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const projectTypes = [
  { value: "data-analysis", label: "Data Analysis" },
  { value: "ai-research", label: "AI Research" },
  { value: "biostatistics", label: "Biostatistics Consulting" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "data-visualization", label: "Data Visualization" },
  { value: "statistical-modeling", label: "Statistical Modeling" },
  { value: "other", label: "Other" },
]

const timelines = [
  { value: "asap", label: "ASAP" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "6-months", label: "Within 6 months" },
  { value: "flexible", label: "Flexible timeline" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
          newsletter: false,
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <Alert className="border-green-200 bg-green-50 text-green-800">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>Thank you for your message! I'll get back to you within 24 hours.</AlertDescription>
        </Alert>
      )}

      {submitStatus === "error" && (
        <Alert className="border-red-200 bg-red-50 text-red-800">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            There was an error sending your message. Please try again or contact me directly.
          </AlertDescription>
        </Alert>
      )}

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company/Organization</Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          placeholder="Your company or organization (optional)"
        />
      </div>

      {/* Project Details */}
      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type *</Label>
        <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">Project Timeline</Label>
        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select project timeline" />
          </SelectTrigger>
          <SelectContent>
            {timelines.map((timeline) => (
              <SelectItem key={timeline.value} value={timeline.value}>
                {timeline.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Description *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          required
          rows={5}
          placeholder="Please describe your project, goals, and any specific requirements..."
        />
      </div>

      {/* Newsletter signup removed as requested */}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || !formData.name || !formData.email || !formData.projectType || !formData.message}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted regarding your project inquiry.
      </p>
    </form>
  )
}
