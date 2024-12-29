import React from 'react'
import {outlineclick,allstudentclick,certificationsclick } from '@/state/connectedWalletStarknetkitNext'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation';
import Outline from './Outline';
import Students from './Students';
import Certifications from './Certifications';

const DashboardContent = (prop : any) => {
    const router = useRouter();
    const [outlineClickstat, setOutlineClickstat] = useAtom(outlineclick)
    const [allstudentclickstat, setallstudentclickstat] = useAtom(allstudentclick)
    const [certificationclickstat, setcertificationclickstat] = useAtom(certificationsclick)
  
    const renderContent = () => {
        switch (prop.tabsection) {
            case 'Outline' : 
            return <><Outline /></>

            case 'Students' : 
            return <><Students /></>

            case 'Certifications' : 
            return <><Certifications /></>
        }
    }
    return (
    <div className='h-auto w-full pt-8'>
        {renderContent()}
    </div>
  )
}

export default DashboardContent