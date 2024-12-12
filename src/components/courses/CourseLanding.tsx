import React from "react"
import { useRouter } from "next/navigation"
import LecturePage from "./LecturePage"

const CourseLanding = (props: any) => {
  const router = useRouter()

  const handleCourse = () => {
    router.push(`/coursepage/${props.course}`)
  }
  return (
    <div className="h-auto w-full bg-[#F5F7FA]">
      {/* <Eventdetailsdiscover name={props.name} />
  <Details /> */}
      {/* <h1>{props.course}</h1> */}
      <LecturePage course={props.course} />
    </div>
  )
}

export default CourseLanding
