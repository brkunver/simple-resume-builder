import { Page, Text, View, Document, Image } from "@react-pdf/renderer"
import logo from "@/assets/user.png"
import type { TResume } from "@/store"
type Props = {
  resume: TResume
}

const Pdf1 = ({ resume }: Props) => {
  return (
    <Document>
      <Page size="A4" style={{ flexDirection: "column", backgroundColor: "white", width: "full" }}>
        <View id="Top Section" style={{ flexDirection: "row" }}>
          <Image
            src={(resume.photoSrc as unknown as Buffer) ?? logo}
            style={{ width: 64, height: 64, borderRadius: "100%", objectFit: "cover" }}
          ></Image>
          <Text>{resume.firstName || "<Your-Name>"}</Text>
        </View>
      </Page>
    </Document>
  )
}

// Create styles

export default Pdf1
