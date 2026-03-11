interface CaseStudy {
  id: string
  titleKey: string
  subtitleKey: string
  category: "Enterprise" | "DevOps" | "Government" | "Architecture"
  emoji: string
  problemKey: string
  solutionKey: string
  impactKeys: string[]
  techStack: string[]
  architecture?: string[]
  liveUrl?: string
  periodKey: string
}
