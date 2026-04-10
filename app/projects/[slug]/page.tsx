import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Lightbulb, Target, Zap, FileText, Database, BookOpen, BarChart3, AlertCircle } from "lucide-react"
import { projects } from "@/app/data/projects"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.id === slug)

  if (!project) {
    notFound()
  }

  const isCaseStudy = !!project.caseStudy

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
            {isCaseStudy && (
              <Badge className="bg-violet-600/20 text-violet-400 border-violet-600/30">
                Case Study
              </Badge>
            )}
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
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={400}
            className="h-full w-full object-cover"
            unoptimized={project.image?.endsWith(".svg")}
          />
        </div>

        {/* Action Buttons — only for non-case-study projects with valid links */}
        {!isCaseStudy && (
          <div className="mb-8 flex gap-4">
            {project.id === "ai-powered-book-analysis" ? (
              <>
                <Button asChild className="gap-2">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    View Report
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2 bg-transparent">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Database className="h-4 w-4" />
                    Excel Dataset
                  </a>
                </Button>
              </>
            ) : project.id === "student-performance-analysis" ? (
              <Button asChild className="gap-2">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View Excel Analysis
                </a>
              </Button>
            ) : (
              <>
                {project.demoUrl && (
                  <Button asChild className="gap-2">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </>
            )}
          </div>
        )}

        {/* Data Confidentiality Notice — case studies only */}
        {isCaseStudy && project.caseStudy && (
          <div className="mb-8 flex gap-3 rounded-lg border border-violet-600/30 bg-violet-600/5 p-4">
            <AlertCircle className="h-5 w-5 text-violet-400 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-violet-400">Data note: </span>
              {project.caseStudy.dataNote}
            </p>
          </div>
        )}

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

        {/* ── CASE STUDY SECTIONS ── */}
        {isCaseStudy && project.caseStudy && (
          <>
            {/* Context */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    Context & Background
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.caseStudy.context}</p>
                </CardContent>
              </Card>
            </section>

            {/* Methodology */}
            <section className="mb-12">
              <h2 className="mb-6 font-serif text-2xl font-bold text-primary">Methodology</h2>
              <div className="space-y-4">
                {project.caseStudy.methodology.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-sm mt-1">
                      {index + 1}
                    </div>
                    <Card className="flex-1">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{item.step}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Sample Findings */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-accent" />
                    Sample Findings
                    <span className="ml-2 text-xs font-normal text-muted-foreground">(anonymised / synthetic data)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.caseStudy.sampleFindings.map((finding, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 rounded-lg bg-muted/40">
                        <div className="shrink-0 text-sm text-muted-foreground font-medium sm:w-64">{finding.label}</div>
                        <div className="font-bold text-accent text-sm sm:w-32 shrink-0">{finding.value}</div>
                        {finding.note && (
                          <div className="text-xs text-muted-foreground italic">{finding.note}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reflection */}
            <section className="mb-12">
              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-accent" />
                    Practitioner Reflection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">{project.caseStudy.reflection}</p>
                </CardContent>
              </Card>
            </section>
          </>
        )}

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
                I'd love to discuss how I can contribute to your data, research, or public finance projects.
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
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          {project.id === "ai-powered-book-analysis" ? (
            <>
              <Button asChild className="gap-2">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View Report
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Database className="h-4 w-4" />
                  Excel Dataset
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="https://gamma.app" target="_blank" rel="noopener noreferrer">
                  <Lightbulb className="h-4 w-4" />
                  View AI Insights
                </a>
              </Button>
            </>
          ) : project.id === "student-performance-analysis" ? (
            <Button asChild className="gap-2">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                View Excel Analysis
              </a>
            </Button>
          ) : (
            <>
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
            </>
          )}
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
