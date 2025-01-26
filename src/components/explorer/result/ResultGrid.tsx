'use client';

import React from "react";
import Image from "next/image";
import { SlExclamation } from "react-icons/sl";
import up from "@/assets/up.svg"
import down from "@/assets/down.svg"
interface Events {
  eventName: string;
  status: string;
  certification: string;
  nftImg: string;
  date: string;
}

interface Item {
  name: string;
  subProp: string[];
  viewPartName: string;
  heading: string[];
  eventsData: Events[];
}

interface ResultGridProps {
  item: Item;
  eventsData: Events[];
  generatePageNumbers: () => (string | number)[];
  goToPage: (page: number) => void;
  currentPage: number;
}

const ResultGrid: React.FC<ResultGridProps> = ({
  item,
  eventsData,
  generatePageNumbers,
  goToPage,
  currentPage,
}) => {
  const renderContent = (arg: string) => {
    switch (arg) {
      case "Key":
        return (
          <p className="text-[12px] font-medium leading-[16px] text-[#817676]">
            Address{" "}
            <span className="text-[#5801A9]">(0x5c956e61...de5232dc11)</span>
          </p>
        );
      case "Status":
        return (
          <div className="h-[30px] w-[64px] bg-[#C4FFA2] rounded-xl flex items-center justify-center">
            <h1 className="text-[#115E2C] font-light text-[12px] leading-[19px]">
              Verified
            </h1>
          </div>
        );
      case "Registered events":
        return (
          <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]">
            <span className="text-[#9B51E0]">15</span> events
          </h1>
        );
      case "Marked attendance":
        return (
          <div className="flex space-x-3">
            <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]">
              <span className="text-[#9B51E0]">14</span> marked
            </h1>
            <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]">
              <span className="text-[#9B51E0]">1</span> unmarked
            </h1>
          </div>
        );
      case "Certifications":
        return (
          <h1 className="text-[12px] font-medium leading-[16px] text-[#817676]">
            <span className="text-[#9B51E0]">14</span> Certifications
          </h1>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
        {/* Left Column - Overview Section */}
        <div className="row-span-2 bg-white rounded-lg mb-6 py-5 border border-[#b9b9ba]">
          <div className="border-b-2 border-[#b9b9ba]">
            <div className="flex gap-2 w-60 rounded-xl mx-12 items-center border-[1px] border-[#6B6D6E] p-3 mb-3">
              <h1>{item.name} Overview</h1>
            </div>
          </div>

          <div className="mx-12 mt-3">
            {item.subProp.map((prop, i) => (
              <div key={i} className="flex space-x-4 items-center py-2">
                <div className="flex items-center space-x-3 my-2 w-[250px]">
                  <SlExclamation className="text-[#2D3A4B] h-[12px] w-[12px]" />
                  <p className="text-[14px] font-medium text-[#333333] leading-[22px]">
                    {prop}:
                  </p>
                </div>
                {renderContent(prop)}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Events Table */}
        <div className="row-span-3  text-xs">
          {/* Desktop View */}
          {/* <div className="hidden lg:block bg-white rounded-lg mb-6 border border-[#b9b9ba]">
            <div className="border-b-2 border-[#b9b9ba]">
              <div className="flex justify-between items-center px-8 pt-5 pb-3">
                <div className="border-[1px] border-[#6B6D6E] p-3 rounded-xl">
                  <h1 className="text-sm">{item.viewPartName}</h1>
                </div>
              </div>
            </div>

            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#b9b9ba]">
                    {item.heading.map((header, i) => (
                      <th
                        key={i}
                        className="text-left py-3 px-4 text-sm font-medium text-[#2d3a4b]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {eventsData.map((event, index) => (
                    <tr key={index} className="border-b border-[#b9b9ba]">
                      <td className="py-3 px-4">{event.eventName}</td>
                      <td className="py-3 px-4">
                        <div
                          className={`inline-block px-3 py-1 rounded-lg text-xs ${
                            event.status === "Course Complete"
                              ? "bg-[#C4FFA2] text-[#115E2C]"
                              : "bg-[#F6A61C2B] text-[#730404]"
                          }`}
                        >
                          {event.status}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[#5801A9]">
                        {event.certification}
                      </td>
                      <td className="py-3 px-4">{event.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {eventsData.length === 0 && (
                <div className="text-center py-8 text-[#817676]">
                  This address has no event data
                </div>
              )}
            </div>
          </div> */}
           <div className="hidden lg:block">
    {/* Events Table Section */}
    <div className="mx-auto h-auto bg-[#FFFFFF] rounded-lg mb-24 border border-[#b9b9ba] w-[450px]">
      <div className="border-b-2 border-[#b9b9ba]">
        <div className="flex justify-between items-center px-8 pt-5">
          <div className="border-[1px] border-[#6B6D6E] p-3 mb-3 rounded-xl">
            <h1 className="text-[14px]">{item.viewPartName}</h1>
          </div>
          {item.eventsData.length === 0 ? (
            <Image src={up} alt="up" />
          ) : (
            <Image src={down} alt="down" />
          )}
        </div>
      </div>

      <div className={`${item.eventsData.length > 0 ? "" : "h-[308px]"}`}>
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="h-[42px] border-b-2 border-black font-normal text-[#2d3a4b] leading-[19.79px] rounded">
              {item.heading.map((item, i) => (
                <td key={i} className="py-3 pl-3 border-b-2 border-[#b9b9ba] text-[14px]">
                  {item}
                </td>
              ))}
            </tr>
          </thead>
          {item.eventsData.length > 0 && (
            item.eventsData.map((data, index) => (
              <tbody key={index}>
                <tr>
                  <td className="py-3 pl-10 border-b-2 border-[#b9b9ba]">
                    {data.eventName}
                  </td>
                  <td className="p-3 mb-3 border-b-2 border-[#b9b9ba] font-normal text-xs leading-[19.79px]">
                    <div className={`flex p-2 rounded-lg text-xs items-center justify-around ${
                      data.status === 'Course Complete' ? 'bg-[#C4FFA2] text-[#115E2C]' : 'bg-[#F6A61C2B] text-[#8#730404]'
                    }`}>
                      {data.status}
                    </div>
                  </td>
                  <td className="p-3 border-b-2 border-[#b9b9ba] text-xs font-normal text-[#5801A9] leading-[19.79px]">
                    <h1 className="h-[30px] flex justify-center items-center text-[#5801A9] text-center">
                      {data.certification}
                    </h1>
                  </td>
                  <td className="p-3 border-b-2 border-[#b9b9ba] text-xs py-2 font-normal text-[#5801A9] leading-[19.79px]">
                    {data.date}
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
        {item.eventsData.length === 0 && (
          <div className="h-[70%] w-full flex items-center justify-center">
            <h1 className="text-[15px] text-[#817676] font-medium leading-[18px]">This address has no event data</h1>
          </div>
        )}
      </div>
    </div>
  </div>


          {/* Mobile View */}
          <div className="lg:hidden space-y-4">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-[#b9b9ba]"
              >
                <h3 className="font-medium mb-2">{event.eventName}</h3>
                <div className="space-y-2">
                  <div
                    className={`inline-block px-3 py-1 rounded-lg text-xs ${
                      event.status === "Course Complete"
                        ? "bg-[#C4FFA2] text-[#115E2C]"
                        : "bg-[#F6A61C2B] text-[#730404]"
                    }`}
                  >
                    {event.status}
                  </div>
                  <p className="text-[#5801A9] text-sm">{event.certification}</p>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            ))}
            {eventsData.length === 0 && (
              <div className="text-center py-8 text-[#817676]">
                This address has no event data
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultGrid;