import React from 'react'
import Coursedropdown from './Coursedropdown'
import { coursestatusAtom } from '@/state/connectedWalletStarknetkitNext'
import { useAtom, useSetAtom } from "jotai"

const Landing = () => {
    const [status] = useAtom(coursestatusAtom); 
  return (
    <div className='h-[1000px] bg-[#F5F7FA] w-[100%]'>
       {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
        <Coursedropdown />
        <h1>Header content</h1>
    </div>
  )
}

export default Landing