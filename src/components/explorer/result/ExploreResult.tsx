import React, { useState, useEffect } from "react"
import { Button, Input } from "@headlessui/react"
import Image from "next/image"
import filter from "@/assets/filter.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"
import TableList from "../TableList"
import { eventsData, gridsData } from "@/constants/data"
import ResultGrid from "./ResultGrid"
import { handleSubmit } from "@/utils/helpers"
import { useRouter } from "next/navigation"

type Params = {
  address?: string;
};

const ExploreResult: React.FC<{ params: Params }> = ({ params }) => {
  const [searchValue, setSearchValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()
  const { address } = params
  const itemsPerPage = 10

  const totalPages = Math.ceil(eventsData.length / itemsPerPage)

  const currentItems = eventsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const goToPage = (page: any) => {
    setCurrentPage(page)
  }

  const generatePageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 10

    if (currentPage > 2) pageNumbers.push(1)
    if (currentPage > 3) pageNumbers.push("...")

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages);
      i++
    ) {
      pageNumbers.push(i)
    }

    if (currentPage < totalPages - 2) pageNumbers.push("...")
    if (currentPage < totalPages - 1) pageNumbers.push(totalPages)

    return pageNumbers
  }

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleChange = (event: { target: { value: any } }) => {
    setSearchValue(event.target.value)
  }

  const shortenAddress = (address : any) => {
    return address.slice(0, 10) + '...' + address.slice(-10);
  }

  return (
    <div className="bg-[#F5F7FA] min-h-screen w-[460px] md:w-full  lg:w-full">
      {/* Top Section */}
      <div className="px-4 sm:px-6 lg:px-36 md:px-2 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-[#e0e0e0] pb-4">
          <div className="space-y-2 mb-4 md:mb-0">
            <h1 className="text-base md:text-lg font-medium text-[#333333]">Explorer Result</h1>
            <p className="text-sm font-medium text-[#817676]">
              Key : Address <span className="text-[#9b51e0]">({shortenAddress(address)})</span>
            </p>
          </div>

          <div className="w-full md:w-[50%] relative">
            <form onSubmit={(e) => handleSubmit(e, searchValue, router)}>
              <div className="w-full h-12 rounded-xl bg-[#FFFFFF] px-4 flex items-center justify-between">
                <div className="w-full relative">
                  <Input
                    name="search by address"
                    type="text"
                    placeholder="Search an address | organization | Course"
                    value={searchValue}
                    onChange={handleChange}
                    className="w-full h-12 p-2 pl-8 rounded-xl text-sm focus:outline-none font-medium text-[#817676] placeholder-[#817676]"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>

                <div className="hidden md:flex h-10 ml-2 rounded-xl items-center justify-center bg-[#4A90E21F] border-[1px] border-[#6B6D6E] space-x-1 px-2">
                  <h1 className="text-[#2D3A4B] text-xs font-medium">All Filters</h1>
                  <RiArrowDropDownLine className="h-5 w-5 text-[#2D3A4B]" />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 my-5 justify-center md:justify-start">
          {["Filter", "Events", "Organization", "Certification", "Courses"].map((category, index) => (
            <Button 
              key={index}
              className="rounded-lg bg-[#4A90E21F] px-3 py-2 text-sm text-[#2d3a4b] hover:bg-sky-500 active:bg-sky-700 flex items-center"
            >
              {category === "Filter" && <Image src={filter} alt="filter" className="mr-2 w-4 h-4" />}
              <span>{category}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Grid Results */}
      <div className="px-4 sm:px-6 lg:px-36">
        {gridsData.map((item, i) => (
          <ResultGrid
            key={i}
            item={item}
            eventsData={item.eventsData}
            generatePageNumbers={generatePageNumbers}
            goToPage={goToPage}
            currentPage={currentPage}
          />
        ))}
      </div>
    </div>
  )
}

export default ExploreResult