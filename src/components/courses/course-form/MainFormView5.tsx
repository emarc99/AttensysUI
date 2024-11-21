import React, { useState } from "react"
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"
import Dropdown from "../Dropdown"
import video from "@/assets/video.png"
import youtube from "@/assets/youtube.svg"
import podcast from "@/assets/Podcast.svg"
import rich from "@/assets/Richin2024.svg"
import Image from "next/image"
import Switch from "react-switch"
import Lectures from "../Lectures"

const MainFormView5 = () => {
  const [isActivated, setIsActivated] = useState(false)

  const handleSwitch = () => {
    setIsActivated(!isActivated)
  }

  const lectures = [
    {
      img: rich,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
    {
      img: youtube,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
    {
      img: podcast,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
  ]

  return (
    <div>
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]">
        <p className="text-sm text-white text-center py-2">
          Your course creation progress saves automatically, but feel free to
          also save your progress manually
        </p>
      </div>

      <div className="min-w-full w-[100%] ">
        <div className="flex justify-between py-2 my-5 border-t border-b border-[#d1d1d1] px-5 items-center">
          <div className="flex items-center">
            <div className="px-8 border-r border-blue-100">
              <IoMdArrowBack />
            </div>
            <p className="text-[#4A90E2] text-xl font-bold">
              Preview & Publish
            </p>
          </div>

          <form action="course-landing-page" method="post">
            <button className="bg-[#C5D322] px-7 py-3 rounded text-white">
              Publish
            </button>
          </form>
        </div>

        <div className="mx-24 mt-12">
          <div className="grid grid-cols-2 gap-4">
            {/* Course Image */}
            <div className="col-2">
              <Image src={video} alt="hero" />
            </div>

            {/* Course information */}
            <div>
              {/* field */}
              <div className="">
                <p className="text-[#5801A9]">Technology | Web Development</p>
              </div>

              <h4 className="text-2xl font-bold mb-5 mt-3">
                Introduction to Web Development
              </h4>
              <p className="my-3 text-[#333333]">
                {`This course provides a foundational understanding of web
                development. You'll learn essential skills in HTML and CSS,
                enabling you to create and style your own web pages. No prior
                experience is necessary!`}
              </p>

              <div className="bg-[#5801A9] py-2 text-white px-12 my-5 w-[50%] rounded-xl">
                <p className="">Tech Innovators Academy</p>
              </div>

              <div>
                <p>Difficulty level : Elementary</p>
              </div>
            </div>
          </div>

          <div className="">
            {/* lectures in course */}
            <Lectures lectures={lectures} />
            {/* course desc & student req */}

            <div className="my-12">
              <div>
                <div className="flex justify-between w-[30%] my-5">
                  <h4 className="font-bold">Certification for this course</h4>
                  <Switch
                    onChange={handleSwitch}
                    checked={isActivated}
                    onColor="#9B51E0"
                    offColor="#4A90E2"
                  />
                </div>
                <p>After completion students will be issued certification</p>
              </div>
              <div className="mt-12 mb-24">
                <form action="course-landing-page" method="post">
                  <button
                    className="rounded bg-[#4A90E2] px-24 py-3 text-white"
                    type="submit"
                  >
                    Save and Publish Course
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFormView5
