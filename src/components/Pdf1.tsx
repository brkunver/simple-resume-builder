import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"
import resumeStore from "@/store"

const Pdf1 = () => {
  const resume = resumeStore((state) => state.resume)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{resume.firstName}</Text>
        </View>
        <View style={styles.section}>
          <Text>{resume.lastName}</Text>
        </View>
      </Page>
    </Document>
  )
}

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    width: 600,
  },
  section: {
    width: 200,
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

export default Pdf1
