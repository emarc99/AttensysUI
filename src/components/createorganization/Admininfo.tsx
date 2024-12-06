import React from 'react'
import { Button, Field, Input } from '@headlessui/react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation';


const Admininfo = () => {
    const router = useRouter();

    const handlerouting = (prop : string) =>{
        router.push(`/Createorganization/${prop}`)
    }
  return (
    <div className='h-auto w-full flex flex-col items-center space-y-8 py-6'>
                 <div className='space-y-3 w-[60%]'>
                    <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>Admin&apos;s Full Name</h1>
                    <Field>
                        <Input
                        placeholder='Your full name'
                        className={clsx(
                            'h-[55px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-[100%] rounded-lg  py-1.5 px-3 text-sm/6 text-[#667185]',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        />
                    </Field>
                </div>

                <div className='space-y-3 w-[60%]'>
                    <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>Preferred Email Address</h1>
                    <Field>
                        <Input
                        placeholder='Enter email address'
                        className={clsx(
                            'h-[55px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-[100%] rounded-lg  py-1.5 px-3 text-sm/6 text-[#667185]',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        />
                    </Field>
                </div>


                <div className='space-y-3 w-[60%]'>
                    <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>Admin Wallet address</h1>
                    <Field>
                        <Input
                        placeholder='Enter admin wallet address'
                        className={clsx(
                            'h-[55px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-[100%] rounded-lg  py-1.5 px-3 text-sm/6 text-[#667185]',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        />
                    </Field>
                </div>

        <Button onClick={()=>{handlerouting("add-instructors")}} className="w-[342px] h-[47px] flex justify-center items-center text-[#FFFFFF] text-[14px] font-bold leading-[16px] bg-[#4A90E2] rounded-xl">Verify</Button>

    </div>
  )
}

export default Admininfo