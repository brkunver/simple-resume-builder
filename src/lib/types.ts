export type Language = {
  isShow: boolean
  language?: string
  level?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | string
}

export type Education = {
  isShow: boolean
  degree?: string | null
  city?: string | null

  schoolName?: string | null
  startMonth?: string | number
  startYear?: string | number
  endMonth?: string | number
  endYear?: string | number
}

export type Job = {
  isShow: boolean
  title?: string
  description?: string
  city?: string
  company?: string
  startMonth?: string | number
  startYear?: string | number
  endMonth?: string | number
  endYear?: string | number
}
export type Skill = {
  isShow: boolean
  name?: string
}

export type TResume = {
  title?: string | null
  firstName?: string | null
  lastName?: string | null
  about?: string | null
  email?: string | null
  tel?: string | null
  educations: Education[]
  jobs: Job[]
  languages: Language[]
  skills: Skill[]
  photoSrc?: string | null
}

export enum PDFTemplate {
  PDF1,
  PDF2,
}
