import { Input } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import batch from '@/assets/batch.svg'
import single from '@/assets/single.svg'

const Certifications = () => {
  const [inputValue, setinputValue] = useState("")

  const handleChange = (event: { target: { value: any } }) => {
    setinputValue(event.target.value)
  }

  return (
    <div className='h-auto w-full'>
        <div className='h-[120px] w-full px-24 flex items-center justify-between border-b-[1px] border-b-[#CACBCB]'>
            <div className='h-[52px] w-[700px] bg-[#FFFFFF] border-[1px] border-[#C0C0C0] rounded-xl px-4 flex flex-col justify-center'>
                <div className='flex space-x-4'>
                    <h1 className='text-[14px] font-semibold text-[#333333] leading-[31px]'>Single user certifcation :</h1>
                    <Input
                name="search by address"
                type="text"
                placeholder="Enter email , wallet address..."
                value={inputValue}
                onChange={handleChange}
                className="w-[60%] clg:w-[70%] lclg:w-[90%] p-2 text-sm text-gray-700 placeholder-gray-400"
              />
                </div>
            </div>

        <div className='h-[48px] w-[155px] rounded-xl bg-[#9B51E0] text-[#FFFFFF] text-[12px] font-medium leading-[17px] flex items-center justify-center'>Award certificate</div>
        <div className='border-r-[1px] border-l-[1px] border-r-[#817676] border-l-[#817676] w-[300px] h-[80%] flex flex-col px-8 justify-center space-y-2'>
            <h1 className='text-[16px] font-light text-[#2D3A4B] leading-[22px]'>Course completion rate</h1>
            <h1 className='text-[22px] font-medium text-[#9B51E0] leading-[30px]'>71%</h1>
        </div>
        <div className='h-[80%] flex flex-col justify-center  space-y-2'>
            <h1 className='text-[16px] font-light text-[#2D3A4B] leading-[22px]'>Certification Issued</h1>
            <h1 className='text-[22px] font-medium text-[#9B51E0] leading-[30px]'>112</h1>
        </div>
        
        </div>

        <div className='h-[500px] w-full '>
            <div className='w-[90%] mx-auto py-10'>
                <h1 className='text-[18px] text-[#5801A9] leading-[23px] font-semibold'>Mass Certification</h1>
                <p className='text-[14px] text-[#817676] leading-[19px] font-light'>Choose your prefered Certification method.</p>
                <div className='w-full mt-8 flex space-x-5'>
                    <div className='h-[246px] w-[243px] bg-[#FFFFFF] rounded-lg border-[1px] border-[#CACACA] px-6 flex flex-col justify-center space-y-4'>
                        <Image src={single} alt='single' />
                        <div className='space-y-1'>
                        <h1 className='text-[15px] leading-[19px] font-semibold text-[#5801A9]'>Single certification</h1>
                        <p className='text-[14px] text-[#817676] leading-[19px] font-light'>Award student individual address</p>
                        </div>
                        <div className='w-[155px] h-[35px] rounded-lg bg-[#2D3A4B] text-[#FFFFFF] text-[12px] font-medium leading-[17px] flex justify-center items-center'>Award Certifications</div>
                    </div>

                    <div className='h-[246px] w-[243px] bg-[#FFFFFF] rounded-lg border-[1px] border-[#CACACA]  px-6 flex flex-col justify-center space-y-4'>
                      <Image src={batch} alt='single' />
                        <div className='space-y-1'>
                        <h1 className='text-[15px] leading-[19px] font-semibold text-[#5801A9]'>Batch certification</h1>
                        <p className='text-[14px] text-[#817676] leading-[19px] font-light'>Award All student</p>
                        </div>
                        <div className='w-[155px] h-[35px] rounded-lg bg-[#2D3A4B] text-[#FFFFFF] text-[12px] font-medium leading-[17px] flex justify-center items-center'>Award Certifications</div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Certifications