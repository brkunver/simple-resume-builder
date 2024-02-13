import StepCard from "@/layouts/StepCard"
import { Button } from "@/components/UI/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import Job from "@/components/Job"
import resumeStore from "@/store"

function StepThreePage() {
  const [jobCount, setJobCount] = useState({ first: true, second: false, third: false })

  let resume = resumeStore(state => state.resume)
  console.log(resume)
  function addNewJobHandler() {
    if (jobCount.second == false) {
      setJobCount((state) => ({ ...state, second: true }))
    } else if (jobCount.second == true && jobCount.third == false) {
      setJobCount((state) => ({ ...state, third: true }))
    } else {
      return
    }
  }

  return (
    <StepCard>
      <h1 className="text-2xl font-bold">Step 3 - Job Information</h1>
      {jobCount.first && <Job index={0} showline={false} />}
      {jobCount.second && <Job index={1} />}
      {jobCount.third && <Job index={2} />}

      {jobCount.third ? null : (
        <Button
          onClick={addNewJobHandler}
          variant={"outline"}
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg  hover:bg-gradient-to-l hover:text-white"
        >
          Add New Job
        </Button>
      )}

      <section id="buttons" className="flex justify-between px-4 mt-6">
        <Link to="/create/2">
          <Button>Previous Section </Button>
        </Link>
        <Link to="/create/4">
          <Button>Next Section </Button>
        </Link>
      </section>
    </StepCard>
  )
}

export default StepThreePage
