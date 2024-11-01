import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import robotImg from "../../assets/roboy.png"
import Image from "next/image"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"

export function CardWithLink() {
  return (
    <Card className="mt-6 w-96 border-2">
      <CardBody>
        <Image className="object-cover " alt="robot" src={robotImg} />
        <div className="flex justify-between items-start mt-4">
          {/* course prop  */}
          <div className="">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Elementary UI
            </Typography>
            <Typography className="text-white items-center gap-2 text-sm bg-[#5801A9] rounded p-1">
              Tech Innovators Academy
            </Typography>
          </div>

          <div>
            {/* go to course */}
            <Button
              size="md"
              variant="text"
              className="items-center gap-2 bg-blue-400 ml-5 text-white"
            >
              Go to course
            </Button>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
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
          <Typography variant="p" color="blue-gray" className="mb-2">
            Created by <span className="underline">Akinbola Kehinde</span>
          </Typography>
        </div>
      </CardFooter>
    </Card>
  )
}
