"use client";
import React, { useEffect } from "react";
import LecturePage from "./LecturePage";
import { useSearchParams } from "next/navigation";

const CourseLanding = (props: any) => {
  const storedData = localStorage.getItem("courseData");
  const courseData = storedData ? JSON.parse(storedData) : null;
  console.log("Retrieved from localStorage:", courseData);

  return (
    <div className="h-auto w-full bg-[#F5F7FA]">
      <LecturePage course={props.course} data={courseData} />
    </div>
  );
};

export default CourseLanding;
