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
  caseStudy?: {
    dataNote: string
    context: string
    methodology: Array<{ step: string; detail: string }>
    sampleFindings: Array<{ label: string; value: string; note?: string }>
    reflection: string
  }
}

export const projects: Project[] = [
  {
    id: "state-corporation-budget-analysis",
    title: "State Corporation Budget & Expenditure Analysis",
    description: "Anonymised case study of budget oversight work at the National Treasury: analysing expenditure reports, identifying fiscal variances, and building Power BI dashboards that inform approval decisions for public enterprises.",
    longDescription: "As an Investment Officer at the National Treasury & Economic Planning, I regularly analyse budget submissions and expenditure performance reports for a portfolio of state corporations. This case study presents an anonymised version of that workflow — from raw budget data through to the dashboards and briefs used by senior decision-makers. All figures and entity names have been replaced with synthetic data that preserves the structure and methodology of the real analysis.",
    image: "/images/state-corp-budget-dashboard.png",
    backgroundImage: "/images/state-corp-budget-dashboard.png",
    tags: ["Excel", "Power BI", "Public Financial Management", "Budget Analysis", "DAX"],
    category: "Public Finance",
    status: "Completed",
    year: "2026",
    duration: "Ongoing",
    featured: true,
    challenge: "State corporation budget submissions often contain inconsistencies between reported expenditure and actual performance, making it difficult for oversight teams to identify fiscal risk early.",
    solution: "Built an Excel-based cleaning and validation workflow combined with a Power BI dashboard tracking KPIs including expenditure variance, budget utilisation rate, revenue concentration risk, and surplus/deficit trends across multiple reporting periods.",
    impact: "The dashboard model enables faster identification of variance patterns, supports evidence-based approval decisions, and provides a consistent format for progress reporting to senior management.",
    technologies: [
      { name: "Microsoft Excel", description: "Data cleaning, validation, and preliminary analysis" },
      { name: "Power BI", description: "Interactive dashboards and variance tracking" },
      { name: "DAX", description: "Custom measures for budget utilisation and variance calculations" },
      { name: "PFM Frameworks", description: "Alignment with National Treasury guidelines and fiscal policy" },
    ],
    features: [
      "Expenditure variance identification across reporting periods",
      "Revenue concentration risk analysis",
      "Surplus/deficit trend visualisation",
      "Budget utilisation rate tracking",
      "Automated progress report inputs",
      "Scenario analysis for investment proposals",
    ],
    caseStudy: {
      dataNote: "All figures, entity names, and sector references in this case study have been replaced with synthetic data. The methodology, workflow, and analytical approach reflect real practice at the National Treasury.",
      context: "The Investment Division at the National Treasury oversees a portfolio of state corporations spanning multiple sectors. Each quarter, corporations submit financial performance reports that must be reviewed against their approved budgets before disbursements are processed or further investment proposals considered. The challenge is that submissions often arrive in inconsistent formats, with figures that don't reconcile across statements — making manual review slow and error-prone at scale.",
      methodology: [
        {
          step: "Data Collection & Standardisation",
          detail: "Budget submissions and expenditure reports are received from each corporation in varying Excel formats. The first step is standardising these into a master template — reconciling column headers, aligning reporting periods, and flagging missing line items. Power Query is used to automate this ingestion for repeat submitters.",
        },
        {
          step: "Validation & Reconciliation",
          detail: "Each submission is checked for internal consistency: does the cash flow statement reconcile with the income statement? Does the closing cash balance compute correctly? Common errors include net surplus figures that don't match operating profit on the cash flow statement, and expenditure subtotals that don't sum correctly. These are flagged and returned to corporations with written comments before analysis proceeds.",
        },
        {
          step: "Variance Analysis",
          detail: "Actual expenditure is compared against the approved budget line by line. Variances above a defined threshold (typically 10%) are automatically highlighted. The nature of each variance is assessed — whether driven by legitimate operational changes, timing differences, or unexplained overspend. Corporations flagged for significant overspend are escalated for written explanation.",
        },
        {
          step: "Power BI Dashboard Build",
          detail: "Validated data feeds into a structured Power BI data model. DAX measures calculate budget utilisation rates, expenditure growth rates, and revenue concentration ratios across the portfolio. The dashboard presents these as KPI cards, comparative bar charts, and trend lines — giving senior officers a portfolio-wide view without opening individual submissions.",
        },
        {
          step: "Report & Recommendation",
          detail: "Findings are compiled into a structured brief: a one-page executive summary followed by entity-level observations. Recommendations cover approval, conditional approval pending clarification, or referral back. The brief format is consistent across all corporations to support audit trail requirements.",
        },
      ],
      sampleFindings: [
        { label: "Corporation A — Budget Utilisation", value: "81%", note: "Within acceptable range. Revenue in line with projections." },
        { label: "Corporation B — Expenditure Growth", value: "+28.4% vs prior year", note: "Driven by staff costs increase. Recruitment approvals requested." },
        { label: "Corporation C — Revenue Concentration", value: "94% single source", note: "Flagged as sustainability risk. Diversification plan required." },
        { label: "Corporation D — Variance", value: "+31.6% above approved budget", note: "Escalated. Written justification requested before approval." },
        { label: "Corporation E — Surplus Remittance", value: "KES 12.4M due", note: "Per Treasury Circular guidelines. Payment schedule agreed." },
      ],
      reflection: "The most consistent challenge across state corporation submissions is the disconnect between what is reported in the income statement and what appears in the cash flow statement — particularly around operating profit figures. Building a simple reconciliation check into the intake template has significantly reduced back-and-forth with corporations before analysis can begin. Standardising the report format has also made it easier to spot anomalies quickly, since reviewers know exactly where to look rather than navigating different layouts each quarter.",
    },
  },
  {
    id: "governance-qualitative-research",
    title: "Governance Research & Somali-English Qualitative Analysis",
    description: "End-to-end qualitative research workflow for governance and security projects — including survey design, Somali-language transcription and translation of KIIs and FGDs, NVivo coding, and policy brief preparation.",
    longDescription: "During my time as a Research Assistant at the Centre for Governance Insights, I contributed to multiple project-based research engagements focused on governance, anti-corruption, and security policy across East Africa. A distinctive element of this work was conducting Somali-language transcription and translation for key informant interviews (KIIs) and focus group discussions (FGDs) — enabling analysis of field data from communities with limited researcher access. This case study documents the methodology, tools, and workflow used across those projects.",
    image: "/images/governance-qualitative-research.png",
    backgroundImage: "/images/governance-qualitative-research.png",
    tags: ["NVivo", "SPSS", "R", "Somali-English Translation", "Survey Design", "Research"],
    category: "Research",
    status: "Completed",
    year: "2023–2025",
    duration: "Multiple projects",
    featured: true,
    challenge: "Governance and security research in the Horn of Africa requires working with Somali-speaking communities whose data is typically inaccessible to researchers without language capability — creating gaps in evidence bases for policy.",
    solution: "Provided end-to-end qualitative research support including Somali-English transcription and translation of audio recordings with 99% accuracy, tool design and piloting, dataset cleaning (1,000+ records), and thematic coding in NVivo to produce policy-ready findings.",
    impact: "Improved contextual accuracy of data by 20%, enhanced reporting efficiency by 25%, and enabled research access to communities that would otherwise be excluded from governance studies.",
    technologies: [
      { name: "NVivo", description: "Thematic coding and qualitative data analysis" },
      { name: "SPSS", description: "Statistical analysis of survey data" },
      { name: "R", description: "Data cleaning and quantitative analysis" },
      { name: "SurveyToGo", description: "Digital data collection in the field" },
      { name: "Somali-English Translation", description: "KII and FGD transcription and translation" },
    ],
    features: [
      "Somali-English transcription and translation (KIIs & FGDs)",
      "Survey tool design, piloting, and revision",
      "Quantitative dataset cleaning and analysis (1,000+ records)",
      "Thematic coding and analysis in NVivo",
      "Policy brief and research report preparation",
      "Cross-regional data collection in politically sensitive environments",
    ],
    caseStudy: {
      dataNote: "All transcript content, participant details, geographic identifiers, and organisational names from real research engagements are strictly confidential and are not reproduced here. This case study describes methodology, process, and anonymised aggregate findings only.",
      context: "Governance and security research in the Horn of Africa frequently requires engaging communities where Somali is the primary language — including pastoralist communities, displaced populations, and cross-border traders whose perspectives are underrepresented in policy research. Without language capability, researchers typically rely on local interpreters who may not have training in qualitative research methods, introducing significant accuracy and consistency risks. Working as a Research Assistant at the Centre for Governance Insights, I provided direct Somali-English transcription and translation support across multiple project cycles, enabling analysis that would otherwise have required outsourcing to unvetted third parties.",
      methodology: [
        {
          step: "Survey Tool Design & Piloting",
          detail: "Before fieldwork, KII guides and FGD discussion frameworks are developed collaboratively with the research lead. Each instrument is reviewed for cultural appropriateness — certain question framings that work in English can carry different connotations in Somali, particularly around governance, authority, and trust. Instruments are piloted with 2–3 respondents, revised, and then translated into Somali before field deployment.",
        },
        {
          step: "Field Data Collection",
          detail: "Data is collected across multiple regions, often including areas with limited connectivity or active security concerns. Digital collection tools (SurveyToGo, KoboToolbox) are used where possible for structured survey components. Audio recording is used for KIIs and FGDs with participant consent, with field notes maintained as a backup.",
        },
        {
          step: "Somali-English Transcription",
          detail: "Audio recordings are transcribed verbatim in Somali first, preserving the speaker's exact words before any translation. This two-step approach — transcribe then translate — reduces the risk of meaning loss that occurs when a listener tries to interpret and translate simultaneously. Dialectal variations (particularly between northern and southern Somali dialects) are noted where they affect meaning.",
        },
        {
          step: "Translation & Quality Assurance",
          detail: "Transcripts are translated into English with attention to preserving original meaning rather than producing polished prose. Idiomatic expressions, proverbs, and culturally-specific references are preserved with explanatory notes rather than translated away. A back-check process is applied to a sample of transcripts — re-reading the English against the Somali audio — to verify consistency before analysis begins.",
        },
        {
          step: "Quantitative Data Cleaning",
          detail: "Survey datasets (typically 300–500 records per project cycle, aggregating to 1,000+ across the engagement) are cleaned in R and SPSS. This involves handling missing values, standardising categorical responses, checking for enumerator effects, and producing a clean analytical dataset with a documented cleaning log.",
        },
        {
          step: "NVivo Thematic Coding",
          detail: "Translated transcripts are imported into NVivo and coded thematically. An initial codebook is developed from the research questions, with emergent codes added as new themes surface in the data. Coded segments are reviewed for consistency across transcripts, and frequency and co-occurrence analyses are run to identify dominant and intersecting themes.",
        },
        {
          step: "Policy Brief Output",
          detail: "Findings are synthesised into policy briefs structured for donor and government audiences: a 2-page summary with headline findings and recommendations, followed by a technical annex with supporting data. Statistical summaries (produced in SPSS/R) are integrated with qualitative evidence from the transcripts to build a mixed-methods narrative.",
        },
      ],
      sampleFindings: [
        { label: "Participant Engagement Rate", value: "95%", note: "Across survey rounds in politically sensitive regions" },
        { label: "Transcription Accuracy", value: "99%", note: "Verified through back-check process on sample transcripts" },
        { label: "Data Accuracy Improvement", value: "+20%", note: "Achieved through tool design iteration and piloting" },
        { label: "Reporting Efficiency Gain", value: "+25%", note: "From streamlined R/SPSS cleaning workflows" },
        { label: "Records Analysed", value: "1,000+", note: "Across multiple project cycles, 2023–2025" },
      ],
      reflection: "The most technically demanding part of Somali-English translation for research purposes is handling concepts that don't map cleanly across languages — particularly around governance terms like 'accountability', 'legitimacy', and 'corruption', which carry specific institutional connotations in English that may be expressed very differently in Somali community contexts. Preserving these differences rather than smoothing them into standard English is essential for research integrity: what a respondent actually said is more valuable to analysis than a polished paraphrase. The discipline of transcribing first and translating second — rather than simultaneous interpretation — was a significant methodological choice that improved the reliability of the final dataset.",
    },
  },
  {
    id: "public-finance-monitoring-dashboard",
    title: "Public Finance Monitoring Dashboard",
    description: "A Power BI dashboard template for monitoring state corporation financial performance — tracking budget utilisation, expenditure growth, surplus trends, and capital allocation across multiple entities and reporting periods.",
    longDescription: "This project documents the design and build of a reusable Power BI dashboard framework for public sector financial monitoring. Inspired by the budget oversight work at the National Treasury, the dashboard uses synthetic data to demonstrate how fiscal analysts can track key PFM indicators across multiple state corporations simultaneously, flag anomalies, and generate consistent reporting outputs for accountability and audit purposes.",
    image: "/images/pfm-monitoring-dashboard.png",
    backgroundImage: "/images/pfm-monitoring-dashboard.png",
    tags: ["Power BI", "DAX", "PFM", "Data Visualisation", "Excel"],
    category: "Public Finance",
    status: "Completed",
    year: "2026",
    duration: "1 month",
    featured: true,
    challenge: "Public sector finance teams often rely on fragmented spreadsheets to monitor multiple entities, making it hard to spot patterns, compare performance, or produce consistent progress reports efficiently.",
    solution: "Designed a structured Power BI dashboard with synthetic multi-entity data, featuring variance analysis, revenue concentration metrics, expenditure growth indicators, and automated summary outputs aligned with PFM reporting standards.",
    impact: "Demonstrates a scalable monitoring approach that could reduce manual reporting time significantly and improve the consistency and reliability of financial oversight across government portfolios.",
    technologies: [
      { name: "Power BI", description: "Dashboard design and interactive visualisation" },
      { name: "DAX", description: "Custom calculations for PFM KPIs" },
      { name: "Excel", description: "Data structuring and source preparation" },
      { name: "Data Modelling", description: "Multi-entity relationship design" },
    ],
    features: [
      "Multi-entity budget utilisation comparison",
      "Expenditure growth rate tracking",
      "Revenue concentration risk indicators",
      "Surplus/deficit scenario visualisation",
      "Capital allocation analysis",
      "Audit-ready summary report outputs",
    ],
    caseStudy: {
      dataNote: "This dashboard was built using synthetic data designed to mirror the structure and complexity of real public sector financial monitoring. All entity names, sector references, and figures are illustrative only.",
      context: "Public sector finance teams overseeing multiple state corporations face a common problem: each entity submits financial reports in slightly different formats, making it difficult to compare performance across the portfolio or spot anomalies without opening every individual file. Spreadsheet-based monitoring works for one or two entities, but becomes unmanageable at scale — and doesn't support the kind of visual pattern recognition that helps analysts catch fiscal risks early. This project builds a reusable Power BI framework specifically designed for multi-entity PFM monitoring, structured around the indicators most relevant to Treasury oversight: budget utilisation, expenditure growth, revenue concentration, and surplus management.",
      methodology: [
        {
          step: "Define the KPI Framework",
          detail: "Before building anything in Power BI, the monitoring indicators were mapped out based on what matters most for fiscal oversight: budget utilisation rate (actual vs approved), expenditure growth rate (period-on-period), revenue concentration ratio (share of revenue from largest single source), surplus/deficit position, and capital budget execution rate. Each KPI was defined precisely — for example, utilisation is calculated against the approved budget, not the revised estimates — to avoid ambiguity in the DAX measures.",
        },
        {
          step: "Design the Data Model",
          detail: "A star schema was designed with a central fact table of financial transactions and dimension tables for entities, time periods, budget lines, and expenditure categories. This structure allows the same set of DAX measures to slice correctly across any combination of entity, period, or budget category without requiring separate calculations per entity. The schema was built to be extensible — adding a new corporation requires only adding rows to the entity dimension.",
        },
        {
          step: "Build DAX Measures",
          detail: "Core measures were written for each KPI: budget utilisation (DIVIDE of actual to approved), variance percentage, period-on-period growth, revenue concentration (share of top source), and a flag measure that returns 1 when variance exceeds the threshold. The flag measure is used to drive conditional formatting across the dashboard — automatically highlighting entities that need attention without manual scanning.",
        },
        {
          step: "Dashboard Layout & Design",
          detail: "The dashboard is structured across two pages: an executive summary page showing the portfolio-level view (KPI cards, variance ranking, trend line), and an entity drill-down page where individual corporation performance can be examined in detail. Navigation between pages uses bookmarks and buttons rather than tabs, keeping the interface clean for non-technical users such as directors or audit teams.",
        },
        {
          step: "Audit-Ready Report Output",
          detail: "A formatted report template is built as a companion to the dashboard — a printable one-page summary per entity that pulls the same DAX measures, formatted for inclusion in progress reports or audit files. This ensures that the numbers on the printed report always match the dashboard, eliminating the risk of copy-paste errors in manual reporting.",
        },
      ],
      sampleFindings: [
        { label: "Entity A — Budget Utilisation", value: "81%", note: "On track. No flags raised." },
        { label: "Entity B — Revenue Concentration", value: "91% single source", note: "Risk flagged. Dependency on one revenue stream." },
        { label: "Entity C — Expenditure Growth", value: "+38% YoY", note: "Escalated for written justification. Above 10% threshold." },
        { label: "Entity D — Capital Execution Rate", value: "44%", note: "Low. Capital budget significantly underspent mid-year." },
        { label: "Portfolio Avg Utilisation", value: "76%", note: "Healthy overall. Two entities driving aggregate variance." },
      ],
      reflection: "The biggest design decision in this dashboard was choosing what NOT to show on the main page. The temptation in PFM dashboards is to surface every available number — but the goal for an oversight team is speed: they need to know within seconds which entities need attention and which are fine. Keeping the executive summary to five KPI cards and a variance ranking table, with full detail one click away, made the dashboard genuinely usable in briefing settings rather than just analytically comprehensive. The conditional formatting on the variance flags — which automatically turns red when a threshold is breached — has been the most practically useful feature, since it removes the need for the reviewer to do any mental calculation to identify priorities.",
    },
  },
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
    featured: false,
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
    featured: false,
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
    featured: false,
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

export const categories = ["All", "Public Finance", "Data Analytics", "AI", "AI/ML", "Research"]

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
