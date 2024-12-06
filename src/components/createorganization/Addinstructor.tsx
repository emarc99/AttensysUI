import React, { useState } from 'react'
import Emailinput from '../overview/Emailinput'
import { Button } from '@headlessui/react';
import cross from '@/assets/cross.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation';



const Addinstructor = () => {
    const [emailList, setEmailList] = useState<string[]>([]);

    const handleEmailsChange = (emails: string[]) => {
      setEmailList(emails);
    };
    const router = useRouter();

    const handlerouting = (prop : string) =>{
        router.push(`/Createorganization/${prop}`)
    }
  return (
    <div className='h-[500px] w-full flex flex-col items-center space-y-16 py-6'>
            <div className='mx-auto pt-12'>
                        <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>Use commas (,) to seperate emails</h1>
                        <div className='flex space-x-3 items-center'>
                                <div className='w-[590px] h-[60px] border-[2px] rounded-2xl mt-5'>
                                    <Emailinput onEmailsChange={handleEmailsChange} />
                                </div>
                                <Button className='bg-[#4A90E21F] text-[#5801A9] font-normal text-[14px] rounded-lg h-[48px] w-[155px] items-center flex justify-center mt-5'>
                            <Image src={cross} alt='drop' className='mr-2'/>
                            Send invite</Button>   
                        </div>
            </div>

        <Button onClick={()=>{handlerouting("create-a-bootcamp")}} className="w-[342px] h-[47px] flex justify-center items-center text-[#FFFFFF] text-[14px] font-bold leading-[16px] bg-[#4A90E2] rounded-xl">Next</Button>

    </div>
  )
}

export default Addinstructor