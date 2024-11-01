"use client"
import React from 'react'
import Coursedropdown from '@/components/Coursedropdown'
import { useAtom, useSetAtom } from "jotai"
import { coursestatusAtom } from '@/state/connectedWalletStarknetkitNext'



const index = () => {
  const [status] = useAtom(coursestatusAtom); 
  return (
    <div>
        {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
        <Coursedropdown />
        <h1>this is courses page</h1>
    </div>
  )
}

export default index