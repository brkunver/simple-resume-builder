import { motion } from "framer-motion"
import { Link } from "react-router-dom"
type Props = {}

export default function About({}: Props) {
  return (
    <motion.main
      className="flex flex-col mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Page</h2>
      <Link to={"/"}>Home</Link>
    </motion.main>
  )
}
