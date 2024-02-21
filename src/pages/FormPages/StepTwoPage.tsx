import { Button } from "@/components/UI/button"
import { Link } from "react-router-dom"
import StepCard from "@/layouts/StepCard"
import Education from "@/components/Education"
import { useState } from "react"

function StepTwoPage() {
  const [educationCount, setEducationCount] = useState({ first: true, second: false, third: false })


  function addNewEducationHandler() {
    if (educationCount.second == false) {
      setEducationCount((state) => ({ ...state, second: true }))
    } else if (educationCount.second == true && educationCount.third == false) {
      setEducationCount((state) => ({ ...state, third: true }))
    } else {
      return
    }
  }

  return (
    <StepCard>
      <h1 className="text-2xl font-bold">Step 2 - Education</h1>
      {educationCount.first && <Education index={0} showline={false} />}
      {educationCount.second && <Education index={1} />}
      {educationCount.third && <Education index={2} />}

      {educationCount.third ? null : (
        <Button
          onClick={addNewEducationHandler}
          variant={"outline"}
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg  hover:bg-gradient-to-l hover:text-white"
        >
          Add New Education
        </Button>
      )}

      <section id="buttons" className="flex justify-between px-4 mt-6">
        <Link to="/create/1">
          <Button>Previous Section</Button>
        </Link>

        <Link to="/create/3">
          <Button>Next Section </Button>
        </Link>
      </section>
    </StepCard>
  )
}

export default StepTwoPage
