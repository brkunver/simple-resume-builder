import { Label } from "@radix-ui/react-label"
import { Input } from "./UI/input"
import { cn } from "@/lib/utils"
import resumeStore from "@/store"
import { motion } from "framer-motion"

type Props = {
  index: number
  className?: string
  showline?: boolean
}

function Job({ index, className, showline = true }: Props) {
  const { resume, setResume } = resumeStore()

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    let resumeCopy = { ...resume }
    const input = e.target.value
    switch (e.target.name) {
      case "title":
        resumeCopy.jobs[index] = { ...resumeCopy.jobs[index], title: input }
        break
      case "job-city":
        resumeCopy.jobs[index] = { ...resumeCopy.jobs[index], city: input }
        break
      case "company":
        resumeCopy.jobs[index] = { ...resumeCopy.jobs[index], company: input }
        break
      case "job-start-year":
        resumeCopy.jobs[index] = { ...resumeCopy.jobs[index], startYear: input }
        break
      case "job-start-month":
        resumeCopy.jobs[index] = { ...resumeCopy.jobs[index], startMonth: input }
        break
      case "job-end-year":
        resumeCopy.jobs[index] = { ...resumeCopy.jobs[index], endYear: input }
        break
      case "job-end-month":
        resumeCopy.jobs[index] = { ...resumeCopy.jobs[index], endMonth: input }
        break
      default:
        break
    }

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
        id="job-title-city-section"
        className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center align-middle gap-x-6 "
      >
        <Label htmlFor="title" className={cn("min-w-32 my-auto")}>
          Title :
        </Label>
        <Input
          type="text"
          name="title"
          id="title"
          maxLength={24}
          className={cn("bg-gray-50")}
          placeholder="e.g. Frontend Developer"
          value={resume.jobs[index].title ?? ""}
          onChange={(e) => handleInput(e)}
        />
        <Label htmlFor="job-city" className={cn("min-w-32 my-auto")}>
          City :
        </Label>
        <Input
          type="text"
          name="job-city"
          id="job-city"
          maxLength={24}
          className={cn("bg-gray-50")}
          placeholder="e.g. New York"
          value={resume.jobs[index].city ?? ""}
          onChange={(e) => handleInput(e)}
        />
      </section>
      <section className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center align-middle gap-x-6">
        <Label htmlFor="company" className={cn("min-w-32 my-auto")}>
          Company :
        </Label>
        <Input
          name="company"
          id="company"
          type="text"
          maxLength={48}
          placeholder="e.g. Google"
          value={resume.jobs[index].company ?? ""}
          onChange={(e) => handleInput(e)}
        />
      </section>
      <section
        id="job-date"
        className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-around align-middle gap-x-6"
      >
        <section id="job-start-date-section" className="flex gap-x-2">
          <Label htmlFor="job-start-year" className={cn("min-w-32 my-auto")}>
            Start Date :
          </Label>
          <Input
            placeholder="2018"
            type="number"
            id="job-start-year"
            name="job-start-year"
            step={1}
            value={resume.jobs[index].startYear ?? ""}
            onChange={(e) => handleInput(e)}
          />
          <Input
            type="text"
            id="job-start-month"
            name="job-start-month"
            placeholder="September"
            value={resume.jobs[index].startMonth ?? ""}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section id="job-end-date-section" className="flex gap-x-2">
          <Label htmlFor="job-end-year" className={cn("min-w-32 my-auto")}>
            Start Date :
          </Label>
          <Input
            placeholder="2022"
            type="number"
            id="job-end-year"
            name="job-end-year"
            step={1}
            value={resume.jobs[index].endYear ?? ""}
            onChange={(e) => handleInput(e)}
          />
          <Input
            type="text"
            id="job-end-month"
            name="job-end-month"
            placeholder="June"
            onChange={(e) => handleInput(e)}
            value={resume.jobs[index].endMonth ?? ""}
          />
        </section>
      </section>
    </motion.div>
  )
}

export default Job
