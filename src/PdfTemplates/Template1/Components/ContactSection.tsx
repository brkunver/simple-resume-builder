import { Text } from "@react-pdf/renderer"
import Line from "./Line"
import { TResume } from "@/lib/types"

function ContactSection({ resume }: { resume: TResume }) {
  return (
    <>
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
    </>
  )
}

export default ContactSection
