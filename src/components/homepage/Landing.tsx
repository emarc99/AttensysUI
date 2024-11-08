import React, { useEffect } from 'react'
import Coursedropdown from '../courses/Coursedropdown'
import { coursestatusAtom } from '@/state/connectedWalletStarknetkitNext'
import { useAtom, useSetAtom } from "jotai"
import Herosection from './Herosection'
import Cardsection from './Cardsection'
import Mantrasection from './Mantrasection'
import Guide from './Guide'
import World from './World'
import Eventsection from './Eventsection'
import Experience from './Experience'
import Testimonial from './Testimonial'
import Faq from './Faq'
import {
  eventcreatedAtom,
  eventregistedAtom,
} from "@/state/connectedWalletStarknetkitNext"

const Landing = () => {
    const [status] = useAtom(coursestatusAtom); 
    const [createdstat, setCreatedStat] = useAtom(eventcreatedAtom)
    const [Regstat, setRegStat] = useAtom(eventregistedAtom)

    useEffect(() => {
    setCreatedStat(true)
    setRegStat(false)
    }, )
    
  return (
    <div className='h-auto bg-[#F5F7FA] w-[100%]'>
       {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
        <Coursedropdown />
        <Herosection />
        <Cardsection />
        <Mantrasection />
        <Guide />
        <World />
        <Eventsection />
        <Experience />
        <Testimonial />
        <Faq />
    </div>
  )
}

export default Landing