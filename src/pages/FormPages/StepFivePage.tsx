import { Button } from "@/components/UI/button"
import { Link } from "react-router-dom"
import StepCard from "@/layouts/StepCard"
import { useState } from "react"

import Skill from "@/components/Skill"

function StepFivePage() {
  const [skillCount, setSkillCount] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  })

  function addNewSkillHandler() {
    if (skillCount.second == false) {
      setSkillCount((state) => ({ ...state, second: true }))
    } else if (skillCount.second == true && skillCount.third == false) {
      setSkillCount((state) => ({ ...state, third: true }))
    } else if (skillCount.third == true && skillCount.fourth == false) {
      setSkillCount((state) => ({ ...state, fourth: true }))
    } else if (skillCount.fourth == true && skillCount.fifth == false) {
      setSkillCount((state) => ({ ...state, fifth: true }))
    } else {
      return
    }
  }

  return (
    <StepCard>
      <h1 className="text-2xl font-bold">Step 5 - Skills</h1>
      <p className="text-center mx-auto text-lg mb-4">Add your skills up to maximum of five</p>
      {skillCount.first && <Skill index={0} showline={false} />}
      {skillCount.second && <Skill index={1} />}
      {skillCount.third && <Skill index={2} />}
      {skillCount.fourth && <Skill index={3} />}
      {skillCount.fifth && <Skill index={4} />}

      {skillCount.fifth ? null : (
        <Button
          onClick={addNewSkillHandler}
          variant={"outline"}
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg  hover:bg-gradient-to-l hover:text-white"
        >
          Add New Skill
        </Button>
      )}
      <section id="buttons" className="flex justify-between px-4 mt-6">
        <Link to="/create/4">
          <Button>Previous Section</Button>
        </Link>
        <Link to="/pdf">
          <Button>Create PDF!</Button>
        </Link>
      </section>
    </StepCard>
  )
}

export default StepFivePage
