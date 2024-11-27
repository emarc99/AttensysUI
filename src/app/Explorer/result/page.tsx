"use client"
import React from "react"
import Coursedropdown from "@/components/courses/Coursedropdown"
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from "@/state/connectedWalletStarknetkitNext"
import ExploreResult from "@/components/explorer/result/ExploreResult"

const Index = () => {
  const [status] = useAtom(coursestatusAtom)

  return (
    <div>
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <Coursedropdown />

      <div className="bg-[#F5F7FA]">
        <ExploreResult />
      </div>
    </div>
  )
}

export default Index
