import React from 'react'
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
  import StarRating from './StarRating'

interface favoritecourseprop {
    title : string,
    name : string,
    numberofstudent : number,
    instructor : string
    flier : any,
    stars : number
}

const FavoriteCourseCard : React.FC<favoritecourseprop> = (props) => {
  return (
    <Card
    className="mt-6 w-96 border-2"
    placeholder={undefined}
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
    <CardBody
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Image className="object-cover " alt="robot" src={props.flier} />
      <div className="flex justify-between items-start mt-4">
        {/* course prop  */}
        <div >
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-[14px] font-bold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
           {props.title}
          </Typography>
          <Typography
            className="text-white items-center text-sm bg-[#5801A9] text-[12px] font-extrabold rounded p-1"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {props.name}
          </Typography>
        </div>

        <div>
          {/* go to course */}
          <Button
            size="md"
            variant="text"
            className="items-center gap-2 bg-blue-400 ml-5 text-white text-[12px] font-semibold"
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
        <StarRating  totalStars={5} starnumber={props.stars} />
        <p className="ml-8 text-[14px] font-medium text-[#2D3A4B]"><span className='text-[#A01B9B]'> {props.numberofstudent}</span> students</p>
      </div>
      <div>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-sm mt-3"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Created by <span className="underline">{props.instructor}</span>
        </Typography>
      </div>
    </CardFooter>
  </Card>
  )
}

export default FavoriteCourseCard