import React, { useState } from 'react'
import Image from 'next/image'
import bootlog from '@/assets/bootlog.svg'
import ramp from '@/assets/ramplog.svg'
import { Button } from '@headlessui/react'
import Modal from '../eventdetails/Modal'


const Sponsors = () => {
 const [modal, setModal] = useState(false);

 const handlemodal = () =>{
    setModal(!modal)
 }
    return (
        <>
            {modal && <Modal status={modal} />}
    <div className='h-auto w-auto px-10 mt-4 space-y-3 py-8' onClick={handlemodal}>
        <h1 className='text-[18px] text-[#2D3A4B] font-semibold'>Sponsors</h1>
        <div className='flex space-x-10'>
            <div className='flex space-x-2 items-center'>
                <div className='h-[48px] w-[48px] rounded-xl'>
                <Image src={bootlog} alt='logo' className='h-full w-full object-cover'/>
                </div>
                <h1 className='text-[16px] text-[#2D3A4B] font-semibold'>Cryptotesters</h1>
            </div>
            <div className='flex space-x-2 items-center'>
                <Image src={ramp} alt='logo'/>
                <h1 className='text-[16px] text-[#2D3A4B] font-semibold'>Ramp</h1>
            </div>
        </div>
        
        <Button className='h-[47px] w-[241px] bg-[#9B51E0] rounded-xl flex justify-center items-center text-[#FFFFFF] text-[14px] font-semibold mt-10'>Sponsor this event</Button>
    </div>
        </>
  )
}

export default Sponsors