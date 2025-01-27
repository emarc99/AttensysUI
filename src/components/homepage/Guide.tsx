import React from "react";
import thumbs from "@/assets/thumbs.svg";
import Image from "next/image";
import steps from "@/assets/steps.svg";

const Guide = () => {
  return (
    <div className="sm:h-[410px] w-[100%] py-12 sm:py-0 bg-[#2D3A4B] lg:flex">


<div className="w-[90%] mx-auto h-[100%] my-auto block sm:flex sm:space-x-20 justify-center items-center">
  <div className="flex flex-col sm:flex-row lg:flex-row-reverse items-center justify-around">
    {/* Checks e Imagen */}
    <div className="flex sm:space-x-8 lg:space-x-8 items-center">
      {/* Checks */}
      <div
        className="mx-0 sm:mx-20 lg:order-2" /* Cambia el orden en lg y mayores */
        style={{
          width: "39.35px",
          height: "247px",
        }}
      >
        <Image alt="steps" src={steps} className="mx-auto object-cover" />
      </div>

      {/* Imagen */}
      <div
        className="rounded-[8.26px] overflow-hidden lg:order-1" /* Cambia el orden en lg y mayores */
        style={{
          width: "286.65px",
          height: "247px",
          marginLeft: "20px",
          marginTop: "auto",
        }}
      >
        <Image
          alt="thumb"
          src={thumbs}
          className="object-cover"
          width={286.65}
          height={247}
        />
      </div>
    </div>
  </div>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-4">
          {/* Div 1 */}
          <div className=" ">
            {/* Sign Up */}
            <div className="">
              <h1 className="mt-14 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-19 mb-4 text-[#FFFFFF] font-bold text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                Sign Up
              </h1>
              <p className="text-[#FFFFFF] font-light text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px] text-justify mb-12 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                Create an account and get instant access to our dashboard. Whether you are a school, organization, or event manager, we have the tools for you.
              </p>

            </div>

            {/* Mange */}
            <div className="">
              <h1 className="mt-12 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-1 mb-4 text-[#FFFFFF] font-bold text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                Manage Attendance & Certifications
              </h1>
              <p className="text-[#FFFFFF] font-light text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px] text-justify mb-12 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                Automatically track attendance and issue certificates upon course or event completion. Manage everything from one central platform.
              </p>
            </div>
          </div>

          {/* Div 2 */}

          <div className="">
            {/* Set Up Courses & Events*/}
            <div className="">
              <h1 className="mt-2 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-19 mb-4 text-[#FFFFFF] font-bold text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                Set Up Courses & Events
              </h1>
              <p className="text-[#FFFFFF] font-light text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px] text-justify mb-12 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                Add your courses, events, or programs. Customize everything from scheduling to certification rules.
              </p>

            </div>

            {/* Verify Certificate */}
            <div className="">
              <h1 className="mt-12 sm:mt-12 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 mb-4 text-[#FFFFFF] font-bold text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                Verify Certificate
              </h1>
              <p className="text-[#FFFFFF] font-light text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px] text-justify mb-12 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
                You can now verify certification with as simple as a search button click. Find out all you need with the{" "}
                <span className="text-[#4A90E2] font-semibold cursor-pointer">Attensys Explorer</span>.
              </p>
            </div>
          </div>
        </div>










      </div>
    
  );
};

export default Guide;
