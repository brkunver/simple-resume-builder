import { Label } from "@radix-ui/react-label"
import { Input } from "./UI/input"
import { cn } from "@/lib/utils"
import resumeStore from "@/store"
import { motion } from "framer-motion"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select"

type Props = {
  index: number
  className?: string
  showline?: boolean
}

function Language({ index, className, showline = true }: Props) {
  const { resume, setResume } = resumeStore()

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    let resumeCopy = { ...resume }
    const input = e.target.value
    resumeCopy.languages[index] = { ...resumeCopy.languages[index], language: input }
    setResume(resumeCopy)
  }

  function languageLevelHandler(value: string) {
    let resumeCopy = { ...resume }
    resumeCopy.languages[index] = { ...resumeCopy.languages[index], level: value }
    setResume(resumeCopy)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex flex-col gap-y-4", className)}
    >
      {showline && <div className="w-full h-[1px] bg-indigo-400 rounded-lg my-8"></div>}

      <section
        id="language-section"
        className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center align-middle gap-x-6 "
      >
        <Label htmlFor="language" className={cn("min-w-32 my-auto")}>
          Language :
        </Label>
        <Input
          type="text"
          name="language"
          id="language"
          maxLength={24}
          className={cn("bg-gray-50")}
          placeholder="e.g. Spanish"
          value={resume.languages[index].language ?? ""}
          onChange={(e) => handleInput(e)}
        />
        <Label htmlFor="level" className={cn("min-w-32 my-auto")}>
          Select Level :
        </Label>

        <Select
          value={resume.languages[index].level ?? undefined}
          onValueChange={(value) => languageLevelHandler(value)}
        >
          <SelectTrigger className="bg-gray-50">
            <SelectValue placeholder="e.g. A1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="A1">A1</SelectItem>
            <SelectItem value="A2">A2</SelectItem>
            <SelectItem value="B1">B1</SelectItem>
            <SelectItem value="B2">B2</SelectItem>
            <SelectItem value="C1">C1</SelectItem>
            <SelectItem value="C2">C2</SelectItem>
          </SelectContent>
        </Select>
      </section>
    </motion.div>
  )
}

export default Language
