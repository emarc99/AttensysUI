import React from 'react'
import Image from 'next/image'
import moon from '@/assets/material.svg'
import upcoming from '@/assets/discoverlight.svg'
import top from '@/assets/top.svg'
import { useRouter } from 'next/navigation'


const Discoversection = () => {
  const router = useRouter();
  
  const handlerouting = () => {
    router.push('/Events/events')
  }
//   const handleDiscover = () => {
//     router.push('/Discoverevent')

//   }
  
  return (
    <div className='h-[100px] clg:h-[80px] lg:[70px] lclg:[60px] flex justify-between w-[90%] mx-auto items-center'>
        <div className='flex w-[450px] clg:w-[500px] lclg:w-[500px] space-x-8 items-center'>
        <div className='flex space-x-3 items-center cursor-pointer'onClick={handlerouting}>
            <Image src={moon} alt='moon' />
            <h1 className='text-[#FFFFFF] text-[16px]'>My Events</h1>
            </div>
            <div className="w-[1px] h-[24px] bg-[#9B51E0]"></div>

            <div className='flex space-x-3 items-center cursor-pointer'>
            <Image src={upcoming} alt='moon' />
            <h1 className='text-[#FFFFFF] text-[16px]'>Discover Attensys events</h1>
            </div>
            
        </div>
        <Image src={top} alt='moon' />
    </div>
  )
}

export default Discoversection