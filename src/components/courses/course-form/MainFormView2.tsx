import React from "react"
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"
import Dropdown from "../Dropdown"

const MainFormView2 = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]">
        <p className="text-sm text-white text-center py-2">
          Your course creation progress saves automatically, but feel free to
          also save your progress manually
        </p>
      </div>

      <div className="min-w-full w-[100%] ">
        <div className="flex justify-between py-2 my-5 border-t border-b border-[#d1d1d1] px-5 items-center">
          <div className="flex items-center">
            <div className="px-8 border-r border-blue-100">
              <IoMdArrowBack />
            </div>
            <p className="text-[#4A90E2] text-xl font-bold">
              Learning Outcomes
            </p>
          </div>

          <button className="bg-[#C5D322] px-7 py-3 rounded text-white">
            Save progress
          </button>
          {/* background: #C5D322; */}
        </div>

        <div className="ml-24 mt-12">
          <form action="CourseSetup3">
            <div className="my-12">
              <label htmlFor="" className="font-bold">
                Student requirements
              </label>
              <p className="text-sm">
                {` What will users taking this course need to get the best out of it.`}
              </p>
              <div className="flex items-start my-4">
                <input
                  type="input"
                  className="w-[70%]  clg:w-[70%] lclg:w-[90%] p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                  placeholder="e.g A laptop."
                />
                <button className="rounded py-3  text-black border-2 p-1 ml-5">
                  <span className="font-bold">+</span> Add Item
                </button>
              </div>
            </div>

            <div className="my-12">
              <label className="font-bold">
                Learning Objectives
              </label>
              <p>
                please outline the key skills and knowledge that students will
                gain by completing your course.
              </p>
              <div className="flex items-start my-4">
                <textarea
                  id="message"
                  className="block px-2.5 pb-64 py-3 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`E.g When this course is done, students will :

Understand fundamental concepts in [Subject/Field]
Create and implement strategies for [Specific Outcome]`}
                ></textarea>
              </div>
            </div>

            <div className="my-12">
              <label className="font-bold">
                Target Audience
              </label>
              <p>In this section, describe who your course is intended for.</p>
              <div className="flex items-start my-4">
                <textarea
                  id="message"
                  className="block px-2.5 pb-64 py-3 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`Example:
This course is ideal for:
Beginners with no prior experience in [Subject/Field].
Professionals looking to enhance their skills in [Specific Area].`}
                ></textarea>
              </div>
            </div>

            <div className="my-12">
              <div className="mt-12 mb-24">
                <button
                  className="rounded bg-[#4A90E2] px-48 py-3 text-white"
                  type="submit"
                >
                  Next
                </button>
              </div>
              {/* <div className="mt-12 mb-24">hel</div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainFormView2
