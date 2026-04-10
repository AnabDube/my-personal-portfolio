import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, Users, Database, Brain } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "Investment Officer",
    company: "National Treasury & Economic Planning",
    location: "Nairobi, Kenya",
    period: "Jan 2026 – Present",
    type: "Public Financial Management",
    description:
      "Overseeing the financial performance and budget execution of state corporations at Kenya's National Treasury, ensuring alignment with national PFM frameworks and fiscal policy.",
    achievements: [
      "Monitor financial performance and budget execution of 10+ state corporations, identifying expenditure variances and escalating fiscal risks to senior management",
      "Prepare data-driven research briefs and expenditure analysis reports using Excel and Power BI, directly informing budget approval decisions at national level",
      "Evaluate funding requests and investment proposals from public enterprises, applying fiscal discipline criteria to ensure alignment with national PFM frameworks",
      "Track output delivery and compile inputs for progress reports, maintaining accurate programme documentation across the state corporation oversight function",
      "Collaborate with cross-functional teams on government project monitoring, strengthening transparency and accountability in public expenditure",
    ],
    technologies: ["Excel", "Power BI", "Public Financial Management", "Budget Analysis", "State Corporation Oversight"],
  },
  {
   title: "Virtual SQL Query Analyst Intern",
   company: "YuvaIntern",
   location: "Remote",
   period: "October 2025 - November 2025", 
   type: "Data Analytics",
   description:
    "SQL-driven analysis projects focused on data structuring, querying, and business reporting through hands-on, project-based learning.",
   achievements: [
    "Designed SQL databases and schema for analytical use",
    "Wrote and optimized SQL queries for data extraction and reporting",
    "Cleaned and transformed raw datasets to improve query accuracy",
    "Analyzed business data to identify key performance trends",
   ],
   technologies: ["SQL", "SQLite", "Excel", "Python"], 
  },
  {
    title: "Data Analyst Intern",
    company: "Afriment",
    location: "Remote",
    period: "June 2025 - August 2025",
    type: "AI & Data Analytics",
    description:
      "Remote, short-term upskilling placement supporting AI-driven data projects focused on social impact and innovation across Africa.",
    achievements: [
      "Collected, cleaned, and standardised open-source governance and security datasets, enhancing data reliability by 30%",
      "Developed Power BI dashboards visualizing key performance indicators, reducing manual analysis time by 25%",
      "Collaborated with cross-functional teams to translate business needs into analytical solutions",
      "Designed digital data collection tools and automated reporting workflows",
    ],
    technologies: ["Power BI", "Python", "Excel", "SQL", "AI Automation"],
  },
  {
    title: "Research Assistant",
    company: "Centre for Governance Insights (CGI)",
    location: "Nairobi, Kenya",
    period: "May 2023 – Dec 2025",
    type: "Research & Analytics · Project-Based",
    description:
      "Project-based engagement (2–3 research projects per year) conducting qualitative and quantitative research on governance, security, and public policy.",
    achievements: [
      "Conducted desk research on anti-corruption strategies, PFM reforms, transparency & accountability, and Illicit Financial Flows (IFFs)",
      "Transcribed and translated Somali-language audio from key informant interviews (KIIs) and focus group discussions (FGDs) into English with 99% accuracy — enabling analysis from communities with limited researcher access",
      "Cleaned and analysed datasets of 1,000+ records using R, SPSS, and Excel, enhancing reporting efficiency by 25%",
      "Managed survey research across politically sensitive regions, achieving 95% participant engagement",
    ],
    technologies: ["SPSS", "R", "Excel", "NVivo", "SurveyToGo", "Somali-English Translation"],
  },
  {
    title: "Field Enumerator",
    company: "TIFA Research",
    location: "Nairobi, Kenya",
    period: "May 2022 – Aug 2022",
    type: "Field Research",
    description:
      "Collected, verified, and entered data for social and market research studies, ensuring data quality and integrity.",
    achievements: [
      "Collected 200+ household surveys and facilitated focus group discussions in high-pressure field environments",
      "Maintained 100% data accuracy via SurveyToGo with real-time digital uploads, reducing reporting delays by 20%",
      "Coordinated field logistics and stakeholder communication, improving operational efficiency by 25%",
    ],
    technologies: ["KoboToolbox", "Excel", "SurveyToGo", "Data Collection"],
  },
]


const keyMetrics = [
  {
    icon: TrendingUp,
    label: "State Corporations Monitored",
    value: "10+",
    description: "Budget execution & financial oversight",
  },
  {
    icon: Users,
    label: "Stakeholders Engaged",
    value: "50+",
    description: "Government, NGOs, development organisations",
  },
  {
    icon: Database,
    label: "Datasets Analysed",
    value: "50+",
    description: "Surveys, budgets, and operational data",
  },
  {
    icon: Brain,
    label: "Years of Experience",
    value: "3+",
    description: "Public finance, governance & data analysis",
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
