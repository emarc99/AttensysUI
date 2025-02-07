import React from 'react'
import Image from 'next/image'
import moon from '@/assets/moon.svg'
import upcoming from '@/assets/upcoming.svg'
import top from '@/assets/top.svg'
import { useRouter } from 'next/navigation'
import { Button } from '@headlessui/react'
import edit from '@/assets/edit.svg'
import goto from '@/assets/goto.svg'

const OverviewDiscover = (props: any) => {
  const router = useRouter();

  const handlerouting = () => {
    router.push('/Events/events')
  }
  const handleEventPage = () => {
    router.push(`/Eventpage/${props.eventsname}`)
  }

  const handleDiscover = () => {
    router.push('/Discoverevent')

  }

  return (
    <div className='h-[180px] clg:h-[80px] lg:h-[70px] lclg:h-[60px] flex flex-col lg:flex-row justify-around w-[90%] mx-auto items-start lg:items-stretch'>
      <div className="overflow-x-auto whitespace-nowrap w-full">
        <div className='flex min-w-max space-x-4 items-center px-4'>
          <div onClick={handleDiscover} className='flex space-x-3 items-center cursor-pointer'>
            <Image src={moon} alt='moon' />
            <h1>Discover</h1>
          </div>
          <div className="w-[1px] h-[24px] bg-[#9B51E0]"></div>
          <div className='flex space-x-3 items-center cursor-pointer' onClick={handlerouting}>
            <Image src={upcoming} alt='moon' />
            <h1>My Events</h1>
          </div>
          <div className="w-[1px] h-[24px] bg-[#9B51E0]"></div>
          <div className='flex space-x-3 items-center cursor-pointer'>
            <h1>{props.eventsname}</h1>
          </div>
        </div>
      </div>
      <div className='space-x-3 md:space-x-6 flex items-center'>
        <Button className="flex rounded-lg bg-[#4A90E21F] hover:bg-sky-500 active:bg-sky-700 py-2 px-4 lg:h-[42px] items-center w-[138px] text-sm text-[#5801A9]">
          <div className="space-x-4 items-center font-semibold text-[16px]">
            <Image src={edit} alt="ticket" className="mr-2" />
          </div>
          <div>Edit Event</div>
        </Button>
        <Button onClick={handleEventPage} className="justify-center flex rounded-lg bg-[#2D3A4B] py-2 px-4 lg:h-[42x] items-center w-[147px] text-sm text-[#FFFFFF] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
          <div>Event Page</div>
          <div className="flex space-x-4 items-center font-semibold text-[16px]">
            <Image src={goto} alt="ticket" className="" />
          </div>
        </Button>
        <Image src={top} alt='moon' className='hidden md:block' />
      </div>

    </div>
  )
}

export default OverviewDiscover