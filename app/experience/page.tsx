import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, Users, Database, Brain } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Afriment",
    location: "Remote",
    period: "2024 - Present",
    type: "AI & Data Analytics",
    description:
      "Supporting AI-driven data projects focused on social impact and innovation across Africa, combining research and analytics to deliver data-backed insights.",
    achievements: [
      "Cleaned and analyzed datasets for AI-driven research and automation projects",
      "Developed Power BI dashboards visualizing key performance indicators for clients",
      "Collaborated with cross-functional teams to translate business needs into analytical solutions",
      "Applied machine learning models for trend detection and insight generation",
    ],
    technologies: ["Power BI", "Python", "Excel", "SQL", "AI Automation"],
  },
  {
    title: "Research Assistant",
    company: "Centre for Governance Insights (CGI)",
    location: "Nairobi, Kenya",
    period: "2023 - 2024",
    type: "Research & Analytics",
    description:
      "Conducted research and data analysis on governance, security, and public policy projects for evidence-based decision-making.",
    achievements: [
      "Designed and managed surveys for national-level governance projects",
      "Analyzed and visualized datasets to inform development and security reports",
      "Produced statistical summaries and policy insights for donor-funded research",
      "Streamlined data workflows using R and SPSS for efficient reporting",
    ],
    technologies: ["SPSS", "R", "Excel", "Data Visualization", "Research Methods"],
  },
  {
    title: "Field Enumerator",
    company: "TIFA Research",
    location: "Nairobi, Kenya",
    period: "2022",
    type: "Field Research",
    description:
      "Collected, verified, and entered data for social and market research studies, ensuring data quality and integrity.",
    achievements: [
      "Conducted structured interviews across multiple counties with high accuracy and completeness",
      "Ensured data integrity and timely submission through digital collection tools",
      "Supported the supervision of field teams during large-scale national surveys",
    ],
    technologies: ["KoboToolbox", "Excel", "SurveyCTO", "Data Collection"],
  },
]


const keyMetrics = [
  {
    icon: TrendingUp,
    label: "Projects Completed",
    value: "12",
    description: "Completed Projects (2025)",
  },
  {
    icon: Users,
    label: "Stakeholders Reached",
    value: "10+",
    description: "Government, NGOs, and tech organizations",
  },
  {
    icon: Database,
    label: "Datasets Analyzed",
    value: "50+",
    description: "From surveys, reports, and operational data",
  },
  {
    icon: Brain,
    label: "AI & Data Projects",
    value: "5+",
    description: "Integrating AI tools for automation and insights",
  },
]


export default function ExperiencePage() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary">Experience</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  A journey through data analysis, research, and AI-driven insights — applying data to solve real-world challenges in governance, development, and innovation.
</p>

          </p>
        </div>

        {/* Key Metrics */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyMetrics.map((metric) => (
              <Card key={metric.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <metric.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="mb-2 font-serif text-2xl font-bold text-primary">{metric.value}</div>
                  <div className="font-medium text-sm">{metric.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Professional Timeline</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== experiences.length - 1 && <div className="absolute left-6 top-16 h-full w-px bg-border" />}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 mt-6">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                  </div>

                  {/* Content */}
                  <Card className="flex-1">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-accent">{exp.company}</CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <Badge variant="secondary">{exp.period}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
  <Card className="bg-muted/50">
    <CardContent className="pt-6">
      <h3 className="mb-4 font-serif text-2xl font-bold text-primary">Let’s Build Something Insightful</h3>
      <p className="mb-6 text-muted-foreground">
        From field research to AI-powered analytics, I bring clarity, structure, and storytelling to data. 
        Let’s collaborate on projects that make impact.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects">Explore My Work</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
</section>
</div>
</div>
  )
}
