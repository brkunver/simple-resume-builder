import type { TResume } from "@/lib/types"
import { Image } from "@react-pdf/renderer"
import logo from "@/assets/user.png"

interface Props {
  resume: TResume
}

function ProfileImage({ resume }: Props) {
  return (
    <Image
      src={(resume.photoSrc as unknown as Buffer) ?? logo}
      style={{
        width: 80,
        height: 80,
        borderRadius: "100%",
        objectFit: "cover",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></Image>
  )
}

export default ProfileImage
