export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  problem: string
  features: string[]
  techStack: string[]
  github?: string
  githubFE?: string
  githubBE?: string
  live?: string
  liveAdmin?: string
  image: string
  featured: boolean
  metrics: string[]
  period: string
  category: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  type: 'internship' | 'full-time' | 'part-time'
  description: string[]
  technologies: string[]
}

export interface Education {
  institution: string
  shortName: string
  degree: string
  field: string
  period: string
  note?: string
  courses: string[]
  achievements?: string[]
}

export interface SkillCategory {
  category: string
  icon: string
  items: string[]
}

export interface Achievement {
  title: string
  description: string
  year: string
  icon: string
}

export interface Position {
  role: string
  organization: string
  period: string
}
