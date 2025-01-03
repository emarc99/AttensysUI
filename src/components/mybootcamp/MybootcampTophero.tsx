import React from 'react'
import Image from 'next/image'
import flier from '@/assets/flierd.svg'
import { Button } from '@headlessui/react'
import { LuCalendarDays } from "react-icons/lu";
import { RiEditFill } from "react-icons/ri";
import { FiLink } from "react-icons/fi";
import { useRouter } from 'next/navigation';




const MybootcampTophero = (props: any) => {
    const router = useRouter();

const handleroute = () =>{
    router.push(`/Register/${props.bootcampname}`)
}

  return (
    <div className='h-[261px] w-[90%] mx-auto flex justify-between items-center rounded-xl'>
        <div className='h-full w-[20%] rounded-xl'>
            <Image src={flier} alt='flier' className='h-full w-full object-cover rounded-xl' />
        </div>
        <div className={`bg-[url('/dashbordbg.svg')] h-full w-[78%] rounded-xl bg-cover px-10 space-y-20 flex flex-col justify-center`}>
            <div className='flex justify-between'>
            <div className='space-y-1'>
                <h1 className='text-[#FFFFFF] text-[16px] leading-[22px] font-medium'>Bootcamp ID</h1>
                <h1 className='text-[#FFFFFF] text-[18px] leading-[25px] font-black'>XCODE Launch 24</h1>
                <h1 className='text-[#FFFFFF] text-[15px] leading-[22px] font-black'> Lead tutor  -  <span className='font-light'>@ vladamirocks@gmail.com</span></h1>
            </div>
            <Button className="h-[49px] w-[179px] flex items-center space-x-2 justify-center bg-[#FFFFFF] rounded-xl">
                <FiLink className='text-[#9747FF] h-[17px] w-[17px]' />
                <h1 className='text-[#2D3A4B] text-[14px] leading-[19px] font-bold'>Enter Class</h1>
            </Button>
            </div>

            <div className='space-y-1'>
                <div className='flex items-center space-x-2'>
                <h1 className='text-[#FFFFFF] text-[16px] leading-[22px] font-medium'>Schedule</h1>
                <div className='h-[7px] w-[7px] rounded-full bg-[#DC1D16]'></div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex space-x-1 items-center'>
                    <LuCalendarDays className='text-[#FFFFFF] h-[21px] w-[19px]' />
                    <h1 className='text-[#FFFFFF] text-[16px] leading-[22px] font-medium'>Today  |  9:00am GMT </h1>
                    </div>
                   
                    <div className='flex space-x-1 items-center cursor-pointer' onClick={handleroute}>
                    <h1 className='text-[#FFFFFF] text-[17px] leading-[25px] font-black'>Go to bootcamp page</h1>
                    <RiEditFill className='text-[#FFFFFF] h-[21px] w-[21px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MybootcampTophero