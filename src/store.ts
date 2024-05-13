import { create } from "zustand"
import type { TResume } from "./lib/types"

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


export default resumeStore
