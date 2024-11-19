import React from "react"

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import Image from "next/image"
import course_img from "../../assets/course_img.png"
import createIcon from "../../assets/create.svg"
import Ellipse from "../../assets/Ellipse.svg"
import filled from "../../assets/filled.svg"
import free_books from "../../assets/free_books.svg"
import notifications from "../../assets/notifications.svg"
import profilePic from "../../assets/profile_pic.png"
import f7_tickets from "../../assets/f7_tickets.svg"
import token from "../../assets/token-branded_nftb.svg"
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown"
import { IoMdCheckmark } from "@react-icons/all-files/io/IoMdCheckmark"
import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"

const UserSideBar = ({ page, selected, setSelected }) => {
  const sideProperties = [
    {
      no: 1,
      title: "Courses created",
      url: filled,
    },
    {
      no: 4,
      title: "My Learning Journey",
      url: free_books,
    },
    {
      no: 0,
      title: "Create a course",
      url: createIcon,
    },
    {
      no: 14,
      title: "Notification",
      url: notifications,
    },
  ]

  const coursesProgress = [
    {
      no: 1,
      title: "Courses",
    },
    {
      no: 4,
      title: "Completed courses",
    },
    {
      no: 1,
      title: "Ongoing",
    },
    {
      no: 14,
      title: "Created",
    },
  ]

  const certificateEarned = [
    {
      no: 2,
      title: "Course Certification",
      type: "certified",
    },
    {
      no: 3,
      title: "Event Certification",
      type: "events",
    },
  ]

  const certSideProperties = [
    {
      no: 1,
      title: "All NFTs",
      url: f7_tickets,
    },
    {
      no: 4,
      title: "Course NFTs",
      url: token,
    },
    {
      no: 0,
      title: "Event NFTs",
      url: f7_tickets,
    },
  ]

  return (
    <div className="pt-12">
      {/* User info */}
      <Card
        className="w-96 border-2"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
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
        </CardBody>
        <CardFooter
          className="pt-0"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {page == "myCourse" &&
            coursesProgress.map((item, i) => (
              <div
                key={i}
                className="flex text-sm items-center justify-between my-2"
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
                className="flex text-sm items-center justify-between my-2"
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
        </CardFooter>
      </Card>

      {page == "myCourse" &&
        sideProperties.map((item, i) => (
          <Card
            className={`w-96 border-2 my-3 cursor-pointer hover:bg-violet-600 active:bg-violet-700 ${selected == item.title ? "focus:outline-none focus:ring focus:ring-violet-300" : ""} `}
            key={i}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
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
                    {item.title}{" "}
                    {item.no == 0 ? null : <span>({item.no})</span>}
                  </p>
                </div>

                <div>
                  <IoMdArrowDropdown />
                </div>
              </div>
            </CardBody>
          </Card>
        ))}

      {/* Mobile */}
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
            <Card
              className={`w-96 border-2 my-3 cursor-pointer hover:bg-violet-600 active:bg-violet-700 ${selected == item.title ? "focus:outline-none focus:ring focus:ring-violet-300" : ""} `}
              key={i}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
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
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserSideBar
