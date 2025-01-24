import React, { useEffect, useState } from "react"
import { Button, Input } from "@headlessui/react"
import Image from "next/image"
import filter from "@/assets/filter.png"
import { explorerData, mockkdata } from "@/constants/data"
import TableList from "./TableList"
import { useRouter } from "next/navigation"
import { handleSubmit } from "@/utils/helpers"
import { RiArrowDropDownLine } from "react-icons/ri";
import copy_addr from "@/assets/copy_addr.svg"
import copy from "copy-to-clipboard"


const ExplorePage = () => {
  const isSmallScreen = window.innerWidth < 640; 
  const [searchValue, setSearchValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

 

  const itemsPerPage = 10

  const router = useRouter()

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
    <div className="md:mx-24  pb-10">
      {/* Hero component */}
      <div>
        <div
          className={`bg-[url('/explorer_bg.svg')] bg-no-repeat bg-cover h-[361px] relative text-white overflow-hidden px-5 w-[100vw] md:w-full md:px-32 py-20 from-orange-400 via-red-500 to-pink-500 md:h-64 min-h-full sm:min-h-0 md:min-h-full lg:min-h-0 xl:min-h-full shadow-[inset_15px_25px_100px_rgba(0,0,0,1)]`}
        >
          <h1 className="sm:text-[22px]  md:text-2xl font-bold">The Attensys Explorer</h1>
          <div className="relative  w-[100%] md:w-[80%] my-5">
            <form  onSubmit={(e) => handleSubmit(e, searchValue, router)}>
              {/* <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter address or value"
                /> */}

       
              <div className=" h-[61px] sm:w-[100%] md:w-[75%] bg-[#ffffff] rounded-xl md:px-6 flex items-center justify-between">
                  <div className="w-[100%]  md:w-[75%]">      
                     <Input
                          name="search by address"
                          type="text"
                          placeholder="Search an address | organization | Course"
                          value={searchValue}
                          onChange={handleChange}
                          className="w-full h-[61px] clg:w-[50%] lclg:w-[90%]  pl-[50px]  bg-none  rounded-xl text-[13px] focus:outline-none  md:text-[16px]  md:font-medium text-[#817676] placeholder-[#817676]"
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
              )}</div>

                  <div className="h-[42px]   w-[25%] hidden md:visible lg:flex rounded-lg md:flex items-center justify-center   border-[1px] bg-[#e8e9ea] border-[#6B6D6E] space-x-2 ">
                        <h1 className="text-[#2D3A4B] text-[14px] leading-[21px] font-medium">All Filters</h1>
                        <RiArrowDropDownLine className="h-[20px] w-[20px] text-[#2D3A4B]" />

                  </div>
              </div>
              {/* {!searchValue && (
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
              )} */}
              {/* <button type="submit">Search</button> */}
            </form>
          </div>
          <div className="w-[100%] md:w-[30%]   h-[40px] relative overflow-hidden whitespace-nowrap">
          <div className="moving-div flex ">
              {mockkdata.map((item, index) => (
                <p key={index} className="text-sm mx-4 w-auto">
                  {item.data}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* table */}

          <div className="px-5 md:px-0  max-w-[100vw] overflow-hidden">
              <div className="h-[930px] mx-auto bg-[#FFFFFF] mt-4 rounded-lg mb-24">
                <div className="flex bg-[#9B51E052] bg-opacity-[35%] md:bg-transparent h-[80px] rounded-xl md:max-h-20 justify-between align-middle  items-center px-5 md:px-16 mt-10">

            
                  <h1 className="text-[18px]  font-medium leading-[22px]  text-[#333333] mt-2">
                    Recent activity 
                  </h1>

                  <div className="flex space-x-10">
                    <Button className=" flex rounded-lg bg-[#4A90E21F] border-white border-[1px]  py-2 px-4 h-[42px] items-center w-[95px] text-sm text-[#5801A9] data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                      <div className="flex space-x-4 items-center font-semibold text-[16px]">
                        <Image src={filter} alt="ticket" className="mr-2" />
                      </div>
                      <div className="text-[14px]">Filter</div>
                    </Button>
                  </div>
                </div>
                <div className="w-[92%] mx-auto mt-6 h-[750px]">


                  {/* table data */}
                  <table className="w-full  border-separate border-spacing-y-3 ">
                    
                      
                      <thead  style={{
                          display: isSmallScreen ? 'none' : '',
                          position: isSmallScreen ? 'absolute' : 'relative',
                          zIndex: 0
                      }}>
                        <tr className="h-[56px] text-[14px] bg-[#9B51E052] font-normal text-[#5801A9] leading-[19.79px] rounded">
                          <th className="text-center font-light rounded-tl-xl rounded-bl-xl">Timestamp</th>
                          <th className="text-center font-light">Wallet Address</th>
                          <th className="text-center font-light">Activity Status</th>
                          <th className="text-center font-light rounded-tr-xl rounded-br-xl">
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

                   {/* Mobile view  */}

      {currentItems.map((props, index)=>(
        <div
        key={index}
        style={{
          display: isSmallScreen ? '' : 'none',
          position: isSmallScreen ? 'relative' : 'absolute',
          zIndex: 1,
          
      
        }}
        className={`h-[auto] bg-[#F2F1F1] rounded-2xl border w-[100%]  my-3 p-5
        } block`}
      >
        <div>
          <p className="text-[16px] font-[400] text-[#115E2C] mb-2 w-[278px] leading-[19.79px]  ">
          {props.status}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[14px] font-[600] text-[#5801A9] leading-[19.79px] ">
            {props.address}
            </p>
            <Image
              src={copy_addr}
              alt="copy"
 onClick={() => copy(props.address)}           
    className="cursor-pointer"
            />
          </div>
        </div>
        <div>
          <p className="text-[14px] font-[400] text-[#2D3A4B] mb-2 leading-[19.79px] ">
          {props.category}
          </p>
          <p className="text-[14px] font-[400] text-[#2D3A4B] leading-[19.79px] ">
           {props.timestamp}
          </p>
        </div>
      
</div>
      ))}
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


    </div>
  )
}


export default ExplorePage


