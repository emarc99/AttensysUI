import React from 'react'
import Image from 'next/image'
import avatar from '@/assets/profile_pic.png'
import { RiShieldUserLine } from "react-icons/ri";


const Info = () => {
  return (
    <div className='h-auto py-6 w-full'>
        <div className='h-[100px] w-[80%] mx-auto flex items-center justify-between'>
                <div className='flex space-x-3 items-center'>
                        <div className='h-[77px] w-[77px] rounded-full border-[1px]'>
                            <Image src={avatar} alt='profile' className='h-full w-full object-cover' />
                        </div>
                        <div className='space-y-1'>
                            <h1 className='font-semibold text-[#5801A9] text-[18px] leading-[22px]'>vladanirocks@gmail.com</h1>
                            <p className='font-light text-[14px] text-[#2D3A4B] leading-[16px]'>vladanirocks@gmail.com</p>
                        </div>
                </div>

                <div className='h-[42px] w-[380px] border-[1px] border-[#6B6D6E] px-2 flex items-center space-x-2 justify-center rounded-xl'>
                    <RiShieldUserLine />
                    <h1 className='text-[14px] text-[#2D3A4B] font-medium leading-[21px]'>Status : Student  <span className='text-[#5801A9]'>  0x5c956e61...de5232dc11</span></h1>
                </div>
        </div>
    </div>
  )
}

export default Info