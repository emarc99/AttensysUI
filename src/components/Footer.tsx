import React from 'react'
import { Button } from '@headlessui/react'
import Image from "next/image"
import Logo from "@/assets/Logo.svg"


const Footer = () => {
  return (
    <div className='flex space-x-4 justify-between mx-4 py-10  w-[98%]'>
            <div className='bg-[#161313] rounded-lg w-[40%] h-[380px] hidden lg:flex text-white justify-center pt-20'>
                   <div className='h-[384px] space-y-2 '>
                   <h1 className='font-semibold text-[34px] leading-[40px] flex text-left w-[320px]'>Built by Geniuses, for Geniuses.</h1>
                    <p className='font-normal text-[16px] leading-[23px] flex text-left w-[480px] pb-10'>Join 1000+ designers, innovators, and creators who have embraced excellence, innovation, and creativity.</p>
                    <Button className="hidden lg:flex rounded-lg bg-gradient-to-r from-[#9B51E0] to-[#4A90E2] py-2 px-4 lg:h-[56px] items-center lg:w-[154px] text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                       <div className="flex space-x-2 items-center font-semibold text-[16px]">
                        <div>
                        Get Started             
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                       </div>

                    </Button>
                   </div>
                   
            </div>

            <div className='bg-[#F4E8FF] rounded-lg w-[58%] h-[380px] hidden lg:flex'>
                        <div className='flex justify-between w-[80%] mx-auto py-10'>
                                    <div className='flex space-x-28'>
                                                <div className='space-y-10'>
                                                    <h1 className='text-[19x] text-[#8D8484] leading-[18px] font-medium'>Product</h1>
                                                    <div className='space-y-6 text-[13px] font-medium leading-[18px]'>
                                                        <h1>Join Attensys</h1>
                                                        <h1>Verify certificates</h1>
                                                        <h1>Events</h1>
                                                        <h1>Certifcations</h1>
                                                    </div>
                                                </div>
                                                <div className='space-y-10'>
                                                    <h1 className='text-[19x] text-[#8D8484] leading-[18px] font-medium'>Community</h1>
                                                    <div className='space-y-6 text-[13px] font-medium leading-[18px]'>
                                                        <h1>Attensys Community</h1>
                                                        <h1>Discord</h1>
                                                        <h1>Organizations</h1>
                                                        <h1>Get Support</h1>
                                                    </div>
                                                </div>
                                                <div className='space-y-10'>
                                                    <h1 className='text-[19x] text-[#8D8484] leading-[18px] font-medium'>Learn</h1>
                                                    <div className='space-y-6 text-[13px] font-medium leading-[18px]'>
                                                        <h1>Courses</h1>
                                                        <h1>Bootcamps</h1>
                                                        <h1>Registeration</h1>
                                                        <h1>Game Design</h1>
                                                    </div>
                                                </div>
                                    </div>
                                    <Image
                                            alt="Your Company"
                                            src={Logo}
                                            className="h-8 w-auto"
                                            />
                                 </div>
                                
                                <div className='flex justify-between w-[50%] mx-16 absolute mt-72 font-semibold text-[13px]'>
                                        <div className='flex space-x-24'>
                                            <h1>Privacy Policy</h1>
                                            <h1>Terms of Use</h1>
                                        </div>
                                        <div>© 2024 with Attensys</div>
                                </div>
                       
            </div>
    </div>
  )
}

export default Footer