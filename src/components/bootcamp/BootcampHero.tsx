import React from 'react'

const BootcampHero = () => {
  return (
    <div className='relative mb-10'>
        <div className={`bg-[url('/bootcampbg.png')] h-[322px] w-full px-64 flex items-center`}>
            <h1 className='text-[#FFFFFF] font-bold text-[39.5px] leading-[47px]'>Join amazing bootcamps <br/>from your favourite <br/>organizations</h1>
        </div>
        <div className='h-[93px] w-[1257px] mx-auto bg-[#2D3A4B] absolute z-30 bottom-[-15%] left-1/2 transform -translate-x-1/2 flex items-center mb-4'>
                <div className='w-full flex justify-between items-center text-[14px] font-medium text-[#FFFFFF] px-6 my-auto'>
                    <div>Design</div>
                    <div>Development</div>
                    <div>Marketing</div>
                    <div>Health & Fitness</div>
                    <div>Business</div>
                    <div>IT & Software</div>
                    <div>Crypto</div>
                    <div>Artificial Intelligence</div>
                    <div>Product Management</div>
                </div>
                   
        </div>
    </div>
  )
}

export default BootcampHero