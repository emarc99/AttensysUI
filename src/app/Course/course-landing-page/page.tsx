"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom,bootcampdropdownstatus } from "@/state/connectedWalletStarknetkitNext"
import Bootcampdropdown from "@/components/bootcamp/Bootcampdropdown"

import { usePathname } from "next/navigation"
import LandingPage from "@/components/courses/LandingPage"

const CourseCert = () => {
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

      {path === "/Course/course-landing-page" && (
        <div className="w-full bg-[#F5F7FA]">
          <LandingPage />
        </div>
      )}
    </div>
  )
}

export default CourseCert
