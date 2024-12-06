import React from 'react'
import dottedcircle from '@/assets/dottedcircle.svg'
import trophy from '@/assets/trophy.svg'
import Image from 'next/image'
import { Button } from '@headlessui/react'
import { useRouter } from 'next/navigation'

const Congratulations = () => {

    const router = useRouter();

    const handlerouting = (prop : string) =>{
        router.push(`/Organization/${prop}`)
    }


  return (
    <div className='h-[600px] w-full flex flex-col items-center space-y-12'>
         <div className='flex justify-center items-center'>
            <Image src={dottedcircle} alt='circle' />
            <Image src={trophy} alt='trophy' />
         </div>

        <div className='space-y-3 flex flex-col items-center'>
        <Button onClick={()=>{handlerouting("sample-org")}} className="w-[342px] h-[47px] flex justify-center items-center text-[#FFFFFF] text-[14px] font-bold leading-[16px] bg-[#4A90E2] rounded-xl">Create your first bootcamp</Button>
        <p className='text-[14px] text-[#5801A9] cursor-pointer font-light leading-[23px]'>View public profile</p>
        </div>
           
    </div>
  )
}

export default Congratulations