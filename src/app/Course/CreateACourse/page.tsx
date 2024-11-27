"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom,bootcampdropdownstatus } from "@/state/connectedWalletStarknetkitNext"
import Bootcampdropdown from "@/components/bootcamp/Bootcampdropdown"
import CourseForm from "@/components/courses/course-form/CourseForm"
import CourseForm2 from "@/components/courses/course-form/CourseForm2"
import CourseForm3 from "@/components/courses/course-form/CourseForm3"

import { usePathname } from "next/navigation"

const CreateACourse = () => {
  const [status, setstatus] = useAtom(coursestatusAtom); 
  const [bootcampdropstat, setbootcampdropstat] = useAtom(bootcampdropdownstatus)
  const path = usePathname()

  const handlePageClick = () => {
    setbootcampdropstat(false);
    setstatus(false);
};

  return (
    <div className="" onClick={handlePageClick}>
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
             {bootcampdropstat && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
       <div onClick={(e) => e.stopPropagation()} >
        <Coursedropdown />
        </div>
        <div onClick={(e) => e.stopPropagation()} > 
        <Bootcampdropdown />
        </div>

      <div className="min-w-full w-[100%] min-h-full bg-[#F5F7FA]">
        {
          // Only render this on home page
          path === "/Course/CreateACourse" && <CourseForm />
        }
      </div>
    </div>
  )
}

export default CreateACourse
