import React, { useState } from "react"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import Image from "next/image"
import { FaUserGraduate } from "@react-icons/all-files/fa/FaUserGraduate"
import Switch from "react-switch"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import { BsDot } from "@react-icons/all-files/bs/BsDot"
import timing from "@/assets/timing.svg"
import StarRating from "../bootcamp/StarRating"
import { HiOutlineBadgeCheck } from "react-icons/hi";


interface ItemProps {
  no: number
  title: string
  tag: string
  playTime: string
  level: string
  stars: number
  url: string
  certificate: number
}

interface CoursesCreatedProps {
  item: ItemProps // or another type like `number` or a union type
  selected: string
}

const CoursesCreated: React.FC<CoursesCreatedProps> = ({ item, selected }) => {
  const [isActivated, setIsActivated] = useState(false)

  const handleSwitch = () => {
    setIsActivated(!isActivated)
  }

  return (
    <div
      className="bg-white  sm:my-12 rounded-xl border-[1px] border-[#BCBCBC] h-auto pb-8"
      // onClick={(e) =>
      //   handleMyCourseSubComp(e, "sample-profile", router, item.title)
      // }
    >
      {/* courses created */}
      <div>
        <div className="flex justify-between border-b-[1px] border-b-[#CACBCB] my-3 px-16">
          {/* activate */}
          <div className="flex items-center text-[#A01B9B]  my-5 space-x-3">
            <h4 className="font-bold text-lg text-[#A01B9B]">{selected}</h4>
            <FaUserGraduate color="#A01B9B" />
          </div>
          <div className="hidden sm:flex items-center  my-5">
            <p className={`${!isActivated ? "text-[#4A90E2]" : "text-black"} `}>
              Deactivate
            </p>

            <Switch
              onChange={handleSwitch}
              checked={isActivated}
              onColor="#9B51E0"
              offColor="#4A90E2"
              uncheckedHandleIcon={<div />}
              checkedHandleIcon={<div />}
              checkedIcon={<div />}
              uncheckedIcon={<div />}
              className="mx-2"
            />
            <p className={`${isActivated ? "text-[#9B51E0]" : "text-black"} `}>
              Activate
            </p>
          </div>
        </div>

        <div>
          <div className="block sm:flex justify-top ">
            <div className="flex sm:hidden items-center mx-8 my-5 text-xs">
              <p
                className={`${!isActivated ? "text-[#4A90E2]" : "text-black"} `}
              >
                Deactivate
              </p>
              <Switch
                onChange={handleSwitch}
                checked={isActivated}
                onColor="#9B51E0"
                offColor="#4A90E2"
                uncheckedHandleIcon={<div />}
                checkedHandleIcon={<div />}
                checkedIcon={<div />}
                uncheckedIcon={<div />}
                className="mx-2"
              />
              <p
                className={`${isActivated ? "text-[#9B51E0]" : "text-black"} `}
              >
                Activate
              </p>
            </div>
            
            <div className="px-12 flex space-x-12 items-center">
            <div className="h-[164px] w-[254px] rounded-xl">
              <Image
                src={item.url}
                alt="video"
                height={250}
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
            <div className="flex-1 mx-8 sm:mx-0">
              <div>
                <h4 className="text-2xl font-medium leading-[22px] text-[#2D3A4B]">{item.title}</h4>

                {/* video prop */}
                <div className="block sm:flex items-center my-3">
                  <div className="flex items-center space-x-3">
                    <FaPlay color="#A01B9B" />
                    <p className="text-[13px] text-[#2D3A4B] font-medium leading-[21px]">Total play time: {item.playTime}</p>
                  </div>
                  <div className="flex items-center ml-0 sm:ml-5 my-3 sm:my-0">
                    <p className="hidden sm:block">|</p>
                    <p className="text-[13px] text-[#2D3A4B] font-medium leading-[21px] mx-0 sm:mx-8">
                      Created by: <span className="text-[#A01B9B]">You</span>
                    </p>
                  </div>
                  <div className="flex items-center ml-0 sm:ml-5 my-3 sm:my-0">
                    <BsDot color="#A01B9B" width={50} />
                    <p className="text-sm sm:text-base mx-0 sm:mx-2">
                      <span className="text-[#A01B9B]">4</span> Lectures
                    </p>
                  </div>
                </div>

                <div className="block sm:flex items-center my-3">
                  <div className="flex items-center space-x-3">
                    <Image src={timing} alt="time" className="h-[18px] w-[18px]" />
                    <p className="text-[13px] text-[#2D3A4B] font-medium leading-[21px]">Last updated 10|10|2024</p>
                  </div>
                  <div className="flex items-center space-x-3 my-3 sm:my-0 mx-0 sm:mx-16">
                    <GrDiamond color="#A01B9B" />
                    <p className="text-[13px] text-[#2D3A4B] font-medium leading-[21px]">Difficulty level: {item.level}</p>
                  </div>
                </div>


                {/* rating and num of students */}
                <div className="block sm:flex  items-center my-3">
                  <div className="flex items-center space-x-3">
                    <StarRating totalStars={5}  starnumber={4} />
                    <p className="font-medium text-[13px] text-[#2D3A4B] leading-[16px]">{item.stars} students</p>
                  </div>

                  <div className="flex items-center space-x-3 mx-0 sm:mx-12 my-3 sm:my-0">
                    <div>
                      <HiOutlineBadgeCheck color="#A01B9B" className="h-[18px] w-[18px]"  />
                    </div>
                    <p className="font-medium text-[13px] text-[#2D3A4B] leading-[16px]">Certificate issued:</p>
                    <p className="ml-5 font-medium text-[13px] text-[#2D3A4B] leading-[16px]">
                      <span className="text-[#A01B9B]">
                        {item.certificate}{" "}
                      </span>
                      certificates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            </div>
         
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesCreated
