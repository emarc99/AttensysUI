import React, { useState } from "react"
import Previous from "./previous"
import { useRouter } from "next/navigation"

interface ChildComponentProps {
  section: any
  handleCoursePrimaryGoalChange: (e: string) => void
}

const CourseForm: React.FC<ChildComponentProps> = ({
  section,
  handleCoursePrimaryGoalChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()

  // Handle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    handleCoursePrimaryGoalChange(selectedOption)

    console.log("Selected Option:", selectedOption)

    // Check if an option is selected before navigating
    if (selectedOption) {
      router.push(`/Course/CreateACourse/create-a-course`)
    } else {
      alert("Please select an option before proceeding.")
    }
  }

  return (
    <div className="relative mx-10 md:mx-auto w-auto md:w-5/12 pt-16 ">
      <div className="hidden sm:block">
        <Previous />
      </div>
      <div>
        <h1 className="mb-12 font-semibold text-[26px] text-[#333333] text-center">
          What is the primary goal of your course?
        </h1>
      </div>
      <form  onSubmit={handleNext}>
        <div className=" bg-white px-12 py-16 rounded-2xl flex flex-col justify-center w-[524px] mx-auto">
          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
              id="option1"
              name="option"
              value="Helping people build skills for their job"
              checked={
                selectedOption === "Helping people build skills for their job"
              }
              onChange={handleChange}
            />
            <label
              htmlFor="option1"
              className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]"
            >
              Helping people build skills for their job
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
              value="Giving a certificate for completing the course"
              checked={
                selectedOption ===
                "Giving a certificate for completing the course"
              }
              onChange={handleChange}
            />
            <label
              htmlFor="option2"
              className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]"
            >
              Giving a certificate for completing the course
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
              value="Sharing knowledge about a hobby or interest"
              checked={
                selectedOption === "Sharing knowledge about a hobby or interest"
              }
              onChange={handleChange}
            />
            <label
              htmlFor="option3"
              className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]"
            >
              Sharing knowledge about a hobby or interest
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
              value="Teaching new ideas or concepts in a field"
              checked={
                selectedOption === "Teaching new ideas or concepts in a field"
              }
              onChange={handleChange}
            />
            <label
              htmlFor="option4"
              className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]"
            >
              Teaching new ideas or concepts in a field
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            className="bg-[#4A90E2] w-[350px] rounded-xl  py-3 mt-12 mb-44 text-white"
            type="submit"
          >
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

export default CourseForm
