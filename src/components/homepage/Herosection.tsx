import React from "react"
import model from "@/assets/model.svg"
import rectangle from "@/assets/rectangle.svg"
import bg from "@/assets/bg.svg"
import star from "@/assets/star.svg"
import circle from "@/assets/circle.svg"
import Image from "next/image"
import { Button } from "@headlessui/react"
import leftrectangle from "@/assets/leftrectangle.svg"
import ship from "@/assets/ship.svg"
import kite from "@/assets/kite.svg"
import splitline from "@/assets/splitline.svg"
import bluesplit from "@/assets/bluesplit.svg"
import line from "@/assets/line.svg"

const Herosection = () => {
  return (
    <div className="hidden lg:flex h-[460px] w-[80%] mx-auto pt-6 items-center justify-center relative">
      <Image alt="model" src={bluesplit} className="absolute left-[-2%] top-[10%] mt-[2rem] lg:mt-[3rem]" />
      <Image alt="model" src={ship} className="absolute z-[10] right-[20%] lg:right-[42%] w-[160px] lg:w-[160px] top-[10%]" />
      <Image alt="model" src={leftrectangle} className="absolute mt-[2rem] lg:mt-[3rem] z-[5] right-[27%] clg:right-[32%]" />
      <Image alt="model" src={circle} className="absolute mt-[10rem] lg:mt-[15rem] z-[10] right-[29.5%] bottom-[15%] lclg:right-[33.8%] clg:right-[34.5%] w-[32px] lg:w-[42px]" />
      <Image alt="model" src={line} className="absolute left-[20%] lg:left-[28%]  mt-[13rem] lclg:mt-[13rem] " />
      <Image alt="model" src={kite} className="absolute z-[10] mt-[20rem] lg:mt-[22rem] right-[30%] lg:right-[46%] w-[40px] lg:w-[54px]" />

      <div className="flex h-[100%] justify-between">
        <div className="w-[100%] space-y-8 h-[55%] my-auto px-12">
          <h1 className="w-[70%] items-center text-[36px] clg:text-[30px] lclg:text-[28px] leading-[45px] font-bold text-[#2D3A4B]">
            One <span className="text-[#9B51E0]">Platform</span>, Infinite
            Possibilities—Track, Stream, and Secure Your Certifications
          </h1>
          <p className="text-[#2D3A4B] font-light text-[17px] leading-[22px] w-[82%] lclg:w-[100%] ">
            Simplifying certificate issuance, attendance tracking, and online
            <br/> course management for schools, organizations, and event managers.
          </p>
          <div className="flex space-x-3 w-[60%]">
            <Button className="hidden lg:flex rounded-lg bg-[#2D3A4B] py-2 px-4 lg:h-[47px] items-center lg:w-[154px] text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
              Verify Certifcate
            </Button>
            <Button className="hidden border border-[#2D3A4B] lg:flex rounded-lg py-2 px-4 lg:h-[47px] items-center lg:w-[202px] text-sm text-[#2D3A4B]">
              Get Started on Attensys
            </Button>
          </div>
        </div>
    <div className="h-full w-full lg:w-[45%] clg:w-[50%] flex justify-end relative">
      <Image alt="model" src={star} className="absolute mt-[2rem] lg:mt-[3rem] w-[20px] lg:w-[25px]" />
      <Image alt="model" src={model} className="h-full w-full z-10 clg:mr-[70px] lg:mr-[20px]" />
      <Image alt="model" src={rectangle} className="absolute mt-[8rem] lg:mt-[10.5rem] mx-10 lg:mx-14" />
      <Image alt="model" src={bg} className="absolute mt-[6rem] lg:mt-[8rem] mr-3 w-[80px] lg:w-[100px]" />
      <Image alt="model" src={splitline} className="absolute mt-[23rem] lg:mt-[27.3rem] mr-5 w-[40px] lg:w-[50px]" />
      <Image alt="model" src={circle} className="absolute mt-[8rem] lg:mt-[9.5rem] mr-6 lg:mr-9 w-[50px] lg:w-[60px]" />
    </div>
      </div>
    </div>
  )
}

export default Herosection
