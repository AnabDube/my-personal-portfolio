interface PersonStructuredDataProps {
    name: string
    jobTitle: string
    description: string
    url: string
    email: string
    location: string
    skills: string[]
    education: Array<{
      name: string
      degree: string
      field: string
      startDate: string
      endDate?: string
    }>
  }
  
  export function PersonStructuredData({
    name,
    jobTitle,
    description,
    url,
    email,
    location,
    skills,
    education,
  }: PersonStructuredDataProps) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name,
      jobTitle,
      description,
      url,
      email,
      address: {
        "@type": "Place",
        name: location,
      },
      knowsAbout: skills,
      alumniOf: education.map((edu) => ({
        "@type": "EducationalOrganization",
        name: edu.name,
      })),
      hasCredential: education.map((edu) => ({
        "@type": "EducationalOccupationalCredential",
        name: edu.degree,
        educationalLevel: edu.degree,
        about: edu.field,
        dateCreated: edu.startDate,
        expires: edu.endDate,
      })),
      sameAs: [
        "https://linkedin.com/in/justinmogire",
        "https://github.com/justinmogire",
        "https://twitter.com/justinmogire",
      ],
    }
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  }
  
  interface ProjectStructuredDataProps {
    name: string
    description: string
    url: string
    author: string
    dateCreated: string
    programmingLanguage: string[]
    keywords: string[]
  }
  
  export function ProjectStructuredData({
    name,
    description,
    url,
    author,
    dateCreated,
    programmingLanguage,
    keywords,
  }: ProjectStructuredDataProps) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name,
      description,
      url,
      author: {
        "@type": "Person",
        name: author,
      },
      dateCreated,
      programmingLanguage,
      keywords: keywords.join(", "),
      applicationCategory: "Data Analysis Software",
    }
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  }
  