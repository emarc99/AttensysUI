import React, { useState } from "react"
import Previous from "./previous"
import { useRouter } from "next/navigation"


interface ChildComponentProps {
  section: any
  handleCoursePlanChange: (e: string) => void
}

const CourseForm3: React.FC<ChildComponentProps> = ({
  section,
  handleCoursePlanChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("")
      const router = useRouter()
    
      // Handle change event
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value)
      }
    
      const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    
        handleCoursePlanChange(selectedOption)
    
        console.log("Selected Option:", selectedOption)
    
        // Check if an option is selected before navigating
        if (selectedOption) {
          router.push(`/Course/CreateACourse/CourseSetup`)
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
        <h1 className="mb-12 font-bold text-[26px] text-[#333333] text-center">
          Do you already have a plan for what your course will cover?
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
              value="Yes, I have a complete course plan"
              checked={
                selectedOption === "Yes, I have a complete course plan"
              }
              onChange={handleChange}
            />
            <label htmlFor="option1" className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              Yes, I have a complete course plan
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
              value="I have a rough plan, but it needs work"
              checked={
                selectedOption === "I have a rough plan, but it needs work"
              }
              onChange={handleChange}
            />
            <label className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              I have a rough plan, but it needs work
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
              value="I have some ideas but no clear plan yet"
              checked={
                selectedOption === "I have some ideas but no clear plan yet"
              }
              onChange={handleChange}
            />
            <label className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              I have some ideas but no clear plan yet
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
              value="I need help organizing the course"
              checked={
                selectedOption === "I need help organizing the course"
              }
              onChange={handleChange}
            />
            <label className="block my-5 ml-3  text-[#333333] text-[18px] font-medium leading-[22px]">
              I need help organizing the course
            </label>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] w-[350px] rounded-xl  py-3 text-xs md:text-base mt-12 mb-44 text-white">
            Setup my course
          </button>
        </div>
      </form>

      <div className="block absolute left-[35%] bottom-36 sm:hidden">
        <Previous />
      </div>
    </div>
  )
}

export default CourseForm3
