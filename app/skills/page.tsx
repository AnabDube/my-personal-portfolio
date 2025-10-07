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
} from "lucide-react"

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    description: "Advanced ML algorithms, deep learning, and AI model development",
    skills: [
      { name: "TensorFlow", level: 90, description: "Deep learning model development and deployment" },
      { name: "PyTorch", level: 85, description: "Neural network research and experimentation" },
      { name: "scikit-learn", level: 95, description: "Classical ML algorithms and preprocessing" },
      { name: "Keras", level: 88, description: "High-level neural network API" },
      {
        name: "LLM Prompt Engineering",
        level: 92,
        description: "Optimizing large language model interactions",
        featured: true,
      },
      { name: "Agentic AI Design", level: 87, description: "Building autonomous AI agent systems", featured: true },
      { name: "Supervised Learning", level: 93, description: "Classification and regression techniques" },
      {
        name: "Unsupervised Learning",
        level: 89,
        description: "Clustering, dimensionality reduction, anomaly detection",
      },
    ],
  },
  {
    title: "Data Analytics & Statistics",
    icon: BarChart3,
    description: "Statistical analysis, biostatistics, and data interpretation",
    skills: [
      { name: "Python", level: 94, description: "Primary language for data analysis and ML" },
      { name: "R", level: 91, description: "Statistical computing and biostatistics" },
      { name: "SPSS", level: 88, description: "Statistical analysis and hypothesis testing" },
      { name: "Advanced Excel", level: 85, description: "Complex data analysis and modeling" },
      { name: "Biostatistics", level: 90, description: "Statistical methods for biological data" },
      { name: "Clinical Trial Analysis", level: 87, description: "Statistical analysis for medical research" },
      { name: "Survival Analysis", level: 89, description: "Time-to-event statistical modeling" },
    ],
  },
  {
    title: "Data Visualization & BI",
    icon: Database,
    description: "Creating compelling visualizations and business intelligence solutions",
    skills: [
      { name: "Power BI", level: 92, description: "Interactive dashboards and business reporting" },
      { name: "matplotlib", level: 89, description: "Python plotting and statistical graphics" },
      { name: "seaborn", level: 87, description: "Statistical data visualization in Python" },
      { name: "ggplot2", level: 85, description: "Grammar of graphics in R" },
      { name: "Plotly", level: 83, description: "Interactive web-based visualizations" },
      { name: "Tableau", level: 80, description: "Business intelligence and data visualization" },
    ],
  },
  {
    title: "Programming & Development",
    icon: Code,
    description: "Software development and programming languages",
    skills: [
      { name: "Python", level: 94, description: "Primary programming language" },
      { name: "R", level: 91, description: "Statistical programming and analysis" },
      { name: "SQL", level: 88, description: "Database querying and management" },
      { name: "JavaScript", level: 75, description: "Web development and data visualization" },
      { name: "Git", level: 85, description: "Version control and collaboration" },
      { name: "Docker", level: 78, description: "Containerization and deployment" },
    ],
  },
  {
    title: "AI & NLP Technologies",
    icon: Cpu,
    description: "Natural language processing and AI platform integration",
    skills: [
      { name: "NLP & Data Annotation", level: 90, description: "Text processing and linguistic annotation" },
      { name: "OpenAI APIs", level: 88, description: "GPT integration and prompt engineering" },
      { name: "Google AI Platform", level: 85, description: "Cloud-based ML model deployment" },
      { name: "Hugging Face", level: 83, description: "Transformer models and NLP pipelines" },
      { name: "NLTK", level: 87, description: "Natural language toolkit for Python" },
      { name: "spaCy", level: 85, description: "Industrial-strength NLP library" },
    ],
  },
  {
    title: "Data Management & Tools",
    icon: Globe,
    description: "Large dataset management and project coordination",
    skills: [
      { name: "Large Dataset Management", level: 91, description: "Handling and processing big data efficiently" },
      { name: "PostgreSQL", level: 84, description: "Relational database management" },
      { name: "MongoDB", level: 78, description: "NoSQL database for unstructured data" },
      { name: "Jira", level: 82, description: "Project management and issue tracking" },
      { name: "AWS", level: 79, description: "Cloud computing and data storage" },
      { name: "Apache Spark", level: 76, description: "Big data processing framework" },
    ],
  },
]

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
            {skillCategories.map((category, index) => (
              <Button
                key={category.title}
                variant={selectedCategory === index ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(index)}
                className="gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.title}
              </Button>
            ))}
          </div>

          {/* Selected Category Skills */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  {React.createElement(skillCategories[selectedCategory].icon, { className: "h-5 w-5" })}
                </div>
                <div>
                  <CardTitle>{skillCategories[selectedCategory].title}</CardTitle>
                  <CardDescription>{skillCategories[selectedCategory].description}</CardDescription>
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
