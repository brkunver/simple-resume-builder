import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Features from "@/components/Features"
import image1 from "@/assets/img.svg"
type Props = {}

function Index({}: Props) {
  return (
    <motion.main
      className="flex flex-col justify-center px-4 lg:px-0 mx-auto align-middle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col lg:flex-row justify-center mx-auto align-middle mt-10">
        <div id="first-section " className="card">
          <h2 className="text-2xl font-bold text-center">Create Beautiful Resumes</h2>
          <p className="text-lg font-semibold text-gray-800">
            Create your professional resume in minutes! Our free platform allows you to easily input your information
            and download your CV as a{" "}
            <span className="bg-gradient-to-r font-bold from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">
              PDF
            </span>
          </p>
          <Link
            to="/create/1"
            className="mx-auto rounded text-2xl font-bold bg-indigo-600 hover:bg-indigo-800 border-transparent border-2 hover:border-slate-700 py-4 px-6 text-blue-100"
          >
            Start Creating =&gt;
          </Link>
        </div>
        <img src={image1} alt="cv image" className="lg:w-[640px]" />
      </section>

      <Features></Features>
    </motion.main>
  )
}

export default Index
