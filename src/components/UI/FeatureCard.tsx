type Props = {
  title: string
  content: string
}

function FeatureCard({ title, content }: Props) {
  return (
    <div className="flex flex-col bg-gradient-to-b rounded-lg from-gray-700 to-blue-800 max-w-[300px] px-4 pt-4 pb-4 text-gray-100 mx-auto">
      <h3 className="text-lg font-bold text-center">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default FeatureCard
