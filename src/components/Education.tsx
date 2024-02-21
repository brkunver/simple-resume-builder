import { Label } from "./UI/label"
import { Switch } from "@/components/UI/switch"
import { Input } from "./UI/input"
import { cn } from "@/lib/utils"
import resumeStore from "@/store"
import { motion } from "framer-motion"

type Props = {
  index: number
  className?: string
  showline?: boolean
}

function Education({ index, className, showline = true }: Props) {
  const { resume, setResume } = resumeStore()

  console.log(resume.educations)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    let resumeCopy = { ...resume }
    const input = e.target.value
    switch (e.target.name) {
      case "degree":
        resumeCopy.educations[index] = { ...resumeCopy.educations[index], degree: input }
        break
      case "city":
        resumeCopy.educations[index] = { ...resumeCopy.educations[index], city: input }
        break
      case "school-name":
        resumeCopy.educations[index] = { ...resumeCopy.educations[index], schoolName: input }
        break
      case "start-year":
        resumeCopy.educations[index] = { ...resumeCopy.educations[index], startYear: input }
        break
      case "start-month":
        resumeCopy.educations[index] = { ...resumeCopy.educations[index], startMonth: input }
        break
      case "end-year":
        resumeCopy.educations[index] = { ...resumeCopy.educations[index], endYear: input }
        break
      case "end-month":
        resumeCopy.educations[index] = { ...resumeCopy.educations[index], endMonth: input }
        break
      default:
        break
    }

    setResume(resumeCopy)
  }

  function handleSwitchChange(checked: boolean) {
    let resumeCopy = { ...resume }
    resumeCopy.educations[index].isShow = checked
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
        id="degree-section"
        className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center align-middle gap-x-6 "
      >
        <section className="flex gap-y-0 place-content-center">
          <Label htmlFor="degree" className={cn("min-w-20 my-auto")}>
            Add to CV
          </Label>
          <Switch
            className="my-auto"
            name="addEducation"
            id="addEducation"
            checked={resume.educations[index].isShow}
            onCheckedChange={handleSwitchChange}
          />
        </section>

        <Label htmlFor="degree" className={cn("min-w-32 my-auto")}>
          Degree :
        </Label>
        <Input
          type="text"
          name="degree"
          id="degree"
          maxLength={24}
          className={cn("bg-gray-50")}
          placeholder="e.g. Bachelor of Science"
          value={resume.educations[index].degree ?? ""}
          onChange={(e) => handleInput(e)}
        />
        <Label htmlFor="city" className={cn("min-w-32 my-auto")}>
          City :
        </Label>
        <Input
          type="text"
          name="city"
          id="city"
          maxLength={24}
          className={cn("bg-gray-50")}
          placeholder="e.g. London"
          value={resume.educations[index].city ?? ""}
          onChange={(e) => handleInput(e)}
        />
      </section>
      <section className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center align-middle gap-x-6">
        <Label htmlFor="school-name" className={cn("min-w-32 my-auto")}>
          University :
        </Label>
        <Input
          name="school-name"
          id="school-name"
          type="text"
          maxLength={48}
          placeholder="e.g. Oxford University"
          value={resume.educations[index].schoolName ?? ""}
          onChange={(e) => handleInput(e)}
        />
      </section>
      <section id="date" className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-around align-middle gap-x-6">
        <section id="start-date-section" className="flex gap-x-2">
          <Label htmlFor="start-year" className={cn("min-w-32 my-auto")}>
            Start Date :
          </Label>
          <Input
            placeholder="2018"
            type="number"
            id="start-year"
            name="start-year"
            step={1}
            value={resume.educations[index].startYear ?? ""}
            onChange={(e) => handleInput(e)}
          />
          <Input
            type="text"
            id="start-month"
            name="start-month"
            placeholder="September"
            value={resume.educations[index].startMonth ?? ""}
            onChange={(e) => handleInput(e)}
          />
        </section>
        <section id="end-date-section" className="flex gap-x-2">
          <Label htmlFor="end-year" className={cn("min-w-32 my-auto")}>
            Start Date :
          </Label>
          <Input
            placeholder="2022"
            type="number"
            id="end-year"
            name="end-year"
            step={1}
            value={resume.educations[index].endYear ?? ""}
            onChange={(e) => handleInput(e)}
          />
          <Input
            type="text"
            id="end-month"
            name="end-month"
            placeholder="June"
            onChange={(e) => handleInput(e)}
            value={resume.educations[index].endMonth ?? ""}
          />
        </section>
      </section>
    </motion.div>
  )
}

export default Education
