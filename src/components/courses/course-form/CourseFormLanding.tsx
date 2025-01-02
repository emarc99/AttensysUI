import React from "react"
import CourseForm from "./CourseForm"
import CourseForm2 from "./CourseForm2"
import CourseForm3 from "./CourseForm3"
import MainFormView from "./MainFormView"
import MainFormView2 from "./MainFormView2"
import MainFormView3 from "./MainFormView3"
import MainFormView4 from "./MainFormView4"
import MainFormView5 from "./MainFormView5"
import { courseQuestions } from "@/constants/data"

const CourseFormLanding = (prop: any) => {
  switch (prop.section) {
    case "What%20is%20the%20primary%20goal%20of%20your%20course":
      return (
        <div className="h-auto w-full bg-[#F5F7FA]">
          <CourseForm section={prop.section} />
        </div>
      )

    case "create-a-course":
      return (
        <div className="h-auto w-full bg-[#F5F7FA]">
          <CourseForm2 />
        </div>
      )

    case "create-a-course-2":
      return (
        <div className="h-auto w-full bg-[#F5F7FA]">
          <CourseForm3 />
        </div>
      )
    case "CourseSetup":
      return (
        <div className="h-auto w-full bg-[#F5F7FA]">
          <MainFormView />
        </div>
      )

    case "CourseSetup2?cars=volvo&cars=volvo":
      return (
        <div className="h-auto w-full bg-[#F5F7FA]">
          <MainFormView2 />
        </div>
      )

    default:
      return <>hey</>
  }
  //   return (

  //   )
}

export default CourseFormLanding
