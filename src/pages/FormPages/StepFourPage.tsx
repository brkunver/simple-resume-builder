import { Button } from "@/components/UI/button"
import { Link } from "react-router-dom"
import StepCard from "@/layouts/StepCard"
import Language from "@/components/Language"
import { useState } from "react"

type Props = {}

function StepFourPage({}: Props) {
  const [languageCount, setLanguageCount] = useState({ first: true, second: false, third: false })

  function addNewLanguageHandler() {
    if (languageCount.second == false) {
      setLanguageCount((state) => ({ ...state, second: true }))
    } else if (languageCount.second == true && languageCount.third == false) {
      setLanguageCount((state) => ({ ...state, third: true }))
    } else {
      return
    }
  }

  return (
    <StepCard>
      <h1 className="text-2xl font-bold">Step 4 - Languages</h1>

      {languageCount.first && <Language index={0} showline={false} />}
      {languageCount.second && <Language index={1} />}
      {languageCount.third && <Language index={2} />}

      {languageCount.third ? null : (
        <Button
          onClick={addNewLanguageHandler}
          variant={"outline"}
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg  hover:bg-gradient-to-l hover:text-white"
        >
          Add New Language
        </Button>
      )}

      <section id="buttons" className="flex justify-between px-4 mt-6">
        <Link to="/create/3">
          <Button>Previous Section</Button>
        </Link>
        <Link to="/create/5">
          <Button>Next Section</Button>
        </Link>
      </section>
    </StepCard>
  )
}

export default StepFourPage
