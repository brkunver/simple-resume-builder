import { ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
}
function StepCard({ children }: Props) {
  return (
    <motion.main
      className="flex flex-col gap-y-4 max-w-[1000px] mx-4 lg:mx-auto font-semibold rounded bg-gradient-to-b from-blue-100 to-gray-100 mt-40 mb-20 p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  )
}

export default StepCard
