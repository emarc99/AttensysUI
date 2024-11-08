import React from "react"

const CourseForm3 = () => {
  return (
    <div className="mx-auto  w-5/12">
      <div>
        <h1 className="mb-12 font-bold text-2xl">
        Do you already have a plan for what your 
        course will cover?
        </h1>
      </div>
      <form action="CourseSetup">
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
            Yes, I have a complete course plan
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
            I have a rough plan, but it needs work
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
            I have some ideas but no clear plan yet
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
            I need help organizing the course
            </label>
          </div>
        </div>

        <div className="text-center">
          <button className="rounded bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] px-48 py-3 mt-12 mb-44 text-white">
           Setup my course
          </button>
        </div>
      </form>
    </div>
  )
}

export default CourseForm3
