import React from 'react'
import Image from 'next/image'
import { Button } from '@headlessui/react'

interface CarousellCardProp {
  name : string,
  time : string,
  flier: any,
  logo : any
}

const Carosellcard : React.FC<CarousellCardProp> = (props) => {
  return (
    <div className='relative h-[300px] w-[300px] rounded-2xl mx-auto'>
    <Image src={props.flier} alt='eventimage' className='h-full w-full object-cover rounded-2xl' />
    <Button className="hidden absolute top-3 right-6 justify-center lg:flex rounded-lg bg-[#9B51E0] text-[#FFFCFC] py-2 px-4 lg:h-[50px] items-center lg:w-[90px] text-sm data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                          <div>Register</div>

      </Button>
    <div className='absolute bottom-0 z-20 w-full h-[150px] flex items-center justify-center text-center bg-carousell-gradient'>
        <div className='flex space-x-3 mt-20'>
        <div className='rounded-full h-[41px] w-[41px]'>
        <Image src={props.logo} alt='logo' className=' object-cover' />
        </div>
        <div >
        <h1 className='text-[#FFFFFF] text-[18px] font-bold leading-[22px]'>{props.name}</h1>
        <h1 className='text-[#FFFFFF] text-[14px] font-medium leading-[13px]'>{props.time}</h1>
        </div>
        </div>
    </div>
</div>
  )
}

export default Carosellcard