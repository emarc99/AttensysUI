import React, { useState } from 'react'
import faqsearch from '@/assets/faqsearch.svg'
import Image from 'next/image'

const Faq = () => {
    const [firstfaq, setFirstfaq] = useState(false)
    const [secondfaq, setsecondfaq] = useState(false)
    const [thirdfaq, setthirdfaq] = useState(false)
    const [fourthfaq, setfourthfaq] = useState(false)
    const [fiftfaq, setfiftfaq] = useState(false)

    const togglefirstfaq = () => {
        setFirstfaq(!firstfaq)
    }

    const togglesecondfaq = () => {
        setsecondfaq(!secondfaq)
       
    }

    const togglethirdfaq = () => {
        setthirdfaq(!thirdfaq)
       
    }
    const togglefourthfaq = () => {
        setfourthfaq(!fourthfaq)
       
    }
    const togglefiftfaq = () => {
        setfiftfaq(!fiftfaq)
    }



  return (
    <div className='hidden lg:flex lg:h-auto w-[100%] flex-col py-12 bg-[#2D3A4B]'>
        <div className='w-[896px] h-[100%] mx-auto my-auto'>
            <h1 className='font-bold text-[34px] leading-[43.91px] text-[#FFFFFF]'>FAQ</h1>
            <p className='text-[18px] text-[#BCBCBC] font-semibold leading-[21.78px] pb-10'>Frequently Asked Questions</p>
           
            <div className='w-[894px] h-auto border-[#C3C3C3] border rounded-xl mb-5' onClick={togglefirstfaq}>
                <div className='w-[100%] h-[100%] flex space-x-4 px-8 cursor-pointer'>
                <Image
                    alt="icon"
                    src={faqsearch}
                    className=""
                />
                <h1 className='py-5 text-[#BCBCBC] text-[18px] leading-[21.78px]'>How secure are the certificates issued via AttenSys?</h1>
                </div>
               {firstfaq && (<div>
                        <div className="w-[80%] h-[1px] bg-[#9DA0A5] mx-auto"></div>
                        <p className='py-5 w-[80%] mx-auto text-[16px] font-light leading-[20px] text-[#BCBCBC]'>All certificates are backed by blockchain technology, making them tamper-proof and easily verifiable.</p>
                </div>)}
            </div>


            <div className='w-[894px] h-auto border-[#C3C3C3] border rounded-xl mb-5' onClick={togglesecondfaq}>
                <div className='w-[100%] h-[100%] flex space-x-4 px-8 cursor-pointer'>
                <Image
                    alt="icon"
                    src={faqsearch}
                    className=""
                />
                <h1 className='py-5 text-[#BCBCBC] text-[18px] leading-[21.78px]'>How secure are the certificates issued via AttenSys?</h1>
                </div>
               {secondfaq && (<div>
                        <div className="w-[80%] h-[1px] bg-[#9DA0A5] mx-auto"></div>
                        <p className='py-5 w-[80%] mx-auto text-[16px] font-light leading-[20px] text-[#BCBCBC]'>All certificates are backed by blockchain technology, making them tamper-proof and easily verifiable.</p>
                </div>)}
            </div>

            <div className='w-[894px] h-auto border-[#C3C3C3] border rounded-xl mb-5' onClick={togglethirdfaq}>
                <div className='w-[100%] h-[100%] flex space-x-4 px-8 cursor-pointer'>
                <Image
                    alt="icon"
                    src={faqsearch}
                    className=""
                />
                <h1 className='py-5 text-[#BCBCBC] text-[18px] leading-[21.78px]'>How secure are the certificates issued via AttenSys?</h1>
                </div>
               {thirdfaq && (<div>
                        <div className="w-[80%] h-[1px] bg-[#9DA0A5] mx-auto"></div>
                        <p className='py-5 w-[80%] mx-auto text-[16px] font-light leading-[20px] text-[#BCBCBC]'>All certificates are backed by blockchain technology, making them tamper-proof and easily verifiable.</p>
                </div>)}
            </div>

            <div className='w-[894px] h-auto border-[#C3C3C3] border rounded-xl mb-5' onClick={togglefourthfaq}>
                <div className='w-[100%] h-[100%] flex space-x-4 px-8 cursor-pointer'>
                <Image
                    alt="icon"
                    src={faqsearch}
                    className=""
                />
                <h1 className='py-5 text-[#BCBCBC] text-[18px] leading-[21.78px]'>How secure are the certificates issued via AttenSys?</h1>
                </div>
               {fourthfaq && (<div>
                        <div className="w-[80%] h-[1px] bg-[#9DA0A5] mx-auto"></div>
                        <p className='py-5 w-[80%] mx-auto text-[16px] font-light leading-[20px] text-[#BCBCBC]'>All certificates are backed by blockchain technology, making them tamper-proof and easily verifiable.</p>
                </div>)}
            </div>

            <div className='w-[894px] h-auto border-[#C3C3C3] border rounded-xl' onClick={togglefiftfaq}>
                <div className='w-[100%] h-[100%] flex space-x-4 px-8 cursor-pointer'>
                <Image
                    alt="icon"
                    src={faqsearch}
                    className=""
                />
                <h1 className='py-5 text-[#BCBCBC] text-[18px] leading-[21.78px]'>How secure are the certificates issued via AttenSys?</h1>
                </div>
               {fiftfaq && (<div>
                        <div className="w-[80%] h-[1px] bg-[#9DA0A5] mx-auto"></div>
                        <p className='py-5 w-[80%] mx-auto text-[16px] font-light leading-[20px] text-[#BCBCBC]'>All certificates are backed by blockchain technology, making them tamper-proof and easily verifiable.</p>
                </div>)}
            </div>

            
        </div>
    </div>
  )
}

export default Faq