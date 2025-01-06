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
      className="bg-white py-12 my-0 sm:my-12 rounded-xl border-2"
      // onClick={(e) =>
      //   handleMyCourseSubComp(e, "sample-profile", router, item.title)
      // }
    >
      {/* courses created */}
      <div>
        <div className="flex justify-between border-b-4 my-3">
          {/* activate */}
          <div className="flex items-center text-gradient-to-r from-purple-400 via-purple-30 mx-8 my-5">
            <h4 className="font-bold text-lg text-[#A01B9B]">{selected}</h4>
            <FaUserGraduate color="#A01B9B" />
          </div>
          <div className="hidden sm:flex items-center mx-8 my-5">
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
            <div className="mx-6">
              <Image
                src={item.url}
                alt="video"
                height={250}
                className="object-cover"
              />
            </div>
            <div className="mt-10 flex-1 mx-8 sm:mx-0">
              <div>
                <h4 className="font-light text-2xl">{item.title}</h4>

                {/* video prop */}
                <div className="block sm:flex items-center my-3">
                  <div className="flex items-center">
                    <FaPlay color="#A01B9B" />
                    <p>Total play time: {item.playTime}</p>
                  </div>
                  <div className="flex items-center ml-0 sm:ml-5 my-3 sm:my-0">
                    <p className="hidden sm:block">|</p>
                    <p className="text-sm sm:text-base mx-0 sm:mx-8">
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
                  <div className="flex items-center">
                    <Image src={timing} alt="time" />
                    <p>Last updated 10|10|2024</p>
                  </div>
                  <div className="flex items-center my-3 sm:my-0 mx-0 sm:mx-16">
                    {/* <GrDiamond color="#A01B9B" /> */}
                    <p>Difficulty level: {item.level}</p>
                  </div>
                </div>

                {/* rating and num of students */}
                <div className="block sm:flex  items-center my-3">
                  <div className="flex items-center">
                    <IoIosStar color="#F6A61C" className="mx-1" />
                    <IoIosStar color="#F6A61C" className="mx-1" />
                    <IoIosStar color="#F6A61C" className="mx-1" />
                    <IoIosStar color="#F6A61C" className="mx-1" />
                    <IoIosStar className="mx-2" />
                    <p className="font-bold">({item.stars})</p>
                  </div>

                  <div className="flex items-center mx-0 sm:mx-12 my-3 sm:my-0">
                    <div>
                      <HiBadgeCheck color="#A01B9B" />
                    </div>
                    <p>Certificate issued:</p>
                    <p className="ml-5 font-bold">
                      <span className="text-[#A01B9B]">
                        {item.certificate}{" "}
                      </span>
                      certification
                    </p>
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
