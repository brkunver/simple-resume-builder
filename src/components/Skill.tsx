import { Label } from "./UI/label"
import { Switch } from "./UI/switch"
import { Input } from "./UI/input"
import resumeStore from "@/store"
import { motion } from "framer-motion"

type Props = {
  index: number
  showline?: boolean
}

function Skill({ index, showline = true }: Props) {
  const { resume, setResume } = resumeStore()

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    let resumeCopy = { ...resume }
    const input = e.target.value
    resumeCopy.skills[index] = { ...resumeCopy.skills[index], name: input }
    setResume(resumeCopy)
  }

  function handleSwitchChange(checked: boolean) {
    let resumeCopy = { ...resume }
    resumeCopy.skills[index].isShow = checked
    setResume(resumeCopy)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-y-4"
    >
      {showline && <div className="w-full h-[1px] bg-indigo-400 rounded-lg my-8"></div>}

      <section
        id="skills-section"
        className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center align-middle gap-x-6 "
      >
        <section className="flex place-content-center">
          <Label htmlFor="addCV" className="min-w-20 my-auto">
            Add to CV
          </Label>
          <Switch
            className="my-auto"
            id="addCV"
            name="addCV"
            checked={resume.skills[index].isShow}
            onCheckedChange={handleSwitchChange}
          />
        </section>

        <Label htmlFor="skill" className={"min-w-32 my-auto"}>
          Skill name
        </Label>
        <Input
          type="text"
          name="skill"
          id="skill"
          title="skill"
          maxLength={24}
          className={"bg-gray-50"}
          placeholder="e.g. Javascript"
          value={resume.skills[index].name ?? ""}
          onChange={(e) => handleInput(e)}
        />
      </section>
    </motion.div>
  )
}

export default Skill
