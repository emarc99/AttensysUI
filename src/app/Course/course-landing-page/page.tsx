"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from "@/state/connectedWalletStarknetkitNext"

import { usePathname } from "next/navigation"
import LandingPage from "@/components/courses/LandingPage"

const CourseCert = () => {
  const [status] = useAtom(coursestatusAtom)
  const path = usePathname()

  return (
    <div className="">
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <Coursedropdown />

      {path === "/Course/course-landing-page" && (
        <div className="w-full">
          <LandingPage />
        </div>
      )}
    </div>
  )
}

export default CourseCert
