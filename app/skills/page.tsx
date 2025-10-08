"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Database,
  BarChart3,
  Code,
  Cpu,
  Globe,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  Heart,
  Zap,
  FileSpreadsheet,
  Search,
  Handshake,
  CheckSquare,
  Bot,
  Languages,
  Sparkles,
  Microchip,
  MessageCircle,
} from "lucide-react"
import { skillCategories } from "@/app/data/skills"

// Icon mapping function
const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    "chart-line": BarChart3,
    "brain": Brain,
    "search": Search,
    "file-excel": FileSpreadsheet,
    "python": Code,
    "database": Database,
    "r-project": Code,
    "chart-bar": BarChart3,
    "robot": Bot,
    "language": Languages,
    "magic": Sparkles,
    "cogs": Cpu,
    "microchip": Microchip,
    "comments": MessageCircle,
    "lightbulb": Lightbulb,
    "handshake": Handshake,
    "tasks": CheckSquare,
  }
  return iconMap[iconName] || Code
}

const softSkills = [
  {
    title: "Communication",
    icon: MessageSquare,
    description: "Translating complex technical concepts into actionable business insights",
    level: 92,
  },
  {
    title: "Critical Thinking",
    icon: Lightbulb,
    description: "Analytical problem-solving and evidence-based decision making",
    level: 94,
  },
  {
    title: "Adaptability",
    icon: Zap,
    description: "Quickly learning new technologies and adapting to changing requirements",
    level: 90,
  },
  {
    title: "Teamwork",
    icon: Users,
    description: "Collaborative research and cross-functional project delivery",
    level: 88,
  },
  {
    title: "Attention to Detail",
    icon: Target,
    description: "Ensuring accuracy and precision in statistical analysis and reporting",
    level: 95,
  },
  {
    title: "Empathy",
    icon: Heart,
    description: "Understanding user needs and stakeholder perspectives",
    level: 87,
  },
]

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary">Skills & Expertise</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and soft skills developed through academic research
            and professional experience.
          </p>
        </div>

        {/* Featured Skills */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Featured Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories
              .flatMap((category) => category.skills.filter((skill) => skill.featured))
              .map((skill) => (
                <Card key={skill.name} className="border-accent/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-accent">{skill.name}</CardTitle>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Technical Skills</h2>

          {/* Category Navigation */}
          <div className="mb-8 flex flex-wrap gap-2">
            {skillCategories.map((category, index) => {
              const IconComponent = getIcon(category.icon)
              return (
                <Button
                  key={category.category}
                  variant={selectedCategory === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(index)}
                  className="gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  {category.category}
                </Button>
              )
            })}
          </div>

          {/* Selected Category Skills */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  {React.createElement(getIcon(skillCategories[selectedCategory].icon), { className: "h-5 w-5" })}
                </div>
                <div>
                  <CardTitle>{skillCategories[selectedCategory].category}</CardTitle>
                  <CardDescription>{skillCategories[selectedCategory].description || "Technical skills and expertise"}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {skillCategories[selectedCategory].skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{skill.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Soft Skills */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-3xl font-bold text-primary">Soft Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill) => (
              <Card key={skill.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      {React.createElement(skill.icon, { className: "h-5 w-5" })}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section>
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="mb-4 font-serif text-2xl font-bold text-primary">Continuous Learning</h3>
                <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                  I'm committed to staying at the forefront of data science and AI technologies. Currently expanding my
                  expertise in advanced deep learning architectures and cloud-native ML deployment strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="/contact">Discuss a Project</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/certifications">View Certifications</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
