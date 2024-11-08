"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { coursestatusAtom } from '@/state/connectedWalletStarknetkitNext'
import { useAtom, useSetAtom } from "jotai"
import Coursedropdown from '@/components/courses/Coursedropdown';
import OverviewLanding from '@/components/overview/OverviewLanding';

const Index = () => {
  const [status] = useAtom(coursestatusAtom); 
  const params = useParams();
  const event = params.event;

  
  return (
    <div>
      {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
        <Coursedropdown />
        <OverviewLanding eventname={event} />
    </div>
  )
}

export default Index