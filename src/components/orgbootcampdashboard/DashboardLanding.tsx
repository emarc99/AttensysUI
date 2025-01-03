import React from 'react'
import Tophero from './Tophero'
import DashboardTab from './DashboardTab'
import DashboardContent from './DashboardContent'

const DashboardLanding = (props: any) => {
  return (
    <div className='bg-[#f4f7f9] w-full h-auto py-10'>
        <Tophero />
        <DashboardTab bootcampname={props.bootcampname} />
        <DashboardContent tabsection={props.tab} />
    </div>
  )
}

export default DashboardLanding