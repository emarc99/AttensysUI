import React, { useState, useEffect } from "react"
import { Button, Input } from "@headlessui/react"
import Image from "next/image"
import filter from "@/assets/filter.png"
import event_icon from "@/assets/event_icon.svg"
import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"
import TableList from "../TableList"
import { eventsData, gridsData } from "@/constants/data"
import ResultGrid from "./ResultGrid"
import { handleSubmit } from "@/utils/helpers"
import { useRouter } from "next/navigation"
import { RiArrowDropDownLine } from "react-icons/ri";


type Params = {
  address?: string; // Replace 'searchTerm' with the actual key(s) in params
};

const ExploreResult: React.FC<{ params: Params }> = ({ params }) => {
  const [searchValue, setSearchValue] = useState("")

  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()
  const { address } = params
  const itemsPerPage = 10

  // Calculate total pages
  const totalPages = Math.ceil(eventsData.length / itemsPerPage)

  // Get current page items
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

  const shortenAddress = (address : any) => {
    return address.slice(0, 10) + '...' + address.slice(-10);
  }
  useEffect(() => {}, [])

  return (
    <div className="bg-[#F5F7FA] w-full h-auto">
      {/* top */}
      <div className="mx-36  py-5">
        <div
          className="flex justify-between items-center border-b-2 border-[#e0e0e0]
      "
        >
          <div className="space-y-2">
            <h1 className="text-[18px] font-medium leading-[22px] text-[#333333]">Explorer Result</h1>
            <p className="text-[15px] font-medium leading-[18px] text-[#817676]">
              Key : Address <span className="text-[#9b51e0]">({shortenAddress(address)})</span>
            </p>
          </div>

          <div className="w-[50%] relative my-5">
            <form onSubmit={(e) => handleSubmit(e, searchValue, router)}>
            <div className="w-full h-[50px] rounded-xl bg-[#FFFFFF] px-6 flex items-center justify-between">
                  <div className="w-[70%]">       <Input
                name="search by address"
                type="text"
                placeholder="           Search an address | organization | Course"
                value={searchValue}
                onChange={handleChange}
                className="w-full h-[50px] clg:w-full lclg:w-[90%] p-2 bg-none  rounded-xl text-[15px] focus:outline-none font-medium text-[#817676] placeholder-[#817676]"
              />
              {!searchValue && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute left-10 top-1/2 transform -translate-y-1/2 h-[25px] w-[25px] text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              )}</div>

                  <div className="h-[42px] w-[20%] rounded-xl flex items-center justify-center bg-[#4A90E21F]  border-[1px] border-[#6B6D6E] space-x-1 ">
                        <h1 className="text-[#2D3A4B] text-[14px] leading-[21px] font-medium ">All Filters</h1>
                        <RiArrowDropDownLine className="h-[20px] w-[20px] text-[#2D3A4B]" />
                  </div>
              </div>
            </form>
          </div>
        </div>

        {/* categories */}
        <div className="flex gap-3 my-5">
          <Button className="hidden lg:flex rounded-lg bg-[#4A90E21F]  py-2 px-4 lg:h-[42px] items-center lg:w-[90px] text-sm text-[#2d3a4b] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            <div className="flex space-x-4 items-center font-semibold text-[16px]">
              <Image src={filter} alt="ticket" className="mr-2" />
            </div>
            <div className="text-[11px]">Filter</div>
          </Button>
          <Button className="hidden lg:flex rounded-lg bg-[#4A90E21F] py-2 px-4 lg:h-[42px] items-center lg:w-[90px] text-sm text-[#2d3a4b] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            <div className="flex space-x-4 items-center font-semibold text-[16px]"></div>
            <div className="text-[11px]">Events</div>
          </Button>
          <Button className="hidden lg:flex rounded-lg bg-[#4A90E21F] py-2 px-4 lg:h-[42px] items-center lg:w-[90px] text-sm text-[#2d3a4b] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            <div className="flex space-x-4 items-center font-semibold text-[16px]"></div>
            <div className="text-[11px]">Organization</div>
          </Button>
          <Button className="hidden lg:flex rounded-lg bg-[#4A90E21F] py-2 px-4 lg:h-[42px] items-center lg:w-[90px] text-sm text-[#2d3a4b] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            <div className="flex space-x-4 items-center font-semibold text-[16px]"></div>
            <div className="text-[11px]">Certification</div>
          </Button>
          <Button className="hidden lg:flex rounded-lg bg-[#4A90E21F] py-2 px-4 lg:h-[42px] items-center lg:w-[90px] text-sm text-[#2d3a4b] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            <div className="flex space-x-4 items-center font-semibold text-[16px]"></div>
            <div className="text-[11px]">Courses</div>
          </Button>
        </div>
      </div>

      {gridsData.map((item, i) => (
        <div className="mx-36 text-xs" key={i}>
          {/* bottom */}
          <ResultGrid
            item={item}
            eventsData={item.eventsData}
            generatePageNumbers={generatePageNumbers}
            goToPage={goToPage}
            currentPage={currentPage}
          />
        </div>
      ))}
    </div>
  )
}

export default ExploreResult
