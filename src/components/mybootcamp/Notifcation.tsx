import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import Notifycard from './Notifycard';



const Notifcation = () => {
  return (
    <div className='mt-4 w-[80%] mx-auto h-auto rounded-xl bg-[#FFFFFF] border-[1px] border-[#D9D9D9] py-3'>
            <div className='h-[80px] w-full border-b-[1px] border-b-[#D9D9D9] flex justify-between px-10 items-center'>
                <div className='flex space-x-3 items-center justify-center'>
                <IoMdNotificationsOutline className='h-[23px] w-[23px] text-[#5801A9]' />
                <h1 className='font-medium text-[18px] leading-[26px] text-[#333333]'>Notifications</h1>
                </div>

                <div className='flex space-x-3 items-center justify-center'>
                    <h1 className='font-medium text-[13px] leading-[17px] text-[#5801A9] underline'>See all notifications</h1>
                    <IoCloseCircleOutline className='h-[23px] w-[23px] text-[#333333]'/>
                </div>
            </div>

            <div className='w-[80%] h-auto mt-3 mx-auto'>
            <Notifycard />
            <Notifycard />
            <Notifycard />
            <Notifycard />
            <Notifycard />

            </div>
    </div>
  )
}

export default Notifcation