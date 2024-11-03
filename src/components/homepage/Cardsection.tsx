import React from 'react'
import Image from "next/image"
import grad from '@/assets/grad.svg'
import book from '@/assets/book.svg'
import badge from '@/assets/badge.svg'

const Cardsection = () => {
    const data = [
        {
            icon : grad,
            header : "Online Courses",
            paragraph: "Join & Schedule classes, webinars, and events easily. Attensys allows you to create and track participant engagement."
        },
        { 
            icon : book,
            header : "Event Tracking",
            paragraph: "Automatically track attendance for courses and events with our integrated tools. Issue, and verify certificates with ease."
        },
        { 
            icon : badge,
            header : "Quality Certification",
            paragraph: "Issue, and verify certificates with ease. Ensure every certificate is authenticated with our blockchain-backed technology."
        },
    ]
  return (
    <div className='mt-20 h-[260px] w-[90%] mx-auto hidden lg:flex justify-center space-x-6'>     
       {data.map((item, index) => (            
       <div className='w-[424px] h-[190px] bg-[#FFFFFF] rounded-xl shadow-lg flex justify-center items-center space-x-4'>
        <Image
            alt="icon"
            src={item?.icon}
            className="size-6 text-[#9747FF] w-[46px] h-[46px] my-auto"
          />
        <div className='space-y-2 w-[270px]'>
            <h1 className='text-[18px] text-[#2D3A4B] font-bold'>{item.header}</h1>
            <p className='text-[14px] text-[#2D3A4B] font-light'>{item.paragraph}</p>
        </div>
        </div>
    ))}
    </div>
  )
}

export default Cardsection