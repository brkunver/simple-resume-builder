import { View, Text } from "@react-pdf/renderer"
import Line from "./Line"
import { TResume } from "@/lib/types"

function SkillsSection({ resume }: { resume: TResume }) {
  return (
    <>
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
    </>
  )
}

export default SkillsSection
