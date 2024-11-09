"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from "@/state/connectedWalletStarknetkitNext"
import MyCourses from "@/components/courses/MyCourses"

const Index = () => {
  const [status] = useAtom(coursestatusAtom)
  return (
    <div className="bg-[#f5f7fa]">
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <Coursedropdown />

      <MyCourses />
    </div>
  )
}

export default Index
