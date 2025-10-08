export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  icon: string
}

export const certifications: Certification[] = [
  {
    id: "business-analytics-excel",
    title: "Business Analytics with Excel",
    issuer: "Simplilearn",
    date: "June 2025",
    description: "Advanced certification covering Excel-based data analysis, including formulas, pivot tables, charts, and data cleaning techniques for business decision-making.",
    icon: "certificate",
  },
  {
    id: "power-bi-beginners",
    title: "Power BI for Beginners",
    issuer: "Simplilearn",
    date: "May 2025",
    description: "Advanced certification covering data modeling, visualization, DAX calculations, and dashboard creation for interactive business intelligence reporting.",
    icon: "certificate",
  },
  {
    id: "r-programming",
    title: "R Programming",
    issuer: "University of Eldoret",
    date: "November 2022",
    description: "Certification covering statistical analysis, data manipulation, and visualization using R for data-driven research and reporting.",
    icon: "certificate",
  },
  {
    id: "stata-fundamentals",
    title: "Stata Fundamentals",
    issuer: "University of Eldoret",
    date: "April 2023",
    description: "Certification covering data management, statistical modeling, and output interpretation using Stata for applied research.",
    icon: "certificate",
  },
  {
    id: "afriment-ai-bootcamp",
    title: "Afriment AI Bootcamp",
    issuer: "Afriment",
    date: "July 2025",
    description: "Intensive program covering AI fundamentals, machine learning workflows, prompt engineering, and real-world AI project development.",
    icon: "certificate",
  },
  {
    id: "generative-ai-essentials",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "August 2025",
    description: "Certification covering generative AI concepts, prompt engineering, ethical considerations, and practical AI applications in workflows.",
    icon: "certificate",
  },
]
