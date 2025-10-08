"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Award, Filter } from "lucide-react"
import { certifications } from "@/app/data/certifications"

const filterOptions = [
  "All",
  "Simplilearn",
  "University of Eldoret",
  "Afriment",
  "Microsoft & LinkedIn",
];

export default function CertificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const filteredItems = certifications.filter((cert) =>
    selectedFilter === "All" || cert.issuer === selectedFilter
  )

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary">My Certifications</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and academic credentials demonstrating expertise in data analysis, AI, and research methodologies.
          </p>
        </div>

        {/* Stats Overview */}
        <section className="mb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 font-serif text-2xl font-bold text-primary">{certifications.length}</div>
                <div className="text-sm text-muted-foreground">Total Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 font-serif text-2xl font-bold text-primary">
                  {new Date().getFullYear()}
                </div>
                <div className="text-sm text-muted-foreground">Current Year</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Badge className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 font-serif text-2xl font-bold text-primary">
                  {certifications.filter((cert) => cert.date.includes("2025")).length}
                </div>
                <div className="text-sm text-muted-foreground">Completed This Year</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filter by issuer:</span>
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

        {/* Certifications */}
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredItems.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <CardDescription className="font-medium text-accent">{cert.issuer}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {cert.date}</span>
                    </div>
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
              <h3 className="mb-4 font-serif text-2xl font-bold text-primary">Continuous Learning</h3>
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
