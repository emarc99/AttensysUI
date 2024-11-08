import React from 'react'
import OverviewDiscover from './OverviewDiscover'

const OverviewLanding = (props : any) => {
 
    return (
    <div className='h-auto w-full bg-[#F5F7FA]'>
        <OverviewDiscover eventsname={props.eventname} />
    </div>
  )
}

export default OverviewLanding