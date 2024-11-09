import { Button } from '@headlessui/react'
import React from 'react'

const Tab = () => {
  return (
    <div className='h-[55px] w-full border-b-[2px] border-[#D0D0D0] items-center flex justify-center'>
        <div className='w-[50%] flex space-x-32 h-[40px] mt-5'>
          <Button className="border-b-[4px] border-[#9B51E0] w-[102px] text-[16px] font-medium text-[#333333]">Insights</Button>  
          <Button>Guests list</Button>  
          <Button>Attendance</Button>  
          <Button>Sponsorship</Button>  
        </div>
        
    </div>
  )
}

export default Tab