import { Text, View } from "@react-pdf/renderer"
import Line from "./Line"
import { TResume } from "@/lib/types"

function LanguageSection({ resume }: { resume: TResume }) {
  return (
    <>
      <Text style={{ fontSize: 16, textAlign: "center", marginTop: 20 }}>Languages</Text>
      <Line />
      <View style={{ marginTop: 8, textAlign: "center" }}>
        {resume.languages.map((language, index) => {
          if (language.isShow) {
            return (
              <View key={index} style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 12, color: "#ccc" }}>{language.level}</Text>
                <Text style={{ fontSize: 10, color: "white" }}>{language.language}</Text>
              </View>
            )
          }
        })}
      </View>
    </>
  )
}

export default LanguageSection
