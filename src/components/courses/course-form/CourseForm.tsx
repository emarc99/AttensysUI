import React from "react"
import { courseQuestions } from "@/constants/data"

const CourseForm = (props: any) => {
  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <div className="mx-10 md:mx-auto w-auto md:w-5/12 pt-16">
      <div>
        <h1 className="mb-12 font-bold text-2xl">
          What is the primary goal of your course?
        </h1>
      </div>
      <form action="create-a-course">
        <div className=" bg-white px-12 py-16 rounded">
          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label className="block my-5 ml-3">
              Helping people build skills for their job
            </label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label className="block my-5 ml-3">
              Giving a certificate for completing the course
            </label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label className="block my-5 ml-3">
              Sharing knowledge about a hobby or interest
            </label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              min="2"
              max="5"
              className="required:border-red-500 indeterminate:bg-gray-300"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label className="block my-5 ml-3">
              Teaching new ideas or concepts in a field
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            onSubmit={handleNext}
            className="rounded bg-[#4A90E2] px-40 md:px-60 py-3 mt-12 mb-44 text-white"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default CourseForm
