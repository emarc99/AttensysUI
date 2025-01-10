import React, { ChangeEvent, useRef } from 'react'
import walletimage from '@/assets/walletcrop.jpg'
import Image from 'next/image'
import { ConnectButton } from '../connect/ConnectButton'
import { Button, Field, Input  } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import add from '@/assets/add.svg'


const Nftinfo = () => {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const handlerouting = (prop : string) =>{
        router.push(`/Createorganization/${prop}`)
    }
    const handleImageClick = () => {
        // Trigger the file input on image click
        fileInputRef.current?.click(); 
      };
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg')) {
          // Process the file 
          console.log("Selected file:", file);
        } else {
          console.log("Please select a valid image file (JPEG, JPG, or PNG).");
        }
      };

    
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center space-y-8'>

<div className='space-y-3 w-[60%]'>
                    <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>NFT Certifacate Name</h1>
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
                    <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>NFT Certificate symbol</h1>
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
            <h1 className='text-[16px] text-[#2D3A4B] font-light leading-[23px]'>Upload NFT Certificate Image</h1>
            <div className="w-[200px] h-[200px] bg-[#3F3E58] rounded-xl flex justify-center items-center cursor-pointer" onClick={handleImageClick}>
                                    <Image src={add} alt="add"   className="cursor-pointer h-[100px] w-[100px] object-cover rounded-xl" />
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/jpeg, image/jpg, image/png"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }} // Hide the input
                                    />
            </div>
        </div>

        <Button onClick={()=>{handlerouting("admin-info")}} className="w-[342px] h-[47px] flex justify-center items-center text-[#FFFFFF] text-[14px] font-bold leading-[16px] bg-[#4A90E2] rounded-xl">Almost there</Button>

    </div>
  )
}

export default Nftinfo