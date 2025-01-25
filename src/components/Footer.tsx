import React from 'react'
import { Button } from '@headlessui/react'
import Image from "next/image"
import Logo from "@/assets/Logo.svg"

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 justify-between mx-auto max-w-7xl px-4 py-7'>
      {/* Mobile and Desktop Left Section */}
      <div className='bg-[#161313] rounded-lg w-full lg:w-[40%] h-auto lg:h-[380px] flex flex-col text-white justify-center p-6 lg:pt-20'>
        <div className='space-y-4 w-full max-w-[480px]'>
          <h1 className='font-semibold text-2xl lg:text-[34px] leading-tight text-left'>
            Built by Geniuses, for Geniuses.
          </h1>
          <p className='font-normal text-base lg:text-[16px] leading-relaxed text-left'>
            Join 1000+ designers, innovators, and creators who have embraced excellence, innovation, and creativity.
          </p>
          <Button className="w-[154px] lg:w-[154px] rounded-lg bg-gradient-to-r from-[#9B51E0] to-[#4A90E2] py-2 px-4 lg:h-[56px] items-center text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            <div className="flex space-x-2 items-center font-semibold text-[16px]">
              <div>Get Started</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile and Desktop Right Section */}
      <div className='bg-[#F4E8FF] rounded-lg w-full lg:w-[58%] h-auto lg:h-[380px] p-6 lg:p-0'>
      <div className='flex flex-col lg:flex-row justify-between lg:w-[80%] lg:mx-auto lg:py-10'>
          <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-28'>
            {/* Product Column */}
            <div className='space-y-4'>
              <h1 className='text-[#8D8484] text-base font-medium'>Product</h1>
              <div className='space-y-3 text-sm font-medium'>
                {['Join Attensys', 'Verify certificates', 'Events', 'Certifications'].map((item) => (
                  <h1 key={item}>{item}</h1>
                ))}
              </div>
            </div>

            {/* Community Column */}
            <div className='space-y-4'>
              <h1 className='text-[#8D8484] text-base font-medium'>Community</h1>
              <div className='space-y-3 text-sm font-medium'>
                {['Attensys Community', 'Discord', 'Organizations', 'Get Support'].map((item) => (
                  <h1 key={item}>{item}</h1>
                ))}
              </div>
            </div>

            {/* Learn Column */}
            <div className='space-y-4'>
              <h1 className='text-[#8D8484] text-base font-medium'>Learn</h1>
              <div className='space-y-3 text-sm font-medium'>
                {['Courses', 'Bootcamps', 'Registration', 'Game Design'].map((item) => (
                  <h1 key={item}>{item}</h1>
                ))}
              </div>
            </div>
          </div>
          {/* Logo (hidden on mobile, visible on desktop) */}
          <div className='hidden lg:block'>
            <Image
              alt="Your Company"
              src={Logo}
              className="h-8 w-auto"
            />
          </div>

</div>
        {/* Footer Bottom Items */}
        <div className='flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-16 py-4 space-y-4 lg:space-y-0 font-semibold text-[13px]'>
        <Image
              alt="Your Company"
              src={Logo}
              className="h-8 w-auto mb-2 lg:hidden"
            />
          <div className='flex space-x-6 lg:space-x-24'>
            <h1>Privacy Policy</h1>
            <h1>Terms of Use</h1>
          </div>
        
          <div className='text-[#514A4A] font-[400]'>© 2024 with Attensys</div>
        </div>
      </div>
    </div>
  )
}

export default Footer