import { ARGENT_WEBWALLET_URL, CHAIN_ID, provider } from "@/constants";
import { learningDetails } from "@/constants/data";
import { attensysCourseAbi } from "@/deployments/abi";
import { attensysCourseAddress } from "@/deployments/contracts";
import { useFetchCID } from "@/hooks/useFetchCID";
import { useEffect, useState } from "react";
import { Contract } from "starknet";
import CoursesCreated from "./CoursesCreated";
import CreateACourse from "./CreateACourse";
import LearningJourney from "./LearningJourney";
import Notification from "./Notification";
import UserSideBar from "./UserSideBar";
import { useAccount } from "@starknet-react/core";

interface CourseType {
  accessment: boolean;
  course_identifier: number;
  course_ipfs_uri: string;
  is_approved: boolean;
  is_suspended: boolean;
  owner: string;
  price: number;
  uri: string;
}

const MyCourses = (props: any) => {
  const [selected, setSelected] = useState("");
  const [page, setPage] = useState("");
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [courseData, setCourseData] = useState<CourseType[]>([]);
  const [takenCourses, setTakenCourses] = useState<CourseType[]>([]);
  const [takenCoursesData, setTakenCoursesData] = useState<CourseType[]>([]);
  const {
    fetchCIDContent,
    getError,
    isLoading: isCIDFetchLoading,
  } = useFetchCID();
  const { account, address } = useAccount();

  const courseContract = new Contract(
    attensysCourseAbi,
    attensysCourseAddress,
    provider,
  );

  const getAllUserCreatedCourses = async () => {
    if (account == undefined) return;
    const res: CourseType[] =
      await courseContract?.get_all_creator_courses(address);

    const secondRes: CourseType[] =
      await courseContract?.get_all_taken_courses(address);

    setCourses(res);
    setTakenCourses(secondRes);
  };

  const getSingleCourse = async () => {
    const resolvedCourses = await Promise.all(
      courses.map(async (course: CourseType) => {
        if (!course.course_ipfs_uri) {
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
    const resolvedTakenCourses = await Promise.all(
      takenCourses.map(async (course: CourseType) => {
        if (!course.course_ipfs_uri) {
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
    // Filter out null values before updating state
    const validTakenCourses = resolvedTakenCourses.filter(
      (course): course is any => course !== null,
    );

    // Update state with new data
    console.log("validCourses:", validCourses);
    setCourseData(validCourses);
    setTakenCoursesData(validTakenCourses);
  };

  useEffect(() => {
    getAllUserCreatedCourses(); // Fetch courses when the wallet address changes
  }, [account]);

  useEffect(() => {
    setPage("myCourse");
    if (courses.length > 0 || takenCourses.length > 0) {
      getSingleCourse();
    }
  }, [page, account, courses, takenCourses]);

  return (
    <div className="block lg:flex lg:mx-10 mb-8 pb-24 max-w-screen-2xl xl:mx-auto">
      <UserSideBar
        wallet={account}
        courses={courses}
        courseData={courseData}
        takenCoursesData={takenCoursesData}
        validCertificates={[]}
        page={page}
        selected={selected}
        setSelected={setSelected}
        refreshCourses={getAllUserCreatedCourses}
      />

      <div className="flex-auto ml-0 lg:ml-5 px-4 my-12 lg:my-0 lg:px-0 hidden sm:block">
        {"Courses created" == selected && (
          <CoursesCreated
            courseData={courseData}
            item={{ courses }}
            selected={selected}
            key={courses[0]?.course_identifier || "no-courses"}
            refreshCourses={getAllUserCreatedCourses}
          />
        )}

        <div className={`${selected ? "0" : "mt-12"}`}>
          {/* Learning journey */}
          {learningDetails.map((item, i) =>
            item && item.tag == selected ? (
              <LearningJourney
                item={item}
                selected={selected}
                key={i}
                takenCoursesData={takenCoursesData}
              />
            ) : null,
          )}
        </div>

        <div>{selected == "Create a course" ? <CreateACourse /> : null}</div>

        <div>
          {selected == "" || selected == "Notification" ? (
            <Notification wallet={account} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
