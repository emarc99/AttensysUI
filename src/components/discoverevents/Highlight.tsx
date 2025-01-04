import React from "react"
import Image from "next/image"
import { HighlightData } from "@/constants/data"
import Highlightcard from "./Highlightcard"

const Highlight = () => {
  return (
    <div className="mt-24 sm:h-[400px] sm:w-[87%] mx-auto block sm:flex justify-center sm:space-x-6 items-center sm:overflow-hidden mb-20">
      {HighlightData.map((data, index) => {
        return (
          <Highlightcard
            key={index}
            name={data.name}
            image={data.image}
            time={data.time}
          />
        )
      })}
    </div>
  )
}

export default Highlight
