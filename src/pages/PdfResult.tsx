import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import Pdf1 from "@/components/Pdf1"
import resumeStore from "@/store"
import { Link } from "react-router-dom"

function PdfResult() {
  let resume = resumeStore((state) => state.resume)
  console.log("Current Resume : ", resume)
  const tempResume: typeof resume = {
    skills: [
      { isShow: true, name: "Javascript" },
      { isShow: true, name: "Javascript" },
      { isShow: true, name: "Javascript" },
      { isShow: true, name: "Javascript" },
      { isShow: true, name: "Javascript" },
    ],
    title: "Computer Engineer",
    firstName: "BurakBurak",
    lastName: "UnverUnver",
    email: "burakhanunver@gmail.com",
    tel: "9555 555 55 55",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione, eligendi consequuntur sequi quas consectetur ipsam? Dolor vitae odio ad.",
    educations: [
      {
        isShow: true,
        city: "London",
        degree: "Bachelor's Degree",
        endMonth: "June",
        endYear: "2025",
        schoolName: "New york state university",
        startMonth: "July",
        startYear: "2021",
      },
      {
        isShow: true,
        city: "London",
        degree: "Bachelor's Degree",
        endMonth: "June",
        endYear: "2025",
        schoolName: "New york state university",
        startMonth: "July",
        startYear: "2021",
      },
      {
        isShow: true,
        city: "London",
        degree: "Bachelor's Degree",
        endMonth: "June",
        endYear: "2025",
        schoolName: "New york state university",
        startMonth: "July",
        startYear: "2021",
      },
    ],
    jobs: [
      {
        isShow: true,
        city: "New york",
        company: "Acme company",
        endMonth: "December",
        endYear: "2026",
        startMonth: "January",
        startYear: "2026",
        title: "Backend Web Developer",
      },
      {
        isShow: true,
        city: "New york",
        company: "Acme company",
        endMonth: "December",
        endYear: "2026",
        startMonth: "January",
        startYear: "2026",
        title: "Backend Web Developer",
      },
      {
        isShow: true,
        city: "New york",
        company: "Acme company",
        endMonth: "December",
        endYear: "2026",
        startMonth: "January",
        startYear: "2026",
        title: "Backend Web Developer",
      },
    ],
    languages: [
      { isShow: true, language: "English", level: "A1" },
      { isShow: true, language: "English", level: "A1" },
      { isShow: true, language: "English", level: "A1" },
    ],
  }

  return (
    <div className="flex flex-col justify-center gap-y-8 my-12">
      <h1 className="text-center font-bold text-4xl">Your Resume</h1>
      <Link
        to="/create/5"
        className="text-center bg-blue-600 hover:bg-blue-800 text-gray-50 text-lg font-semibold rounded max-w-[300px] mx-auto px-4 py-2"
      >
        {"<= Go to last section"}
      </Link>
      <div className="max-w-[300px] py-2 px-4 mx-auto grid place-content-center font-bold text-lg bg-indigo-600 hover:bg-indigo-800 text-gray-50 rounded">
        <PDFDownloadLink style={{ textAlign: "center" }} document={<Pdf1 resume={tempResume} />} fileName="resume.pdf">
          {({ loading, error }) => (error ? "Error, try again later" : loading ? "Creating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
      <p className="text-center italic px-2 lg:hidden">
        Unfortunately you can not preview your pdf in small screens
        <span className="underline, font-semibold"> but you can still download it</span>
      </p>
      <PDFViewer showToolbar={false} className="hidden lg:block w-[1000px] h-[800px] mx-auto ">
        <Pdf1 resume={tempResume}></Pdf1>
      </PDFViewer>
    </div>
  )
}

export default PdfResult
