/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { MoonLoader } from "react-spinners";

import Bootcampdropdown from "@/components/bootcamp/Bootcampdropdown";
import Coursedropdown from "@/components/courses/Coursedropdown";
import CourseNews from "@/components/courses/CourseNews";
import Explore from "@/components/courses/Explore";

import { provider } from "@/constants";
import { useFetchCID } from "@/hooks/useFetchCID";
import { walletStarknetkit } from "@/state/connectedWalletStarknetkit";
import {
  bootcampdropdownstatus,
  coursestatusAtom,
} from "@/state/connectedWalletStarknetkitNext";
import { getAllCoursesInfo } from "@/utils/helpers";

interface Uri {
  first: string;
  second: string;
}

interface CourseType {
  data: any;
  owner: string;
  course_identifier: number;
  accessment: boolean;
  uri: Uri;
  course_ipfs_uri: string;
  is_suspended: boolean;
}

export default function CoursePageClient() {
  // State
  const [wallet] = useAtom(walletStarknetkit);
  const [status, setStatus] = useAtom(coursestatusAtom);
  const [bootcampDropStat, setBootcampDropStat] = useAtom(
    bootcampdropdownstatus,
  );

  const [allCourses, setAllCourses] = useState<CourseType[]>([]);
  const [courseData, setCourseData] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Hooks
  const searchParams = useSearchParams();
  const router = useRouter();
  const { fetchCIDContent } = useFetchCID();

  // Handle mounting and search params
  useEffect(() => {
    setMounted(true);

    // Only set search query after component is mounted
    if (searchParams) {
      const query = searchParams.get("search")?.toLowerCase() || "";
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Fetch all course base data
  useEffect(() => {
    if (!mounted) return;

    let isMounted = true;
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await getAllCoursesInfo();
        if (isMounted) setAllCourses(res);
      } catch (err) {
        console.error("Error fetching course list", err);
      }
    };

    fetchCourses();

    return () => {
      isMounted = false;
    };
  }, [mounted, provider]);

  // Resolve IPFS data for each course
  useEffect(() => {
    if (!mounted || allCourses.length === 0) return;

    let isMounted = true;

    const fetchCourseDetails = async () => {
      const resolved = await Promise.all(
        allCourses.map(async (course) => {
          if (!course.course_ipfs_uri) return null;
          try {
            const detailed = await fetchCIDContent(course.course_ipfs_uri);
            return detailed;
          } catch {
            return null;
          }
        }),
      );

      const filtered = resolved.filter(Boolean) as CourseType[];

      if (isMounted) {
        setCourseData(filtered);
        setLoading(false);
      }
    };

    fetchCourseDetails();

    return () => {
      isMounted = false;
    };
  }, [mounted, allCourses]);

  // Filtered courses based on search
  const filteredCourseData = useMemo(() => {
    if (!searchQuery) return courseData;

    return courseData.filter((course) => {
      const data = course.data;
      if (!data) return false;

      const name = data.courseName?.toLowerCase() || "";
      const desc = data.courseDescription?.toLowerCase() || "";
      const author = data.authorName?.toLowerCase() || "";
      const categories = (data.categories || []).map((c: string) =>
        c.toLowerCase(),
      );

      return (
        name.includes(searchQuery) ||
        desc.includes(searchQuery) ||
        author.includes(searchQuery) ||
        categories.some((cat: any) => cat.includes(searchQuery))
      );
    });
  }, [searchQuery, courseData]);

  // UI Events
  const handlePageClick = () => {
    setBootcampDropStat(false);
    setStatus(false);
  };

  const clearSearch = () => {
    router.push("/Course");
    setSearchQuery("");
  };

  // Show loading state while not mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <MoonLoader color="#9B51E0" size={60} />
      </div>
    );
  }

  return (
    <div onClick={handlePageClick}>
      {(status || bootcampDropStat) && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}

      <div onClick={(e) => e.stopPropagation()}>
        <Coursedropdown />
        <Bootcampdropdown />
      </div>

      <CourseNews />

      {loading ? (
        <div className="flex items-center justify-center h-[70vh]">
          <MoonLoader color="#9B51E0" size={60} />
        </div>
      ) : (
        <>
          {searchQuery && (
            <div className="container mx-auto px-4 py-2 mb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Search Results for:{" "}
                  <span className="text-purple-600">"{searchQuery}"</span>
                </h2>
                <p className="text-gray-600 mt-1">
                  {filteredCourseData.length === 0
                    ? "No courses found matching your search"
                    : `Found ${filteredCourseData.length} course${filteredCourseData.length !== 1 ? "s" : ""}`}
                </p>
              </div>
            </div>
          )}

          {searchQuery && filteredCourseData.length === 0 ? (
            <div className="container mx-auto px-4 py-12 text-center">
              <div className="max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn&apos;t find any courses matching &quot;{searchQuery}
                  &quot;. Try different keywords or browse all available
                  courses.
                </p>
                <button
                  onClick={clearSearch}
                  className="px-6 py-2 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] text-white rounded-lg hover:opacity-90"
                >
                  View All Courses
                </button>
              </div>
            </div>
          ) : (
            <Explore wallet={wallet} courseData={filteredCourseData} />
          )}
        </>
      )}
    </div>
  );
}
