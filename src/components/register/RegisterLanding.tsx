import React from 'react'

const RegisterLanding = ( props : any) => {
    const decodedName = decodeURIComponent(props.regname);
  return (
    <div className='bg-[#f4f7f9] w-full h-auto py-10'>
        <div className='flex space-x-3'>
            <h1>Explore Bootcamp</h1>
            <h1>{decodedName}</h1>
        </div>
    </div>
  )
}

export default RegisterLanding