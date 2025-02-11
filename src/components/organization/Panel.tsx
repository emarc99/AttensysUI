import React from "react";
import Image from "next/image";
import drop from "@/assets/droporg.svg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";

const Panel = (props: any) => {
  return (
    <div className="h-auto w-[90%] mx-auto mt-24">
      <div className="flex justify-between w-[320px] items-center">
        <h1 className="text-[22px] leading-[22px] text-[#333333] font-bold">
          {props.orgname}
        </h1>
        <Image src={drop} alt="dropdown" />
      </div>
      <div className="flex w-[380px] items-center space-x-1 mt-1">
        <IoIosInformationCircleOutline />
        <h1 className="text-[13px] text-[#2D3A4B] leading-[20px] font-light">
          Toggle to switch between multiple organizations
        </h1>
      </div>
      <div className="h-[400px] w-full bg-[#FFFFFF] rounded-lg border border-[#B0B0B0] mt-8">
        <div className="h-[80px] flex justify-between px-5 items-center">
          <div className="flex space-x-2 items-center border-[1px] border-[#6B6D6E] rounded-lg h-[42px] w-[230px] justify-center ">
            <GoOrganization className="text-[#383838]" />
            <h1 className="text-[14px] text-[#2D3A4B] leading-[21px] font-medium">
              Organizations Overview
            </h1>
          </div>
          <Image src={drop} alt="dropdown" />
        </div>
        <div className="h-[150px] border-t-[1px] border-b-[1px] border-[#B0B0B0] flex justify-between text-[14px] text-[#333333] leading-[22px] font-medium">
          <div className="w-[33%] border-r-[1px] border-[#B0B0B0] px-8 flex flex-col justify-center space-y-4">
            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Key : </h1>
              </div>
              <h1>
                Address <span className="text-[#9B51E0]">({props.owner})</span>
              </h1>
            </div>

            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Bootcamps : </h1>
              </div>
              <div className="h-[30px] w-[64px] text-[#115E2C] bg-[#C4FFA2] flex items-center justify-center rounded-lg">
                {props.bootcampNumber}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Organization : </h1>
              </div>
              <h1> {props.orgname}</h1>
            </div>
          </div>

          <div className="w-[33%] border-r-[1px] border-[#B0B0B0] px-8 flex flex-col justify-center space-y-4">
            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Classes : </h1>
              </div>
              <h1>
                <span className="text-[#9B51E0]">{props.classes}</span> Classes
              </h1>
            </div>

            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Tutors : </h1>
              </div>
              <h1>
                <span className="text-[#9B51E0]">{props.tutors}</span> Tutors
              </h1>
            </div>

            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Certifications Issued : </h1>
              </div>
              <h1>
                <span className="text-[#9B51E0]">2,187</span> certificates
              </h1>
            </div>
          </div>

          <div className="w-[33%] px-8 flex flex-col my-6 space-y-4">
            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Created by: </h1>
              </div>
              <h1>{props.creator}</h1>
            </div>

            <div className="flex justify-between">
              <div className="space-x-2 flex items-center">
                <CiCircleInfo className="text-[18px]" />
                <h1>Total registered student : </h1>
              </div>
              <h1>
                <span className="text-[#9B51E0]">{props.studentNumber}</span>{" "}
                Registered
              </h1>
            </div>
          </div>
        </div>
        <div className="px-8 space-y-6 flex flex-col mt-6">
          <div className="space-x-2 flex items-center text-[14px] text-[#333333] leading-[22px] font-medium">
            <CiCircleInfo className="text-[18px]" />
            <h1>Organization info </h1>
          </div>
          <p className="w-[95%] text-[14px] text-[#6B6D6E] font-medium">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Panel;
