import type { Metadata } from "next"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { personalInfo } from "@/app/data/skills"

export const metadata: Metadata = {
  title: "Contact - Anab Ali Dube",
  description:
    "Get in touch with Anab Ali Dube for data analysis, AI projects, and research collaborations.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Let's Work Together
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            As a Data Analyst and AI enthusiast, I'm passionate about transforming data into actionable insights.
            I'm open to collaborations on data analysis projects, AI initiatives, and research opportunities.
            Whether you have a specific project in mind or just want to discuss possibilities, I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Whether you're looking for data analysis expertise, AI research collaboration, or biostatistics
                consulting, I'm here to help. Let's discuss your project and explore how we can work together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-accent transition-colors text-sm sm:text-base break-all sm:break-normal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm sm:text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Current Availability</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  I'm currently accepting new projects and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Data Analysis Projects</span>
                    <span className="text-sm font-medium text-green-600">Open</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">AI & Automation Projects</span>
                    <span className="text-sm font-medium text-green-600">Open</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Research Collaborations</span>
                    <span className="text-sm font-medium text-green-600">Open</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Send className="h-5 w-5" />
                  <span>Send a Message</span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-accent/5 rounded-2xl p-6 sm:p-8">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
              Let's Collaborate on Your Next Data Project
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-4 leading-relaxed text-sm sm:text-base">
              Whether it's building insightful dashboards, cleaning and analyzing datasets, or exploring AI-driven solutions —
              I'm excited to help you turn data into decisions. Let's create something impactful together.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
