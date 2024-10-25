import { View, Text } from "@react-pdf/renderer"

import type { TResume } from "@/lib/types"

export default function ExperienceSection({ resume }: { resume: TResume }) {
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text>Experience</Text>
      <View id="line" style={{ marginTop: 8, height: 2, width: "100%", backgroundColor: "#222" }} />
      {resume.jobs.map((experience, index) => (
        <View key={index} style={{ marginTop: 12 }}>
          <Text style={{ fontSize: 14, color: "#666" }}>
            {experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}
          </Text>
          <View style={{ flexDirection: "row", gap: 4, marginTop: 2 }}>
            <Text style={{ fontSize: 10, color: "#111" }}>{experience.company}</Text>
            <Text style={{ fontSize: 10, color: "#222" }}>-</Text>
            <Text style={{ fontSize: 10, color: "#111" }}>{experience.city}</Text>
            <Text style={{ fontSize: 10, color: "#222" }}>-</Text>
            <Text style={{ fontSize: 10, color: "#111" }}>{experience.title}</Text>
          </View>
          <Text style={{ fontSize: 10, color: "#444", marginTop: 8 }}>{experience.description}</Text>
        </View>
      ))}
    </View>
  )
}
