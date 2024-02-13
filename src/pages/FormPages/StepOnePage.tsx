import React, { useState } from "react"
import uploadLogo from "@/assets/uploadLogo.png"
import resumeStore from "@/store"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"

import { Label } from "@/components/UI/label"
import { Input } from "@/components/UI/input"
import { Button } from "@/components/UI/button"
import { Textarea } from "@/components/UI/textarea"

import StepCard from "@/layouts/StepCard"

type Props = {}

function StepOnePage({}: Props) {
  const { resume, setResume } = resumeStore()
  const [isPhotoSelected, setIsPhotoSelected] = useState(resume.photoSrc ? true : false)
  const [imageSrc, setImageSrc] = useState<string>(resume.photoSrc ?? uploadLogo)
  let navigate = useNavigate()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setIsPhotoSelected(true)
      const reader = new FileReader()
      reader.onloadend = () => {
        let resumeCopy = { ...resume }
        resumeCopy.photoSrc = reader.result as string
        setResume(resumeCopy)
        setImageSrc(resumeCopy.photoSrc)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let resumeCopy = { ...resume }
    let value = e.target.value
    switch (e.target.name) {
      case "first-name":
        resumeCopy.firstName = value
        break
      case "last-name":
        resumeCopy.lastName = value
        break
      case "email":
        resumeCopy.email = value
        break
      case "tel":
        resumeCopy.tel = value
        break
      default:
        break
    }

    setResume(resumeCopy)
  }

  return (
    <StepCard>
      <h1 className="text-2xl font-bold">Step 1 - Personal Information</h1>
      <section id="photo-section" className="flex justify-center align-middle gap-x-6">
        <p className="my-auto inline text-lg font-bold">Upload Your Photo : </p>
        <div>
          <Label htmlFor="fileInput" className="cursor-pointer w-fit">
            <img
              src={imageSrc}
              alt="Custom Logo"
              className={cn(`w-16 h-16 object-cover ${isPhotoSelected ? "rounded-full" : ""}`)}
            />
          </Label>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            accept="image/*"
            onChange={(e) => {
              handleImageChange(e)
            }}
            style={{ display: "none" }}
          />
        </div>
      </section>
      <section id="about-section" className="flex flex-col content-center">
        <h2 className="text-lg font-semibold text-center mb-4">Tell about yourself</h2>
        <Textarea
          name="about"
          id="about"
          maxLength={200}
          placeholder="About me..."
          className="bg-gray-50 max-w-[600px] mx-auto"
        ></Textarea>
      </section>
      <section
        id="name-section"
        className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center align-middle gap-x-6"
      >
        <Label htmlFor="first-name" className={cn("min-w-32 my-auto")}>
          First Name :
        </Label>
        <Input
          type="text"
          name="first-name"
          id="first-name"
          maxLength={50}
          value={resume.firstName ?? ""}
          onChange={(e) => handleInputChange(e)}
          className={cn("bg-gray-50")}
          placeholder="Required"
        />
        <Label htmlFor="last-name" className={cn("min-w-32 my-auto")}>
          Last Name :
        </Label>
        <Input
          type="text"
          name="last-name"
          id="last-name"
          maxLength={50}
          value={resume.lastName ?? ""}
          onChange={(e) => handleInputChange(e)}
          className={cn("bg-gray-50")}
          placeholder="Required"
        />
      </section>
      <section
        id="email-phone"
        className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 justify-center align-middle gap-x-6"
      >
        <Label htmlFor="email" className={cn("min-w-32 my-auto")}>
          Email :
        </Label>
        <Input
          type="email"
          maxLength={50}
          name="email"
          id="email"
          value={resume.email ?? ""}
          onChange={(e) => handleInputChange(e)}
          className={cn("bg-gray-50")}
          placeholder="Required"
        />
        <Label htmlFor="tel" className={cn("min-w-32 my-auto")}>
          Phone Number :
        </Label>
        <Input
          type="tel"
          maxLength={20}
          name="tel"
          id="tel"
          value={resume.tel ?? ""}
          onChange={(e) => handleInputChange(e)}
          className={cn("bg-gray-50")}
        />
      </section>

      <section id="buttons" className="flex justify-between px-4 mt-6">
        <Button onClick={() => navigate("/")}>Return Home</Button>
        <Button onClick={() => navigate("/create/2")}>Next Section</Button>
      </section>
    </StepCard>
  )
}

export default StepOnePage
