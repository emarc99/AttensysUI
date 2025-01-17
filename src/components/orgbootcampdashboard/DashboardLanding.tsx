import React from 'react'
import Tophero from './Tophero'
import DashboardTab from './DashboardTab'
import DashboardContent from './DashboardContent'
import {addclassmodal, createMeeting} from '@/state/connectedWalletStarknetkitNext'
import { useAtom } from 'jotai'
import UploadModal from './UploadModal'
import Createmeeting from './Createmeeting'


const DashboardLanding = (props: any) => {
  const [addClass, setAddclass] = useAtom(addclassmodal)
  const [meetingCreation, setMeetingCreation] = useAtom(createMeeting);


  return (
    <div className='bg-[#f4f7f9] w-full h-auto py-10'>
        {addClass && <UploadModal status={addClass} />}
        {meetingCreation && <Createmeeting status={meetingCreation} />}
        <Tophero />
        <DashboardTab bootcampname={props.bootcampname} />
        <DashboardContent tabsection={props.tab} />
    </div>
  )
}

export default DashboardLanding