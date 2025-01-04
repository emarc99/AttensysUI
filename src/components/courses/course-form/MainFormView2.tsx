import React from "react"
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"
import Dropdown from "../Dropdown"
import CourseSideBar from "./SideBar"
import { handleCreateCourse } from "@/utils/helpers"
import { useRouter } from "next/navigation"


const MainFormView2 = () => {
    const router = useRouter()
  
   
  return (
    <div className="flex">
      <div className="hidden sm:block">
        <CourseSideBar />
      </div>

      <div className="flex-1">
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]">
          <p className="text-sm text-white text-center py-2">
            Your course creation progress saves automatically, but feel free to
            also save your progress manually
          </p>
        </div>

        <div className="">
          <div className="block sm:flex justify-between py-2 my-5 border-t border-b border-[#d1d1d1] px-5 items-center">
            <div className="flex items-center">
              <div className="px-4 sm:px-8 border-r border-blue-100">
                <IoMdArrowBack
                  onClick={() => history.back()}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-[#4A90E2] text-xl font-bold">
                Learning Outcomes
              </p>
            </div>

            <button className="hidden sm:block bg-[#c5d322] px-7 py-3 rounded text-black">
              Save progress
            </button>
          </div>

          <div className="mx-6 sm:ml-24 mt-12">
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
                    className="w-[50%] sm:w-[70%] p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                    placeholder="e.g A laptop."
                  />
                  <button className="rounded py-2 px-4  text-black border-2 p-1 ml-5 text-xs sm:text-base bg-white">
                    <span className="font-bold">+</span> Add Item
                  </button>
                </div>
              </div>

              <div className="my-12">
                <label className="font-bold">Learning Objectives</label>
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
                <label className="font-bold">Target Audience</label>
                <p>
                  In this section, describe who your course is intended for.
                </p>
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

              <div className="my-12 ">
                <div className="mt-12 m">
                  <button
                    className="rounded bg-[#4A90E2] px-28 sm:px-48 py-3 text-white"
                    type="submit"
                     onClick={(e) =>
                                          handleCreateCourse(e, "courseSetup3", router)
                                        }
                  >
                    Next
                  </button>
                </div>

                <div className="mt-6 mb-24">
                  <button className="block sm:hidden bg-[#c5d322]  text-xs px-12 py-3 rounded text-black">
                    Save progress
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFormView2
