"use client"
import React from 'react'
import { coursestatusAtom } from '@/state/connectedWalletStarknetkitNext'
import { useAtom, useSetAtom } from "jotai"
import Coursedropdown from '@/components/courses/Coursedropdown'
import Detailslanding from '@/components/eventdetails/Detailslanding'
import { useParams } from 'next/navigation'

const Index = () => {
    const [status] = useAtom(coursestatusAtom); 
    const params = useParams();
    const details = params.details;
  return (
    <div>
         {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
        <Coursedropdown />
        <Detailslanding name={details}  />
        </div>
  )
}

export default Index