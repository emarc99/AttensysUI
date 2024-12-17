import React, { useState } from 'react'
import threevert from '@/assets/threevert.svg'
import Image from 'next/image'
import gridline from '@/assets/gridicons_create.svg'
import book from '@/assets/bookfall.svg'
import drop from '@/assets/droporg.svg'
import Mybootcamp from './Mybootcamp'
import Permissions from './Permissions'
import Registered from './Registered'


const Organizationtabs = () => {
    const [mybootcampStat, setMyBootcampStat] = useState(true);
    const [PermissionsStat, setPermissionscampStat] = useState(false);
    const [RegisteredStat, setRegisteredStat] = useState(false);


    const handlemybootcamp = () =>{
        setMyBootcampStat(!mybootcampStat)
        setPermissionscampStat(false);
        setRegisteredStat(false)
    }

    const handlePermission = () =>{
        setMyBootcampStat(false)
        setPermissionscampStat(!PermissionsStat);
        setRegisteredStat(false)
    }

    const handleregistered = () =>{
        setMyBootcampStat(false)
        setPermissionscampStat(false);
        setRegisteredStat(!RegisteredStat)
    }

  return (
    <div className='h-auto w-[90%] mx-auto flex mt-8 space-x-10 pb-12'>
        <div className='h-auto w-[30%] space-y-3'>
            <div className='h-[62px] bg-[#FFFFFF] rounded-xl flex items-center border-[1px] border-[#BCBCBC] space-x-3 px-10'>
                <Image src={threevert} alt='line' />
                <h1 className='text-[14px] leading-[19px] font-bold text-[#2D3A4B]'>Bootcamps</h1>
            </div>
            <div className='h-[62px] bg-[#FFFFFF] rounded-xl flex items-center border-[1px] border-[#BCBCBC] space-x-3 px-10'>
                <Image src={book} alt='line' />
                <h1 className='text-[14px] leading-[19px] font-bold text-[#2D3A4B]'>Permissions and Access</h1>
            </div>
            <div className='h-[62px] bg-[#FFFFFF] rounded-xl flex items-center border-[1px] border-[#BCBCBC] space-x-3 px-10'>
                <Image src={gridline} alt='line' />
                <h1 className='text-[14px] leading-[19px] font-bold text-[#2D3A4B]'>Registered Students</h1>
            </div>
        </div>

        <div className='h-auto w-[70%] space-y-3'>
            <div>
                <div onClick={handlemybootcamp} className='h-[78px] bg-[#FFFFFF] rounded-t-xl flex items-center border-[1px] border-[#BCBCBC] justify-between px-10'>
                    <h1 className='text-[18px] leading-[22px] text-[#333333] font-semibold'>My Bootcamps</h1>
                    <Image src={drop} alt='drop' />
                </div>
                {mybootcampStat && <Mybootcamp />}
            </div>

            <div>
                <div onClick={handlePermission} className='h-[78px] bg-[#FFFFFF] rounded-t-xl flex items-center border-[1px] border-[#BCBCBC] justify-between px-10'>
                    <h1 className='text-[18px] leading-[22px] text-[#333333] font-semibold'>Permissions and Access</h1>
                    <Image src={drop} alt='drop' />
                </div>
                   {PermissionsStat && <Permissions />}
            </div>
            <div>
                <div onClick={handleregistered} className='h-[78px] bg-[#FFFFFF] rounded-t-xl flex items-center border-[1px] border-[#BCBCBC] justify-between px-10'>
                    <h1 className='text-[18px] leading-[22px] text-[#333333] font-semibold'>Registered students (3789)</h1>
                    <Image src={drop} alt='drop' />
                </div>
                {RegisteredStat && <Registered />}
            </div>
        </div>
    </div>
  )
}

export default Organizationtabs