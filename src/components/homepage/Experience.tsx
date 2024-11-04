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
    <div className='h-[520px] w-[100%] hidden lg:flex'>
    <Image alt="icon" src={settings} className="absolute lg:top-[252%] lg:left-[25%] clg:top-[300%] clg:left-[26%] lclg:top-[345%] lclg:left-[25%]"/>
    <Image
        alt="icon"
        src={slash}
        className="absolute lg:top-[260.5%] lg:left-[15%] clg:top-[308%] clg:left-[12%] lclg:top-[355%] lclg:left-[10%]"
    />
    <Image
        alt="icon"
        src={study}
        className="absolute lg:top-[278%] lg:left-[10%] clg:top-[340%] clg:left-[14%] lclg:top-[390%] lclg:left-[13%] lg:w-[52px] clg:w-[45px]"
    />
    <Image
        alt="icon"
        src={success}
        className="absolute lg:top-[282%] lg:left-[35%] clg:top-[332%] clg:left-[35%] lclg:top-[385%] lclg:left-[34%]"
    />
    <Image
        alt="icon"
        src={smiling}
        className="absolute lg:top-[295%] lg:left-[22%] clg:top-[345%] clg:left-[24%] lclg:top-[400%] lclg:left-[24%]"
    />

    
    <Image
        alt="icon"
        src={grad}
        className="absolute lg:top-[252%] lg:right-[10%] clg:top-[305%] clg:right-[7%] lclg:top-[350%] lclg:right-[6%] text-[#699BF7]"
    />
    <Image
        alt="icon"
        src={headshot}
        className="absolute lg:top-[252%] lg:right-[35%] clg:top-[305%] clg:right-[32%] lclg:top-[350%] lclg:right-[30%]"
    />
    <Image
        alt="icon"
        src={slash}
        className="absolute lg:top-[271%] lg:right-[41%] clg:top-[320%] clg:right-[41%] lclg:top-[370%] lclg:right-[42%] lg:w-[43px] lg:h-[35px]"
    />
    <Image
        alt="icon"
        src={phsyician}
        className="absolute lg:top-[298%] lg:right-[20%] clg:top-[355%] clg:right-[18%] lclg:top-[410%] lclg:right-[15%]"
    />
    <Image
        alt="icon"
        src={young}
        className="absolute lg:top-[265%] lg:right-[15%] clg:top-[315%] clg:right-[15%] lclg:top-[360%] lclg:right-[15%]"
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