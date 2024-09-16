import { Text, View } from "@react-pdf/renderer"
import Line from "./Line"
import type { TResume } from "@/lib/types"

function EducationSection({ resume }: { resume: TResume }) {
  return (
    <>
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
    </>
  )
}

export default EducationSection
