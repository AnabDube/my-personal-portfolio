import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Lightbulb, Target, Zap } from "lucide-react"

// This would typically come from a database or CMS
const projects = {
  "healthcare-analytics": {
    title: "AI-Powered Healthcare Analytics",
    description:
      "Machine learning models for predicting patient outcomes using biostatistical methods and large healthcare datasets.",
    longDescription:
      "Developed comprehensive machine learning pipeline for analyzing patient data from multiple healthcare facilities. The system predicts patient outcomes with 85% accuracy using ensemble methods combining logistic regression, random forests, and neural networks.",
    image: "/placeholder-mnkkm.png",
    tags: ["Python", "TensorFlow", "Biostatistics", "Healthcare", "Machine Learning"],
    category: "Healthcare",
    status: "Completed",
    year: "2024",
    duration: "6 months",
    demoUrl: "#",
    githubUrl: "#",
    challenge:
      "Healthcare facilities were struggling with manual patient outcome assessment, leading to delayed interventions and suboptimal resource allocation.",
    solution:
      "Built an automated ML pipeline that processes patient data in real-time, providing risk scores and outcome predictions to healthcare providers.",
    impact:
      "Reduced patient assessment time by 70% and improved early intervention rates by 45% across participating facilities.",
    technologies: [
      { name: "Python", description: "Primary programming language for data processing and model development" },
      { name: "TensorFlow", description: "Deep learning framework for neural network implementation" },
      { name: "Scikit-learn", description: "Machine learning library for ensemble methods and preprocessing" },
      { name: "Pandas", description: "Data manipulation and analysis" },
      { name: "PostgreSQL", description: "Database for storing patient data and model results" },
    ],
    features: [
      "Real-time patient risk scoring",
      "Ensemble model combining multiple algorithms",
      "Interactive dashboard for healthcare providers",
      "Automated alert system for high-risk patients",
      "Comprehensive reporting and analytics",
    ],
  },
  "sentiment-analysis": {
    title: "NLP Sentiment Analysis Dashboard",
    description:
      "Real-time sentiment analysis of social media data with interactive Power BI visualizations and automated reporting.",
    longDescription:
      "Built end-to-end sentiment analysis system processing 10,000+ social media posts daily. Features real-time dashboard with sentiment trends, keyword analysis, and automated alert system for brand monitoring.",
    image: "/sentiment-analysis-dashboard.png",
    tags: ["NLP", "Power BI", "Python", "Data Visualization", "Social Media"],
    category: "NLP",
    status: "Completed",
    year: "2024",
    duration: "4 months",
    demoUrl: "#",
    githubUrl: "#",
    challenge:
      "Organizations needed real-time insights into public sentiment about their brand across multiple social media platforms.",
    solution:
      "Developed automated sentiment analysis pipeline with natural language processing and real-time visualization capabilities.",
    impact:
      "Enabled 24/7 brand monitoring with 92% sentiment classification accuracy and reduced response time to negative sentiment by 80%.",
    technologies: [
      { name: "Python", description: "Core language for NLP processing and API development" },
      { name: "NLTK", description: "Natural language processing and sentiment analysis" },
      { name: "Power BI", description: "Interactive dashboards and real-time visualizations" },
      { name: "Twitter API", description: "Social media data collection and streaming" },
      { name: "Azure", description: "Cloud infrastructure and deployment" },
    ],
    features: [
      "Real-time social media monitoring",
      "Multi-platform sentiment analysis",
      "Keyword and hashtag tracking",
      "Automated alert system",
      "Historical trend analysis",
    ],
  },
  "clinical-trials": {
    title: "Statistical Modeling for Clinical Trials",
    description:
      "Advanced statistical models for clinical trial data analysis with R and SPSS, focusing on treatment efficacy.",
    longDescription:
      "Comprehensive statistical analysis framework for Phase II and III clinical trials. Implemented survival analysis, time-to-event modeling, and adaptive trial designs with interim analysis capabilities.",
    image: "/clinical-trial-survival-analysis.png",
    tags: ["R", "SPSS", "Clinical Trials", "Statistics", "Biostatistics"],
    category: "Research",
    status: "Completed",
    year: "2023",
    duration: "8 months",
    demoUrl: "#",
    githubUrl: "#",
    challenge:
      "Clinical researchers needed robust statistical frameworks for analyzing complex trial data with multiple endpoints and time-varying covariates.",
    solution:
      "Developed comprehensive statistical analysis pipeline with survival analysis, adaptive designs, and interim analysis capabilities.",
    impact:
      "Reduced analysis time by 60% and improved statistical power by implementing adaptive trial designs, leading to more efficient clinical trials.",
    technologies: [
      { name: "R", description: "Primary statistical computing environment" },
      { name: "SPSS", description: "Statistical analysis and data management" },
      { name: "SAS", description: "Advanced statistical procedures for clinical trials" },
      { name: "Shiny", description: "Interactive web applications for data exploration" },
      { name: "LaTeX", description: "Statistical report generation and documentation" },
    ],
    features: [
      "Survival analysis and time-to-event modeling",
      "Adaptive trial design implementation",
      "Interim analysis capabilities",
      "Multiple endpoint analysis",
      "Automated statistical reporting",
    ],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

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

        {/* Key Features */}
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
