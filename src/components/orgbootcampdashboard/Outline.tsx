import React from 'react'
import OutlineCard from './OutlineCard'
import { FaPlus } from "react-icons/fa6";

const Outline = () => {
  return (
    <div className='w-[90%] h-[721px] bg-[#FFFFFF] mx-auto rounded-xl border-[#D2D2D2] border-[1px] px-7 overflow-y-scroll'>
        
        <OutlineCard />
        <OutlineCard />
        <OutlineCard />
    <div className='flex items-center justify-center space-x-4 border-b-[1px] mt-2 h-[80px]'>
     <FaPlus />
    <h1 className='font-medium text-[16px] leading-[22px] underline'>Add new class </h1>
    </div>
    </div>
  )
}

export default Outline