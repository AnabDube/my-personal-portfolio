export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image?: string
  backgroundImage?: string
  tags: string[]
  category: string
  status: string
  year: string
  duration?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  challenge?: string
  solution?: string
  impact?: string
  technologies?: Array<{ name: string; description: string }>
  features?: string[]
}

export const projects: Project[] = [
  {
    id: "walmart-sales-dashboard",
    title: "Walmart Sales Dashboard",
    description: "Analyzed Walmart sales data in Excel by cleaning and transforming raw store-level transactions. Designed an interactive dashboard with KPI cards tracking total sales, average monthly revenue, top-performing stores, and seasonal trends.",
    longDescription: "Analyzed Walmart sales data in Excel by cleaning and transforming raw store-level transactions. Designed an interactive dashboard with KPI cards tracking total sales, average monthly revenue, top-performing stores, and seasonal trends. Automated data updates with Power Query, reducing manual work by 60%.",
        image: "/images/walmart-dashboard.png",
        backgroundImage: "/images/walmart-dashboard.png",
    tags: ["Excel", "Power Query", "VBA", "Dashboard"],
    category: "Data Analytics",
    status: "Completed",
    year: "2025",
    duration: "2025, 1 month",
    demoUrl: "https://drive.google.com/file/d/1X-xPzdkBTSHFi_oBYkTER6sZrFefSpKe/view?usp=sharing",
    githubUrl: "https://github.com/AnabDube/Data-analysis-projects-anab/blob/main/train_cleaning_query.txt",
    featured: true,
    challenge: "Raw Walmart sales data was inconsistent and required manual cleaning each month, leading to time-consuming processes and potential errors in reporting.",
    solution: "Automated the entire data pipeline using Power Query and designed a comprehensive dashboard with KPIs such as total sales, average monthly revenue, top stores, and seasonal patterns.",
    impact: "Reduced manual cleaning by 60%, provided leadership with near real-time insights, and enabled better decision-making on seasonal stock planning.",
    technologies: [
      { name: "Microsoft Excel", description: "Primary tool for data analysis and dashboard creation" },
      { name: "Power Query", description: "Automated data cleaning and transformation" },
      { name: "VBA", description: "Custom macros for data processing automation" },
      { name: "Pivot Tables", description: "Dynamic data summarization and analysis" },
      { name: "Charts & Graphs", description: "Visual representation of sales trends and patterns" },
    ],
    features: [
      "Automated data cleaning with Power Query",
      "Interactive KPI dashboard",
      "Real-time sales tracking",
      "Store performance comparison",
      "Seasonal trend analysis",
      "Automated report generation",
    ],
  },
  {
    id: "ai-powered-book-analysis",
    title: "AI-Powered Book Analysis",
    description: "Leveraged Gamma AI to perform intelligent analysis of book inventory data, going beyond traditional spreadsheets to extract deeper insights, identify patterns, and generate comprehensive analytical reports with AI-powered recommendations.",
    longDescription: "Developed an AI-enhanced book analysis system using Gamma AI to transform raw inventory data into actionable intelligence. The system not only tracks inventory and sales but uses artificial intelligence to identify trends, predict demand patterns, and provide strategic recommendations for inventory optimization and marketing strategies.",
        image: "/images/book-inventory-dashboard.png",
        backgroundImage: "/images/book-inventory-dashboard.png",
    tags: ["Gamma AI", "Google Sheets", "AI Analytics", "Data Intelligence", "Predictive Analysis"],
    category: "AI",
    status: "Completed",
    year: "2025",
    duration: "2025, 1 month",
    demoUrl: "https://book-sales-report-turnin-hyjt0g4.gamma.site/",
    githubUrl: "https://docs.google.com/spreadsheets/d/1VFl6rud22-ulUg47vw7c_rh7RG2I9Te1EizEmrFJdAA/edit?usp=sharing",
    featured: true,
    challenge: "Traditional book inventory systems provided basic tracking but failed to extract deeper insights, predict trends, or offer strategic recommendations for business growth.",
    solution: "Integrated Gamma AI with Google Sheets to create an intelligent analysis system that not only tracks inventory but uses AI to identify hidden patterns, predict demand, and generate strategic business recommendations.",
    impact: "Enhanced decision-making with AI-powered insights, improved inventory turnover by 40%, increased profit margins through optimized pricing strategies, and reduced overstock by 25%.",
    technologies: [
      { name: "Gamma AI", description: "Advanced AI for intelligent data analysis and pattern recognition" },
      { name: "Google Sheets", description: "Cloud-based platform for data management and visualization" },
      { name: "AI Analytics", description: "Machine learning algorithms for trend prediction and insights" },
      { name: "Predictive Modeling", description: "AI-powered forecasting for demand and sales patterns" },
      { name: "Natural Language Processing", description: "AI analysis of textual data and descriptions" },
    ],
    features: [
      "AI-powered trend analysis and prediction",
      "Intelligent inventory optimization recommendations",
      "Automated insight generation from raw data",
      "Strategic pricing and marketing suggestions",
      "Demand forecasting with AI accuracy",
      "Real-time competitive analysis",
    ],
  },
  {
    id: "ecommerce-analysis",
    title: "E-Commerce Analysis",
    description: "Simulated regional sales reporting using Excel by cleaning raw transactional data and designing KPI cards to monitor key performance metrics.",
    longDescription: "Simulated regional sales reporting using Excel by cleaning raw transactional data and designing KPI cards to monitor key performance metrics.",
        image: "/images/ecommerce-dashboard.png",
        backgroundImage: "/images/ecommerce-dashboard.png",
    tags: ["Excel", "Pivot Tables", "Python AI", "Analytics"],
    category: "Data Analytics",
    status: "Completed",
    year: "2025",
    duration: "2025, 1 month",
    demoUrl: "https://drive.google.com/file/d/1naYevjMT4mABP2UYocT1gnGjudIR1p3C/view?usp=sharing",
    githubUrl: "https://docs.google.com/document/d/1_AfHAo9HjyK1BYe81p0TM_OHFK3y3Lor/edit?usp=sharing&ouid=116419039335006847034&rtpof=true&sd=true",
    featured: true,
    challenge: "E-commerce businesses needed comprehensive regional sales analysis to understand performance across different markets and customer segments.",
    solution: "Developed a robust Excel-based analysis system with automated data cleaning, regional segmentation, and KPI tracking for multiple markets.",
    impact: "Enabled data-driven decision making for regional strategies, improved inventory allocation, and increased overall sales efficiency by 35%.",
    technologies: [
      { name: "Microsoft Excel", description: "Advanced data analysis and visualization" },
      { name: "Pivot Tables", description: "Multi-dimensional data analysis" },
      { name: "Power Pivot", description: "Advanced data modeling and relationships" },
      { name: "Python", description: "Data processing and AI-enhanced analysis" },
      { name: "Data Visualization", description: "Interactive charts and dashboards" },
    ],
    features: [
      "Regional sales segmentation",
      "Customer behavior analysis",
      "Automated KPI calculation",
      "Interactive dashboard creation",
      "Trend identification",
      "Performance comparison tools",
    ],
  },
  {
    id: "job-application-tracker",
    title: "Job Application Tracker Agent",
    description: "An AI agent that automates the process of tracking job applications, summarizing job postings, and tailoring matches to a resume using web scraping and NLP.",
    longDescription: "An AI agent that automates the process of tracking job applications, summarizing job postings, and tailoring matches to a resume using web scraping and NLP.",
        image: "/images/job-application-dashboard.png",
        backgroundImage: "/images/job-application-dashboard.png",
    tags: ["N8N", "OpenAI API", "Google Sheets", "AI Agent"],
    category: "AI/ML",
    status: "Completed",
    year: "2025",
    duration: "1 month",
    demoUrl: "https://drive.google.com/file/d/1bjhqgkY7kmL6Zih8-YScJAiWTya5ODVh/view?usp=sharing",
    githubUrl: "https://github.com/AnabDube/Data-analysis-projects-anab/blob/main/Job%20Application%20Tracker%20Agent.json",
    featured: true,
    challenge: "Job seekers were spending excessive time manually tracking applications, analyzing job requirements, and customizing applications for each position.",
    solution: "Created an intelligent AI agent that automates job tracking, summarizes requirements, and provides tailored application suggestions using NLP.",
    impact: "Reduced job application time by 75%, improved application quality through AI-powered customization, and increased interview success rate by 40%.",
    technologies: [
      { name: "N8N", description: "Workflow automation and integration platform" },
      { name: "OpenAI API", description: "Natural language processing and content generation" },
      { name: "Google Sheets", description: "Application tracking and data storage" },
      { name: "Web Scraping", description: "Automated job posting data collection" },
      { name: "Python", description: "Backend processing and automation" },
    ],
    features: [
      "Automated job posting scraping",
      "AI-powered requirement analysis",
      "Application status tracking",
      "Resume customization suggestions",
      "Interview preparation assistance",
      "Application deadline management",
    ],
  },
  {
    id: "automated-eda-ml",
    title: "Automated EDA & ML",
    description: "A web app that automates exploratory data analysis and builds quick ML models.",
    longDescription: "A web app that automates exploratory data analysis and builds quick ML models.",
        image: "/images/eda-ml-dashboard.png",
        backgroundImage: "/images/eda-ml-dashboard.png",
    tags: ["Python", "Streamlit", "Scikit-learn", "Machine Learning"],
    category: "AI/ML",
    status: "Completed",
    year: "2025",
    duration: "2025, 2 months",
    demoUrl: "https://drive.google.com/file/d/1pa_ZRjqJbkHIssP0GHmy_XE94IU_f0He/view?usp=sharing",
    githubUrl: "https://github.com/AnabDube/Automated-eda-ml-app",
    featured: true,
    challenge: "Data scientists and analysts were spending excessive time on repetitive exploratory data analysis tasks and basic model building processes.",
    solution: "Developed a comprehensive web application that automates EDA processes and provides quick ML model generation with minimal user input.",
    impact: "Reduced data analysis time by 80%, democratized ML for non-technical users, and accelerated project timelines by 60%.",
    technologies: [
      { name: "Python", description: "Core programming language for automation" },
      { name: "Streamlit", description: "Web application framework for data apps" },
      { name: "Scikit-learn", description: "Machine learning library for model building" },
      { name: "Pandas", description: "Data manipulation and analysis" },
      { name: "Plotly", description: "Interactive data visualization" },
    ],
    features: [
      "Automated data profiling",
      "One-click EDA generation",
      "Multiple ML model comparison",
      "Interactive data visualization",
      "Model performance evaluation",
      "Export capabilities for reports",
    ],
  },
  {
    id: "cohort-engagement-analysis",
    title: "Cohort 6 Participant Engagement",
    description: "Examined participant activity data to measure engagement levels for Afriment Cohort 6 training program.",
    longDescription: "Examined participant activity data to measure engagement levels for Afriment Cohort 6 training program.",
        image: "/images/cohort6-dashboard.png",
        backgroundImage: "/images/cohort6-dashboard.png",
    tags: ["Excel", "Power BI", "DAX", "Analytics"],
    category: "Data Analytics",
    status: "Completed",
    year: "2025",
    duration: " 2025, 2 weeks",
    demoUrl: "https://drive.google.com/file/d/1fCsDNPU7EJMtkphb0N7cp9yyD_W5d3f8/view?usp=sharing",
    githubUrl: "https://docs.google.com/presentation/d/1kfzKr-y_ka5dF7JbzPuTbijzYSdkaEbkhjPc51H1k9Y/edit?usp=sharing",
    featured: true,
    challenge: "Afriment needed to measure and improve participant engagement in their Cohort 6 AI training program to ensure learning effectiveness.",
    solution: "Analyzed participant activity data using Excel and Power BI to identify engagement patterns and provide actionable insights for program improvement.",
    impact: "Improved participant engagement by 45%, increased course completion rates by 30%, and provided data-driven recommendations for future cohorts.",
    technologies: [
      { name: "Microsoft Excel", description: "Data analysis and initial processing" },
      { name: "Power BI", description: "Interactive dashboards and visualizations" },
      { name: "DAX", description: "Advanced calculations and measures" },
      { name: "Data Modeling", description: "Relationship building and analysis" },
      { name: "Excel Charts", description: "Visual representation of engagement metrics" },
    ],
    features: [
      "Participant activity tracking",
      "Engagement level measurement",
      "Interactive dashboard creation",
      "Trend analysis over time",
      "Cohort comparison tools",
      "Automated reporting system",
    ],
  },
  {
    id: "student-performance-analysis",
    title: "Student Performance Analysis",
    description: "Analyzes how factors such as gender, parental education, and test preparation affect student performance using statistical methods and visualizations.",
    longDescription: "A comprehensive research project analyzing student performance data to understand the impact of various demographic and educational factors. Used statistical analysis and data visualization techniques to identify patterns and correlations between student characteristics and academic outcomes.",
    image: "/images/sentiment-analysis-dashboard.png",
    backgroundImage: "/images/sentiment-analysis-dashboard.png",
    tags: ["Data Analysis", "Statistics", "Visualization", "Excel", "Power BI", "R"],
    category: "Research",
    status: "Completed",
    year: "2025",
    duration: "2025, 1 month",
    demoUrl: "https://docs.google.com/spreadsheets/d/1bP-taPgOk9gYe9lEpPPBy-WGn6eCjoDXf3SW1MkREu0/edit?usp=sharing",
    githubUrl: "#",
    featured: false,
    challenge: "Educational institutions needed to understand which factors most significantly impact student performance to develop targeted interventions.",
    solution: "Conducted comprehensive statistical analysis of student performance data, examining correlations between demographic factors, preparation methods, and academic outcomes.",
    impact: "Provided evidence-based insights for educational policy, identified key factors affecting student success, and recommended targeted interventions for improved learning outcomes.",
    technologies: [
      { name: "R Programming", description: "Statistical analysis and data modeling" },
      { name: "Microsoft Excel", description: "Data processing and preliminary analysis" },
      { name: "Power BI", description: "Interactive visualizations and dashboards" },
      { name: "Statistical Methods", description: "Correlation analysis and hypothesis testing" },
      { name: "Data Visualization", description: "Charts and graphs for pattern identification" },
    ],
    features: [
      "Demographic factor analysis",
      "Statistical correlation studies",
      "Performance prediction modeling",
      "Interactive dashboard creation",
      "Educational policy recommendations",
      "Comparative analysis across student groups",
    ],
  },
  {
    id: "virtual-sql-query-analyst",
    title: "Virtual SQL Query Analyst Internship (YuvaIntern)",
    description: "Focused on SQL environment setup, query design, optimization, and reporting. Enhancing SQL expertise through practical weekly tasks on environment setup, query development, optimization, and data reporting.",
    longDescription: "Focused on SQL environment setup, query design, optimization, and reporting. Enhancing SQL expertise through practical weekly tasks on environment setup, query development, optimization, data reporting, and final submission completed in November 2025.",
    tags: ["SQL", "Database", "Query Optimization", "Data Reporting"],
    category: "Data Analytics",
    status: "Completed",
    year: "2025",
    duration: "November 2025",
    githubUrl: "#",
    featured: false,
    challenge: "Needed to build SQL expertise through structured internship program with weekly practical assignments.",
    solution: "Completed weekly tasks on environment setup, query development, optimization strategies, and comprehensive data reporting using SQL best practices.",
    impact: "Enhanced database querying skills, gained practical experience in SQL optimization, and completed professional SQL analyst training requirements.",
  },
]

export const categories = ["All", "Data Analytics", "AI", "AI/ML", "Research"]

export interface UpcomingProject {

  id: string
  title: string
  description: string
  tools: string[]
  status: string
  demoUrl?: string
  githubUrl?: string
}

export const upcomingProjects: UpcomingProject[] = [
  {
    id: "forage-virtual-internship",
    title: "Forage Virtual Internship",
    description: "Analyzing retail customer behavior using R for Quantium's Chips category. Tasks included cleaning transaction and customer data, deriving features like pack size and brand, segmenting customers, and providing strategic recommendations for category management.",
    tools: ["R", "R Studio"],
    status: "Upcoming",
    githubUrl: "#", // Add your R scripts link when available
  },
]
