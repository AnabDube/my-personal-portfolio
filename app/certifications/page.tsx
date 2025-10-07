"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Award, ExternalLink, Filter, Trophy, Star, BookOpen } from "lucide-react"

type BaseItem = {
  title: string
  issuer: string
  issueDate: string
  description: string
  type: string
  logo?: string
}

type Certification = BaseItem & {
  expiryDate?: string
  credentialId?: string
  skills?: string[]
  status?: string
  verificationUrl?: string
}

type AwardItem = BaseItem & {}

type CombinedItem =
  | (Certification & { itemType: "certification" })
  | (AwardItem & { itemType: "award" })

const certifications: Certification[] = [
  {
    title: "Business Analytics with Excel & Power BI",
    issuer: "Simplilearn",
    issueDate: "June 2025",
    credentialId: "PBI-DA-2024-001",
    description:
      "Advanced certification covering Excel-based data analysis, including formulas, pivot tables, charts, and data cleaning techniques for business decision-making..",
    skills: ["Power BI", "Excel Formulas", "DAX", "Data Visualization", "Business Intelligence"],
    type: "Professional Certification",
    status: "Active",
    logo: "/images/simplilearn-logo.png",
  verificationUrl: "https://www.simplilearn.com/",
  },
  {
    title: "R Programming",
    issuer: "University of Ekdoret",
    issueDate: "2022",
    credentialId: "JIRA-PM-2023-045",
    description: "Certification covering statistical analysis, data manipulation, and visualization using R for data-driven research and reporting.",
    skills: ["R Programming", "Data Analysis", "Statistical Modeling", "Data Visualization (ggplot2, plotly)"],
    type: "Academic Certification",
    status: "Active",
    logo: "/images/uoe-logo.png",
    verificationUrl: "#",
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    issueDate: "2024",
    expiryDate: "2025",
    credentialId: "GA-IQ-2024-789",
    description:
      "Proficiency in Google Analytics for web analytics, data interpretation, and digital marketing insights.",
    skills: ["Google Analytics", "Web Analytics", "Data Interpretation", "Digital Marketing"],
    type: "Professional Certification",
    status: "Active",
    logo: "/images/google-logo.png",
    verificationUrl: "#",
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    expiryDate: "2027",
    credentialId: "AWS-MLS-2024-456",
    description: "Specialized knowledge in implementing and maintaining ML solutions on AWS cloud platform.",
    skills: ["AWS", "Machine Learning", "Cloud Computing", "SageMaker", "MLOps"],
    type: "Cloud Certification",
    status: "In Progress",
    logo: "/images/aws-logo.jpg",
    verificationUrl: "#",
  },
]

const achievements = [
  {
    title: "Data Analyst Intern – Afriment",
    issuer: "Afriment",
    issueDate: "2025",
    description:
      "Recognized for building interactive Google Sheets dashboards that improved data-driven decisions across security and development projects.",
    type: "Professional Achievement",
    logo: "/images/afriment-logo.png",
  },
  {
    title: "Research Assistant – Center for Governance Insights",
    issuer: "CGI Kenya",
    issueDate: "2024",
    description:
      "Acknowledged for co-authoring data-driven policy briefs and managing data collection in politically sensitive regions.",
    type: "Research Achievement",
    logo: "/images/cgi-logo.png",
  },
];
const filterOptions = [
  "All",
  "Professional Certification",
  "Achievement",
  "Research Contribution",
];

export default function CertificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const allItems: CombinedItem[] = [
    ...certifications.map((cert) => ({ ...cert, itemType: "certification" as const })),
    ...awards.map((award) => ({ ...award, itemType: "award" as const })),
  ]

  const filteredItems = allItems.filter((item) => selectedFilter === "All" || item.type === selectedFilter)

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary">Certifications & Awards</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications, academic honors, and recognition for excellence in data science and analytics.
          </p>
        </div>

        {/* Stats Overview */}
        <section className="mb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 font-serif text-2xl font-bold text-primary">{certifications.length}</div>
                <div className="text-sm text-muted-foreground">Professional Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 font-serif text-2xl font-bold text-primary">{awards.length}</div>
                <div className="text-sm text-muted-foreground">Awards & Honors</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 font-serif text-2xl font-bold text-primary">
                  {certifications.filter((cert) => cert.status === "Active").length}
                </div>
                <div className="text-sm text-muted-foreground">Active Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 font-serif text-2xl font-bold text-primary">{upcomingCertifications.length}</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filter by type:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </section>

        {/* Certifications and Awards */}
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.issuer}
                        className="h-12 w-12 rounded-lg object-contain bg-muted p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                        <Badge
                          variant={item.itemType === "certification" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {item.type}
                        </Badge>
                      </div>
                      <CardDescription className="font-medium text-accent">{item.issuer}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {item.issueDate}</span>
                    </div>
                    {item.itemType === "certification" && Boolean(item.expiryDate) && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Expires: {item.expiryDate}</span>
                      </div>
                    )}
                  </div>

                  {item.itemType === "certification" && item.skills && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill: string) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.itemType === "certification" && item.credentialId && (
                    <div className="text-xs text-muted-foreground mb-4">Credential ID: {item.credentialId}</div>
                  )}

                  {item.itemType === "certification" && item.verificationUrl && (
                    <Button asChild variant="ghost" size="sm" className="gap-2 p-0 h-auto">
                      <a href={item.verificationUrl} target="_blank" rel="noopener noreferrer">
                        Verify Credential
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Certifications */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Upcoming Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingCertifications.map((cert, index) => (
              <Card key={index} className="border-dashed border-2 border-accent/30">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </div>
                  <CardDescription className="font-medium text-accent">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Expected: {cert.expectedDate}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="mb-4 font-serif text-2xl font-bold text-primary">Continuous Professional Development</h3>
              <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                I'm committed to staying current with the latest technologies and methodologies in data science and AI.
                Always learning, always growing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">Discuss Collaboration</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/skills">View Technical Skills</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
