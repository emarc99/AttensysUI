"use client"
import React from 'react'
import Eventslanding from '@/components/events/Eventslanding'
import Coursedropdown from '@/components/courses/Coursedropdown'
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { coursestatusAtom } from '@/state/connectedWalletStarknetkitNext'
import { useAtom, useSetAtom } from "jotai"




const Index = () => {
  const [status] = useAtom(coursestatusAtom); 
  const params = useParams();
  const section = params.section;

  return (
    <div>
       {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
        <Coursedropdown />
        <Eventslanding section={section} />
    </div>
  )
}

export default Index