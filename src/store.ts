import { create } from "zustand"

type Language = {
  language?: string
  level?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | string
}

type Education = {
  degree?: string | null
  city?: string | null
  isExist?: boolean | null
  schoolName?: string | null
  startMonth?: string | number
  startYear?: string | number
  endMonth?: string | number
  endYear?: string | number
}

type Job = {
  title?: string
  city?: string
  company?: string
  startMonth?: string | number
  startYear?: string | number
  endMonth?: string | number
  endYear?: string | number
}

type TResume = {
  firstName?: string | null
  lastName?: string | null
  about?: string | null
  email?: string | null
  tel?: string | null
  educations: Education[]
  jobs: Job[]
  languages: Language[]
  photoSrc?: string | null
}

interface Store {
  resume: TResume
  setResume: (input: TResume) => void
}

const resumeStore = create<Store>((set) => ({
  resume: { educations: [{}, {}, {}], jobs: [{}, {}, {}], languages: [{}, {}, {}] },
  setResume: (input) => set({ resume: input }),
}))
export type { TResume }
export default resumeStore
