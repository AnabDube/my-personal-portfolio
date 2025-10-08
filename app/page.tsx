import Link from "next/link"
import { ArrowRight, Mail, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResumeButton } from "@/components/resume-button"
import { AnimatedMeshBackground } from "@/components/animated-mesh-background"
import { projects } from "@/app/data/projects"
import { personalInfo } from "@/app/data/skills"

const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

const skills = [
  "Excel",
  "Power BI",
  "Python",
  "SQL",
  "R",
  "AI/ML",
  "Data Visualization",
  "Statistical Analysis",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
        <AnimatedMeshBackground />
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 sm:mb-8 animate-fade-in-up">
              <img
                src="https://raw.githubusercontent.com/AnabDube/Data-analysis-projects-anab/main/1000263455.png"
                alt="Anab Ali Dube"
                className="w-40 md:w-64 max-w-full rounded-lg mx-auto object-contain"
                loading="eager"
              />
            </div>

            <h1 className="mb-4 sm:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary leading-tight px-2 animate-fade-in-up">
              <span className="text-blue-400">Anab Ali Dube</span>
            </h1>

            <p className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-4 animate-fade-in-up">
              {personalInfo.title}
            </p>

            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed animate-fade-in-up">
              I turn raw data into actionable insights through AI, analytics, and visualization.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4 animate-fade-in-up">
              <Button
                asChild
                size="lg"
                className="gap-2 w-full sm:w-auto min-h-[44px] touch-manipulation shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href="/contact">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  Contact Me
                </Link>
              </Button>
              <ResumeButton
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-h-[44px] touch-manipulation shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="flex justify-center gap-6 sm:gap-8 animate-fade-in-up">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-accent transition-colors p-3 touch-manipulation hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anabdube/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-3 touch-manipulation hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/AnabDube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-3 touch-manipulation hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 sm:mb-8 font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary px-2">
              Core Expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm touch-manipulation"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mt-6 sm:mt-8">
              <Button asChild variant="outline" className="gap-2 bg-transparent min-h-[44px] touch-manipulation">
                <Link href="/skills">
                  View All Skills
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="mb-3 sm:mb-4 font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary px-2">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Explore some of my recent work in data analysis, machine learning, and AI research.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Card key={project.title} className="group hover:shadow-lg transition-shadow touch-manipulation">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="group-hover:text-accent transition-colors text-base sm:text-lg md:text-xl leading-tight">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="gap-2 p-0 h-auto text-sm min-h-[32px] touch-manipulation"
                    >
                      <Link href={`/projects/${project.id}`}>
                        Learn More
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent min-h-[44px] touch-manipulation"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-3 sm:mb-4 font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-tight px-2">
              Ready to Turn Your Data Into Insights?
            </h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-muted-foreground px-4 leading-relaxed">
              Let's collaborate on your next data science project. I specialize in machine learning, statistical
              analysis, and creating actionable insights from complex datasets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto min-h-[44px] touch-manipulation">
                <Link href="/contact">
                  Get In Touch
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent w-full sm:w-auto min-h-[44px] touch-manipulation"
              >
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
