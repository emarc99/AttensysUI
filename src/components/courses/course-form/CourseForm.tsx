import React from "react"
import Previous from "./previous"

const CourseForm = (props: any) => {
  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
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
      <form action="create-a-course">
        <div className=" bg-white px-12 py-16 rounded-2xl flex flex-col justify-center w-[524px] mx-auto">
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
            <label className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]">
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
            <label className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]">
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
            <label className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]">
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
            <label className="block my-5 ml-3 text-[#333333] text-[18px] font-medium leading-[22px]">
              Teaching new ideas or concepts in a field
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            onSubmit={handleNext}
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
