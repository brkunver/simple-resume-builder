import type { TResume } from "@/lib/types"
import { Text, View } from "@react-pdf/renderer"

function BioSection({ resume }: { resume: TResume }) {
  return (
    <View style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
      <View id="name" style={{ flexDirection: "row", gap: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{resume.firstName}</Text>
        <Text style={{ fontSize: 22, fontWeight: "light" }}>{resume.lastName}</Text>
      </View>
      <Text style={{ fontSize: 16, color: "#666" }}>{resume.title}</Text>
      <Text style={{ fontSize: 12, color: "#444", marginTop : 10 }}>{resume.about}</Text>
    </View>
  )
}

export default BioSection
