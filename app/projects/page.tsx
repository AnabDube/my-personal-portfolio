"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: "healthcare-analytics",
    title: "AI-Powered Healthcare Analytics",
    description:
      "Machine learning models for predicting patient outcomes using biostatistical methods and large healthcare datasets.",
    longDescription:
      "Developed comprehensive machine learning pipeline for analyzing patient data from multiple healthcare facilities. The system predicts patient outcomes with 85% accuracy using ensemble methods combining logistic regression, random forests, and neural networks.",
    image: "/images/healthcare-analytics-dashboard.png",
    tags: ["Python", "TensorFlow", "Biostatistics", "Healthcare", "Machine Learning"],
    category: "Healthcare",
    status: "Completed",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "sentiment-analysis",
    title: "NLP Sentiment Analysis Dashboard",
    description:
      "Real-time sentiment analysis of social media data with interactive Power BI visualizations and automated reporting.",
    longDescription:
      "Built end-to-end sentiment analysis system processing 10,000+ social media posts daily. Features real-time dashboard with sentiment trends, keyword analysis, and automated alert system for brand monitoring.",
    image: "/images/sentiment-analysis-dashboard.png",
    tags: ["NLP", "Power BI", "Python", "Data Visualization", "Social Media"],
    category: "NLP",
    status: "Completed",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "clinical-trials",
    title: "Statistical Modeling for Clinical Trials",
    description:
      "Advanced statistical models for clinical trial data analysis with R and SPSS, focusing on treatment efficacy.",
    longDescription:
      "Comprehensive statistical analysis framework for Phase II and III clinical trials. Implemented survival analysis, time-to-event modeling, and adaptive trial designs with interim analysis capabilities.",
    image: "/images/clinical-trial-stats.png",
    tags: ["R", "SPSS", "Clinical Trials", "Statistics", "Biostatistics"],
    category: "Research",
    status: "Completed",
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "predictive-modeling",
    title: "Predictive Modeling for Disease Outbreak",
    description: "Time series forecasting models to predict disease outbreak patterns using epidemiological data.",
    longDescription:
      "Developed ARIMA and LSTM models for predicting disease outbreak patterns across different regions. The system provides early warning capabilities with 78% accuracy in outbreak prediction.",
    image: "/images/disease-outbreak-prediction.png",
    tags: ["Python", "Time Series", "Epidemiology", "LSTM", "Forecasting"],
    category: "Healthcare",
    status: "Completed",
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "data-pipeline",
    title: "Automated Data Processing Pipeline",
    description: "ETL pipeline for processing large biomedical datasets with automated quality checks and reporting.",
    longDescription:
      "Built scalable ETL pipeline processing 1TB+ of biomedical data monthly. Features automated data validation, quality scoring, and exception handling with comprehensive logging and monitoring.",
    image: "/images/data-processing-pipeline.png",
    tags: ["Python", "ETL", "Data Engineering", "Automation", "Big Data"],
    category: "Data Engineering",
    status: "Completed",
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "survey-analysis",
    title: "Large-Scale Survey Analysis Platform",
    description:
      "Statistical analysis platform for processing and analyzing large-scale survey data with interactive visualizations.",
    longDescription:
      "Comprehensive survey analysis platform handling 50,000+ responses. Features advanced statistical tests, factor analysis, and interactive dashboards for stakeholder reporting.",
    image: "/images/survey-analysis-platform.png",
    tags: ["R", "Shiny", "Survey Analysis", "Statistics", "Visualization"],
    category: "Research",
    status: "In Progress",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

const categories = ["All", "Healthcare", "NLP", "Research", "Data Engineering"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const otherProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of data science projects spanning healthcare analytics, machine learning, and
            statistical research.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Featured Projects</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="group-hover:text-accent transition-colors">{project.title}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{project.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <Button asChild size="sm" className="gap-2">
                        <Link href={`/projects/${project.id}`}>
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="mb-8 font-serif text-3xl font-bold text-primary">All Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant={project.status === "Completed" ? "secondary" : "outline"} className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button asChild variant="ghost" size="sm" className="gap-2 p-0 h-auto">
                      <Link href={`/projects/${project.id}`}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
