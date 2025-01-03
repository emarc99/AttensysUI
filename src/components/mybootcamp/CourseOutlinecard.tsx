import React from 'react'
import { HiMiniCheckBadge } from "react-icons/hi2";
import Image from 'next/image';
import classvid from '@/assets/classtsest.svg'
import { IoMdCalendar } from "react-icons/io";
import { GoEye } from "react-icons/go";
import { MdOutlineAssignment } from "react-icons/md";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePending } from "react-icons/md";
import { AiFillSignature } from "react-icons/ai";
import { PiVideo } from "react-icons/pi";




const CourseOutlinecard = (props: any) => {
    
  return (
    <div className='flex justify-between h-[190px] w-full mt-2 border-b-[1px] border-b-[#ABABAB52]'>
    <div className='flex space-x-6 items-center '>
    {props.status ? <HiMiniCheckBadge className='h-[25px] w-[25px] text-[#1BA74C]' /> : <MdOutlinePending className='h-[25px] w-[25px] text-[#D86D6A]'/> }
    
    <div className='h-[126px] w-[188px]'>
    <Image src={classvid} alt='classvid' className='h-full w-full object-cover' />
    </div>
    <div className='space-y-3'>
        <div className='flex space-x-1'>
            <div className='h-[33px] w-[85px] rounded-lg space-x-1 flex items-center justify-center bg-[#2D3A4B]'>
            <IoMdCalendar className='h-[15px] w-[14px] text-[#FFFFFF]' />
            <h1 className='text-[#FFFFFF] text-[11px] leading-[17px] font-medium'>Day 1</h1>
            </div>

            <div className='flex space-x-2 items-center justify-center h-[33px] w-[85px]'>
            <GoEye className='w-[21px] h-[21px] text-[#2D3A4B]' />
            <h1 className='text-[15px] text-[#2D3A4B] font-medium leading-[21px]'>301</h1>
            </div>
            
        </div>
        <h1 className='text-[#2D3A4B] text-[16px] leading-[22px] font-medium'>Class 1 : Introduction to Xcode database</h1>
        <div className='flex space-x-6'>
             <div className='space-x-1 flex items-center justify-center'>
            <PiVideo className='text-[#4A90E2] h-[25px] w-[25px]'/>
            <h1  className='text-[#4A90E2] text-[16px] leading-[22px] font-medium underline'>Watch class</h1>
            </div>
            <div className='space-x-1 flex items-center justify-center'>
            <MdOutlineAssignment className='text-[#9747FF] h-[20px] w-[20px]'/>
            <h1  className='text-[#9B51E0] text-[16px] leading-[22px] font-medium underline'>1 assignment</h1>
            </div>
            <div className='space-x-1 flex items-center justify-center'>
            <BsFillFileEarmarkSpreadsheetFill className='text-[#9747FF] h-[20px] w-[20px]'/>
            <h1  className='text-[#9B51E0] text-[16px] leading-[22px] font-medium underline'>1 resource</h1>
            </div>
         
        </div>
    </div>
    </div>

    <div className='space-y-3 flex flex-col items-center justify-center'>
        <div className='flex space-x-2 justify-center items-center'>
        <IoMdCalendar className='h-[25px] w-[25px] text-[#2D3A4B]' />
            <h1 className='text-[15px] text-[#2D3A4B] font-medium leading-[21px]'>23rd Nov, 2024  |  9:00am GMT</h1>
        </div>
        <h1 className='text-[15px] text-[#2D3A4B] font-light leading-[21px]'> <span className='text-[#5801A9] font-semibold'>Lead tutor</span>  -  @ vladamirocks@gmail.com</h1>
        <h1 className='text-[15px] font-medium text-[#8176766E] leading-[22px]'>Meeting  - https://us05web.zoom.us/j/...</h1>
     { props.status  ? <div className='flex space-x-3 items-center'>
        <HiMiniCheckBadge className='h-[25px] w-[25px] text-[#1BA74C]' />
        <h1 className='text-[14px] font-medium text-[#1BA74C] leading-[22px]'>Attendance signed</h1>
        </div> :
        <div className='h-[43px] w-[190px] rounded-xl bg-[#4A90E21F] border-[1px] border-[#4A90E2] space-x-3 flex items-center justify-center'>
        <AiFillSignature />
        <h1 className='text-[14px] font-medium text-[#2D3A4B] leading-[22px]'>Sign attendance</h1>
        </div>}
    </div>

   </div>
  )
}

export default CourseOutlinecard