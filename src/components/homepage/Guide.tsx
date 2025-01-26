import React from "react";
import thumbs from "@/assets/thumbs.svg";
import Image from "next/image";
import steps from "@/assets/steps.svg";

const Guide = () => {
  return (
    <div className="sm:h-[410px] w-[100%] py-12 sm:py-0 bg-[#2D3A4B] lg:flex">


      <div className="w-[90%] mx-auto h-[100%] my-auto block sm:flex sm:space-x-20 justify-center items-center">
        <div className="flex flex-col sm:flex-row items-center justify-around">
          {/* Checks y Imagen */}
          <div className="flex sm:space-x-8 items-center">
            {/* Checks */}
            <div
              className="mx-0 sm:mx-20"
              style={{
                width: "39.35px",
                height: "247px",
              }}
            >
              <Image alt="steps" src={steps} className="mx-auto object-cover" />
            </div>

            {/* Imagen */}
            <div
              className="rounded-[8.26px] overflow-hidden"
              style={{ width: "286.65px", height: "247px", marginLeft: "20px", marginTop: "auto" }}
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

        {/* Contenido de los textos */}
        <div className="sm:space-y-8 space-y-6 w-[500px] mx-auto ">
        <div className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[21px] space-y-4 px-4 py-6 sm:px-0 sm:py-0 ">
            <h1 className="text-[#FFFFFF] font-bold leading-[21px]">
              Sign Up
            </h1>
            <p
              className="text-[14px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#FFFFFF] font-light text-justify"
              style={{ width: "100%", maxWidth: "332px", height: "auto", minHeight: "60px" }}
            >
              Create an account and get instant access to our dashboard. Whether
              you are a school, organization, or event manager, we have the
              tools for you.
            </p>
          </div>

          <div className="text-[18px] sm:text-[18px] space-y-4 px-4 py-6 sm:px-0 sm:py-0">
            <h1
              className="text-[#FFFFFF] font-bold leading-[23px]"
              style={{ width: "320px", height: "22px" }}
            >
              Manage Attendance & Certifications
            </h1>
            <p
              className="text-[14px] text-[#FFFFFF] font-light text-justify"
              style={{ width: "315px", height: "60px" }}
            >
              Automatically track attendance and issue certificates upon course
              or event completion. Manage everything from one central platform.
            </p>
          </div>
        </div>


        {/* Div 2 */}
        <div className="sm:space-y-8 space-y-6 w-[500px]">
          <div className="text-[18px] sm:text-[18px] space-y-4 px-4 py-6 sm:px-0 sm:py-0">
            <h1 className="text-[#FFFFFF] font-bold leading-[21px]">
              Set Up Courses & Events
            </h1>
            <p
              className="text-[14px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#FFFFFF] font-light text-justify"
              style={{ width: "100%", maxWidth: "332px", height: "auto", minHeight: "60px" }}
            >
              Add your courses, events, or programs.
              Customize everything from scheduling
              to certification rules
            </p>
          </div>

          <div className="text-[18px] sm:text-[18px] space-y-4 px-4 py-6 sm:px-0 sm:py-0">
            <h1
              className="text-[#FFFFFF] font-bold leading-[23px]"
              style={{ width: "320px", height: "22px" }}
            >
              Verify Certificate
            </h1>
            <p
              className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#FFFFFF] font-light text-justify"
              style={{
                marginTop: "12px",
                maxWidth: "350px",
                lineHeight: "1.5",
                padding: "5px 0",
              }}
            >
              You can now verify certification with as simple as a search button click. Find out all you need with the{" "}
              <span className="text-[#4A90E2] font-semibold cursor-pointer">
                Attensys Explorer
              </span>
              .
            </p>


          </div>
        </div>









      </div>
    </div>
  );
};

export default Guide;
