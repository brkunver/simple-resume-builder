import { View } from "@react-pdf/renderer"

interface Props {
  width?: number
  height?: number
}

function Line(props: Props) {
  return (
    <View
      style={{
        width: props.width ?? 80,
        height: props.height ?? 2,
        backgroundColor: "#dfe6e9",
        borderRadius: 1,
        marginHorizontal: "auto",
        marginVertical: 4,
      }}
    />
  )
}

export default Line
