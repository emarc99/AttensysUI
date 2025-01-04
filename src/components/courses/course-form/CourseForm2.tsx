import React from "react"
import Previous from "./previous"

const CourseForm2 = () => {
  return (
    <div className="relative mx-10 md:mx-auto w-auto md:w-5/12 pt-16">
       <div className="hidden sm:block">
        <Previous />
      </div>
      <div>
        <h1 className="mb-12 font-bold text-2xl">
          Who is your course for, and what should they know before starting?
        </h1>
      </div>
      <form action="create-a-course-2">
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
              Beginners with no experience
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
              People with some basic knowledge
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
              Intermediate learners looking to grow
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
              Advanced learners or professionals
            </label>
          </div>
        </div>

        <div className="text-center">
          <button className="rounded bg-[#4A90E2] px-40 md:px-60 py-3 mt-12 mb-44 text-white">
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
