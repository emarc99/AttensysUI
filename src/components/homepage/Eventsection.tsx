import { Button } from '@headlessui/react'
import React from 'react'
import Image from 'next/image'
import ticket from '@/assets/ticket.svg'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { createEventClickAtom } from '@/state/connectedWalletStarknetkitNext'

const Eventsection = () => {
  const [CreateeventClickStat, setCreateeventClickStat] = useAtom(createEventClickAtom)
  const router = useRouter();
  
  
  const handleCreateEventClick = () =>{
    setCreateeventClickStat(true)
    router.push('/Events/createevent')
  }

  
  return (
    <div className='h-[350px] hidden lg:flex'>
            <div className='h-[280px] bg-[#FFFFFF] flex items-center justify-center rounded-lg shadow-custom-blue w-[1370px] mx-auto space-x-32'>
                    <h1 className='w-[450px] text-[30.19px] text-[#2D3A4B] leading-[39px] font-bold'>Atten<span className='text-[#4A90E2]'>sys Events</span> - Create your events and track attendance inreal-time. </h1>
                    <div className='space-y-5 w-[400px]'>
                        <h1 className='text-[17px] text-[#2D3A4B] font-light leading-[22px] w-[485px]'> The central hub where event organizers can manage all their events, access key statistics, and perform quick actions</h1>
                        <Button className="hidden lg:flex rounded-lg bg-gradient-to-r from-[#9B51E0] to-[#4A90E2] py-2 px-4 lg:h-[50px] items-center lg:w-[170px] text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                       <div className="flex space-x-4 items-center font-semibold text-[16px]">
                            <Image 
                                src={ticket}
                                alt='ticket'
                                className='mr-2'
                            />
                       </div>
                        <div onClick={handleCreateEventClick}>
                        Create an Event           
                        </div>

                    </Button>
                    </div>
            </div>
    </div>
  )
}

export default Eventsection

