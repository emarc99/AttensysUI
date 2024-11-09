import React from 'react'
import { useRouter } from 'next/navigation'
import {insightClick,guestlistclick,attendanceclick,sponsorshipclick } from '@/state/connectedWalletStarknetkitNext'
import { useAtom } from 'jotai'
import Insight from './Insight'

const Content = (props: any) => {
    const router = useRouter();
    const [insightClickstat, setinsightClickstat] = useAtom(insightClick)
    const [guestlistclickstat, setguestlistclickstat] = useAtom(guestlistclick)
    const [attendanceclickstat, setattendanceclickstat] = useAtom(attendanceclick)
    const [sponsorshipclickstat, setsponsorshipclickstat] = useAtom(sponsorshipclick)

    const renderInnerContent = () => {
        switch (props.tabsection) {
            case 'insight' :
                setinsightClickstat(true);
                setguestlistclickstat(false);
                setattendanceclickstat(false)
                setsponsorshipclickstat(false)
                return <><Insight/></>
            case 'guestlist' :
                setinsightClickstat(false);
                setguestlistclickstat(true);
                setattendanceclickstat(false)
                setsponsorshipclickstat(false)
                return <><h1>guest</h1></>
            case 'attendance' :
                setinsightClickstat(false);
                setguestlistclickstat(false);
                setattendanceclickstat(true)
                setsponsorshipclickstat(false)
                return <><h1>attendance</h1></>
            case 'sponsorship' :
                setinsightClickstat(false);
                setguestlistclickstat(false);
                setattendanceclickstat(false)
                setsponsorshipclickstat(true)
                    return <><h1>sponsorship</h1></>
        }
    }
  
    return (
    <div className='h-auto w-full pt-10'>
        {renderInnerContent()}
    </div>
  )
}

export default Content