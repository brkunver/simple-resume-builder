import { Page, Text, View, Document, Image, Font } from "@react-pdf/renderer"
import Line from "./Components/Line"
import logo from "@/assets/user.png"
import type { TResume } from "@/lib/types"

type Props = {
  resume: TResume
}

Font.register({
  family: "Roboto",
  src: "./fonts/Roboto-regular.ttf",
})

const Pdf1 = ({ resume }: Props) => {
  return (
    <Document>
      <Page size="A4" style={{ flexDirection: "row", backgroundColor: "white", width: "full" }}>
        <View
          id="left-section"
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
          <Text style={{ fontSize: 16, textAlign: "center", marginTop: 20, fontFamily: "Roboto" }}>Contact</Text>
          <Line />
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#ccc",
              marginTop: 8,
              marginBottom: 4,
              fontFamily: "Roboto",
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
          <Line />
          <View style={{ marginTop: 8, textAlign: "center" }}>
            {resume.educations.map((education, index) => {
              return (
                <View key={index} style={{ marginBottom: 8 }}>
                  <Text style={{ fontSize: 12, color: "#ccc" }}>
                    {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}
                  </Text>
                  <Text style={{ fontSize: 10, color: "white" }}>{education.schoolName}</Text>
                  <Text style={{ fontSize: 10, color: "white" }}>{education.city}</Text>
                  <Text style={{ fontSize: 10, color: "white" }}>{education.degree}</Text>
                </View>
              )
            })}
          </View>
          <Text style={{ fontSize: 16, textAlign: "center", marginTop: 20 }}>Skills</Text>
          <Line />
          <View style={{ marginTop: 8, textAlign: "center" }}>
            {resume.skills.map((skill, index) => {
              if (skill.isShow) {
                return (
                  <Text key={index} style={{ fontSize: 12, color: "white", marginBottom: 8 }}>
                    {skill.name}
                  </Text>
                )
              }
              return null
            })}
          </View>
        </View>

        <View
          id="right-section"
          style={{ flexDirection: "column", flex: 3, backgroundColor: "white", color: "#2c3e50" }}
        ></View>
      </Page>
    </Document>
  )
}

export default Pdf1
