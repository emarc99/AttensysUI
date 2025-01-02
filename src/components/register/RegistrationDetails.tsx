import React, { useState } from 'react'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import {registerModal,detailsEntryStat,detailsEntryLoading,registrationsuccess} from '@/state/connectedWalletStarknetkitNext'
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Input, Label } from '@headlessui/react'



const RegistrationDetails = () => {
    const [regModal, setRegModal] = useAtom(registerModal);
    const [inputValue, setInputValue] = useState<number | string>('');
    const [detailsEntrystatus, setDetailsEntryStatus] = useAtom(detailsEntryStat)
  const [detailsEntryLoadingstatus, setDetailsEntryLoadingStatus] = useAtom(detailsEntryLoading)
  const [registrationsuccessstatus, setregistrationsuccessstatus] = useAtom(registrationsuccess)


  
  
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      // Validate numeric input or clear it
      if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
        setInputValue(value);
      }
    };
   
    const handlePay = () => {
        setDetailsEntryStatus(false);
        setDetailsEntryLoadingStatus(true)
        
        setTimeout(() => {
         setDetailsEntryLoadingStatus(false)
            setregistrationsuccessstatus(true);
        }, 2000);
    }

  return (
    <div className='w-full px-16 space-y-7 mt-6'>
    <div className='space-y-4'>
    <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>Full name</h1>
    <Field>
                <Input
                placeholder='Enter your name'
                className={clsx(
                    'h-[55px] border-[2px] border-[#D0D5DD] block w-full rounded-lg bg-white/5 py-1.5 px-3 text-sm/6 text-[#667185]',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
                />
            </Field>
    </div>
    <div className='space-y-4'>
    <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>Email Address</h1>
    <Field>
                <Input
                placeholder='Enter your email'
                className={clsx(
                    'h-[55px] border-[2px] border-[#D0D5DD] block w-full rounded-lg bg-white/5 py-1.5 px-3 text-sm/6 text-[#667185]',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
                />
            </Field>
    </div>
    
    <div className='w-full h-[202px] rounded-xl bg-amount-gradient flex flex-col justify-center space-y-7'>
          <div className='text-[#FFFFFF] flex flex-col items-center justify-center'>
              <div className='flex space-x-3 items-center'>
              <Input onChange={handleAmountChange} placeholder='0' className={clsx('bg-transparent text-[#FFFFFF] outline-none placeholder-white min-w-[44px] max-w-[200px] font-bold w-auto h-[54px] text-[40px] placeholder:text-[40px]')}
              style={{ width: `${Math.max(2, inputValue.toString().length || 1)}ch` }}/>
              <h1 className='text-[40px] font-bold leading-[54px]' >USDT</h1>
              </div>
              <p className='text-[17px] font-normal leading-[24px]'>$0.00</p>
          </div>

          <div className='flex justify-between px-8'>
              <div>
                <h1 className='text-[13px] font-semibold leading-[18px] text-[#FFFFFF]'>Available to Send</h1>
                <h1 className='text-[18px] font-normal leading-[24px] text-[#FFFFFF]'>15,025.01 USDT</h1>
              </div>

              <Button className='text-[#5801A9] text-[13px] font-bold leading-[18px] w-[79px] h-[39px] rounded-2xl bg-[#FFFFFF]'>Max</Button>
          </div>

</div>
          <Button onClick={handlePay} className='h-[47px] w-full rounded-xl bg-[#4A90E2] text-[#FFFFFF] text-[14px] leading-[16px] font-semibold flex items-center justify-center'>Register & pay</Button>
</div> 
  )
}

export default RegistrationDetails