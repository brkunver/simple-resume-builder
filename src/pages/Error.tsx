import StepCard from "@/layouts/StepCard"
import Header from "@/components/Header"
import { Button } from "@/components/UI/button"
import { Link } from "react-router-dom"

function Error() {
  return (
    <>
      <Header />
      <StepCard className="min-h-[500px] justify-center">
        <h1 className="text-5xl font-bold">Page Not Found</h1>

        <Link className="max-w-[500px] mx-auto" to="/">
          <Button>Go Home</Button>
        </Link>
      </StepCard>
    </>
  )
}

export default Error
