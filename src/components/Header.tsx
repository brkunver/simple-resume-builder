import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import siteLogo from "@/assets/site-logo.png"

type Props = {}

function Header({}: Props) {
  return (
    <motion.header className="flex justify-around align-middle text-center font-semibold text-lg w-full h-16 bg-gradient-to-r from-sky-300 to-indigo-600">
      <Link to="/" id="logo" className="my-auto flex align-middle font-bold gap-x-2">
        <img src={siteLogo} alt="logo" className="h-12"></img>
        <h2 className="my-auto text-xl">Resume Builder</h2>
      </Link>
      <ul id="menu" className="hidden lg:flex gap-x-6 my-auto text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/errrr">Error!</Link>
        </li>
      </ul>
    </motion.header>
  )
}

export default Header
