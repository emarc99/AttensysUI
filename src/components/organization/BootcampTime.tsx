import { Field, Input } from '@headlessui/react'
import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'

interface timeProp {
    day : number
}

const BootcampTime : React.FC<timeProp> = (props) => {
  return (
    <div className='flex space-x-2'>
    <div className='relative flex bg-[#A666E3] items-center px-4 space-x-3 border-[1px] border-[#D0D5DD] h-[55px] w-[105px] rounded-lg'>
            <FaRegCalendarAlt className='h-[20px] w-[14px] text-[#FFFFFF]' />
            <h1 className='text-[12px] leading-[18px] font-light text-[#FFFFFF]'>Day {props.day}</h1>
            <div className=''>
            </div>
    </div>

    <div className='relative flex items-center px-4 space-x-3 border-[1px] border-[#D0D5DD] h-[55px] w-[172px] rounded-lg'>
            <FaRegCalendarAlt className='h-[20px] w-[18px] text-[#98999B]' />
            <div className=''>
                    <Field>
                        <Input
                        placeholder='Start Time'
                    type="time"
                    className="border-none outline-none focus:ring-0"
                    />
            </Field>                                     
            </div>
        </div>
    
        <div className='relative flex items-center px-4 space-x-3 border-[1px] border-[#D0D5DD] h-[55px] w-[172px] rounded-lg'>
            <FaRegCalendarAlt className='h-[20px] w-[18px] text-[#98999B]' />
            <div className=''>
                    <Field>
                        <Input
                        placeholder='End Time'
                    type="time"
                    className="border-none outline-none focus:ring-0"
                    />
            </Field>                                     
            </div>
        </div>
    </div>
  )
}

export default BootcampTime