import FeatureCard from "./UI/FeatureCard"

function Features() {
  const featuresTexts = [
    {
      title: "Create Your CV for Free",
      content:
        "Create your professional resume for free with our easy-to-use CV builder. Craft your perfect CV with our intuitive platform, no cost required.",
    },
    {
      title: "Preview Your CV",
      content:
        "Preview your resume before downloading. Take a glimpse at your professionally crafted CV to ensure it meets your expectations.",
    },
    {
      title: "Download as PDF",
      content:
        "Download your resume as a PDF file. Easily save and share your professionally designed CV in PDF format.",
    },
  ]

  return (
    <section className="flex flex-col gap-y-4 lg:flex-row mx-auto px-12 mt-12 mb-4 max-w-[1300px] w-full lg:justify-evenly">
      {featuresTexts.map((item) => {
        return <FeatureCard key={item.title} title={item.title} content={item.content}></FeatureCard>
      })}
    </section>
  )
}

export default Features
