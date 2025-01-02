import React from "react"
import thumbs from "@/assets/thumbs.svg"
import Image from "next/image"
import steps from "@/assets/steps.svg"

const Guide = () => {
  return (
    <div className="sm:h-[410px] w-[100%] py-12 sm:py-0 bg-[#2D3A4B] lg:flex">
      <div className="w-[90%] mx-auto h-[100%] my-auto block sm:flex sm:space-x-20 justify-center items-center">
        <div className="flex items-center justify-around">
          <div className="h-[299px] w-[347px] sm:order-1 order-last">
            <Image alt="thumb" src={thumbs} className="" />
          </div>
          <div className="h-[276px] w-[43.96px] mx-0 sm:mx-16 order-2 sm:order-1">
            <Image alt="steps" src={steps} className="" />
          </div>
        </div>

        <div className="space-y-6 w-[500px]">
          <div className="space-y-2 px-4 py-6 sm:px-0 sm:py-0">
            <h1 className="text-[18px] text-[#FFFFFF] font-bold leading-[21px]">
              Sign Up
            </h1>
            <p className="text-[14.63px] text-[#FFFFFF] font-light text-justify">
              Create an account and get instant access to our dashboard. Whether
              you are a school, organization, or event manager, we have the
              tools for you.
            </p>
          </div>

          <div className="space-y-2 px-4 py-6 sm:px-0 sm:py-0">
            <h1 className="text-[18px] text-[#FFFFFF] font-bold leading-[21px]">
              Manage Attendance & Certifications
            </h1>
            <p className="text-[14.63px] text-[#FFFFFF] font-light text-justify">
              Automatically track attendance and issue certificates upon course
              or event completion. Manage everything from one central platform.
            </p>
          </div>
        </div>

        <div className="space-y-6 w-[500px]">
          <div className="space-y-2 px-4 py-6 sm:px-0 sm:py-0">
            <h1 className="text-[18px] text-[#FFFFFF] font-bold leading-[21px]">
              Set Up Courses & Events
            </h1>
            <p className="text-[14.63px] text-[#FFFFFF] font-light text-justify">
              Add your courses, events, or programs. Customize everything from
              scheduling to certification rules.
            </p>
          </div>

          <div className="space-y-2 px-4 py-6 sm:px-0 sm:py-0">
            <h1 className="text-[18px] text-[#FFFFFF] font-bold leading-[21px]">
              Verify Certificate
            </h1>
            <p className="text-[14.63px] text-[#FFFFFF] font-light text-justify">
              You can now verify certification with as simple as a search button
              click. Find out all you need with the{" "}
              <span className="text-[#4A90E2] cursor-pointer">
                Attensys Explorer
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
