import { useState } from "react"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import videoHero from "../../assets/video.png"
import profilePic from "../../assets/profile_pic.png"
import Image from "next/image"
import { FaUserGraduate } from "@react-icons/all-files/fa/FaUserGraduate"
import Switch from "react-switch"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown"
import ProgressBar from "@ramonak/react-progress-bar"
import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"

const MyCourses = () => {
  const [isActivated, setIsActivated] = useState(false)

  const handleSwitch = () => {
    setIsActivated(!isActivated)
    console.log(isActivated)
  }

  return (
    <div className="flex flex-row mx-20 my-8">
      <div className="">
        {/* User info */}
        <Card className="w-96 border-2">
          <CardBody>
            {/* <Image className="object-cover " alt="robot" src={robotImg} /> */}
            <div className="flex justify-between items-start mt-4">
              <div className="flex justify-around">
                <Image src={profilePic} alt="profilePic" className="w-1/2" />

                <div className="ml-3">
                  <p>Akinbola Kehinde</p>
                  <p>0xbc293...190bce</p>
                </div>
              </div>

              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex justify-between my-2">
              <div className="flex">
                <BsFillExclamationCircleFill />
                <p>Courses</p>
              </div>

              <div>
                <p>4 Course(s)</p>
              </div>
            </div>

            <div className="flex justify-between my-2">
              <div className="flex">
                <BsFillExclamationCircleFill />
                <p>Completed Course</p>
              </div>

              <div>
                <p>2 Completed Course(s)</p>
              </div>
            </div>

            <div className="flex justify-between my-2">
              <div className="flex">
                <BsFillExclamationCircleFill />
                <p>Ongoing</p>
              </div>

              <div>
                <p>2 Ongoing Course(s)</p>
              </div>
            </div>

            <div className="flex justify-between my-2">
              <div className="flex">
                <BsFillExclamationCircleFill />
                <p>Created</p>
              </div>

              <div>
                <p>1 Course(s)</p>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Courses created info */}
        <Card className="w-96 border-2 my-3">
          <CardBody>
            {/* <Image className="object-cover " alt="robot" src={robotImg} /> */}
            <div className="flex justify-between items-start">
              <div className="flex justify-around">
                <p>Courses created (1)</p>
              </div>

              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </CardBody>
        </Card>

        {/* My learning info */}
        <Card className="w-96 border-2 my-3">
          <CardBody>
            {/* <Image className="object-cover " alt="robot" src={robotImg} /> */}
            <div className="flex justify-between items-start">
              <div className="flex justify-around">
                <p>My Learning Journey (4)</p>
              </div>

              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Create a course info */}
        <Card className="w-96 border-2 my-3">
          <CardBody>
            {/* <Image className="object-cover " alt="robot" src={robotImg} /> */}
            <div className="flex justify-between items-start">
              <div className="flex justify-around">
                <p>Create a course</p>
              </div>

              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Notifs info */}
        <Card className="w-96 border-2 my-3">
          <CardBody>
            {/* <Image className="object-cover " alt="robot" src={robotImg} /> */}
            <div className="flex justify-between items-start">
              <div className="flex justify-around">
                <p>Notification</p>
              </div>

              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex-auto ml-5">
        {/* courses created and other courses */}
        <div className="block">
          {/* courses created */}
          <Card className="border-2">
            <CardBody>
              <div className="flex justify-between border-b-4 my-3">
                {/* activate */}
                <div className="flex text-gradient-to-r from-purple-400 via-purple-30 mx-8 my-5">
                  <FaUserGraduate />
                  <h4 className="font-bold">Courses Created</h4>
                </div>
                <div className="flex mx-8 my-5">
                  <p>Deactivate</p>
                  <Switch
                    onChange={handleSwitch}
                    checked={isActivated}
                    onColor="#9B51E0"
                    offColor="#4A90E2"
                    uncheckedHandleIcon={false}
                    checkedHandleIcon={false}
                  />
                  <p>Activate</p>
                </div>
              </div>

              <div>
                <div className="flex justify-top">
                  <div className="mr-6">
                    <Image src={videoHero} alt="video" />
                  </div>
                  <div className="mt-10">
                    <div>
                      <h4 className="font-bold text-2xl">
                        Elementary Crypto Trading
                      </h4>

                      {/* video prop */}
                      <div className="flex ">
                        <div className="flex ">
                          <FaPlay />
                          <p>Total play time: 2 hrs 35 mins</p>
                        </div>
                        <div className="flex ml-5 ">
                          <GrDiamond color="#2D3A4B" />
                          <p>Difficulty level: Elementary</p>
                        </div>
                      </div>

                      {/* rating and num of students */}
                      <div className="flex  items-center my-3">
                        <div className="flex items-center">
                          <IoIosStar color="#F6A61C" />
                          <IoIosStar color="#F6A61C" />
                          <IoIosStar color="#F6A61C" />
                          <IoIosStar color="#F6A61C" />
                          <IoIosStar />
                          <p className="font-bold">(281)</p>
                        </div>

                        <div className="flex text-center">
                          <div>
                            <HiBadgeCheck color="#2D3A4B" />
                          </div>
                          <p>Certificate issued:</p>
                          <p className="ml-5 font-bold">291 certification</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0"></CardFooter>
          </Card>
        </div>

        <div className="mt-12">
          {/* Learning journey */}
          <Card className="border-2">
            <CardBody>
              <div className="flex justify-between border-b-4 my-3">
                {/* activate */}
                <div className="flex text-gradient-to-r from-purple-400 via-purple-30 mx-8 my-5">
                  <h4 className="font-bold">My Learning Journey (4)</h4>
                </div>
                <div className="flex mx-8 my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>

                  <p className="underline">All</p>
                </div>
              </div>

              <div>
                <div className="flex justify-top">
                  <div className="mr-6">
                    <Image src={videoHero} alt="video" />
                  </div>

                  <div className="mt-10">
                    <div>
                      <h4 className="font-bold text-2xl">
                        Elementary Crypto Trading
                      </h4>

                      {/* video prop */}
                      <div className="flex ">
                        <div className="flex ">
                          <FaPlay />
                          <p>Total play time: 2 hrs 35 mins</p>
                        </div>
                        <div className="flex ml-5 ">
                          <GrDiamond color="#2D3A4B" />
                          <p>Difficulty level: Elementary</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <ProgressBar completed={48} />
                    </div>

                    <div>
                      <p>3/6 Lectures completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0"></CardFooter>
          </Card>

          <Card className="border-2">
            <CardBody>
              <div>
                <div className="flex justify-top">
                  <div className="mr-6">
                    <Image src={videoHero} alt="video" />
                  </div>
                  <div className="mt-10">
                    <div>
                      <h4 className="font-bold text-2xl">
                        Elementary Crypto Trading
                      </h4>

                      {/* video prop */}
                      <div className="flex ">
                        <div className="flex ">
                          <FaPlay />
                          <p>Total play time: 2 hrs 35 mins</p>
                        </div>
                        <div className="flex ml-5 ">
                          <GrDiamond color="#2D3A4B" />
                          <p>Difficulty level: Elementary</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <ProgressBar completed={60} />
                    </div>

                    <div>
                      <p>3/6 Lectures completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0"></CardFooter>
          </Card>

          <Card className="border-2">
            <CardBody>
              <div>
                <div className="flex justify-top">
                  <div className="mr-6">
                    <Image src={videoHero} alt="video" />
                  </div>
                  <div className="mt-10">
                    <div>
                      <h4 className="font-bold text-2xl">
                        Elementary Crypto Trading
                      </h4>

                      {/* video prop */}
                      <div className="flex ">
                        <div className="flex ">
                          <FaPlay />
                          <p>Total play time: 2 hrs 35 mins</p>
                        </div>
                        <div className="flex ml-5 ">
                          <GrDiamond color="#2D3A4B" />
                          <p>Difficulty level: Elementary</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <ProgressBar completed={55} />
                    </div>

                    <div>
                      <p>3/6 Lectures completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0"></CardFooter>
          </Card>

          <Card className="border-2">
            <CardBody>
              <div>
                <div className="flex justify-top">
                  <div className="mr-6">
                    <Image src={videoHero} alt="video" />
                  </div>
                  <div className="mt-10">
                    <div>
                      <h4 className="font-bold text-2xl">
                        Elementary Crypto Trading
                      </h4>

                      {/* video prop */}
                      <div className="flex ">
                        <div className="flex ">
                          <FaPlay />
                          <p>Total play time: 2 hrs 35 mins</p>
                        </div>
                        <div className="flex ml-5 ">
                          <GrDiamond color="#2D3A4B" />
                          <p>Difficulty level: Elementary</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <ProgressBar completed={30} />
                    </div>

                    <div>
                      <p>3/6 Lectures completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MyCourses
