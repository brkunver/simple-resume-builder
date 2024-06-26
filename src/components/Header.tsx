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
      <ul id="menu" className="hidden lg:flex gap-x-6 my-auto text-white ">
        <li>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-2" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-2" to="/about">
            About
          </Link>
        </li>
      </ul>
    </motion.header>
  )
}

export default Header
