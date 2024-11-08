import React, { useState } from 'react'
import Image from 'next/image'
import blucecirle from '@/assets/bluecircle.svg'
import {Calendar} from "@nextui-org/react";
import type {DateValue} from "@react-types/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";
import eventlog from '@/assets/eventlogo.svg'
import location from '@/assets/location.svg'
import fire from '@/assets/fire.svg'


interface MyeventCardProp {
    todaydate : string,
    time : string,
    eventname : string,
    host : string,
    location: string
}


const Eventcard : React.FC<MyeventCardProp> = (props)  => {
    let defaultDate = today(getLocalTimeZone());
    // let [focusedDate, setFocusedDate] = useState<DateValue>(defaultDate);

  return (
    <div className='w-[80%] mx-auto h-[250px] flex space-x-16 mt-16  justify-center '>
                        <div className='flex flex-col items-center space-y-1'>
                            <Image src={blucecirle} alt='circle' />
                            <div className='h-[312px] w-[1px] bg-[#4e556b]'></div>
                        </div>

                        <div className='space-y-8'>
                            <h1 className='text-[16px] text-[#FFFFFF] font-medium leading-[22px]'>{props.todaydate}</h1>
                            <div className='h-[205px] w-[747px] rounded-xl border border-[#FFFFFF9E] bg-[#3F3F3F52] shadow-2xl flex justify-between px-14 py-7'>
                                    <div className='space-y-2'>
                                        <p className='font-medium text-[16px] leading-[22px] text-[#FFFFFF]'>{props.time}</p>
                                        <h1 className='text-[#FFFFFF] text-[20px] font-bold leading-[39px]'>{props.eventname}</h1>
                                        <div className='flex space-x-3 items-center'>
                                            <Image src={eventlog} alt='event logo' />
                                            <h1 className='text-[#FFFFFF] text-[16px] font-medium leading-[22px]'>{props.host}</h1>
                                        </div>
                                        <div className='flex space-x-6 items-center'>
                                        <Image src={location} alt='location' />
                                            <h1 className='text-[#FFFFFF] text-[16px] font-medium leading-[22px]'>{props.location}</h1>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                    <Image src={fire} alt='image' />
                                    </div>
                            </div>
                        </div>
                        
    </div>
  )
}

export default Eventcard



{/* <Calendar 
                                aria-label="Date (Controlled Focused Value)"
                                focusedValue={focusedDate}
                                value={defaultDate}
                                onFocusChange={setFocusedDate}
                                className=" text-white rounded-lg shadow-2xl p-4 h-[285px]"
                                /> */}