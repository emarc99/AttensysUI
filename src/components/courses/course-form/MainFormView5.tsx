import React, { useState } from "react";
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";
import Dropdown from "../Dropdown";
import video from "@/assets/video.png";
import youtube from "@/assets/youtube.svg";
import podcast from "@/assets/Podcast.svg";
import rich from "@/assets/Richin2024.svg";
import Image from "next/image";
import Switch from "react-switch";
import Lectures from "../Lectures";
import CourseSideBar from "./SideBar";
import { MdOutlineDiamond } from "react-icons/md";
import { pinata } from "../../../../utils/config";
import { FileObject } from "pinata";
import { courseInitState } from "@/state/connectedWalletStarknetkitNext";
import { lectures } from "@/constants/data";
import { attensysCourseAddress } from "@/deployments/contracts";
import { attensysCourseAbi } from "@/deployments/abi";
import { Contract } from "starknet";
import { useRouter } from "next/navigation";
import { handleCreateCourse } from "@/utils/helpers";

interface ChildComponentProps {
  courseData: any;
  setCourseData: any;
  wallet: any;
  handleCoursePublishWithCert: (
    event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
  ) => void;
}

// file setup
const emptyData: FileObject = {
  name: "",
  type: "",
  size: 0,
  lastModified: 0,
  arrayBuffer: async () => {
    return new ArrayBuffer(0);
  },
};
interface Lecture {
  name: string;
  description: string;
  video: File | null;
}
const ResetCourseRegistrationData = {
  primaryGoal: "",
  targetAudience: "",
  courseArea: "",
  courseName: "",
  courseDescription: "",
  courseCategory: "",
  difficultyLevel: "",
  studentRequirements: "",
  learningObjectives: "",
  targetAudienceDesc: "",
  courseImage: emptyData,
  courseCurriculum: [] as Lecture[],
  coursePricing: "",
  promoAndDiscount: "",
  publishWithCertificate: false,
};

const MainFormView5: React.FC<ChildComponentProps> = ({
  courseData,
  setCourseData,
  wallet,
  handleCoursePublishWithCert,
}) => {
  const [isActivated, setIsActivated] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [cidToContract, setCidToContract] = useState<string>("");
  const [cidCourseImage, setcidCourseImage] = useState<string>("");
  const router = useRouter();
  const handleSwitch = (
    event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
  ) => {
    setIsActivated(!isActivated);
    handleCoursePublishWithCert(event);
  };

  const handleCourseUpload = async () => {
    setUploading(true);
    const courseImgupload = await pinata.upload.file(courseData.courseImage);
    //  const selectedLectureVideoUpload = await

    const dataUpload = await pinata.upload.json({
      primaryGoal: courseData.primaryGoal,
      targetAudience: courseData.targetAudience,
      courseArea: courseData.courseArea,
      courseName: courseData.courseName,
      courseDescription: courseData.courseDescription,
      courseCategory: courseData.courseCategory,
      difficultyLevel: courseData.difficultyLevel,
      studentRequirements: courseData.studentRequirements,
      learningObjectives: courseData.learningObjectives,
      targetAudienceDesc: courseData.targetAudienceDesc,
      courseImage: courseImgupload.IpfsHash,
      courseCurriculum: courseData.courseCurriculum,
      coursePricing: courseData.coursePricing,
      promoAndDiscount: courseData.promoAndDiscount,
      publishWithCertificate: courseData.publishWithCertificate,
    });

    if (dataUpload) {
      setCidToContract(dataUpload.IpfsHash);
      setcidCourseImage(courseImgupload.IpfsHash);
      setUploading(false);
    }
  };

  const courseCreation = async (e: any) => {
    handleCourseUpload();

    const courseContract = new Contract(
      attensysCourseAbi,
      attensysCourseAddress,
      wallet?.account,
    );

    const create_course_calldata = courseContract.populate("create_course", [
      wallet?.account?.address,
      false,
      cidCourseImage,
      courseData.courseName,
      "XXX",
      cidToContract,
    ]);

    const callCourseContract = await wallet?.account.execute([
      {
        contractAddress: attensysCourseAddress,
        entrypoint: "create_course",
        calldata: create_course_calldata.calldata,
      },
    ]);

    await wallet?.account?.provider
      .waitForTransaction(callCourseContract.transaction_hash)
      .then(() => {})
      .catch((e: any) => {
        console.log("Error: ", e);
      })
      .finally(() => {
        //Resets all org data input
        setCourseData(ResetCourseRegistrationData);

        // Proceed to next step
        handleCreateCourse(e, "course-landing-page", router);
      });
  };

  return (
    <div className="sm:flex">
      <div className="hidden sm:block">
        <CourseSideBar courseData={courseData} />
      </div>

      <div className="flex-1">
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]">
          <p className="text-sm text-white text-center py-2">
            Your course creation progress saves automatically, but feel free to
            also save your progress manually
          </p>
        </div>

        <div className=" ">
          <div className="block sm:flex justify-between py-2 my-5 border-t border-b border-[#d1d1d1] px-5 items-center">
            <div className="flex items-center">
              <div className="px-8 border-r border-blue-100">
                <IoMdArrowBack
                  onClick={() => history.back()}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-[#4A90E2] text-xl font-bold">
                Preview & Publish
              </p>
            </div>

            <button className="hidden sm:block bg-[#C5D322] px-7 py-3 rounded text-white">
              Publish
            </button>
          </div>

          <div className="mx-12 sm:mx-24 mt-12">
            <div className="block sm:grid grid-cols-2 gap-4">
              {/* Course Image */}
              <div className="w-[368px] h-[238px] rounded-xl">
                <Image
                  src={video}
                  alt="hero"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>

              {/* Course information */}
              <div>
                {/* field */}
                <div className="mb-3 order-first">
                  <p className="text-[#5801A9] text-[16px] font-medium leading-[22px]">
                    Technology | Web Development
                  </p>
                </div>

                <h4 className="text-[19px] text-[#333333] leading-[34px] font-bold my-2 ">
                  Introduction to Web Development
                </h4>
                <div className="my-3">
                  <p className="  text-[#333333] text-[14px] font-light leading-[22px]">
                    {`This course provides a foundational understanding of web
                development. You'll learn essential skills in HTML and CSS,
                enabling you to create and style your own web pages. No prior
                experience is necessary!`}
                  </p>
                </div>

                <div className="bg-[#5801A9] py-2 text-white w-[200px]  text-center mt-6 mb-3 Sm:w-[50%] rounded-lg">
                  <p className="text-[14px] font-extrabold leading-[22px]">
                    Tech Innovators Academy
                  </p>
                </div>

                <div className="flex space-x-3 items-center">
                  <MdOutlineDiamond color="#333333" />
                  <p className="text-[#333333] text-[14px] font-medium leading-[22px]">
                    Difficulty level : Elementary
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              {/* lectures in course */}
              <Lectures lectures={lectures} />
              {/* course desc & student req */}

              <div className="">
                <div>
                  <div className="flex justify-between sm:w-[30%] mt-5">
                    <h4 className="font-semibold text-[18px] leading-[31px] text-[#333333]">
                      Certification for this course
                    </h4>

                    <Switch
                      onChange={handleSwitch}
                      checked={isActivated}
                      onColor="#9B51E0"
                      offColor="#4A90E2"
                      uncheckedHandleIcon={<div />}
                      checkedHandleIcon={<div />}
                      checkedIcon={<div />}
                      uncheckedIcon={<div />}
                      className="mx-2"
                    />
                  </div>
                  <p className="text-[#333333] text-[14px] font-normal leading-[22px]">
                    After completion students will be issued certification
                  </p>
                </div>
                <div className="mt-12 mb-24">
                  <button
                    className="rounded-xl bg-[#4A90E2] px-24 py-3 text-white"
                    type="submit"
                    onClick={courseCreation}
                  >
                    Save and Publish Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFormView5;
