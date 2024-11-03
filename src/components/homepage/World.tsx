import React from 'react'
import plane from '@/assets/plane.svg'
import thoughts from '@/assets/thoughts.png'
import Image from "next/image"


const World = () => {
  return (
    <div className='h-[500px] w-[90%] mx-auto hidden lg:flex my-4'>
            <div className='w-[60%] items-center flex'>
                <div className='w-[80%] mx-auto'>
                <h1 className='text-[30.19px] font-bold text-[#2D3A4B] mb-5'>Atten<span className='text-[#A666E3]'>sys</span> Courses</h1>
                <p className='text-[17px] font-light text-[#2D3A4B] leading-[22px] mb-10'>Simplifying certificate issuance, attendance tracking, and online course 
                    management for schools, organizations, and event managers.</p>
                <li className='text-[17px] font-light text-[#9B51E0] leading-[22px] mb-10'><span className='text-[#2D3A4B]'>Take and get Certified in</span> professional courses & Top-tier skillsets from all over the world</li>
                <li className='text-[17px] font-light text-[#9B51E0] leading-[22px] mb-10'>AttenSys <span className='text-[#2D3A4B]'>is built with top-tier security protocols, including encryption and blockchain technology, to ensure that your data and certificates are safe.</span></li>
                </div>
              
            </div>
            <div className='w-[40%]'>
                <Image
                    alt="icon"
                    src={thoughts}
                    className="absolute"
                />
                   <Image
                    alt="icon"
                    src={plane}
                    className="absolute w-[350px] h-[350px] ml-64 mt-28"
                />
            </div>
    </div>
  )
}

export default World