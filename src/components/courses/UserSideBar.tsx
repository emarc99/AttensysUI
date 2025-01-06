import React from "react"

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import Image from "next/image"
import profilePic from "../../assets/profile_pic.png"
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown"
import { IoMdCheckmark } from "@react-icons/all-files/io/IoMdCheckmark"
import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"
import {
  sideProperties,
  coursesProgress,
  certificateEarned,
  certSideProperties,
} from "@/constants/data"

interface UserSideBarProps {
  page: string // or another type like `number` or a union type
  selected: string // Replace with appropriate type
  setSelected: (value: string) => void // Function that sets a value
}

const UserSideBar = ({ page, selected, setSelected }: UserSideBarProps) => {
  return (
    <div className="pt-12">
      {/* User info */}

      <div className="bg-white py-12 px-8 rounded-xl shadow-lg border-2">
        <div>
          <div className="flex justify-between items-start mt-4">
            <div className="flex justify-around">
              <Image src={profilePic} alt="profilePic" className="w-1/2" />

              <div className="ml-3">
                <p>Akinbola Kehinde</p>
                <p>0xbc293...190bce</p>
              </div>
            </div>

            <div>{page != "myCertificate" ? <IoMdArrowDropdown /> : null}</div>
          </div>
        </div>

        <div className="my-4">
          {page == "myCourse" &&
            coursesProgress.map((item, i) => (
              <div
                key={i}
                className="flex text-sm items-center justify-between my-4"
              >
                <div className="flex items-center">
                  <BsFillExclamationCircleFill />
                  <p className="ml-3">{item.title}</p>
                </div>

                <div className="text-purple-400">
                  <p>
                    {item.no} Completed course{item.no > 1 ? "(s)" : ""}
                  </p>
                </div>
              </div>
            ))}

          {page == "myCertificate" &&
            certificateEarned.map((item, i) => (
              <div
                key={i}
                className="flex text-sm items-center justify-between my-4"
              >
                <div className="flex items-center">
                  <BsFillExclamationCircleFill />
                  <p className="ml-3">{item.title} :</p>
                </div>

                <div className="text-purple-400">
                  <p>
                    {item.no} {item.type}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {page == "myCourse" &&
        sideProperties.map((item, i) => (
          <div
            className={`bg-white py-4 px-8 rounded-xl shadow-lg border-2 my-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700 ${selected == item.title ? "focus:outline-none focus:ring focus:ring-violet-300" : ""} `}
            key={i}
          >
            <div
              className="flex justify-between text-sm items-start "
              onClick={() => {
                setSelected(item.title)
              }}
            >
              <div className="flex items-center">
                <Image src={item.url} alt={item.title} />
                <p className="ml-3">
                  {item.title} {item.no == 0 ? null : <span>({item.no})</span>}
                </p>
              </div>

              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        ))}

      {/* Mobile */}
      {page == "myCourse" ? null : (
        <div className="flex sm:hidden justify-between mt-10 border-b-2 p-3">
          <div>
            <p>All</p>
          </div>

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>

            <h4 className="underline font-bold">Filter</h4>
          </div>
        </div>
      )}

      {/* Desktop display */}
      {page == "myCertificate" && (
        <div className="hidden sm:block my-4">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>

            <h4 className="underline font-bold">Filter</h4>
          </div>

          {certSideProperties.map((item, i) => (
            <div
              className={`w-96 border-2 my-3 cursor-pointer hover:bg-violet-600 active:bg-violet-700 ${selected == item.title ? "focus:outline-none focus:ring focus:ring-violet-300" : ""} `}
              key={i}
            >
              <div
                className="flex justify-between text-sm items-start "
                onClick={() => {
                  setSelected(item.title)
                }}
              >
                <div className="flex items-center">
                  <Image src={item.url} alt={item.title} />
                  <p className="ml-3">{item.title} </p>
                </div>

                <div>
                  {selected == item.title ? (
                    <IoMdCheckmark color="green" size={20} />
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserSideBar
