import React, { useState } from 'react'
import { IoIosInformationCircleOutline, IoMdClose } from "react-icons/io";
import {createbootcampoverlay} from '@/state/connectedWalletStarknetkitNext'
import { useAtom } from 'jotai';
import { Button, Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import TargetCategory from './TargetCategory';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import BootcampTime from './BootcampTime';
import { FaPlus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import Toggle from 'react-toggle'
import cloud from '@/assets/cloud.svg'
import Image from 'next/image';
import dividers from '@/assets/Dividers.svg'
import { useRouter } from 'next/navigation';






const format = 'h:mm a';
const now = moment().hour(0).minute(0);

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


    

const Create = ({ height }: { height: number | null }) => {
    const [createOverlayStat, setCreateOverlayStat] = useAtom(createbootcampoverlay);
    const [value, onChange] = useState<Value>(new Date());
    const [startdateStat, SetStartDateStatus] = useState(false);
    const [EnddateStat, SetEndDateStatus] = useState(false);
    const [bootcampTimes, setBootcampTimes] = useState([{ day: 1 }]);
    const [isPaid, setIsPaid] = useState<boolean>(false);
    const router = useRouter();
  
    const handlePublishButton = () => {
      router.push('/Bootcamp/sample-bootcamp-dashboard/Outline')
  
    }

    const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsPaid(event.target.checked);
    };


  const handleAddDay = () => {
    // Add a new BootcampTime component with an incremented day value
    setBootcampTimes((prevTimes) => [
      ...prevTimes,
      { day: prevTimes.length + 1 },
    ]);
  };

    function onTimeChange(value : any) {
        console.log(value && value.format(format));
      }

    const handleCreateOverlay = () => {
        setCreateOverlayStat(false);
    }
    
    const handleStartDate = () => {
        SetStartDateStatus(!startdateStat)
        SetEndDateStatus(false)

    }
    const handleEndtDate = () => {
        SetEndDateStatus(!EnddateStat)
        SetStartDateStatus(false)

    }

    return (
    <div className='absolute z-[1] h-auto w-full'
    style={{
        height: height ? `${height}px` : '100vh', // Use dynamic height or fallback to 100vh
      }}
    >
        <div className='h-full flex'>
                <div className='w-[35%] h-full bg-[#07070733]'></div>

                <div className='w-[65%] h-full bg-[#FFFFFF] overflow-y-scroll'>
                    <div className='w-[100%] h-[10px] bg-bootcreate-gradient'></div>
                    <div className='w-[90%] mx-auto flex justify-between mt-5'>
                        <h1 className='text-[22px] leading-[22px] text-[#333333] font-semibold'>Create bootcamp</h1>
                        <IoMdClose className='h-[30px] w-[30px] cursor-pointer' onClick={handleCreateOverlay} />
                    </div>

                <div className='w-[90%] mx-auto mt-6'>
                            <div className='space-y-3 w-full'>
                                <h1 className='text-[14px] text-[#2D3A4B] font-light leading-[20px]'>Bootcamp Name</h1>
                                <Field>
                                    <Input
                                    placeholder='e.g starknet basecamp'
                                    className={clsx(
                                        'h-[55px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-full rounded-lg  py-1.5 px-3 text-sm/6 text-[#667185]',
                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                    )}
                                    />
                                </Field>
                            </div>
                        
                           <div className='flex justify-between w-full space-x-2 mt-4'>
                                <div className='space-y-3 w-full'>
                                    <h1 className='text-[14px] text-[#2D3A4B] font-light leading-[20px]'>Bootcamp Organization</h1>
                                        <Field>
                                            <Input
                                            value="Orangutan Edu Academy"
                                            readOnly
                                            placeholder='e.g starknet basecamp'
                                            className={clsx(
                                                'h-[55px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-full rounded-lg  py-1.5 px-3 text-sm/6 text-[#4A90E2]',
                                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                            )}
                                            />
                                        </Field>
                                    </div>
                                    <div className='space-y-3 w-full'>
                                    <h1 className='text-[14px] text-[#2D3A4B] font-light leading-[20px]'>Target Audience</h1>                                   
                                    <TargetCategory />
                                    </div>
                           </div>

                           <div className='space-y-3 mt-4'>
                            <h1 className='text-[14px] text-[#2D3A4B] font-light leading-[20px]'>Description</h1>
                            <Field>
                                <textarea
                                placeholder='Short overview detailing what the bootcamp covers'
                                className={clsx(
                                    'h-[110px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-[100%] rounded-lg  py-1.5 px-3 text-sm/6 text-[#667185]',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                )}
                                />
                            </Field>
                            </div>


                            <div className='mt-8'>
                                <h1 className='text-[16px] leading-[23px] font-semibold text-[#2D3A4B]'>Structure & schedules</h1>
                                <div className='mt-3 space-y-2'>
                                    <h1 className='text-[14px] text-[#2D3A4B] font-light leading-[20px]'>Bootcamp Date</h1>
                                    <div className='flex space-x-4'>
                                    <div onClick={handleStartDate} className='relative flex items-center px-4 space-x-3 border-[1px] border-[#D0D5DD] h-[55px] w-[172px] rounded-lg'>
                                        <FaRegCalendarAlt className='h-[20px] w-[18px] text-[#98999B]' />
                                        <h1 className='text-[15px] leading-[18px] font-light text-[#98999B]'>Start date</h1>
                                        <div className='absolute top-14 -left-2'>
                                        {startdateStat && <Calendar onChange={onChange} value={value} />}
                                        </div>
                                    </div>
                                    <div onClick={handleEndtDate} className=' relative flex items-center px-4 space-x-3 border-[1px] border-[#D0D5DD] h-[55px] w-[172px] rounded-lg'>
                                        <FaRegCalendarAlt className='h-[20px] w-[18px] text-[#98999B]' />
                                        <h1 className='text-[15px] leading-[18px] font-light text-[#98999B]'>End date</h1>
                                        <div className='absolute top-14 -left-1'>
                                        {EnddateStat && <Calendar onChange={onChange} value={value} />}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8 space-y-2'>
                                <h1 className='text-[14px] text-[#2D3A4B] font-light leading-[20px]'>Bootcamp Time</h1>
                                <div className='flex space-x-3'>
                                <div className='flex flex-col space-y-2'>
                                {bootcampTimes.map((component, index) => (
                                       <BootcampTime key={index} day={index + 1} />
                                    ))}
                                </div>
                                    <div id="add-day" onClick={handleAddDay} className=' relative flex items-center px-4 space-x-3 border-[1px] border-[#D0D5DD] h-[55px] w-[130px] rounded-lg'>
                                    <FaPlus className='text-[#2D3A4B]' />
                                    <h1 className='text-[15px] leading-[18px] font-light text-[#2D3A4B]'>Add Day</h1>
                                    </div>
                                </div>
                               
                            </div>
                            
                            <div className='mt-8'>
                                <h1 className='text-[16px] leading-[23px] font-semibold text-[#2D3A4B]'>Curriculum</h1>
                                <div className='flex w-[380px] items-center space-x-1 mt-1'>
                                <IoIosInformationCircleOutline />
                                    <h1 className='text-[13px] text-[#2D3A4B] leading-[20px] font-light'>You can edit and add more details later in your dashboard </h1>
                                </div>
                                <div className='mt-4 flex space-x-2'>
                                <Field>
                                    <Input
                                    placeholder='Add lecture title'
                                    className={clsx(
                                        'h-[55px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-[395px] rounded-lg  py-1.5 px-3 text-sm/6 text-[#667185]',
                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                    )}
                                    />
                                </Field>

                                <div className='relative flex bg-[#A666E3] items-center px-4  justify-between border-[1px] border-[#D0D5DD] h-[55px] w-[157px] rounded-lg'>
                                        <div className='space-x-3 flex'>
                                        <FaRegCalendarAlt className='h-[20px] w-[14px] text-[#FFFFFF]' />
                                        <h1 className='text-[12px] leading-[18px] font-light text-[#FFFFFF]'>Choose day</h1>
                                        </div>
                                        <RiArrowDropDownLine className='h-[20px] w-[20px] text-[#FFFFFF]' />                                     
                                </div>
                                </div>

                            </div>



                            <div className=' mt-4 flex space-x-2 relative'>
                            <div>
                            <Field>
                                <textarea
                                placeholder='Add lecture description'
                                className={clsx(
                                    'h-[127px] border-[2px] bg-[#FFFFFF] border-[#D0D5DD] block w-[557px] rounded-lg  py-1.5 px-3 text-sm/6 text-[#667185]',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                )}
                                />
                            </Field>
                            </div>
                            <div  className='absolute bottom-0 right-64 flex items-center px-4 space-x-3 border-[1px] border-[#D0D5DD] h-[55px] w-[150px] rounded-lg'>
                                    <FaPlus className='text-[#2D3A4B]' />
                                    <h1 className='text-[15px] leading-[18px] font-light text-[#2D3A4B]'>Add Lecture</h1>
                                    </div>
                            </div>

                           <div className='mt-6'>
                            <div className='flex space-x-8 items-center'>
                                <div>
                                    <h1 className='text-[16px] leading-[23px] font-semibold text-[#2D3A4B]'>Pricing</h1>
                                    <p className='text-[13px] text-[#2D3A4B] leading-[20px] font-light'>Specify tuition fees, if applicable.</p>
                                </div>
                            <Toggle
                                checked={isPaid}
                                name='isPaid'
                                value='yes' 
                                onChange={handleToggleChange}
                                />
                            </div>
                            
                            <div className='mt-3 flex space-x-3'>
                                <div>
                                        <Field>
                                            <Input
                                            value="Payment method (USDT)"
                                            readOnly
                                            placeholder='e.g starknet basecamp'
                                            className={clsx(
                                                'h-[55px] border-[2px] text-center bg-[#FFFFFF] border-[#D0D5DD] block w-[179px] rounded-lg  py-1.5 px-3 text-sm/6 text-[#4A90E2]',
                                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                            )}
                                            />
                                        </Field>
                                </div>
                                <div className='flex space-x-1 items-center'>
                                        <h1 className='text-[24px] text-[#2D3A4B] font-light'>$</h1>
                                        <Field>
                                            <Input
                                            className={clsx(
                                                'h-[55px] border-[2px] text-center bg-[#FFFFFF] border-[#D0D5DD] block w-[100px] rounded-lg  py-1.5 px-3 text-sm/6 text-[#4A90E2]',
                                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                            )}
                                            />
                                        </Field>
                                </div>

                            </div>


                            <div className='mt-6'>
                            <h1 className='text-[16px] leading-[23px] font-semibold text-[#2D3A4B]'>Upload Bootcamp creative</h1>
                           
                            <div className='flex space-x-16'>
                                <div className='h-[316px] w-[459px] mt-3 rounded-lg bg-[#DCDCDC] flex justify-center items-center'>
                                    <div className='h-[246px] w-[400px] border-[3px] border-dotted border-[#D0D5DD] bg-[#FFFFFF] rounded-xl space-y-3 flex flex-col items-center justify-center'>
                                                <Image src={cloud} alt='upload' />
                                                <h1 className='text-[14px] text-[#475367] font-light leading-[20px]'><span className='text-[#4A90E2]'>Click to upload</span> or drag and drop</h1>
                                                <p className='text-[12px] text-[#475367] font-light leading-[17px]'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                <Image src={dividers} alt='divider' className='mt-7' />
                                                <Button className="h-[36px] w-[118px] flex justify-center items-center bg-[#9B51E0] rounded-xl text-[14px] text-[#FFFFFF] font-light leading-[20px]">Browse Files</Button>
                                    </div>
                                </div>
                                <div className='mt-3 space-y-2'> 
                                <div className='h-[166px] w-[251px] border-[3px] border-dotted border-[#D0D5DD] bg-[#FFFFFF] rounded-xl space-y-0 flex flex-col items-center justify-center'>
                                                <Image src={cloud} alt='upload' />
                                                <h1 className='text-[8px] text-[#475367] font-light leading-[20px]'><span className='text-[#4A90E2]'>Click to upload</span> or drag and drop</h1>
                                                <p className='text-[7.5px] text-[#475367] font-light leading-[17px]'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                <Image src={dividers} alt='divider' className='mt-7' />
                                                <Button className="h-[23px] w-[74px] flex justify-center items-center bg-[#9B51E0] rounded-xl text-[8px] text-[#FFFFFF] font-light leading-[20px]">Browse Files</Button>
                                </div>
                                    <h1 className='text-[18px] text-[#333333] font-semibold leading-[31px] '>Upload thumbnail</h1>
                                    <p className='w-[254px] text-[14px] font-light text-[#2D3A4B] leading-[21px]'>Upload your bootcamp  image here.
                                        750x422 pixels; .jpg, .jpeg,. 
                                        gif, or .png. </p>
                                </div>

                            </div>

                            <div className='flex justify-end my-5'>
                                        <div className='h-[47px] w-[342px] rounded-xl bg-[#4A90E2] flex items-center justify-center cursor-pointer' onClick={handlePublishButton}>
                                            <h1 className='text-[#FFFFFF] text-[14px] font-semibold leading-[16px]'>Save and Publish bootcamp</h1>
                                        </div>
                            </div>

                            
                            </div>
                           </div>


                </div>


                </div>
        </div>
    </div>
  )
}

export default Create


