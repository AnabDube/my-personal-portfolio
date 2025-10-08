import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ResumeButton } from "@/components/resume-button"
import { GraduationCap, Award, Target, Heart, MapPin, Mail, Phone, Briefcase } from "lucide-react"
import Link from "next/link"
import { personalInfo, skillCategories } from "@/app/data/skills"

const education = [
  {
    degree: "Bachelor of Science in Statistics",
    institution: "University of Eldoret",
    period: "2019 - 2023",
    description:
      "Comprehensive foundation in statistical theory, data analysis, and mathematical modeling with applications across various domains.",
    highlights: ["Statistical Theory", "Data Analysis", "Mathematical Modeling", "Research Methods"],
  },
]

const values = [
  {
    icon: Target,
    title: "Insight with Precision",
    description:
      "I approach every dataset with curiosity and accuracy — translating complex information into clear, reliable insights that drive smart decisions.",
  },
  {
    icon: Heart,
    title: "Data for Impact",
    description:
      "My work is guided by purpose — using analytics and AI to advance research, improve programs, and create value for communities and organizations.",
  },
  {
    icon: Award,
    title: "Growth & Innovation",
    description:
      "I'm dedicated to continuous learning — expanding my expertise in data science, AI, and visualization to deliver fresh, evidence-based solutions.",
  },
];

const personalDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: personalInfo.education,
  },
  {
    icon: Briefcase,
    label: "Availability",
    value: personalInfo.availability,
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I turn raw data into actionable insight through AI, analytics, and visualization.
          </p>
        </div>

        {/* Profile Summary */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I am a research-oriented Data Analyst with over two years of experience across governance, development, and research sectors. My work focuses on transforming complex data into actionable insights that inform evidence-based decisions. I specialize in data collection, cleaning, and visualization using tools such as Excel, R, SQL, Power BI, and SPSS, while integrating AI-driven approaches to enhance analysis, reporting, and automation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I combine an analytical mindset with strong communication and research skills, helping teams translate complex data into decisions. Alongside my statistical background, I apply AI and data visualization techniques to uncover patterns and deliver insights that drive meaningful outcomes.
              </p>

            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                  <CardDescription className="text-base font-medium text-accent">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills Overview */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Technical Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="text-xs">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/skills">View Detailed Skills</Link>
            </Button>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="mb-4 font-serif text-2xl font-bold text-primary">Let's Work Together</h3>
              <p className="mb-6 text-muted-foreground">
                Interested in collaborating on a data science project or discussing opportunities? I'd love to hear from
                you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <ResumeButton variant="outline" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
