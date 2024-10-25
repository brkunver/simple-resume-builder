import { Page, View, Document, Font } from "@react-pdf/renderer"
import type { TResume } from "@/lib/types"
import ProfileImage from "./Components/ProfileImage"
import ContactSection from "./Components/ContactSection"
import EducationSection from "./Components/EducationSection"
import SkillsSection from "./Components/SkillsSection"
import LanguageSection from "./Components/LanguageSection"
import BioSection from "./Components/BioSection"
import ExperienceSection from "./Components/ExperienceSection"

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
          <ProfileImage resume={resume} />
          <ContactSection resume={resume} />
          <EducationSection resume={resume} />
          <SkillsSection resume={resume} />
          <LanguageSection resume={resume} />
        </View>

        <View
          id="right-section"
          style={{
            flexDirection: "column",
            flex: 3,
            backgroundColor: "white",
            color: "#2c3e50",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <BioSection resume={resume} />
          <ExperienceSection resume={resume} />
        </View>
      </Page>
    </Document>
  )
}

export default Pdf1
