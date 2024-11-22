import React from "react"
import ReactPlayer from "react-player/lazy"
import { CardWithLink } from "./Cards"
import { Button } from "@material-tailwind/react"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import Image from "next/image"
import stream_video from "@/assets/stream_video.svg"
import graduate from "@/assets/grad.svg"
import profile_pic from "@/assets/profile_pic.png"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import youtube from "@/assets/youtube.svg"
import podcast from "@/assets/Podcast.svg"
import rich from "@/assets/Richin2024.svg"
import attensys_logo from "@/assets/attensys_logo.svg"
import Lectures from "./Lectures"

// import profile_pic from "@/assets/.png"

const LecturePage = () => {
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
    <div className="mx-12 py-6">
      <div className="flex  ">
        {/* Video section */}
        <div className="flex-au">
          {/* Video and title */}
          <div className="grid  gap-4">
            <div className="flex text-sm">
              <div className="flex">
                <Image src={graduate} width={20} alt="stream_video" />

                <p>My Courses</p>
              </div>
              <p>
                <span>|</span> Course Name
              </p>
            </div>

            <div className="w-[100%]">
              {/* <Image src={stream_video} width={1400} alt="stream_video" /> */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=lEF4ccMlQB8"
                width={1400}
                height={700}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="font-bold text-2xl">
                  Introduction to Web Development
                </h4>
                <p>
                  Created by:{" "}
                  <span className="underline">Akinbola Kehinde</span>
                </p>
              </div>
              <div className="flex items-center">
                <GrDiamond color="#2D3A4B" />
                <p>Difficulty level: Elementary</p>
              </div>

              <div className="flex items-center">
                <HiBadgeCheck color="#2D3A4B" />
                <p>Certificate of completion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-10 ml-10">
          <div className="flex bg-gradient-to-r from-[#5801a9] to-[#4a90e2] text-white items-center text-sm py-3 px-7 rounded-xl ">
            <HiBadgeCheck color="#fff" />
            <p>Attensys Certified Course</p>
          </div>
          <div className="my-16 bg-white rounded-xl p-4">
            {/* Lectures */}
            {lectures.map((item, i) => (
              <div key={i} className="flex my-7 justify-around">
                <p className="font-bold text-[#5801a9]">{i + 1}</p>
                <div className="mx-3">
                  <Image src={item.img} alt={item.title} />
                </div>
                <div>
                  <p className="text-sm">{item.title}</p>
                  <div className="rounded-xl bg-[#9b51e01a] w-[40%] mt-5">
                    <p className="text-xs  px-4 py-1">{item.timing}: 01</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`bg-[url('/hero_asset.png')] text-white p-10 rounded-xl`}
          >
            <Image src={attensys_logo} alt="logo" />
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <div className="bg-white mr-10 my-10 p-10 rounded-xl shadow-md">
            {/* About course and Review */}
            <div className="pb-4">
              <p className="font-bold py-3">About this course</p>
              <p className="text-sm">
                This course provides a foundational understanding of web
                development. You'll learn essential skills in HTML and CSS,
                enabling you to create and style your own web pages. No prior
                experience is necessary!
              </p>
            </div>
            <div className="py-4">
              <p className="font-bold py-3"> Student Requirements</p>
              <ul className="text-sm list-disc">
                <li>A computer with internet access</li>
                <li>Basic computer skills</li>
                <li>Willingness to learn and experiment</li>
              </ul>
            </div>
            <div className="py-6">
              <p className="font-bold py-3"> Target Audience</p>
              <ul className="text-sm list-disc">
                <li> Beginners interested in web development </li>
                <li>Aspiring web developers looking to start their journey</li>
                <li>Anyone wanting to create their own websites</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Leave a review</h4>
            <div className="bg-white mr-10 mt-5 mb-16 p-10 rounded-xl shadow-md ">
              <div>
                <div className="flex justify-between mb-10 items-center mr-12 border-b-4 p-3">
                  <div className="flex items-center border-r-4 p-3">
                    <Image src={profile_pic} alt="pic" width={60} />
                    <div>
                      <h4>0xRavenclaw</h4>
                      <p className="text-[#9b51e0]">0x5c956e61...de5232dc11</p>
                    </div>
                  </div>

                  <div className="flex items-center ">
                    <h4 className="font-bold">Tap to rate :</h4>
                    <div className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                  </div>

                  <div className="flex items-center border-l-4 p-3 h-24">
                    <div className="flex">
                      <IoIosStar color="#F6A61C" />
                      <IoIosStar color="#F6A61C" />
                      <IoIosStar color="#F6A61C" />
                      <IoIosStar color="#F6A61C" />
                      <IoIosStar />
                    </div>
                    <p>
                      <span className="text-[#9b51e0]">1,245</span>
                      students
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {/* input and button */}
                <input
                  type="text"
                  placeholder="What do you think about this course?"
                  className="w-[85%] border shadow-dm p-2 mr-5  rounded-xl"
                />
                <Button
                  size="md"
                  variant="text"
                  className="gap-2 bg-[#9b51e0] text-white"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Send review
                </Button>
              </div>

              <div>
                <div className="py-10">
                  <div className="flex">
                    <p className="p-5 bg-[#9b51e01a] font-bold rounded-full">
                      OM
                    </p>
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

                  <p className="text-sm py-3">
                    Halfway through the course and lots of information given in
                    every chapter. Concise and easy to understand, very useful
                    to apply to any Web design journey!
                  </p>
                </div>

                <div className="py-10">
                  <div className="flex">
                    <p className="p-5 bg-[#9b51e01a] font-bold rounded-full">
                      OM
                    </p>
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

                  <p className="text-sm py-3">
                    Halfway through the course and lots of information given in
                    every chapter. Concise and easy to understand, very useful
                    to apply to any Web design journey!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {/* Courses you might like */}
          <p className="font-bold py-3">Courses you might like</p>
          <div>
            <CardWithLink />
            <CardWithLink />
            <CardWithLink />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LecturePage
