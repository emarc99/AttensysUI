import React from "react"
import { bootcampdropdownstatus } from "@/state/connectedWalletStarknetkitNext"
import { useAtom, useSetAtom } from "jotai"
import { VscNewFile } from "react-icons/vsc"
import bootsearch from "@/assets/bootsearch.svg"
import bootcreate from "@/assets/bootcreate.svg"
import Image from "next/image"
import people from "@/assets/people.svg"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Bootcampdropdown = () => {
  const [bootcampdropstat] = useAtom(bootcampdropdownstatus)
  const router = useRouter()

  // const handleBootcampExplore = () => {
  //   router.push('')
  // }

  return (
    <>
      {bootcampdropstat && (
        <div className="w-full bg-[#FFFFFF] absolute z-50 shadow-2xl py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center w-full mx-auto lg:w-[90%] xl:w-[84%] 2xl:w-[80%] h-full divide-y divide-x-0 md:divide-y-0 md:divide-x divide-gray-300">
            <div className="col-span-1 w-full flex flex-col items-start justify-start space-y-0 flex-none px-8 md:px-4 xl:px-8 py-4">
              <Link href="/Bootcamps">
                <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer w-full mb-4">
                  <Image src={bootsearch} alt="search" />
                  <span className="text-md font-medium cursor-pointer">
                    Explore Bootcamps
                  </span>
                </div>
                <p className="text-sm text-[#2D3A4B]">
                  Discover amazing organizations that have already been
                  established on attensys; and learn more about their courses.
                </p>
              </Link>
            </div>
            <div className="col-span-1 w-full flex flex-col items-start justify-start space-y-0 flex-none px-8 md:px-4 xl:px-8 py-4">
              <Link href="/Createorganization">
                <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer w-full mb-4">
                  <Image src={bootcreate} alt="search" />
                  <span className="text-md font-medium cursor-pointer">
                    Create Organization
                  </span>
                </div>
                <p className="text-sm text-[#2D3A4B]">
                  Create & Manage your organization profile, add or edit
                  instructors, create new courses, and track your organizations
                  performance.
                </p>
              </Link>
            </div>
            <div className="col-span-1 w-full flex flex-col items-start justify-start space-y-0 flex-none px-8 md:px-4 xl:px-8 py-4">
              <Link href="/Mybootcamps">
                <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer w-full mb-4">
                  <Image src={people} alt="people" />
                  <span className="text-md font-medium cursor-pointer">
                    My Bootcamps
                  </span>
                </div>
                <p className="text-sm text-[#2D3A4B]">
                  Accelerate your learning journey with our intensive
                  bootcamps—designed to equip you with hands-on skills in record
                  time.
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Bootcampdropdown
