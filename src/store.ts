import { create } from "zustand"

type Language = {
  isShow: boolean
  language?: string
  level?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | string
}

type Education = {
  isShow: boolean
  degree?: string | null
  city?: string | null

  schoolName?: string | null
  startMonth?: string | number
  startYear?: string | number
  endMonth?: string | number
  endYear?: string | number
}

type Job = {
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
type Skill = {
  isShow: boolean
  name?: string
}

type TResume = {
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

interface Store {
  resume: TResume
  setResume: (input: TResume) => void
}

const resumeStore = create<Store>((set) => ({
  resume: {
    skills: [{ isShow: true }, { isShow: false }, { isShow: false }, { isShow: false }, { isShow: false }],
    educations: [{ isShow: true }, { isShow: false }, { isShow: false }],
    jobs: [{ isShow: true }, { isShow: false }, { isShow: false }],
    languages: [{ isShow: true }, { isShow: false }, { isShow: false }],
  },
  setResume: (input) => set({ resume: input }),
}))
export type { TResume }
export default resumeStore
