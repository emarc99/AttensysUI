import podcast from "@/assets/Podcast.svg";
import rich from "@/assets/Richin2024.svg";
import attensys_logo from "@/assets/attensys_logo.svg";
import graduate from "@/assets/grad.svg";
import profile_pic from "@/assets/profile_pic.png";
import youtube from "@/assets/youtube.svg";
import { provider } from "@/constants";
import { attensysCourseAbi } from "@/deployments/abi";
import { attensysCourseAddress } from "@/deployments/contracts";
import { useFetchCID } from "@/hooks/useFetchCID";
import { getAllCoursesInfo } from "@/utils/helpers";
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond";
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck";
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import ReactPlayer from "react-player/lazy";
import { Contract } from "starknet";
import StarRating from "../bootcamp/StarRating";
import LoadingSpinner from "../ui/LoadingSpinner";
import { CardWithLink } from "./Cards";
import { useAccount, useExplorer } from "@starknet-react/core";

interface CourseType {
  data: any;
  owner: string;
  course_identifier: number;
  accessment: boolean;
  uri: Uri;
  course_ipfs_uri: string;
  is_suspended: boolean;
}

interface Uri {
  first: string;
  second: string;
}

const LecturePage = (props: any) => {
  const lectures = [
    {
      img: rich,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
    {
      img: youtube,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
    {
      img: podcast,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
    {
      img: podcast,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
    {
      img: podcast,
      title: "What is Web Development?",
      desc: "An introduction to the world of web development, covering the basics of how websites...",
      timing: 8,
    },
  ];

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const [courses, setCourses] = useState<CourseType[]>([]);
  const [courseData, setCourseData] = useState<CourseType[]>([]);
  const [durations, setDurations] = useState<{ [key: number]: number }>({});
  const [courseId, setCourseId] = useState<number>();
  const [isTakingCourse, setIsTakingCourse] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isCertified, setIsCertified] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [selectedLectureName, setSelectedLectureName] = useState<string>("");
  const {
    fetchCIDContent,
    getError,
    isLoading: isCIDFetchLoading,
  } = useFetchCID();
  const { account, address } = useAccount();
  const explorer = useExplorer();
  const [txnHash, setTxnHash] = useState<string>();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const [isTargetExpanded, setIsTargetExpanded] = useState(false);
  const [showTargetSeeMore, setShowTargetSeeMore] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  // console.log("uploading:", isUploading);
  console.log("taken:", isTakingCourse);
  // console.log("Certified:", isCertified);

  const handleDuration = (id: number, duration: number) => {
    // Set the duration for the specific video ID
    setDurations((prevDurations) => ({
      ...prevDurations,
      [id]: duration,
    }));
  };

  // Get all courses with CourseType from contract
  const getAllCourses = async () => {
    const res: CourseType[] = await getAllCoursesInfo();
    setCourses(res);
  };

  // Extract courses and informmation
  const getCourse = async () => {
    const resolvedCourses = await Promise.all(
      courses.map(async (course: CourseType) => {
        if (!course.course_ipfs_uri) {
          console.warn(`Skipping invalid IPFS URL: ${course.course_ipfs_uri}`);
          return null; // Skip invalid URLs
        }

        try {
          return await fetchCIDContent(course.course_ipfs_uri);
        } catch (error) {
          console.error("Error fetching from IPFS:", error);
          return null; // Skip on failure
        }
      }),
    );

    // Filter out null values before updating state
    const validCourses = resolvedCourses.filter(
      (course): course is any => course !== null,
    );

    // Remove duplicates before updating state
    setCourseData((prevCourses) => {
      const uniqueCourses = [
        ...prevCourses,
        ...validCourses.filter(
          (newCourse) =>
            !prevCourses.some(
              (prev) => prev.data.courseName === newCourse.data.courseName,
            ),
        ),
      ];
      return uniqueCourses;
    });
  };

  // Find and set the course taken, in order to certify
  const find = async () => {
    try {
      if (!address) {
        console.log("No address available");
        // Check localStorage as fallback
        const storedStatus = localStorage.getItem(`course_${courseId}_taken`);
        if (storedStatus === "true") {
          setShowOverlay(false);
          setIsTakingCourse(true);
        } else {
          setShowOverlay(true);
          setIsTakingCourse(false);
        }
        return;
      }

      const courseContract = new Contract(
        attensysCourseAbi,
        attensysCourseAddress,
        provider,
      );

      const taken_courses = await courseContract?.is_user_taking_course(
        address,
        Number(courseId),
      );
      console.log("taken_courses result:", taken_courses);

      if (taken_courses) {
        localStorage.setItem(`course_${courseId}_taken`, "true");
        setIsTakingCourse(true);
        setShowOverlay(false);
      } else {
        // Only update state if we're sure the user hasn't taken the course
        const storedStatus = localStorage.getItem(`course_${courseId}_taken`);
        if (storedStatus !== "true") {
          setIsTakingCourse(false);
          setShowOverlay(true);
        }
      }

      const certfified_courses =
        await courseContract?.is_user_certified_for_course(
          address,
          Number(courseId),
        );

      console.log("certfified_courses result:", certfified_courses);

      if (certfified_courses) {
        setIsCertified(true);
      } else {
        setIsCertified(false);
      }
    } catch (err) {
      console.error("Error in find:", err);
      // Check localStorage as fallback
      const storedStatus = localStorage.getItem(`course_${courseId}_taken`);
      if (storedStatus === "true") {
        setShowOverlay(false);
        setIsTakingCourse(true);
      } else {
        setShowOverlay(true);
        setIsTakingCourse(false);
      }
    }
  };

  // handle take a course after the course identifier is known
  const handleTakeCourse = async () => {
    if (!address) {
      console.log("No address available");
      return;
    }

    setIsUploading(true);

    const courseContract = new Contract(
      attensysCourseAbi,
      attensysCourseAddress,
      account,
    );
    const take_course_calldata = await courseContract.populate(
      "acquire_a_course",
      [Number(courseId)],
    );

    const callCourseContract = await account?.execute([
      {
        contractAddress: attensysCourseAddress,
        entrypoint: "acquire_a_course",
        calldata: take_course_calldata.calldata,
      },
    ]);
    setTxnHash(callCourseContract?.transaction_hash);
    localStorage.setItem(`course_${courseId}_taken`, "true");
    setIsTakingCourse(true);
    setShowOverlay(false);
    setIsUploading(false);
  };

  const handleFinishCourseClaimCertfificate = async () => {
    if (!address) {
      console.log("No address available");
      return;
    }

    setIsUploading(true);

    const courseContract = new Contract(
      attensysCourseAbi,
      attensysCourseAddress,
      account,
    );
    const course_certificate_calldata = await courseContract.populate(
      "finish_course_claim_certification",
      [Number(courseId)],
    );

    const callCourseContract = await account?.execute([
      {
        contractAddress: attensysCourseAddress,
        entrypoint: "finish_course_claim_certification",
        calldata: course_certificate_calldata.calldata,
      },
    ]);
    setTxnHash(callCourseContract?.transaction_hash);
    setIsCertified(true);
    setIsUploading(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < props?.data.courseCurriculum.length - 1 ? prevIndex + 1 : 0,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : props?.data.courseCurriculum.length - 1,
    );
  };

  const handleVideoClick = (item: any) => {
    setSelectedVideo(`https://${item.video}`);
    setSelectedLectureName(item.name);
  };

  useEffect(() => {
    if (!provider) return;

    getAllCourses();
  }, [provider]);
  useEffect(() => {
    if (courses.length === 0) return;

    getCourse();
  }, [courses]);
  useEffect(() => {
    console.log("here as props", props?.data);
    if (!props?.data?.courseImage) return;

    const foundCourse = courses.find((course, index) => {
      return props?.data?.courseImage === courseData[index]?.data?.courseImage;
    });

    if (foundCourse && foundCourse.course_identifier !== courseId) {
      setCourseId(foundCourse.course_identifier);
    }
  }, [courses, courseData, props?.data?.courseImage, courseId]);
  useEffect(() => {
    if (!Number.isNaN(courseId) && courseId !== undefined) {
      // Check localStorage first
      const storedStatus = localStorage.getItem(`course_${courseId}_taken`);
      if (storedStatus === "true") {
        setShowOverlay(false);
        setIsTakingCourse(true);
      } else {
        setShowOverlay(true);
        setIsTakingCourse(false);
      }

      // Then check blockchain if we have an address
      if (address) {
        find();
      }
    }
  }, [courseId, address]);

  // Check blockchain state on component mount
  useEffect(() => {
    if (!Number.isNaN(courseId) && courseId !== undefined) {
      find();
    }
  }, []);

  // ⛳ Set the first video on page load
  useEffect(() => {
    if (props?.data.courseCurriculum?.length > 0) {
      setSelectedVideo(
        `https://${props?.data.courseCurriculum[props?.data.courseCurriculum.length - 1].video}`,
      );
      setSelectedLectureName(
        props?.data.courseCurriculum[props?.data.courseCurriculum.length - 1]
          .name,
      );
    }
  }, [props.data]);

  useEffect(() => {
    const checkContentHeight = () => {
      if (props?.data?.courseDescription?.length > 200) {
        setShowSeeMore(true);
      } else {
        setShowSeeMore(false);
      }

      if (props?.data?.targetAudienceDesc?.length > 200) {
        setShowTargetSeeMore(true);
      } else {
        setShowTargetSeeMore(false);
      }
    };

    checkContentHeight();
    window.addEventListener("resize", checkContentHeight);

    return () => {
      window.removeEventListener("resize", checkContentHeight);
    };
  }, [props?.data?.courseDescription, props?.data?.targetAudienceDesc]);

  return (
    <div className="pt-6  pb-36 w-full">
      {/* Video and Title */}
      <div className="flex flex-none w-full text-sm space-x-3 items-center px-6 sm:px-12">
        <div className="flex flex-none space-x-2 items-center">
          <Image
            src={graduate}
            className="h-[25px] w-[25px]"
            alt="stream_video"
          />
          <p className="text-[16px] text-[#2D3A4B] font-semibold">My Courses</p>
        </div>
        <span className="text-[#9B51E0]">|</span>{" "}
        <p className="w-full truncate text-[16px] text-[#2D3A4B] font-semibold">
          {props?.data?.courseName}
        </p>
      </div>

      {/* ReactPlayer & lecture*/}
      <div className="w-[100%]  mx-auto flex justify-between items-center px-6 sm:px-12 mt-5">
        <div className="w-full xl:w-[67%] h-[33vh] xl:h-[543px] h-auto aspect-video sm:aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] rounded-xl overflow-hidden relative">
          {selectedVideo && (
            <>
              <ReactPlayer
                url={selectedVideo}
                width="100%"
                height="100%"
                className="rounded-xl"
                controls
                playing={!showOverlay}
              />
              {showOverlay && !isTakingCourse && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-xl">
                  <div className="text-white text-center p-6">
                    <h2 className="text-2xl font-bold mb-4">Course Locked</h2>
                    <p className="mb-6">Take this course to start learning</p>
                    <button
                      className={`bg-[#9b51e0] px-7 py-2 rounded text-[#fff] font-bold`}
                      onClick={handleTakeCourse}
                      disabled={isUploading}
                    >
                      {isUploading ? (
                        <div className="flex items-center gap-2">
                          <LoadingSpinner size="sm" colorVariant="white" />
                          Taking Course...
                        </div>
                      ) : (
                        "Take Course"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="hidden xl:block w-[30%] h-[543px] space-y-4">
          <div className="flex space-x-2  justify-center bg-gradient-to-r from-[#5801a9] to-[#4a90e2] text-white items-center text-sm py-3 px-7 rounded-xl">
            <HiBadgeCheck color="#fff" />
            <p>Attensys Certified Course</p>
          </div>
          <h1 className="text-[16px] text-[#2D3A4B] leading-[22px] font-semibold">
            Lecture ({props?.data?.courseCurriculum.length})
          </h1>

          <div className="h-[440px] w-[100%] bg-[#FFFFFF] border-[1px] border-[#D9D9D9] rounded-xl overflow-scroll scrollbar-hide">
            {props?.data?.courseCurriculum
              ?.slice()
              .reverse()
              .map((item: any, i: any) => {
                return (
                  <div
                    key={i}
                    className="flex w-full items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleVideoClick(item)}
                  >
                    <div className="w-8 flex-shrink-0">
                      <p className="font-bold text-[#5801a9]">{i + 1}</p>
                    </div>
                    <div className="w-[150px] h-[120px] rounded-xl border-4 border flex-shrink-0">
                      <ReactPlayer
                        url={`https://${item.video}`}
                        controls={false}
                        playing={false}
                        width="100%"
                        height="100%"
                        playIcon={<></>}
                        onDuration={(duration) => handleDuration(i, duration)}
                      />
                    </div>
                    <div className="flex-grow ml-6">
                      <p className="text-[14px] font-semibold leading-[30px] text-[#333333]">
                        {item.name}
                      </p>
                      <h1 className="text-[8px] text-[#333333] leading-[14px] font-medium">
                        Creator address
                      </h1>
                      <div className="rounded-lg bg-[#9B51E052] w-[60%] flex items-center justify-center">
                        <p className="text-xs px-7 py-1">
                          {durations[i]
                            ? formatDuration(durations[i])
                            : "0:00:00"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="w-[100%] mx-auto flex justify-between items-center sm:px-12 px-6 mt-5">
        <div
          className="w-full 
        xl:w-[67%] space-y-3"
        >
          <div className="flex space-x-14 justify-between">
            <div className="space-y-2">
              {selectedLectureName && (
                <h1 className="text-[16px]font-bold text-[24px] text-[#2D3A4B] leading-[31px]">
                  {selectedLectureName}
                </h1>
              )}
            </div>
            <div className="hidden xl:flex sm:ml-5 space-x-2 items-center">
              <GrDiamond color="#2D3A4B" className="h-[20px] w-[20px]" />
              <p className="text-[14px] text-[#2D3A4B] leading-[22px] font-medium">
                Difficulty level: {props?.data?.difficultyLevel}
              </p>
            </div>

            <div className="hidden xl:flex space-x-2 items-center">
              <div>
                {isCertified ? (
                  <div className="hidden xl:flex space-x-2 items-center">
                    <div>
                      <LuBadgeCheck className="h-[20px] w-[20px] text-[#5801A9]" />
                    </div>
                    <p className="text-[14px] text-[#2D3A4B] leading-[22px] font-medium">
                      Certificate of Completion
                    </p>
                  </div>
                ) : isTakingCourse ? (
                  <button
                    className={`hidden sm:block bg-[#9b51e0] px-7 py-2 rounded text-[#fff] font-bold`}
                    onClick={handleFinishCourseClaimCertfificate}
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      <div className="flex items-center gap-2">
                        <LoadingSpinner size="sm" colorVariant="white" />
                        Claiming Certificate...
                      </div>
                    ) : (
                      "Get Certificate"
                    )}
                  </button>
                ) : null}
              </div>
              {txnHash && (
                <div>
                  <a
                    className="text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                    href={explorer.transaction(txnHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tx Hash
                  </a>
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#2D3A4B] leading-[18px] font-medium">
              Created by{" "}
              <span className="underline text-[#5801A9]">
                {props?.data?.courseCreator}
              </span>
            </p>
          </div>
          {/* Mobile Get Certificate Button */}
          <div className="xl:hidden flex space-x-2 items-center">
            {isCertified ? (
              <div className="flex space-x-2 items-center">
                <div>
                  <LuBadgeCheck className="h-[20px] w-[20px] text-[#5801A9]" />
                </div>
                <p className="text-[14px] text-[#2D3A4B] leading-[22px] font-medium">
                  Certificate of Completion
                </p>
              </div>
            ) : isTakingCourse ? (
              <button
                className={`bg-[#9b51e0] px-7 py-2 rounded text-[#fff] font-bold`}
                onClick={handleFinishCourseClaimCertfificate}
                disabled={isUploading}
              >
                {isUploading ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner size="sm" colorVariant="white" />
                    Claiming Certificate...
                  </div>
                ) : (
                  "Get Certificate"
                )}
              </button>
            ) : null}
          </div>
        </div>

        <div className="bg-[url('/hero_asset.png')] text-white p-10 rounded-xl w-[30%] hidden xl:flex items-center justify-center h-[85px]">
          <Image src={attensys_logo} alt="logo" />
        </div>
      </div>

      <div className="w-[100%] mx-auto flex justify-between px-6 xl:px-12 mt-5">
        <div className="w-full xl:w-[67%] h-auto space-y-12">
          <div className="h-auto w-full rounded-xl xl:bg-[#FFFFFF] xl:border-[1px] xl:border-[#D9D9D9] xl:p-10">
            <div className="pb-4">
              <p className="font-bold py-2 text-[14px] text-[#333333] leading-[22px]">
                About this course
              </p>
              <div className="relative">
                <p className="text-[14px] text-[#333333] leading-[22px] font-light">
                  {isExpanded
                    ? props?.data?.courseDescription
                    : props?.data?.courseDescription?.slice(0, 200) +
                      (showSeeMore ? "..." : "")}
                  {showSeeMore && !isExpanded && (
                    <span
                      className="text-blue-600 cursor-pointer hover:underline ml-1"
                      onClick={() => setIsExpanded(true)}
                    >
                      see more
                    </span>
                  )}
                  {showSeeMore && isExpanded && (
                    <span
                      className="text-blue-600 cursor-pointer hover:underline ml-1"
                      onClick={() => setIsExpanded(false)}
                    >
                      see less
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="py-4">
              <p className="font-bold py-2 text-[14px] text-[#333333] leading-[22px]">
                {" "}
                Student Requirements
              </p>
              <ul className="text-[14px] text-[#333333] leading-[22px] font-light list-disc">
                {props?.data?.studentRequirements}
              </ul>
            </div>
            <div className="py-6">
              <p className="font-bold py-2 text-[14px] text-[#333333] leading-[22px]">
                Target Audience
              </p>
              <div className="text-[#333333] text-[14px] font-light leading-[22px]">
                <p>
                  {isTargetExpanded
                    ? props?.data?.targetAudienceDesc
                    : props?.data?.targetAudienceDesc?.slice(0, 200) +
                      (showTargetSeeMore ? "..." : "")}
                  {showTargetSeeMore && !isTargetExpanded && (
                    <span
                      className="text-blue-600 cursor-pointer hover:underline ml-1"
                      onClick={() => setIsTargetExpanded(true)}
                    >
                      see more
                    </span>
                  )}
                  {showTargetSeeMore && isTargetExpanded && (
                    <span
                      className="text-blue-600 cursor-pointer hover:underline ml-1"
                      onClick={() => setIsTargetExpanded(false)}
                    >
                      see less
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Lectures */}
          <div className="flex xl:hidden flex-col">
            <p className="mt-8 font-semibold">
              Lectures({props?.data?.courseCurriculum.length})
            </p>
            <div className=" w-[100%] bg-[#FFFFFF] border-[1px] border-[#D9D9D9] rounded-xl overflow-scroll scrollbar-hide">
              {props?.data?.courseCurriculum
                ?.slice()
                .reverse()
                .map((item: any, i: any) => (
                  <div
                    key={i}
                    className="flex w-full items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleVideoClick(item)}
                  >
                    <div className="w-8 flex-shrink-0">
                      <p className="font-bold text-[#5801a9]">{i + 1}</p>
                    </div>
                    <div className="w-[150px] h-[120px] rounded-xl border-4 border flex-shrink-0">
                      <ReactPlayer
                        url={`https://${item.video}`}
                        controls={false}
                        playing={false}
                        width="100%"
                        height="100%"
                        playIcon={<></>}
                        onDuration={(duration) => handleDuration(i, duration)}
                      />
                    </div>
                    <div className="flex-grow ml-6">
                      <p className="text-[14px] font-semibold leading-[30px] text-[#333333]">
                        {item.name}
                      </p>

                      <div className="rounded-lg bg-[#9B51E052] w-[60%] flex items-center justify-center">
                        <p className="text-xs px-7 py-1">
                          {durations[i]
                            ? formatDuration(durations[i])
                            : "0:00:00"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-4 hidden xl:flex flex-col">
            <h1 className="text-[16px] font-bold text-[#2D3A4B] leading-[22px]">
              Leave a review
            </h1>
            <div className="h-[610px] pb-10 w-full rounded-xl bg-[#FFFFFF] border-[1px] border-[#D9D9D9]">
              <div className="flex justify-between items-center h-[100px] w-full border-b-[1px] border-b-[#EBECEE] px-10">
                <div className="h-full w-[30%] flex items-center justify-center border-r-[1px] border-r-[#EBECEE]">
                  <div className="flex items-center w-full space-x-3">
                    <Image src={profile_pic} alt="pic" width={60} />
                    <div className="space-y-1">
                      <h4 className="text-[16px] text-[#333333] leading-[22px] font-semibold">
                        0xRavenclaw
                      </h4>
                      <p className="text-[#9b51e0] text-[12px] font-medium leading-[14px]">
                        0x5c956e61...de5232dc11
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-full w-[30%] space-x-3 flex items-center border-r-[1px] border-r-[#EBECEE]">
                  <h1 className="text-[14px] text-[#333333] leading-[16px] font-medium">
                    Tap to rate:
                  </h1>
                  <StarRating totalStars={5} starnumber={4} />
                </div>
                <div className="h-full w-[30%] flex items-center space-x-3">
                  <StarRating totalStars={5} starnumber={4} />
                  <h1 className="text-[14px] text-[#333333] leading-[16px] font-medium">
                    <span className="text-[#A01B9B]">1,245</span> students
                  </h1>
                </div>
              </div>
              <div className="px-10 mt-8 flex items-center space-x-4">
                {/* input and button */}
                <input
                  type="text"
                  placeholder="What do you think about this course?"
                  className="w-[75%] h-[45px] border shadow-dm p-6 rounded-xl text-[14px] font-medium leading-[16px]"
                />

                <button className="hidden sm:block bg-[#9b51e0] px-7 py-2 rounded text-[#fff] font-bold">
                  Send review
                </button>
              </div>

              <div className="px-10 mt-10 space-y-10 h-[380px] overflow-y-scroll pb-10 ">
                <div className="space-y-6">
                  <div className="flex space-x-3 items-center">
                    <div className="h-[64px] w-[64px] bg-[#9B51E01A] text-[20px] text-[#101928] leading-[24px] rounded-full flex items-center justify-center">
                      OM
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-[14px] text-[#333333] font-semibold leading-[22px]">
                        Olivia
                      </h1>
                      <StarRating totalStars={5} starnumber={4} />
                    </div>
                  </div>
                  <p className="w-[730px] text-[14px] text-[#333333] font-medium leading-[22px]">
                    Halfway through the course and lots of information given in
                    every chapter. Concise and easy to understand, very useful
                    to apply to any Web design journey!
                  </p>
                </div>

                <div className="space-y-6 w-full">
                  <div className="flex space-x-3 items-center">
                    <div className="h-[64px] w-[64px] bg-[#9B51E01A] text-[20px] text-[#101928] leading-[24px] rounded-full flex items-center justify-center">
                      OM
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-[14px] text-[#333333] font-semibold leading-[22px]">
                        Olivia
                      </h1>
                      <StarRating totalStars={5} starnumber={4} />
                    </div>
                  </div>
                  <p className="w-[730px] text-[14px] text-[#333333] font-medium leading-[22px]">
                    Halfway through the course and lots of information given in
                    every chapter. Concise and easy to understand, very useful
                    to apply to any Web design journey!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex space-x-3 items-center">
                    <div className="h-[64px] w-[64px] bg-[#9B51E01A] text-[20px] text-[#101928] leading-[24px] rounded-full flex items-center justify-center">
                      OM
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-[14px] text-[#333333] font-semibold leading-[22px]">
                        Olivia
                      </h1>
                      <StarRating totalStars={5} starnumber={4} />
                    </div>
                  </div>
                  <p className="w-[730px] text-[14px] text-[#333333] font-medium leading-[22px]">
                    Halfway through the course and lots of information given in
                    every chapter. Concise and easy to understand, very useful
                    to apply to any Web design journey!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Courses you might like - Mobile */}
          <div className="block xl:hidden mt-0 sm:mt-8">
            <h1 className="text-[16px] font-semibold mb-4">
              Courses you might like
            </h1>
            <div className="space-y-4 overflow-x-auto">
              {courseData
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map((item: any, id: any) => (
                  <div key={id}>
                    <CardWithLink wallet={props.wallet} data={item} />
                  </div>
                ))}
            </div>
          </div>

          <div className="block xl:hidden">
            <div className="border-b-[1px] border-b-[#949494] justify-center xl:mx-48 flex space-x-2 items-center h-[50px]">
              <IoIosStar color="#F6A61C" className="h-[20px] w-[20px]" />
              <p className="text-[20px] text-[#333333] font-semibold leading-[22px]">
                4.9 Rating | (281 reviews)
              </p>
            </div>

            {/* comments */}
            <div className="block xl:hidden py-12 sm:mx-48 items-center content-center justify-around text-sm">
              <div className="w-[100%] xl:w-[30%]">
                <div className="flex items-center">
                  <p className="p-5 bg-[#9b51e01a] font-bold rounded-full">
                    OM
                  </p>
                  <div className="ml-6 space-y-2">
                    <p>Olivia. M</p>
                    <StarRating totalStars={5} starnumber={4} />
                  </div>
                </div>

                <p className="mt-6 text-[14px] font-medium text-[#333333] leading-[22px]">
                  Halfway through the course and lots of information given in
                  every chapter. Concise and easy to understand, very useful to
                  apply to any Web design journey!
                </p>
              </div>

              <div className="border-[1px] border-[#B8B9BA] h-28 hidden xl:block"></div>

              <div className="w-[100%] xl:w-[30%] mt-8 xl:mt-0">
                <div className="flex items-center">
                  <p className="p-5 bg-[#9b51e01a] font-bold rounded-full">
                    OM
                  </p>
                  <div className="ml-6 space-y-2">
                    <p>Olivia. M</p>
                    <StarRating totalStars={5} starnumber={4} />
                  </div>
                </div>

                <p className="mt-6 text-[14px] font-medium text-[#333333] leading-[22px]">
                  Halfway through the course and lots of information given in
                  every chapter. Concise and easy to understand, very useful to
                  apply to any Web design journey!
                </p>
              </div>
            </div>

            <div className="flex xl:hidden flex-col">
              <p className="mt-8 font-semibold">Leave a review</p>
              <div className=" w-[100%] gap-6 bg-[#FFFFFF] border-[1px] border-[#D9D9D9] rounded-xl overflow-scroll scrollbar-hide p-4 flex flex-col ">
                <div className="flex items-center w-full space-x-3">
                  <Image src={profile_pic} alt="pic" width={48} />
                  <div className="space-y-1">
                    <h4 className="text-[16px] text-[#333333] leading-[22px] font-semibold">
                      0xRavenclaw
                    </h4>
                    <p className="text-[#9b51e0] text-[12px] font-medium leading-[14px]">
                      0x5c956e61...de5232dc11
                    </p>
                  </div>
                </div>
                <div className="h-full w-full space-x-3 flex items-center">
                  <h1 className="text-[14px] text-[#333333] leading-[16px] font-medium">
                    Tap to rate:
                  </h1>
                  <StarRating totalStars={5} starnumber={0} />
                </div>
                <div className="h-full w-full flex items-center space-x-3">
                  <StarRating totalStars={5} starnumber={4} />
                  <h1 className="text-[14px] text-[#333333] leading-[16px] font-medium">
                    <span className="text-[#A01B9B]">1,245</span> students
                  </h1>
                </div>
                <div className="flex flex-col gap-5">
                  {/* input and button */}
                  <input
                    type="text"
                    placeholder="What do you think about this course?"
                    className="w-full h-[45px] border shadow-dm p-6 rounded-xl text-[14px] font-medium leading-[16px]"
                  />
                  <button className="hidden sm:block bg-[#9b51e0] px-7 py-2 rounded text-[#fff] font-bold">
                    Send review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses you might like - Desktop */}
        <div className="hidden xl:block w-[30%] h-[1020px]">
          <h1>Courses you might like</h1>
          <div className="space-y-10 overflow-x-auto max-h-[1020px] overflow-y-auto">
            {courseData.map((item: any, id: any) => (
              <div key={id}>
                <CardWithLink wallet={props.wallet} data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturePage;
