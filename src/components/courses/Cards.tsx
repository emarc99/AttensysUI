import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardProps,
} from "@material-tailwind/react"

import robotImg from "../../assets/roboy.png"
import Image from "next/image"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { handleCourse } from "@/utils/helpers"
import { useRouter } from "next/navigation"

export function CardWithLink() {
  const router = useRouter()
  return (
    <Card
      className="mt-6 w-96 border-2"
      placeholder={undefined}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      onClick={(e) => handleCourse(e, e.currentTarget.textContent, router)}
    >
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="cursor-pointer"
      >
        <Image className="object-cover " alt="robot" src={robotImg} />
        <div className="flex justify-between items-start mt-4">
          {/* course prop  */}
          <div className="">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Elementary UI
            </Typography>
            <Typography
              className="text-white items-center gap-2 text-sm bg-[#5801A9] rounded p-1"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Tech Innovators Academy
            </Typography>
          </div>

          <div>
            {/* go to course */}
            <Button
              size="md"
              variant="text"
              className="items-center gap-2 bg-blue-400 ml-5 text-white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Go to course
            </Button>
          </div>
        </div>
      </CardBody>
      <CardFooter
        className="pt-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex items-center">
          {/* rating */}
          <div className="flex">
            <IoIosStar color="#F6A61C" />

            <IoIosStar color="#F6A61C" />
            <IoIosStar color="#F6A61C" />
            <IoIosStar color="#F6A61C" />
            <IoIosStar />
          </div>
          <p className="ml-8">1220 students</p>
        </div>
        <div>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Created by <span className="underline">Akinbola Kehinde</span>
          </Typography>
        </div>
      </CardFooter>
    </Card>
  )
}
