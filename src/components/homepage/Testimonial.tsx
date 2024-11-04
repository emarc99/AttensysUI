import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonialccard from './Testimonialccard';
import nikolas from '@/assets/nikolas.svg'
import profilepic from '@/assets/headshot.svg'
import item from '@/assets/smiling.svg'

const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const mockdata = [
    {
        name: "Ephraim",
        profile : nikolas,
        statement : "We no longer worry about the authenticity of our certificates. AttenSys ensures every certificate we issue is tamper-proof.",
    },
    {
        name: "Kenny",
        profile : profilepic,
        statement : "We no longer worry about the authenticity of our certificates. AttenSys ensures every certificate we issue is tamper-proof.",
    },
    {
        name: "Jegz",
        profile : item, 
        statement : "We no longer worry about the authenticity of our certificates. AttenSys ensures every certificate we issue is tamper-proof.",
    },
]

  return (
    <div className='h-[530px] w-[100%] hidden lg:flex bg-testimonial-gradient items-center justify-center'>
            <div className='h-[397.06px] w-[893px]'>
                    <h1 className='text-center font-bold text-[24px] text-[#2D3A4B] h-[31px] leading-[31px] pt-8'>Why <span className='text-[#9B51E0]'>they</span> Love Attensys...</h1>
                    <Carousel responsive={responsive} centerMode={false} containerClass="container" className='mt-16'  renderArrowsWhenDisabled={false}
   additionalTransfrom={0}
   arrows
   dotListClass=""
   draggable
   focusOnSelect={false}
   infinite
   itemClass=""
   keyBoardControl
   minimumTouchDrag={80}
   >
           {mockdata.map((data, index) => (
                    <Testimonialccard
                    key={index}
                    user={data.name}
                    pic={data.profile}
                    statement={data.statement}
                    />
                ))}
                    </Carousel>
            </div>
    </div>
  )
}

export default Testimonial



