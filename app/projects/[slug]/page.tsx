import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Lightbulb, Target, Zap } from "lucide-react"
import { projects } from "@/app/data/projects"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.id === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 gap-2">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant="outline">{project.status}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {project.year} • {project.duration}
            </div>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-full w-full object-cover" />
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          <Button asChild className="gap-2">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View Demo
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View Code
            </a>
          </Button>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </CardContent>
          </Card>
        </section>

        {/* Challenge, Solution, Impact */}
        <section className="mb-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-accent" />
                Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.challenge}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-accent" />
                Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-accent" />
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.impact}</p>
            </CardContent>
          </Card>
        </section>

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-accent" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="flex gap-4">
                      <Badge variant="secondary" className="shrink-0">
                        {tech.name}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Tags */}
        <section className="mb-12">
          <h3 className="mb-4 font-medium">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="mb-4 font-serif text-2xl font-bold text-primary">Interested in Similar Work?</h3>
              <p className="mb-6 text-muted-foreground">
                I'd love to discuss how I can help with your data science and analytics projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/projects">View More Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
