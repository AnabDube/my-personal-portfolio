import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResumeButton } from "@/components/resume-button"
import { AnimatedMeshBackground } from "@/components/animated-mesh-background"

const featuredProjects = [
  {
    title: "AI-Powered Healthcare Analytics",
    description:
      "Machine learning models for predicting patient outcomes using biostatistical methods and large healthcare datasets.",
    tags: ["Python", "TensorFlow", "Biostatistics", "Healthcare"],
    href: "/projects/healthcare-analytics",
  },
  {
    title: "NLP Sentiment Analysis Dashboard",
    description:
      "Real-time sentiment analysis of social media data with interactive Power BI visualizations and automated reporting.",
    tags: ["NLP", "Power BI", "Python", "Data Visualization"],
    href: "/projects/sentiment-analysis",
  },
  {
    title: "Statistical Modeling for Clinical Trials",
    description:
      "Advanced statistical models for clinical trial data analysis with R and SPSS, focusing on treatment efficacy.",
    tags: ["R", "SPSS", "Clinical Trials", "Statistics"],
    href: "/projects/clinical-trials",
  },
]

const skills = [
  "Machine Learning",
  "Data Visualization",
  "Python",
  "R",
  "Power BI",
  "TensorFlow",
  "NLP",
  "Biostatistics",
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
                src="/images/mogire.jpg"
                alt="Justin O. Mogire"
                className="mx-auto h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full border-4 border-accent/20 object-cover shadow-lg"
                loading="eager"
              />
            </div>

            <h1 className="mb-4 sm:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary leading-tight px-2 animate-fade-in-up">
              Justin Oyugi Mogire
            </h1>

            <p className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-4 animate-fade-in-up">
              Data Analyst | AI Researcher | Biostatistician
            </p>

            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed animate-fade-in-up">
              Turning data into decisions through AI, statistics, and visualization. Specialized in machine learning,
              biostatistics, and large dataset management.
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
                href="mailto:jmogire93@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors p-3 touch-manipulation hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/justin-oyugi-449279221"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-3 touch-manipulation hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/just254q"
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
                      <Link href={project.href}>
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
