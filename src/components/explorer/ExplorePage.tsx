import React, { useState } from "react"
import { Button, Input } from "@headlessui/react"
import videoHero from "../../assets/video.png"
import courseImg from "../../assets/course_img.png"
import CarouselComp from "../courses/Carousel"
import Image from "next/image"
import { IoIosStar } from "@react-icons/all-files/io/IoIosStar"
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck"
import { GiBackwardTime } from "@react-icons/all-files/gi/GiBackwardTime"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import { GrDiamond } from "@react-icons/all-files/gr/GrDiamond"
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown"
import filter from "@/assets/filter.png"
import { explorerData } from "@/constants/data"
import List from "../overview/List"
import TableList from "./TableList"
import Dropdown from "../courses/Dropdown"

const ExplorePage = () => {
  const [searchValue, setSearchValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Calculate total pages
  const totalPages = Math.ceil(explorerData.length / itemsPerPage)

  // Get current page items
  const currentItems = explorerData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const goToPage = (page: any) => {
    setCurrentPage(page)
  }

  const generatePageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 10

    // Always show the first page
    if (currentPage > 2) pageNumbers.push(1)

    // Show ellipsis if there are pages between the first page and current page range
    if (currentPage > 3) pageNumbers.push("...")

    // Show the range of pages around the current page
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages);
      i++
    ) {
      pageNumbers.push(i)
    }

    // Show ellipsis if there are pages between the current range and the last page
    if (currentPage < totalPages - 2) pageNumbers.push("...")

    // Always show the last page
    if (currentPage < totalPages - 1) pageNumbers.push(totalPages)

    return pageNumbers
  }

  // Handle pagination controls
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }
  const handleChange = (event: { target: { value: any } }) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="mx-24 pb-10">
      {/* Hero component */}
      <div>
        <div
          className={`bg-[url('/explorer_bg.svg')] text-white h-24 px-32 py-20 from-orange-400 via-red-500 to-pink-500 h-64 min-h-full sm:min-h-0 md:min-h-full lg:min-h-0 xl:min-h-full shadow-[inset_15px_25px_100px_rgba(0,0,0,1)]`}
        >
          <h1 className="text-2xl font-bold">The Attensys Explorer</h1>
          <div className="relative w-[80%] my-5">
            <Input
              name="search by address"
              type="text"
              placeholder="           Search an address | organization | Course"
              value={searchValue}
              onChange={handleChange}
              className="w-[80%] font-bold clg:w-[70%] lclg:w-[90%] p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
            />
            {!searchValue && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            )}

            {!searchValue && (
              // <Dropdown />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute right-64 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            )}
          </div>
          <p className="text-sm">Ox6G568*** just marked an attendance</p>
        </div>
      </div>

      {/* table */}
      <div className="h-[930px] mx-auto bg-[#FFFFFF] mt-4 rounded-lg mb-24">
        <div className="flex justify-between px-16 pt-10">
          <h1 className="text-[18px] font-medium leading-[22px]  text-[#333333] mt-2">
            Recent activity
          </h1>
          <div className="flex space-x-8">
            <Button className="hidden lg:flex rounded-lg bg-[#4A90E21F] py-2 px-4 lg:h-[42px] items-center lg:w-[90px] text-sm text-[#5801A9] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
              <div className="flex space-x-4 items-center font-semibold text-[16px]">
                <Image src={filter} alt="ticket" className="mr-2" />
              </div>
              <div className="text-[11px]">Filter</div>
            </Button>
          </div>
        </div>
        <div className="w-[92%] mx-auto mt-6 h-[750px]">
          <table className="w-full border-separate border-spacing-y-3 ">
            <thead>
              <tr className="h-[56px] text-[14px] bg-[#9B51E052] font-normal text-[#5801A9] leading-[19.79px] rounded">
                <th className=" text-center font-light">Timestamp</th>
                <th className=" text-center font-light">Wallet Address</th>
                <th className=" text-center font-light">Activity Status</th>
                <th className=" text-center font-light">
                  Course/Event/Bootcamp
                </th>
              </tr>
            </thead>
            {currentItems.map((data, index) => {
              return (
                <TableList
                  key={index}
                  timestamp={data.timestamp}
                  address={data.address}
                  status={data.status}
                  category={data.category}
                />
              )
            })}
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-2 mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 border-[#D0D5DD] border-[1px] rounded disabled:opacity-50"
          >
            {"<"}
          </button>
          {generatePageNumbers().map((page, index) =>
            page == "..." ? (
              <span key={index} className="px-2 text-base mt-2">
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded text-[14px] ${currentPage == page ? "bg-none text-[#000000] border-[#F56630] border-[1px]" : "bg-none text-[#000000]"}`}
              >
                {page}
              </button>
            ),
          )}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border-[#D0D5DD] border-[1px] text-[20px] rounded disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
