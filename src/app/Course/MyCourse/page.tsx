"use client"
import React from "react"
import Coursedropdown from "@/components/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from "@/state/connectedWalletStarknetkitNext"
import Explore from "@/components/courses/Explore"
import MyCourses from "@/components/courses/MyCourses"

const index = () => {
  const [status] = useAtom(coursestatusAtom)
  return (
    <div className=" ">
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <Coursedropdown />

      <MyCourses />
    </div>
  )
}

export default index
