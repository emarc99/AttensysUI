import React, { useState } from "react"
import Previous from "./previous"
import { useRouter } from "next/navigation"


interface ChildComponentProps {
  section: any
  handleCourseTargetAudienceChange: (e: string) => void
}

const CourseForm2: React.FC<ChildComponentProps> = ({
  section,
  handleCourseTargetAudienceChange,
}) => {
    const [selectedOption, setSelectedOption] = useState<string>("")
    const router = useRouter()
  
    // Handle change event
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value)
    }
  
    const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  
      handleCourseTargetAudienceChange(selectedOption)
  
      console.log("Selected Option:", selectedOption)
  
      // Check if an option is selected before navigating
      if (selectedOption) {
        router.push(`/Course/CreateACourse/create-a-course-2`)
      } else {
        alert("Please select an option before proceeding.")
      }
    }
  

  return (
    <div className="relative mx-10 md:mx-auto w-auto md:w-5/12 pt-16">
       <div className="hidden sm:block">
        <Previous />
      </div>
      <div>
        <h1 className="mb-12 font-semibold text-[26px] text-[#333333] text-center">
          Who is your course for, and what should they know before starting?
        </h1>
      </div>
      <form onSubmit={handleNext}>
        <div className=" bg-white px-12 py-16 rounded-2xl flex flex-col justify-center w-[524px] mx-auto">
          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"

              id="option1"
              name="option"
              value="Beginners with no experience"
              checked={
                selectedOption === "Beginners with no experience"
              }
              onChange={handleChange}
            />
            <label htmlFor="option1" className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              Beginners with no experience
            </label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
            
              id="option2"
              name="option"
              value="People with some basic knowledge"
              checked={
                selectedOption === "People with some basic knowledge"
              }
              onChange={handleChange}
            />
            <label htmlFor="option2" className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              People with some basic knowledge
            </label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
              id="option3"
              name="option"
              value="Intermediate learners looking to grow"
              checked={
                selectedOption === "Intermediate learners looking to grow"
              }
              onChange={handleChange}
            />
            <label htmlFor="option3" className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              Intermediate learners looking to grow
            </label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
              id="option4"
              name="option"
              value="Advanced learners or professionals"
              checked={
                selectedOption === "Advanced learners or professionals"
              }
              onChange={handleChange}
            />
            <label htmlFor="option4" className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              Advanced learners or professionals
            </label>
          </div>
        </div>

        <div className="text-center">
          <button className=" w-[350px] rounded-xl  bg-[#4A90E2] py-3 mt-12 mb-44 text-white">
            Next
          </button>
        </div>
      </form>

      <div className="block absolute left-[35%] bottom-36 sm:hidden">
        <Previous />
      </div>
    </div>
  )
}

export default CourseForm2
