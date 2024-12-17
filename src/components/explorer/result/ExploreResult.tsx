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

const ExploreResult = ({ params} : any) => {
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

  useEffect(() => {}, [])

  return (
    <div>
      {/* top */}
      <div className="mx-36  py-5">
        <div
          className="flex justify-between items-center border-b-2 border-[#e0e0e0]
      "
        >
          <div>
            <h1>Explorer Result</h1>
            <p>
              Key : Address <span className="text-[#9b51e0]">({address})</span>
            </p>
          </div>

          <div className="w-[45%] relative my-5">
            <form onSubmit={(e) => handleSubmit(e, searchValue, router)}>
              <Input
                name="search by address"
                type="text"
                placeholder="           Search an address | organization | Course"
                value={searchValue}
                onChange={handleChange}
                className="w-[100%] font-bold  p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
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
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              )}
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
