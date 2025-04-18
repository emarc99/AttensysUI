import React, { useState, useEffect } from "react";
import { Button, Input } from "@headlessui/react";
import Image from "next/image";
import filter from "@/assets/filter.png";
import { explorerData, mockkdata } from "@/constants/data";
import TableList from "./TableList";
import { useRouter } from "next/navigation";
import { handleSubmit } from "@/utils/helpers";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import EventFeed from "./EventFeed";
import {
  getRecentEvents,
  orgquery,
  eventurl,
  orgurl,
  coursequery,
  courseurl,
  headers,
  eventquery,
} from "@/utils/helpers";

import { usePinataAccess } from "@/hooks/usePinataAccess";

const ExplorePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxVisiblePages, setMaxVisiblePages] = useState(10);
  const itemsPerPage = 10;
  const router = useRouter();
  // const { url, loading, error, refresh } = usePinataAccess(
  //   "bafkreia7qm54gyrnk7yzvpkaigtdw4rynzoaxbr43vo4ekrwtlzy7xfkwq",
  // );

  const { data } = useQuery({
    queryKey: ["data"],
    async queryFn() {
      return await request(orgurl, orgquery, {}, headers);
    },
    refetchInterval: 10000,
  });

  const { data: coursedata } = useQuery({
    queryKey: ["coursedata"],
    async queryFn() {
      return await request(courseurl, coursequery, {}, headers);
    },
    refetchInterval: 10000,
  });

  const { data: eventdata } = useQuery({
    queryKey: ["eventdata"],
    async queryFn() {
      return await request(eventurl, eventquery, {}, headers);
    },
    refetchInterval: 10000,
  });

  const eventData = React.useMemo(
    () => ({
      organizations: data ?? {},
      courses: coursedata ?? {},
      events: eventdata ?? {},
    }),
    [data, coursedata],
  );

  useEffect(() => {
    const handleResize = () => {
      setMaxVisiblePages(window.innerWidth < 640 ? 3 : 10);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(explorerData.length / itemsPerPage);
  const currentItems = explorerData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const recentEvents = React.useMemo(
    () => getRecentEvents(eventData),
    [eventData],
  );

  const handleChange = (event: { target: { value: any } }) => {
    setSearchValue(event.target.value);
  };

  const handleUpload = async () => {
    try {
      const jsonData = { key: "value", name: "kenny" };
      const blob = new Blob([JSON.stringify(jsonData)], {
        type: "application/json",
      });
      const file = new File([blob], `private-data-${Date.now()}.json`);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/pinata/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      console.log("Private file uploaded:", data.cid.data.cid);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  async function createAccessLink() {
    console.log("Creating access link...");
    try {
      const cid = "bafkreia7qm54gyrnk7yzvpkaigtdw4rynzoaxbr43vo4ekrwtlzy7xfkwq";
      const pinataUrl = `https://api.pinata.cloud/v3/files/private/${cid}`;
      const date = Math.floor(Date.now() / 1000);

      // const requestBody = JSON.stringify({
      //     url: `https://amethyst-rare-bobolink-414.mypinata.cloud/files/${cid}`,  // Must use "ipfs://" for private files
      //     expires: 180,          // Link expiry time (in seconds)
      //     date: date,            // Current Unix timestamp
      //     method: "GET"          // HTTP method
      // });

      const response = await fetch(pinataUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
          "Content-Type": "application/json",
        },
        // body: requestBody
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Pinata API Error:", errorData);
        throw new Error(`Failed to generate link: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Access link created:", result);
      return result.data; // Returns the access URL
    } catch (error) {
      console.error("Error in createAccessLink:", error);
      throw error; // Re-throw for handling upstream
    }
  }

  return (
    <div className="mx-4 md:mx-8 lg:mx-24 pb-10">
      {/* Hero Section */}
      <div className="bg-[url('/explorer_bg.svg')] relative text-white overflow-hidden px-4 md:px-16 lg:px-32 py-10 md:py-20 from-orange-400 via-red-500 to-pink-500 h-auto md:h-64 shadow-[inset_15px_25px_100px_rgba(0,0,0,1)]">
        <h1 className="text-xl md:text-2xl font-bold">The Attensys Explorer</h1>

        {/* Search Form */}
        <div className="relative w-full md:w-[80%] my-5">
          <form onSubmit={(e) => handleSubmit(e, searchValue, router)}>
            <div className="h-[61px] sm:w-full md:w-[627px] bg-white rounded-xl md:px-6 flex items-center justify-between">
              <div className="w-full md:w-[75%] relative">
                <Input
                  name="search by address"
                  type="text"
                  placeholder="Search an address | organization | Course"
                  value={searchValue}
                  onChange={handleChange}
                  className="w-full h-[61px] pl-[50px] rounded-xl text-[13px] md:text-[16px] md:font-medium text-[#817676] placeholder-[#817676] focus:outline-none"
                />
                {!searchValue && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 h-[25px] w-[25px] text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                )}
              </div>

              <div className="h-[42px] w-[25%] hidden md:flex rounded-lg items-center justify-center border border-[#6B6D6E] bg-[#e8e9ea] space-x-2">
                <h1 className="text-[#2D3A4B] text-[14px] leading-[21px] font-medium">
                  All Filters
                </h1>
                <RiArrowDropDownLine className="h-[20px] w-[20px] text-[#2D3A4B]" />
              </div>
            </div>
          </form>
        </div>

        {/* Moving Text */}
        <div className="w-full md:w-[30%] h-[40px] relative overflow-hidden whitespace-nowrap">
          <div className="moving-div flex">
            {recentEvents.map((item, index) => (
              <p key={index} className="text-sm mx-4 w-auto">
                {item.data}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="min-h-[930px] mx-auto bg-white mt-4 rounded-lg mb-24 p-4 md:p-6">
        <div className="flex bg-[#9B51E052] bg-opacity-[35%] md:bg-[#9B51E052] xl:bg-transparent h-[80px] rounded-xl xl:max-h-20 justify-between align-middle items-center px-5 md:px-5 xl:px-12 mt-10 max-w-[92%] mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Recent Activity
          </h2>
          <div className="flex justify-end">
            <Button className="flex rounded-lg bg-[#4A90E21F] py-2 px-4 h-[42px] items-center w-[90px] text-sm text-[#5801A9]">
              <Image src={filter} alt="filter" className="mr-2" />
              <span className="text-[11px]">Filter</span>
            </Button>
          </div>
        </div>
        <Button onClick={handleUpload}>TRIAL</Button>
        <Button onClick={createAccessLink}>RETRIEVE</Button>
        <EventFeed data={eventData} />
      </div>
    </div>
  );
};

export default ExplorePage;
