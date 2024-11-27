import React from 'react'
import settings from '@/assets/settings.png'
import Image from 'next/image'
import slash from '@/assets/slash.svg'
import study from '@/assets/study.svg'
import success from '@/assets/success.svg'
import smiling from '@/assets/smiling.svg'
import { Button } from '@headlessui/react'
import  school from '@/assets/school.svg'
import grad from '@/assets/bluegrad.svg'
import headshot from '@/assets/headshot.svg'
import phsyician from '@/assets/physician.svg'
import young from '@/assets/young.svg'


//@todo make absolute positions responsive

const Experience = () => {
  return (
    <div className='h-[520px] w-[100%] hidden lg:flex relative'>
    <Image alt="icon" src={settings} className="absolute left-[25%]"/>
    <Image
        alt="icon"
        src={slash}
        className="absolute left-[12%] top-[13%]"
    />
    <Image
        alt="icon"
        src={study}
        className="absolute bottom-[35%] left-[10%]"
    />
    <Image
        alt="icon"
        src={success}
        className="absolute bottom-[25%] left-[35%]"
    />
    <Image
        alt="icon"
        src={smiling}
        className="absolute bottom-[15%] left-[23%]"
    />

    
    <Image
        alt="icon"
        src={grad}
        className="absolute right-[10%] text-[#699BF7]"
    />
    <Image
        alt="icon"
        src={headshot}
        className="absolute right-[35%]"
    />
    <Image
        alt="icon"
        src={slash}
        className="absolute right-[10%] bottom-[17%]"
    />
    <Image
        alt="icon"
        src={phsyician}
        className="absolute right-[22%] bottom-[10%] "
    />
    <Image
        alt="icon"
        src={young}
        className="absolute right-[15%] top-[20%] "
    />
      <Image
        alt="icon"
        src={slash}
        className="absolute right-[42%] top-[30%] "
    />
        <div className='w-[60%] flex justify-center mt-24'>
            <p className='w-[353px] h-[156px] text-[24px] font-bold text-[#2D3A4B]'>Experience a new standard of professional growth and skill development with <span className='text-[#9B51E0]'>AttenSys Bootcamps.</span></p>
        </div>
       
        <div className='w-[40%] mt-48'>
            <p className='w-[490px] h-[156px] text-[24px] font-bold text-[#2D3A4B]'>Our <span className='text-[#4A90E2]'>bootcamps</span> are designed for learners seeking high-impact, career-advancing courses hosted by Industry Leaders</p>
            <Button className="hidden lg:flex rounded-lg bg-gradient-to-r from-[#9B51E0] to-[#4A90E2] py-2 px-4 lg:h-[50px] items-center lg:w-[200px] text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                       <div className="flex space-x-4 items-center font-semibold text-[16px]">
                            <Image 
                                src={school}
                                alt='ticket'
                                className='mr-2'
                            />
                       </div>
                        <div>
                        Explore Bootcamps          
                        </div>

                    </Button>
        </div>
        
    </div>
  )
}

export default Experience