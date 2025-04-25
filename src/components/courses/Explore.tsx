import React, { useEffect, useState } from "react";

import videoHero from "../../assets/video.svg";
import CarouselComp from "./Carousel";
import Image from "next/image";
import { GiBackwardTime } from "@react-icons/all-files/gi/GiBackwardTime";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import { useRouter } from "next/navigation";
import { handleCourse } from "@/utils/helpers";
import { skills, subLectures } from "@/constants/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "../bootcamp/StarRating";
import { LuBadgeCheck } from "react-icons/lu";
import ReactPlayer from "react-player";
import { PinataSDK } from "pinata";

interface ChildComponentProps {
  wallet: any;
  courseData: any;
}

const Explore = ({ wallet, courseData }: ChildComponentProps) => {
  const router = useRouter();

  const pinata = new PinataSDK({
    pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT,
    pinataGateway: process.env.NEXT_PUBLIC_GATEWAY_URL,
  });

  function extractCIDFromUrl(ipfsUrl: string): string {
    // Split the URL by '/' and get the last part
    const parts = ipfsUrl.split("/");
    const cid = parts[parts.length - 1];
    return cid.split("?")[0].split(".")[0];
  }

  const createAccess = async (cid: string, expires: number = 86400) => {
    try {
      let formattedCid = extractCIDFromUrl(cid);
      const accessUrl = await pinata.gateways.private.createAccessLink({
        cid: formattedCid,
        expires,
      });
      return accessUrl;
    } catch (err) {
      console.error("Error creating access link:", err);
    }
  };

  // Function to render a course card
  const renderCourseCard = (course: any, index: any) => {
    return (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      >
        <div className="h-48 relative">
          <Image
            src={`https://ipfs.io/ipfs/${course?.data?.courseImage}`}
            alt={course?.data?.courseName || "Course image"}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-between mb-2">
            <p className="bg-[#5801A9] text-white text-xs px-2 py-1 rounded">
              {course?.data?.difficultyLevel || "Beginner"}
            </p>
            <div className="flex items-center">
              <StarRating totalStars={5} starnumber={4} />
              <span className="text-xs text-gray-600 ml-1">(200+)</span>
            </div>
          </div>

          <h3
            className="font-bold text-lg mb-2 cursor-pointer hover:text-[#5801A9]"
            onClick={(e) => {
              localStorage.setItem("courseData", JSON.stringify(course?.data));
              handleCourse(e, course?.data?.courseName, router);
            }}
          >
            {course?.data?.courseName || "Course Title"}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {course?.data?.courseDescription || "No description available"}
          </p>

          <div className="flex items-center text-xs text-gray-500 mb-2">
            <FaPlay className="mr-1 text-[#5801A9]" />
            <span>Total play time: 2 hrs 35 mins</span>
          </div>

          <div className="flex items-center text-xs text-gray-500">
            <GrDiamond className="mr-1" />
            <span>By {course?.data?.courseCreator || "Unknown Creator"}</span>
          </div>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={(e) => {
              localStorage.setItem("courseData", JSON.stringify(course?.data));
              handleCourse(e, course?.data?.courseName, router);
            }}
            className="w-full bg-[#5801A9] hover:bg-[#4a0189] text-white py-2 rounded text-sm font-medium"
          >
            View Course
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero component */}
      <div
        className={`bg-[url('/hero_asset.png')] space-y-4 text-white px-8 lg:px-28 py-10 lg:py-20 from-orange-400 via-red-500 to-pink-500 h-80 flex items-center`}
      >
        <div className="w-full mx-auto max-w-screen-2xl">
          {/* Hero lettering */}
          <h1 className="w-[90%] xl:w-5/12 font-bold text-2xl sm:text-4xl mb-4">
            Continuous learning is the key to success - upskill with us
          </h1>
          <p className="w-[90%] sm:w-1/2">
            With Attensys, all you need is your address to prove your
            certification. Welcome to the future{" "}
          </p>
        </div>
      </div>

      {/* skills  */}
      <div className="ml-6 lg:mx-12 overflow-x-scroll xl:overflow-auto my-16 hidden xl:flex flex-row space-x-4 lg:justify-center">
        {skills.map((item, index) => (
          <p
            className="bg-[#2D3A4B] px-6 py-3.5 rounded-lg text-white flex flex-none items-center justify-center"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>

      {/* Course Grid Display */}
      <div className="mx-6 lg:mx-auto max-w-screen-2xl my-8">
        {courseData.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-[#2D3A4B] mb-6">
              {courseData.length} Course{courseData.length !== 1 ? "s" : ""}{" "}
              Available
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courseData.map((course: any, index: any) =>
                renderCourseCard(course, index),
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No courses found. Try different search terms.
            </p>
          </div>
        )}
      </div>

      {/* what to learn next */}
      <div className="mx-6 lg:mx-auto">
        <div className="mx-auto max-w-screen-2xl">
          {/* upper */}
          <div className="my-4">
            {/* wording */}
            <h3 className="text-[25px] font-bold text-[#2D3A4B]">
              What to learn next
            </h3>
            <p className="font-light text-base lg:text-xl text-[#2D3A4B]">
              Because you viewed{" "}
              <span className="text-[#5801A9] font-bold underline">
                &ldquo;Introduction to Web Dev Starknet&rdquo;
              </span>
            </p>
          </div>

          {/* cards  */}
          <CarouselComp wallet={wallet} />
        </div>

        {/* below */}
        <div className="sm:px-6 lg:mx-auto max-w-screen-2xl flex flex-col w-full lg:flex-row gap-6 justify-between my-6 sm:my-24">
          <div className="my-4 lg:hidden">
            {/* wording */}
            <h3 className="text-[25px] font-bold text-[#2D3A4B]">
              Fan favorite
            </h3>
            <p className="font-light text-base lg:text-xl text-[#2D3A4B]">
              Because you viewed{" "}
              <span className="text-[#5801A9] font-bold underline">
                &ldquo;Introduction to Web Dev Starknet&rdquo;
              </span>
            </p>
          </div>
          {/* left */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5 sm:mx-0 xl:w-[70%] max-w-full">
            <div className="h-full sm:w-full rounded-xl">
              <Image
                src={`https://ipfs.io/ipfs/${courseData[courseData.length - 1]?.data?.courseImage}`}
                alt="video"
                width={700}
                height={700}
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
            <div className="my-4 sm:my-0 !ml-0 lg:!ml-8">
              <div className="">
                <div
                  onClick={(e) => {
                    localStorage.setItem(
                      "courseData",
                      JSON.stringify(courseData[courseData.length - 1]?.data),
                    );
                    handleCourse(e, e.currentTarget.textContent, router);
                  }}
                >
                  <button className="bg-[#2D3A4B] hidden lg:block hover:bg-gray-500 text-white text-[11px] font-bold py-2 px-4 rounded cursor-pointer">
                    Get this course
                  </button>
                  <h2 className="font-bold lg:text-[32px] leading-5 tracking-tight lg:leading-[1.1] text-[23px] sm:text-4xl text-[#2D3A4B] lg:tracking-tight my-4 cursor-pointer">
                    {courseData[courseData.length - 1]?.data.courseName}
                  </h2>
                </div>
                <p className="text-white items-center font-semibold inline gap-2 text-sm bg-[#5801A9] rounded p-2">
                  {courseData[courseData.length - 1]?.data.courseCreator}
                </p>
                <button
                  onClick={(e) => {
                    localStorage.setItem(
                      "courseData",
                      JSON.stringify(courseData[courseData.length - 1]?.data),
                    );
                    handleCourse(e, e.currentTarget.textContent, router);
                  }}
                  className="bg-[#5801a9] ml-3 lg:hidden hover:bg-gray-500 text-white gap-2 text-[14px] rounded-md font-bold p-2 cursor-pointer"
                >
                  Get this course
                </button>
                {/* rating and num of students */}
                <div className="flex flex-col sm:flex-row space-x-28 sm:gap-x-4 lg:gap-x-0  items-start justify-start my-4">
                  <div className="flex items-center space-x-4">
                    <StarRating totalStars={5} starnumber={4} />
                    <p className="font-bold text-[13px] text-[#2D3A4B] leading-[15px]">
                      (281)
                    </p>
                  </div>

                  <div className="flex items-center  mt-3 sm:mt-0 mx-0 sm:mx-8 !ml-0 lg:!ml-10">
                    <LuBadgeCheck color="#2D3A4B h-[19px] w-[19px]" />
                    <p className="font-bold text-[13px] text-[#2D3A4B] ml-1 leading-[15px]">
                      291 certification
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-y-3 gap-x-4 lg:gap-x-6 sm:flex-row sm:flex-wrap">
                  {/* creator and last update */}
                  <div className="">
                    <p className="text-[11px] text-[#2D3A4B] leading-[18px] font-medium">
                      Created by:{" "}
                      <span className="underline inline">
                        {courseData[courseData.length - 1]?.data.courseCreator}
                      </span>
                    </p>
                  </div>
                  <span className="flex gap-2 items-center !ml-0 ">
                    <GiBackwardTime />
                    <p className="text-[11px] inline text-[#2D3A4B] leading-[18px] font-medium">
                      Last updated 10|10|24
                    </p>
                  </span>
                  {/* video prop */}
                  <span className="flex gap-2 items-center">
                    <FaPlay className="h-[11px] w-[11px] text-[#5801A9]" />
                    <p className="text-[11px] inline text-[#2D3A4B] leading-[18px] font-medium">
                      Total play time: 2 hrs 35 mins
                    </p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <GrDiamond color="#2D3A4B" className="h-[11px] w-[11px]" />
                    <p className="text-[11px] inline text-[#2D3A4B] leading-[18px] font-medium">
                      Difficulty level:{" "}
                      {courseData[courseData.length - 1]?.data.difficultyLevel}
                    </p>
                  </span>
                  <span className="flex items-center gap-2">
                    <LuBadgeCheck className="h-[11px] w-[11px] text-[#5801A9]" />
                    <p className="text-[11px] inline text-[#2D3A4B] leading-[18px] font-medium">
                      Certificate of Completion
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="hidden xl:block w-[32%] h-[307px] overflow-y-scroll ">
            <div className="flex justify-between border-b-2 pb-3">
              <h4>
                Lectures (
                {
                  courseData[courseData.length - 1]?.data.courseCurriculum
                    .length
                }
                )
              </h4>
              <IoMdArrowDropdown />
            </div>

            <div>
              {courseData[courseData.length - 1]?.data.courseCurriculum.map(
                (item: any, i: any) => {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const [accessUrl, setAccessUrl] = useState<
                    string | undefined
                  >(undefined);

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  useEffect(() => {
                    let isMounted = true;
                    createAccess(item.video).then((url) => {
                      if (isMounted) setAccessUrl(url);
                    });
                    return () => {
                      isMounted = false;
                    };
                  }, [item.video]);

                  return (
                    <>
                      <div
                        key={i}
                        className="flex content-center text-sm my-3 cursor-pointer space-x-4"
                        onClick={(e) => {
                          localStorage.setItem(
                            "courseData",
                            JSON.stringify(
                              courseData[courseData.length - 1]?.data,
                            ),
                          );
                          handleCourse(e, e.currentTarget.textContent, router);
                        }}
                      >
                        <div className="w-[150px] h-[120px] rounded-xl border-4 border flex-shrink-0">
                          <ReactPlayer
                            url={accessUrl}
                            controls={false}
                            playing={false}
                            width="100%"
                            height="100%"
                            playIcon={<></>}
                          />
                        </div>

                        <div className="w-[230px]">
                          <h6 className="font-bold">
                            {item.name}
                            {/* <span className="text-[#5801A9]">({item.time})</span> */}
                          </h6>
                          <p className="font-light mt-2">{item.description}</p>
                        </div>
                      </div>
                    </>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>

      {/* recommended for you based on rating */}
      <div>
        <div className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 p-4 sm:p-8 my-4">
          <div className="mx-auto max-w-screen-2xl">
            <p className="text-white font-light text-sm sm:text-base sm:font-bold lg:ml-24">
              Recommended to you based on rating
            </p>
          </div>
        </div>
        <div className="mx-6 lg:mx-auto max-w-screen-2xl">
          <CarouselComp wallet={wallet} />

          <div className="mt-8 sm:mt-24 mx-auto max-w-screen-2xl">
            <div className="my-4 ">
              {/* wording */}
              <h3 className="text-2xl font-bold">You will love this</h3>
              <p className="font-light text-base lg:text-xl text-[#2D3A4B]">
                Because you viewed{" "}
                <span className="text-[#5801A9] font-bold">
                  &ldquo;Introduction to Web Dev Starknet&rdquo;
                </span>
              </p>
            </div>

            {/* cards  */}
            <CarouselComp wallet={wallet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
