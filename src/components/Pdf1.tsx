import { Page, Text, View, Document, Image } from "@react-pdf/renderer"
import logo from "@/assets/user.png"
import type { TResume } from "@/store"

type Props = {
  resume: TResume
}

const Pdf1 = ({ resume }: Props) => {
  console.log("Pdf1 => ", resume)
  return (
    <Document>
      <Page size="A4" style={{ flexDirection: "row", backgroundColor: "white", width: "full" }}>
        <View
          id="left section"
          style={{
            flexDirection: "column",
            backgroundColor: "#2c3e50",
            flex: 1,
            color: "#eeeeee",
            alignContent: "center",
            paddingTop: 6,
          }}
        >
          <Image
            src={(resume.photoSrc as unknown as Buffer) ?? logo}
            style={{
              width: 80,
              height: 80,
              borderRadius: "100%",
              objectFit: "cover",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></Image>
          <Text style={{ fontSize: 16, textAlign: "center", marginTop: 20 }}>Contact</Text>
          <View
            id="line1"
            style={{
              width: 80,
              height: 2,
              backgroundColor: "#dfe6e9",
              borderRadius: 1,
              marginHorizontal: "auto",
              marginVertical: 4,
            }}
          ></View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#ccc",
              marginTop: 8,
              marginBottom: 4,
            }}
          >
            Email
          </Text>
          <Text style={{ textAlign: "center", fontSize: 10, color: "white" }}>{resume.email}</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#ccc",
              marginBottom: 2,
              marginTop: 8,
            }}
          >
            Phone
          </Text>
          <Text style={{ textAlign: "center", fontSize: 10, color: "white" }}>{resume.tel}</Text>
          <Text style={{ fontSize: 16, textAlign: "center", marginTop: 20 }}>Education</Text>
          <View
            id="line1"
            style={{
              width: 80,
              height: 2,
              backgroundColor: "#dfe6e9",
              borderRadius: 1,
              marginHorizontal: "auto",
              marginVertical: 4,
            }}
          ></View>
        </View>

        <View
          id="right section"
          style={{ flexDirection: "column", flex: 3, backgroundColor: "white", color: "#2c3e50" }}
        ></View>
      </Page>
    </Document>
  )
}

// Create styles

export default Pdf1
