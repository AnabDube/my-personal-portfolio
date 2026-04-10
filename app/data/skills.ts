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
  title: "Investment Officer · Budget & Data Analyst · Public Finance & Governance",
  location: "Nairobi, Kenya",
  email: "anabdube030@gmail.com",
  phone: "+254757078420",
  education: "B.Sc Applied Statistics",
  availability: "Open to Opportunities",
  languages: "English · Kiswahili · Somali",
  bio: "I'm Anab, an Investment Officer at the National Treasury & Economic Planning with over three years of experience spanning public financial management, governance research, and data analysis. I monitor the financial performance of 10+ state corporations, prepare budget analysis reports for national-level decision-makers, and evaluate investment proposals from public enterprises.\n\nBefore joining the Treasury, I worked as a Research Assistant at the Centre for Governance Insights, conducting qualitative and quantitative research on governance, security, and anti-corruption policy — including transcribing and translating Somali-language field interviews (KIIs and FGDs) with 99% accuracy. I'm fluent in English, Kiswahili, and Somali, which gives me a distinct edge in research across the Horn of Africa.\n\nI work with Excel, Power BI, R, SQL, SPSS, and Python, and I combine strong analytical skills with a commitment to making complex public finance data clear and actionable.",
  resumeUrl: "https://drive.google.com/file/d/1CFDiNH75WStSVsXkYX3v1Dz72pWs40A0/view?usp=sharing",
}
