import React from "react"
import Image from "next/image"
import event_icon from "@/assets/event_icon.svg"
import { SlExclamation } from "react-icons/sl";
import up from "@/assets/up.svg"
import down from "@/assets/down.svg"
import show_arrow from "@/assets/show_arrow.svg"

interface Events {
  eventName: string
  status: string
  certification: string
  nftImg: string
  date: string
}

interface Item {
  name: string
  subProp: string[]
  viewPartName: string
  heading: string[]
  eventsData: {
    eventName: string
    status: string
    certification: string
    nftImg: string
    date: string
  }[]
}

interface ResultGridProps {
  item: Item
  eventsData: Events[]
  generatePageNumbers: () => (string | number)[]
  goToPage: (page: any) => void
  currentPage: number
}

const ResultGrid = ({
  item,
  eventsData,
  generatePageNumbers,
  goToPage,
  currentPage,
}: ResultGridProps) => {

  const renderContent = (arg : string) => {
      if(arg == "Key"){
          return <>
            <p className="text-[12px] font-medium leading-[16px] text-[#817676]">
                Address{" "}
                <span className="text-[#5801A9]">
                  (0x5c956e61...de5232dc11)
                </span>{" "}
              </p>
          </>
      }else if (arg == "Status"){
          return <>
          <div className="h-[30px] w-[64px] bg-[#C4FFA2] rounded-xl flex items-center justify-center">
            <h1 className="text-[#115E2C] font-light text-[12px] leading-[19px]">Verified</h1>
          </div>
          </>
      }else if (arg == "Registered events"){
        return <>
        <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">15</span> events</h1>
        </>
    }else if (arg == "Marked attendance"){
      return <>
      <div className="flex space-x-3">
          <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">14</span> marked</h1>
          <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">1</span>unmarked</h1>
      </div>
      </>
  }else if (arg == "Certifications"){
    return <>
      <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">14</span> Certifications</h1>
    </>
}else if (arg == "Courses"){
  return <>
    <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">5</span> Courses</h1>
  </>
}else if (arg == "Completed courses"){
  return <>
    <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">2</span> Completed courses</h1>
  </>
}else if (arg == "Course Certification"){
  return <>
    <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">2</span> Certified</h1>
  </>
}else if (arg == "Event Certification"){
  return <>
    <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">14</span> events</h1>
  </>
}else if (arg == "Total"){
  return <>
    <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]"><span className="text-[#9B51E0]">16</span> Certifications</h1>
  </>
}
  }

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="row-span-2 bg-[#FFFFFF] rounded-lg mb-6 py-5 border border-[#b9b9ba]">
        {/* Event overview */}
        <div className="border-b-2 border-[#b9b9ba]">
          <div className="flex gap-2 w-60 rounded-xl mx-12  items-center border-[1px] border-[#6B6D6E] p-3 mb-3">
            <Image src={event_icon} alt="event_icon" />
            <h1>{item.name} Overview</h1>
          </div>
        </div>

        <div className="mx-12 mt-3">
          {item.subProp.map((item, i) => (
            <div key={i} className="flex space-x-4 items-center py-2">
              <div className="flex items-center space-x-3 my-2 w-[250px]">
                <SlExclamation className="text-[#2D3A4B] h-[12px] w-[12px]"/>
                <p className="text-[14px] font-medium text-[#333333] leading-[22px]">{item}:</p>
              </div>
              <p>
                {renderContent(item)}
              </p>
            </div>
          ))}

          {/* <div className="flex gap-48 items-center py-2">
            <div className="flex justify-between items-center gap-1 my-2">
              <BsFillExclamationCircleFill />
              <p>Key:</p>
            </div>
            <p>
              Address{" "}
              <span className="text-[#5801A9]">(0x5c956e61...de5232dc11)</span>{" "}
            </p>
          </div>

          <div className="flex gap-44 items-center py-2">
            <div className="flex justify-between items-center gap-1 my-2">
              <BsFillExclamationCircleFill />
              <p>Status:</p>
            </div>
            <div className="py-2 px-3 text-[#115E2C] text-center rounded-lg bg-[#C4FFA2]">
              <p>Verified</p>
            </div>
          </div>

          <div className="flex gap-32  items-center py-2">
            <div className="flex justify-between  items-center gap-1 my-2">
              <BsFillExclamationCircleFill />
              <p>Registered events:</p>
            </div>
            <p>
              <span className="text-[#5801A9]">15</span> events
            </p>
          </div>

          <div className="flex gap-28  items-center py-2">
            <div className="flex justify-between  items-center gap-1 my-2">
              <BsFillExclamationCircleFill />
              <p>Marked attendance:</p>
            </div>
            <p>
              {" "}
              <span className="text-[#5801A9]">14</span> marked
            </p>
            <p>
              {" "}
              <span className="text-[#5801A9]">1</span> unmarked
            </p>
          </div>

          <div className="flex gap-36  items-center py-2">
            <div className="flex justify-between items-center gap-1 my-2">
              <BsFillExclamationCircleFill />
              <p>Certifications:</p>
            </div>
            <p>
              {" "}
              <span className="text-[#5801A9]">14</span> Certifications
            </p>
          </div> */}
        </div>
      </div>

      <div className="row-span-3 text-xs">
        {/* All Event */}

        <div className="mx-auto h-auto bg-[#FFFFFF] rounded-lg mb-24 border border-[#b9b9ba]">
          <div className="border-b-2 border-[#b9b9ba]">
            <div className="flex justify-between items-center px-8 pt-5">
              <div className="border-[1px] border-[#6B6D6E] p-3 mb-3 rounded-xl">
                <h1 className="text-xs">{item.viewPartName}</h1>
              </div>

              {item.eventsData.length == 0 ? (
                <Image src={up} alt="up" />
              ) : (
                <Image src={down} alt="down" />
              )}
            </div>
          </div>

          <div className={`${item.eventsData.length > 0 ? "" : "h-[308px]"} `}>
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="h-[42px] border-b-2 border-black  font-normal text-[#2d3a4b] leading-[19.79px] rounded">
                  {item.heading.map((item, i) => (
                    <td
                      key={i}
                      className="py-3 pl-3 border-b-2 border-[#b9b9ba] "
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              </thead>
              {item.eventsData.length > 0 && (
                item.eventsData.map((data, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td className="py-3 pl-10  border-b-2 border-[#b9b9ba] ">
                          {data.eventName}
                        </td>
                        <td className="p-3 mb-3  border-b-2 border-[#b9b9ba] font-normal text-xs leading-[19.79px]">
                          <div className="flex p-2 rounded-lg text-xs items-center justify-around bg-[#C4FFA2] text-[#115E2C]">
                            {data.status}
                          </div>
                        </td>
                        <td className="p-3 border-b-2 border-[#b9b9ba] text-xs font-normal text-[#5801A9] leading-[19.79px]">
                          <h1 className="h-[30px] flex justify-center items-center text-[#5801A9] text-center ">
                            {data.certification}
                          </h1>
                        </td>
                        <td className="p-3 border-b-2 border-[#b9b9ba]  text-xs py-2 font-normal text-[#5801A9] leading-[19.79px]">
                          {data.date}
                        </td>
                      </tr>
                    </tbody>
                  )
                })
              )}
            </table>
            {item.eventsData.length == 0 && (
              <div className="h-[70%] w-full flex items-center justify-center">
              <h1 className="text-[15px] text-[#817676] font-medium leading-[18px]">This address has no event data</h1>
      </div>
            ) }
            
          </div>

          {/* Pagination Controls */}
          {item.eventsData.length == 0 ? null : item.eventsData.length > 6 ? (
            <div className="flex justify-center space-x-2 my-4">
              <button
                // onClick={goToPreviousPage}
                // disabled={currentPage === 1}
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
                // onClick={goToNextPage}
                // disabled={currentPage === totalPages}
                className="px-4 py-2 border-[#D0D5DD] border-[1px] text-[20px] rounded disabled:opacity-50"
              >
                {">"}
              </button>
            </div>
          ) : (
            <div className="flex justify-center my-4">
              <p
                // onClick={goToPreviousPage}
                // disabled={currentPage === 1}
                className="px-2 py-2  bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]  inline-block text-transparent bg-clip-text"
              >
                Show more
              </p>
              <Image src={show_arrow} alt="show_arrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResultGrid
