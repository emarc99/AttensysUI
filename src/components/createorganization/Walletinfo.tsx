import React from 'react'
import walletimage from '@/assets/walletcrop.jpg'
import Image from 'next/image'
import { ConnectButton } from '../connect/ConnectButton'
import { Button } from '@headlessui/react'
import { useRouter } from 'next/navigation'

const Walletinfo = () => {
    const router = useRouter();

    const handlerouting = (prop : string) =>{
        router.push(`/Createorganization/${prop}`)
    }
    
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center space-y-8'>
        <div className='h-[700px] w-[489px] rounded-xl bg-[#FFFFFF] flex flex-col items-center justify-center py-12 space-y-8'>
            <div className='w-[124px] h-[146px]'>
            <Image src={walletimage} alt='walet' className=' object-cover' />
            </div>
            <h1 className='text-[#5801A9] text-[18px] leading-[22px] font-bold'>Connect Your wallet</h1>
            <p className='text-center w-[398px] text-[#2D3A4B] text-[14px] font-normal leading-[20px]'> connect your Web3 wallet and unlock all features. By connecting your wallet, you can:</p>
            <div className='text-center w-[398px] text-[#5801A9] text-[14px] font-normal leading-[20px] space-y-1'>
            <p>&bull; Create and manage your organization</p>
            <p>&bull; Register for courses and events</p>
            <p>&bull; Issue and receive NFT certifications</p>
            </div>
            <ConnectButton />
        </div>
        <Button onClick={()=>{handlerouting("admin-info")}} className="w-[342px] h-[47px] flex justify-center items-center text-[#FFFFFF] text-[14px] font-bold leading-[16px] bg-[#4A90E2] rounded-xl">Almost there</Button>

    </div>
  )
}

export default Walletinfo