import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Mybootcampcarousel from './Mybootcampcarousel';
import {caroselldata} from '@/constants/data'
import { useRouter } from 'next/navigation';
import {currentID} from '@/state/connectedWalletStarknetkitNext'
import { useSetAtom } from 'jotai';


const Mybootcamp = (props : any) => {
  const router = useRouter();
  const setCurrentID = useSetAtom(currentID)

  const handlebootcamproute = (props : string, id : any) => {
    setCurrentID(id)
    router.push(`/Bootcamp/${props}/Outline/?id=${id}`)
  }
  console.log("dataa heerr", props.bootcampInfo)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1440 },
          items: 4
        },
        desktop_: {
          breakpoint: { max: 1440, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
 
    return (
    <div className='h-auto w-full flex flex-col items-center bg-[#FFFFFF] border-[1px] border-[#D9D9D9] rounded-b-xl py-8'>
        <div className='w-[100%] mx-auto flex flex-col items-center -z-0'>
        <Carousel responsive={responsive} centerMode={false} containerClass="container"  renderArrowsWhenDisabled={false}
   additionalTransfrom={0}
   arrows
   dotListClass=""
   draggable
   focusOnSelect={false}
   infinite
   itemClass=""
   keyBoardControl
   minimumTouchDrag={80}
   autoPlay={false} // Enables auto-scrolling
   autoPlaySpeed={3000}
   >
           {props.bootcampInfo.map((data : any, index : any) => (
                    <Mybootcampcarousel
                    key={index}
                        name={data.bootcamp_name} 
                        action="Ongoing"
                        height="200px"
                        width='200px'
                        uri={data.bootcamp_ipfs_uri}
                        onClick={() => handlebootcamproute(data.bootcamp_name, Number(data.bootcamp_id))}
                    />
                ))}
                    </Carousel>
        </div>
                           
    </div>
  )
}

export default Mybootcamp