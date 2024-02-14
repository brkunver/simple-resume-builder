import { PDFViewer } from "@react-pdf/renderer"
import Pdf1 from "@/components/Pdf1"

type Props = {}

function PdfResult({}: Props) {
  return (
    <div>
      <h1>Your Resume</h1>
      <PDFViewer>
        <Pdf1 />
      </PDFViewer>
    </div>
  )
}

export default PdfResult
