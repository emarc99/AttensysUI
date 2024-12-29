import { Button } from '@headlessui/react'
import React from 'react'
import {outlineclick,allstudentclick,certificationsclick } from '@/state/connectedWalletStarknetkitNext'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'

const DashboardTab = () => {
    
    const [outlineClickstat, setOutlineClickstat] = useAtom(outlineclick)
    const [allstudentclickstat, setallstudentclickstat] = useAtom(allstudentclick)
    const [certificationclickstat, setcertificationclickstat] = useAtom(certificationsclick)    
    const router = useRouter();
  

  const handleinsightclick = () => {
    setOutlineClickstat(true);
    setallstudentclickstat(false);
    setcertificationclickstat(false)

    //@todo replace sample dashboard with org name
    router.push('/Bootcamp/sample-bootcamp-dashboard/Outline')
  }
  
  const handlegueslistclick = () =>{
    setOutlineClickstat(false);
    setallstudentclickstat(true);
    setcertificationclickstat(false)
         //@todo replace sample dashboard with org name
         router.push('/Bootcamp/sample-bootcamp-dashboard/Students')
  }
  const handleAttendanceclick = () =>{
    setOutlineClickstat(false);
    setallstudentclickstat(false);
    setcertificationclickstat(true)
      //@todo replace sample dashboard with org name
      router.push('/Bootcamp/sample-bootcamp-dashboard/Certifications')
  }
  
    return (
    <div className='h-[55px] w-full border-b-[2px] border-[#D0D0D0] items-center flex mt-8 '>
        <div className='w-full clg:w-full lclg:w-full flex space-x-32 h-[40px] mt-5 px-24'>
          <Button onClick={handleinsightclick} className={`${outlineClickstat && `border-[#9B51E0] border-b-[4px]`} w-[140px] text-[16px] font-medium text-[#333333]`}>Course Ouline</Button>  
          <Button onClick={handlegueslistclick} className={`${allstudentclickstat && `border-[#9B51E0] border-b-[4px]`} lg:w-[102px] clg:w-[130px] lclg:w-[200px] text-[16px] font-medium text-[#333333]`} >All students</Button>  
          <Button onClick={handleAttendanceclick} className={`${certificationclickstat && `border-[#9B51E0] border-b-[4px]`} w-[102px] text-[16px] font-medium text-[#333333]`}>Certifications</Button>  
        </div>
        
    </div>
  )
}

export default DashboardTab