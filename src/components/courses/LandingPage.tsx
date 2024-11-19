import React from "react"
import video from "@/assets/video.png"
import Image from "next/image"
import Lectures from "./Lectures"
import youtube from "@/assets/youtube.svg"
import podcast from "@/assets/Podcast.svg"
import rich from "@/assets/Richin2024.svg"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { GiBackwardTime } from "@react-icons/all-files/gi/GiBackwardTime"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import CarouselComp from "./Carousel"

const LandingPage = () => {
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
      <div
        className={`bg-[url('/hero_asset.png')] text-white  px-28 py-16 from-orange-400 via-red-500 to-pink-500 h-64 min-h-full sm:min-h-0 md:min-h-full lg:min-h-0 xl:min-h-full `}
      >
        <div className="grid grid-cols-2 gap-4 mx-20">
          {/* Course Image */}
          <div className="col-2 text-sm">
            <p className="font-bold mb-2">Technology | Web development</p>
            <Image src={video} alt="hero" />
          </div>

          {/* Course information */}
          <div className="text-sm">
            {/* field */}
            <div className="">
              <button className="bg-[#fff] px-7 py-2 rounded text-[#333333] font-bold">
                Get course
              </button>
            </div>

            <h4 className="text-2xl font-bold mb-2 mt-2">
              Introduction to Web Development
            </h4>
            <p className="my-2 text-white">
              {`This course provides a foundational understanding of web
              development. You'll learn essential skills in HTML and CSS,
              enabling you to create and style your own web pages. No prior
              experience is necessary!`}
            </p>

            <div className="bg-[#5801A9] py-2 text-white px-12 my- w-[40%] rounded-xl">
              <p className="">Tech Innovators Academy</p>
            </div>

            {/* rating and num of students */}
            <div className="flex  items-center mb-3 ">
              <div className="flex items-center">
                <IoIosStar color="#F6A61C" />
                <IoIosStar color="#F6A61C" />
                <IoIosStar color="#F6A61C" />
                <IoIosStar color="#F6A61C" />
                <IoIosStar />
                <p className="font-bold">(281)</p>
              </div>

              <div className="flex items-center mx-8">
                <HiBadgeCheck color="#fff" />
                <p className="ml-5 font-bold">291 certification</p>
              </div>
            </div>

            {/* creator and last update */}
            <div className="flex text-center text-black">
              <div>
                <p className="mb-2">
                  Created by <span className="underline">Akinbola Kehinde</span>
                </p>
              </div>

              <div className="flex ml-5 text-center justify-center">
                <GiBackwardTime />
                <p className="ml-3">Last updated 10|10|24</p>
              </div>
            </div>

            {/* video prop */}
            <div className="flex text-black my-3">
              <div className="flex ">
                <FaPlay />
                <p>Total play time: 2 hrs 35 mins</p>
              </div>
              <div className="flex ml-5 ">
                <GrDiamond color="#2D3A4B" />
                <p>Difficulty level: Elementary</p>
              </div>
            </div>

            <div className="flex text-center text-black">
              <div>
                <HiBadgeCheck color="#2D3A4B" />
              </div>
              <p>Certificate of Completion</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-48 mt-32 mb-10">
        <Lectures lectures={lectures} />
      </div>

      {/* rating */}
      <div>
        <div className="border-b-2 mx-48 flex pb-4">
          <IoIosStar color="#F6A61C" />
          <p>4.9 Rating | (281 reviews)</p>
        </div>

        {/* comments */}
        <div className="flex py-12 mx-48 items-center content-center justify-around text-sm">
          <div className="w-[30%]">
            <div className="flex">
              <p className="p-5 bg-[#9b51e01a] font-bold rounded-full">OM</p>
              <div className="ml-10">
                <p>Olivia. M</p>
                <div className="flex items-center">
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar />
                </div>
              </div>
            </div>

            <p className="mt-8">
              Halfway through the course and lots of information given in every
              chapter. Concise and easy to understand, very useful to apply to
              any Web design journey!
            </p>
          </div>

          <div className="border-2 h-28"></div>

          <div className="w-[30%]">
            <div className="flex">
              <p className="p-5 bg-[#9b51e01a] font-bold rounded-full">OM</p>
              <div className="ml-10">
                <p>Olivia. M</p>
                <div className="flex items-center">
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar color="#F6A61C" />
                  <IoIosStar />
                </div>
              </div>
            </div>

            <p className="mt-8">
              Halfway through the course and lots of information given in every
              chapter. Concise and easy to understand, very useful to apply to
              any Web design journey!
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]">
          <p className="text-sm text-white py-2 px-48">Students also bought</p>
        </div>

        <div className="mx-48 my-6">
          <CarouselComp />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
