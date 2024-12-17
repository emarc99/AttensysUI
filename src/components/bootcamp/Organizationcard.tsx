import React from 'react'
import handshake from '@/assets/handshake.svg'
import Image from 'next/image'
import testlogo from '@/assets/testlogo.svg'
import StarRating from './StarRating'
import { Button } from '@headlessui/react'

interface OrganizationCardProp {
    name : string,
    about : string,
    numberofbootcamps : string,
    numberofinstructors : string,
    stars : number,
    totalreviews : string,
    tags : Array<string>,
    logo : any,
    flier : any,

}


const Organizationcard : React.FC<OrganizationCardProp> = (props) => {
  return (
    <div className='h-[355px] w-[361px] rounded-xl border-[1px] border-[#C8C8C8] bg-[#FFFFFF]'>
        <div className='h-[106px] w-full rounded-t-xl relative'>
            <Image src={props.flier} alt='shake' className=' object-cover' />
            <div className='h-[57px] w-[57px] rounded-full absolute z-20 bottom-[-25%] left-3'>
            <Image src={props.logo} alt='logo' />
            </div>
        </div>
        
        <div className='px-4 mt-10 space-y-4'>
            <h1 className='text-[15px] text-[#333333] leading-[18px] font-bold'>{props.name}</h1>
            <p className='w-[300px] text-[12px] text-[#2D3A4B] leading-[17px] font-light'>{props.about}</p>
            <div className='flex space-x-4'>
                <p className='text-[12px] text-[#817676] leading-[14px] font-medium'><span className='text-[#9B51E0]'>{props.numberofbootcamps}</span> Bootcamps</p>
                <p className='text-[12px] text-[#817676] leading-[14px] font-medium'><span className='text-[#9B51E0]'>{props.numberofinstructors}</span> Instructors</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-3 items-center'>
                    <StarRating totalStars={5} starnumber={props.stars} />
                    <p className='text-[12px] text-[#2D3A4B] leading-[14px] font-medium'>{props.totalreviews} reviews</p>
                </div>
                <Button className=" border-[2px] border-[#A01B9B] w-[87px] h-[38px] text-[#A01B9B] text-[10px] leading-[12px] flex items-center justify-center rounded-xl">
                          <div>View details</div>
                </Button>
            </div>
            <div className='flex space-x-3'>
                {props.tags.map((tag, index)=>{
                    return <div key={index} className='w-[65px] h-[25px] rounded-lg flex items-center justify-center bg-[#ABABAB52] text-[10px] leading-[12px] font-medium text-[#5801A9]'>{tag}</div>                   
                })} 
            </div>
        </div>
    </div>
  )
}

export default Organizationcard