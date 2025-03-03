import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardProps,
} from "@material-tailwind/react";

import robotImg from "../../assets/robot.svg";
import Image from "next/image";
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar";
import {
  getAllCoursesInfo,
  handleCourse,
  handleCoursehome,
} from "@/utils/helpers";
import { useRouter } from "next/navigation";
import StarRating from "../bootcamp/StarRating";
import { attensysCourseAddress } from "@/deployments/contracts";
import { attensysCourseAbi } from "@/deployments/abi";
import { Contract } from "starknet";
import { provider } from "@/constants";
import { pinata } from "../../../utils/config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GetCIDResponse } from "pinata";
import { get } from "http";

interface ChildComponentProps {
  wallet: any;
}

interface CourseType {
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
// get_all_courses_info
export function CardWithLink({ wallet }: ChildComponentProps) {
  const router = useRouter();
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [courseData, setCourseData] = useState<CourseType[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const courseContract = new Contract(
    attensysCourseAbi,
    attensysCourseAddress,
    provider,
  );

  const getAllCourses = async () => {
    const res: CourseType[] = await getAllCoursesInfo();
    setCourses(res);
  };

  const getPubIpfs = async (CID: string) => {
    try {
      //@ts-ignore
      const data = await pinata.gateways.get(CID);

      const courseImage: GetCIDResponse = await pinata.gateways.get(
        //@ts-ignore
        data?.data?.courseImage,
      );

      console.log("dixed", courseImage);
      return data;
      // //@ts-ignore
      // const bannerData: GetCIDResponse = await pinata.gateways.get(
      //   //@ts-ignore
      //   data?.data?.OrganizationBannerCID,
      // );
      // // Extract the data from the response
      // const objectURL = URL.createObjectURL(logoData.data as Blob);
    } catch (error) {
      console.error("Error fetching IPFS content:", error);
    }
  };

  const handleAccess = async (CID: string) => {
    try {
      return await getPubIpfs(CID);
    } catch (error) {
      console.error("Error fetching IPFS content:", error);
    }
  };

  const getCourse = async () => {
    if (!courses.length) return; // Prevent running on empty `courses`

    const resolvedCourses = await Promise.all(
      courses.map(async (course: CourseType) => {
        if (!course.course_ipfs_uri) {
          console.warn(`Skipping invalid IPFS URL: ${course.course_ipfs_uri}`);
          return null; // Skip invalid URLs
        }

        try {
          return await getPubIpfs(course.course_ipfs_uri);
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
    console.log("valid here:", validCourses);

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

  // allCourses.map((course: any, index: number) => {
  //   console.log("course", course.course_ipfs_uri);
  // });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 820 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 820, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    getAllCourses();
  }, [provider]);

  useEffect(() => {
    getCourse();
  }, [courses]);
  return (
    <Carousel
      className="course-carousel"
      responsive={responsive}
      centerMode={true}
      containerClass="container"
      additionalTransfrom={0}
      arrows
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="carousel-item-custom"
      keyBoardControl
      minimumTouchDrag={80}
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      {courseData.map((course: any, index: number) => {
        return (
          <div
            key={index}
            className="mt-6 items-center align-middle justify-center w-[100%] lg:w-[95%] border-2 rounded-xl pb-8"
            // onClick={(e) =>
            //   handleCoursehome(e, e.currentTarget.textContent, router)
            // }
          >
            <div className="cursor-pointer">
              <div className="w-full h-28 rounded-t-xl">
                <Image
                  className="object-cover h-full w-full rounded-t-xl"
                  alt="robot"
                  src={`https://ipfs.io/ipfs/${course.data.courseImage}`}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex sm:flex-col h-24 md:flex-row justify-between mt-6 px-5 ">
                <div className="">
                  <p className="mb-2 font-bold lg:text-[14px] leading-[22px] text-[#333333]">
                    {course.data.courseName}
                  </p>
                  <p className="text-white text-[12px] font-extrabold items-center gap-2 w-fit  bg-[#5801A9] my-2 rounded p-1">
                    {course.data.courseCreator}
                  </p>
                </div>

                <div>
                  <button className="rounded-lg text-xs px-2 py-2 items-center bg-[#4A90E2] text-white text-[12px] font-semibold leading-[14px]">
                    Go to course
                  </button>
                </div>
              </div>
            </div>

            <div className="px-5 mt-2">
              <div className="flex items-center space-x-3">
                {/* rating */}
                <StarRating totalStars={5} starnumber={4} />
                <p className="text-[14px] text-[#2D3A4B] font-medium leading-[16px]">
                  {" "}
                  <span className="text-[#5801A9]">1220</span> students
                </p>
              </div>
              <div></div>
              <p className="mt-2 text-[14px] text-[#2D3A4B] leading-[19px] font-light">
                Created by{" "}
                <span className="underline ">{course.data.courseCreator}</span>
              </p>
            </div>
            <div />
          </div>
        );
      })}
    </Carousel>
  );
}
