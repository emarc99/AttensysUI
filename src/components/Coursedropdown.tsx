import React from 'react'
import { coursestatusAtom } from '@/state/connectedWalletStarknetkitNext'
import { useAtom, useSetAtom } from "jotai"

 

const Coursedropdown = () => {
    const [status] = useAtom(coursestatusAtom); 
  return (
    <>
        {status && <div className=' bg-[#FFFFFF] h-[157px] w-[100%] absolute z-50 shadow-2xl'>
           
           <div className='flex justify-between mx-auto w-[90%] h-[90%] items-center'>
                <div>
                            <h1>Explore courses</h1> 
                    </div>

                    <div>
                            <h1>My Certifications</h1>
                    </div>
                    <div>
                            <h1>Create a course</h1>
                    </div>
           </div>
           
        </div>}
    </>
        
  )
}

export default Coursedropdown