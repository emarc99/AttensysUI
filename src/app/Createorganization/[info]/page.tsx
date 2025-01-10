"use client"
import React, { useEffect } from 'react'
import Coursedropdown from '@/components/courses/Coursedropdown'
import { useParams, useRouter} from 'next/navigation';
import { coursestatusAtom,bootcampdropdownstatus,connectorAtom,
    connectorDataAtom,
    walletStarknetkitNextAtom, } from "@/state/connectedWalletStarknetkitNext"
  import { walletStarknetkitLatestAtom } from "@/state/connectedWalletStarknetkitLatest"
  import { RESET } from "jotai/utils"
  import { connect, disconnect } from "starknetkit"
  import { ARGENT_WEBWALLET_URL, CHAIN_ID, provider } from "@/constants"
import Bootcampdropdown from "@/components/bootcamp/Bootcampdropdown"
import { useAtom, useSetAtom } from "jotai"
import Basicinfo from '@/components/createorganization/Basicinfo';
import Walletinfo from '@/components/createorganization/Walletinfo';
import Admininfo from '@/components/createorganization/Admininfo';
import Addinstructor from '@/components/createorganization/Addinstructor';
import Congratulations from '@/components/createorganization/Congratulations';
import Nftinfo from '@/components/createorganization/Nftinfo';



const Index = () => {
    const [status, setstatus] = useAtom(coursestatusAtom); 
  const [bootcampdropstat, setbootcampdropstat] = useAtom(bootcampdropdownstatus)
  const router = useRouter();
  const params = useParams();
  const section = params.info;
  const setWalletLatest = useSetAtom(walletStarknetkitLatestAtom)
  const setWalletNext = useSetAtom(walletStarknetkitNextAtom)
  const setConnectorData = useSetAtom(connectorDataAtom)
  const setConnector = useSetAtom(connectorAtom)

  const [wallet, setWallet] = useAtom(walletStarknetkitLatestAtom)
  
  useEffect(() => {
    setWalletLatest(RESET)
    setWalletNext(RESET)
    setConnectorData(RESET)
    setConnector(RESET)
  }, [])

  useEffect(() => {
    const autoConnect = async () => {
      try {
        const { wallet: connectedWallet } = await connect({
          //@ts-ignore
          provider,
          modalMode: "neverAsk",
          webWalletUrl: ARGENT_WEBWALLET_URL,
          argentMobileOptions: {
            dappName: "Attensys",
            url: window.location.hostname,
            chainId: CHAIN_ID,
            icons: [],
          },
        })
        setWallet(connectedWallet)
      } catch (e) {
        console.error(e)
        alert((e as any).message)
      }
    }

    if (!wallet) {
      autoConnect()
    }
  }, [wallet])
  
  const handlePageClick = () => {
    setbootcampdropstat(false);
    setstatus(false);
};

const handlerouting = (prop : string) =>{
    router.push(`/Createorganization/${prop}`)
}

const renderContent = () =>{
    switch (section) {
        case "basic-info":
            return <><Basicinfo /></>
        
        case "wallet-info":
            return <>{!wallet ? <Walletinfo /> : <Nftinfo />} </>
        case "nft-info":
              return <>{!wallet ? <Walletinfo /> : <Nftinfo />} </>
        
        case "admin-info":
            return <><Admininfo /></>

        case "add-instructors":
            return <><Addinstructor /></>
            
        case "create-a-bootcamp":
            return <><Congratulations/></>

        default:
            return <p>Error 404</p>;
    }
}

const renderHeader = () =>{
    switch (section) {
        case "basic-info":
            return <>
            <h1 className='text-[18px] font-bold text-[#5801A9] leading-[22px]'>Getting you ready in 5 easy steps</h1>
            <div className='flex space-x-4 justify-center items-center'>
                        <div className={`border-[1px] rounded-full border-[#9B51E0]  bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>1</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>2</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>3</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>4</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>5</div>
                    </div>
            </> 
        
        case "wallet-info":
            return <> 
            <h1 className='text-[18px] font-bold text-[#5801A9] leading-[22px]'>Great Job!!, you&apos;re almost there</h1>
            <div className='flex space-x-4 justify-center items-center'>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>1</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] bg-[#9B51E0] text-[#FFFFFF] flex items-center justify-center`}>2</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>3</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>4</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>5</div>
                    </div>
         </>
        
        case "admin-info":
            return <>  
            <h1 className='text-[18px] font-bold text-[#5801A9] leading-[22px]'>Now, let&apos;s know the <span className='text-[#4A90E2]'>brains</span> behind your organization</h1>
            <div className='flex space-x-4 justify-center items-center'>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>1</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>2</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>3</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>4</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>5</div>
                    </div>
            <p className='w-[580px] text-center text-[14px] font-light leading-[20px]'>As an organization admin <span className='text-[#4A90E2]'>you reserve full access to add instructors, issue certificates, access control and sole management rights to your organization.</span> This information help us verify it&apos;s you whenever we suspect inconsistent activity</p>
            </>

        case "add-instructors":
            return <>
            <h1 className='text-[18px] font-bold text-[#5801A9] leading-[22px]'><span className='text-[#4A90E2]'>Worthy mentions:</span> Only Instructors can create courses</h1>
            <div className='flex space-x-4 justify-center items-center'>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>1</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>2</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>3</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] bg-[#9B51E0] text-[#FFFFFF] h-[38px] w-[38px] flex items-center justify-center`}>4</div>
                        <div className='h-[1px] w-[54px] border-[1px] border-[#5801A9]'></div>
                        <div className={`border-[1px] rounded-full border-[#9B51E0] h-[38px] w-[38px] flex items-center justify-center`}>5</div>
                    </div>
                    <p className='w-[580px] text-center text-[14px] font-light leading-[20px]'>As your first order of business add your first instructor. If you would like to create a course yourself, kindly go ahead and add your admin email.</p>
            
            </>
            
        case "create-a-bootcamp":
            return <>
            <h1 className='text-[20px] font-bold text-[#4A90E2] leading-[22px] text-center flex justify-center items-center'>Congratulations your Organization is all setup!!</h1>
            </>

        default:
            return <p>Error 404</p>;
    }
}


  return (
    <div onClick={handlePageClick} className='h-auto'>
        {status && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
       {bootcampdropstat && (<div className='fixed inset-0 bg-black opacity-5 backdrop-blur-sm'></div>)}
       <div onClick={(e) => e.stopPropagation()} >
        <Coursedropdown />
        </div>
        <div onClick={(e) => e.stopPropagation()} > 
        <Bootcampdropdown />
        </div>

        <div className='flex w-full'>
            <div className='w-[20%] bg-create-gradient flex justify-end'>
                <div className='mt-20 space-y-5'>
                        <div className={`cursor-pointer h-[67px] w-[278px] text-[16px]  rounded-tl-xl rounded-bl-xl py-5 pl-10 ${section == "basic-info" ? "bg-[#F5F8FA] text-[#5801A9]" : "bg-none text-[#FFFFFF]"} leading-[22px] font-bold`}  onClick={()=>{handlerouting("basic-info")}}>Basic Info</div> 
                        {/* @todo all these items on the panel should be clickable if and only if the details has already been filled, the idea if for it to be more like a way to go back to previously filled items */}
                        <div className={`cursor-pointer h-[67px] w-[278px] text-[16px]  rounded-tl-xl rounded-bl-xl py-5 pl-10 ${section == "wallet-info" || section == "nft-info" ? "bg-[#F5F8FA] text-[#5801A9]" : "bg-none text-[#FFFFFF]"} leading-[22px] font-bold`} onClick={()=>{!wallet ? handlerouting("wallet-info") : handlerouting("nft-info")}}>{!wallet ? "Wallet Information" : "NFT Information"}</div>
                        <div className={`cursor-pointer h-[67px] w-[278px] text-[16px]  rounded-tl-xl rounded-bl-xl py-5 pl-10 ${section == "admin-info" ? "bg-[#F5F8FA] text-[#5801A9]" : "bg-none text-[#FFFFFF]"} leading-[22px] font-bold`} onClick={()=>{handlerouting("admin-info")}}>Admin information</div>
                        <div className={`cursor-pointer h-[67px] w-[278px] text-[16px]  rounded-tl-xl rounded-bl-xl py-5 pl-10 ${section == "add-instructors" ? "bg-[#F5F8FA] text-[#5801A9]" : "bg-none text-[#FFFFFF]"} leading-[22px] font-bold`} onClick={()=>{handlerouting("add-instructors")}}>Add Instructors</div>
                        <div className={`cursor-pointer h-[67px] w-[278px] text-[16px]  rounded-tl-xl rounded-bl-xl py-5 pl-10 ${section == "create-a-bootcamp" ? "bg-[#F5F8FA] text-[#5801A9]" : "bg-none text-[#FFFFFF]"} leading-[22px] font-bold`} onClick={()=>{handlerouting("create-a-bootcamp")}}>Create bootcamp</div>
                </div>
            </div>

            <div className='w-[80%] bg-[#f5f8fa] px-16 pb-32'>
                <div className='h-auto pt-24 pb-8 w-full flex flex-col justify-center items-center space-y-5'>
                    {renderHeader()}
                </div>
                    {renderContent()}
            </div>
        </div>    


    </div>
  )
}

export default Index