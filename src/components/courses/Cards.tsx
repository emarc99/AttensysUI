import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardProps,
} from "@material-tailwind/react"

import robotImg from "../../assets/robot.svg"
import Image from "next/image"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { handleCourse } from "@/utils/helpers"
import { useRouter } from "next/navigation"

export function CardWithLink() {
  const router = useRouter()
  return (
    <div
      className="mt-6 w-[100%] sm:w-[65%] border-2 rounded-xl shadow-lg pb-8"
      onClick={(e) => handleCourse(e, e.currentTarget.textContent, router)}
    >
      <div className="cursor-pointer">
        <Image className="object-cover" alt="robot" src={robotImg} />
        <div className="flex justify-between mt-4 px-2 ">
          {/* course prop  */}
          <div className="">
            <p className="mb-2">Elementary UI</p>
            <p className="text-white items-center gap-2 text-sm bg-[#5801A9] my-3 rounded p-1">
              Tech Innovators Academy
            </p>
          </div>

          <div>
            {/* go to course */}
            <button className="rounded-lg text-xs px-2 py-2 items-center bg-blue-400 text-white">
              Go to course
            </button>
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="flex items-center ">
          {/* rating */}
          <div className="flex">
            <IoIosStar color="#F6A61C" />

            <IoIosStar color="#F6A61C" />
            <IoIosStar color="#F6A61C" />
            <IoIosStar color="#F6A61C" />
            <IoIosStar />
          </div>
          <p className="ml-8"> <span className="text-[#5801A9]">1220</span> students</p>
        </div>
        <div></div>
        <p className="mt-2 text-sm">
          Created by <span className="underline">Akinbola Kehinde</span>
        </p>
      </div>
      <div />
    </div>
  )
}
