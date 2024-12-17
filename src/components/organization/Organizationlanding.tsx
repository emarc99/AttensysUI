import React from 'react'
import Heading from './Heading'
import Panel from './Panel'
import Organizationtabs from './Organizationtabs'

const Organizationlanding = (prop : any) => {
  return (
    <div className='h-auto bg-[#f5f8fa]'>
        <Heading />
        <Panel />
        <Organizationtabs />
    </div>
  )
}

export default Organizationlanding