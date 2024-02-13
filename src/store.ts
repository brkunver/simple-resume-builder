import { create } from "zustand"

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
  photoSrc?: string | null
}

interface Store {
  resume: TResume
  setResume: (input: TResume) => void
}

const resumeStore = create<Store>((set) => ({
  resume: { educations: [{}, {}, {}], jobs: [{}, {}, {}] },
  setResume: (input) => set({ resume: input }),
}))
export type { Education, TResume }
export default resumeStore
