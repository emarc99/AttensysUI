import React, { useState } from "react";
import Image from "next/image";
import tdesign_video from "../../assets/tdesign_video.svg";
import ReactPlayer from "react-player";

interface Lecture {
  img: string;
  title: string;
  desc: string;
  timing: number;
}

interface LectureData {
  lectures: Lecture[];
  courseData: any;
  learningObj: string;
  isActivated: boolean;
  handleSwitch: (checked: boolean) => void;
}

const Lectures = ({
  lectures,
  courseData,
  learningObj,
  isActivated,
  handleSwitch,
}: LectureData) => {
  const [durations, setDurations] = useState<{ [key: number]: number }>({});

  const handleDuration = (id: number, duration: number) => {
    // Set the duration for the specific video ID
    setDurations((prevDurations) => ({
      ...prevDurations,
      [id]: duration,
    }));
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="block sm:grid grid-cols-2 gap-4 text-justify">
      <div className="lg:py-6 sm:py-12  order-last sm:order-first">
        <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
          {courseData.courseCurriculum
            ?.slice()
            .reverse()
            .map((item: any, id: any) => (
              <div key={id} className="block sm:flex py-3">
                <div className="flex-3 border-4 border w-full h-[48%] sm:w-48 sm:h-24">
                  {item.video && (
                    <ReactPlayer
                      url={`https://${item.video}`}
                      controls={false}
                      playing={false}
                      width="100%"
                      height="100%"
                      playIcon={<></>}
                    />
                  )}
                </div>

                <div className="sm:mx-10 mb-5 flex-1">
                  <h4 className="font-semibold text-[14px] text-[#333333] leading-[22px] my-2">
                    {item.name}
                    {durations[id] && (
                      <span className="text-[#5801A9] ml-3">
                        ({formatDuration(durations[id])})
                      </span>
                    )}
                  </h4>

                  <p className="font-light text-[14px] text-[#333333] leading-[22px] h-[68px] ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div>
          <div className="flex flex-col lg:w-[60%] mt-5">
            <h4 className="font-semibold text-[18px] leading-[31px] text-[#333333] mb-4">
              Do you want to issue certification for this course?
            </h4>

            <div className="flex items-center space-x-8">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="certification"
                  checked={isActivated}
                  onChange={() => handleSwitch(true)}
                  className="w-4 h-4 text-[#9B51E0] border-2 border-[#9B51E0] focus:ring-[#9B51E0]"
                />
                <span className="text-[#333333] text-[14px] font-normal">
                  Yes
                </span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="certification"
                  checked={!isActivated}
                  onChange={() => handleSwitch(false)}
                  className="w-4 h-4 text-[#9B51E0] border-2 border-[#9B51E0] focus:ring-[#9B51E0]"
                />
                <span className="text-[#333333] text-[14px] font-normal">
                  No
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 hidden xl:block">
        <h4 className="font-semibold text-[14px] text-[#333333] leading-[22px]">
          Learning Objective
        </h4>
        <div className="  text-[#333333] text-[14px] font-light leading-[22px]">
          <p>{learningObj}</p>
        </div>

        <div className="py-5">
          <h4 className="font-semibold text-[14px] text-[#333333] leading-[22px]">
            Student Requirements
          </h4>
          <div className="text-[#333333] text-[14px] font-light leading-[22px]">
            <p>{courseData?.studentRequirements}</p>
          </div>
        </div>

        <div className="py-5">
          <h4 className="font-semibold text-[14px] text-[#333333] leading-[22px]">
            {" "}
            Target Audience
          </h4>
          <div className="text-[#333333] text-[14px] font-light leading-[22px]">
            <p>{courseData?.targetAudience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
