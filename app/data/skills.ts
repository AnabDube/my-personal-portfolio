export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
  title?: string
  description?: string
}

export interface Skill {
  name: string
  level: number
  icon?: string
  description?: string
  featured?: boolean
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Analytics & BI",
    icon: "chart-line",
    skills: [
      { name: "Microsoft Excel", level: 90, icon: "file-excel" },
      { name: "Python", level: 85, icon: "python" },
      { name: "SQL", level: 80, icon: "database" },
      { name: "Power BI", level: 85, icon: "chart-line" },
      { name: "R Programming", level: 75, icon: "r-project" },
      { name: "SPSS", level: 80, icon: "chart-bar" },
    ],
  },
  {
    category: "Artificial Intelligence",
    icon: "brain",
    skills: [
      { name: "Generative AI", level: 75, icon: "robot" },
      { name: "Natural Language Processing", level: 70, icon: "language" },
      { name: "Prompt Engineering", level: 80, icon: "magic" },
      { name: "AI-Assisted Analysis", level: 85, icon: "cogs" },
      { name: "Machine Learning", level: 72, icon: "microchip" },
    ],
  },
  {
    category: "Professional Skills",
    icon: "search",
    skills: [
      { name: "Communication", level: 90, icon: "comments" },
      { name: "Problem-Solving", level: 88, icon: "lightbulb" },
      { name: "Research & Data Analysis", level: 92, icon: "search" },
      { name: "Team Collaboration", level: 85, icon: "handshake" },
      { name: "Critical Thinking", level: 87, icon: "brain" },
      { name: "Project Management", level: 82, icon: "tasks" },
    ],
  },
]

export const toolsAndTechnologies = [
  { name: "VS Code", icon: "code", category: "Development" },
  { name: "Google Workspace", icon: "google", category: "Productivity" },
  { name: "MS Office", icon: "windows", category: "Productivity" },
  { name: "Git", icon: "git-alt", category: "Version Control" },
  { name: "Stata", icon: "chart-pie", category: "Statistics" },
  { name: "AI Tools", icon: "robot", category: "AI" },
  { name: "Notion", icon: "sticky-note", category: "Productivity" },
]

export const personalInfo = {
  name: "Anab Ali Dube",
  title: "Data Analyst | AI Researcher | Insight Storyteller",
  location: "Nairobi, Kenya",
  email: "anabdube030@gmail.com",
  phone: "+254757078420",
  education: "B.Sc Statistics",
  availability: "Freelance Available",
  bio: "I'm Anab, a data analyst with over 2 years of experience working across research, development, and governance sectors. I specialize in collecting, cleaning, and analyzing data to uncover insights that drive real-world decisions. I work with tools like Excel, SQL, R, Power BI, and SPSS, and I often leverage AI to speed up analysis, generate reports, and automate repetitive tasks.\n\nI combine an analytical mindset with strong communication and research skills, helping teams translate complex data into decisions. I'm adaptable, detail-oriented, and comfortable working across both technical and non-technical teams.",
  resumeUrl: "https://drive.google.com/file/d/1CFDiNH75WStSVsXkYX3v1Dz72pWs40A0/view?usp=sharing",
}
