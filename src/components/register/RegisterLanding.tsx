import React from 'react'
import Image from 'next/image';
import largeflier from '@/assets/largeflier.svg'
import { FaTags } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegHourglass } from "react-icons/fa";




const RegisterLanding = ( props : any) => {
    const decodedName = decodeURIComponent(props.regname);
  return (
    <div className='bg-[#f4f7f9] w-full h-auto py-10'>
        <div className='flex space-x-3 px-10 items-center text-[16px] text-[#5801A9] leading-[22px] font-medium'>
            <h1 >Explore Bootcamp</h1>
            <div className='h-[18px] w-[1px] border-[1px] border-[#5801A9]'></div>
            <h1>{decodedName}</h1>
        </div>
        <div className='h-[590px] w-full px-10 flex justify-between items-center mt-6'>
            <div className='h-[590px] w-[40%] rounded-lg space-x-4 '>
            <Image src={largeflier} alt='flier' className='h-full w-full object-cover rounded-lg' />
            </div>
            <div className='w-[57%] h-[590px] rounded-lg bg-[#FFFFFF] border-[1px] border-[#B8B9BA]'>
                <div className='px-12 flex justify-between h-[100px] items-center border-b-[1px] border-b-[#B8B9BA]'>
                    <h1 className='text-[#5801A9] text-[28px] leading-[31px] font-semibold'>XCODE Launch</h1>
                    <div className='flex space-x-3 bg-[#4A90E2] h-[50px] w-[229px] rounded-lg items-center justify-center'>
                        <FaTags className='h-[17px] w-[17px] text-[#FFFFFF]' />
                        <h1 className='text-[14px] leading-[16px] text-[#FFFFFF] font-semibold'>Register Now (23USDT)</h1>
                    </div>
                </div>
                <div className='flex space-x-14 mt-6'>
                    <div className='px-10 space-y-2'>
                        <div className='flex space-x-2 items-center'>
                            <CiCalendarDate className='h-[22px] w-[22px]' /> 
                            <h1 className='text-[14px] text-[#2D3A4B] leading-[21px] font-light'>Bootcamp Date  </h1>
                        </div>
                            <h1 className='text-[16px] text-[#2D3A4B] leading-[22px] font-medium'>27th - 30th Nov, 2024</h1>
                    </div>

                    <div className='px-10 space-y-2'>
                        <div className='flex space-x-2 items-center'>
                            <CiCalendarDate className='h-[22px] w-[22px]' /> 
                            <h1 className='text-[14px] text-[#2D3A4B] leading-[21px] font-light'>Lead Instructor </h1>
                        </div>
                            <h1 className='text-[16px] text-[#2D3A4B] leading-[22px] font-medium'>David Kehinde </h1>
                    </div>


                </div>

                <div className='flex space-x-32 mt-8'>
                    <div className='px-10 space-y-2'>
                        <div className='flex space-x-2 items-center'>
                            <IoTimeSharp className='h-[22px] w-[22px]' /> 
                            <h1 className='text-[14px] text-[#2D3A4B] leading-[21px] font-light'>Time</h1>
                        </div>
                            <h1 className='text-[16px] text-[#2D3A4B] leading-[22px] font-medium'>9:00am  daily</h1>
                    </div>

                    <div className='px-10 space-y-2'>
                        <div className='flex space-x-2 items-center'>
                            <IoPeopleSharp className='h-[22px] w-[22px]' /> 
                            <h1 className='text-[14px] text-[#2D3A4B] leading-[21px] font-light'>Bootcamp capacity</h1>
                        </div>
                            <h1 className='text-[16px] text-[#5801A9] leading-[22px] font-medium'>120/200</h1>
                    </div>
                </div>

                <div className='flex mt-8'>
                    <div className='px-10 space-y-2'>
                        <div className='flex space-x-2 items-center'>
                            <FaRegHourglass className='h-[22px] w-[22px]' /> 
                            <h1 className='text-[14px] text-[#2D3A4B] leading-[21px] font-light'>Registeration Deadline</h1>
                        </div>
                            <h1 className='text-[32px] text-[#5801A9] leading-[48px] font-bold'>2:59:59</h1>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterLanding