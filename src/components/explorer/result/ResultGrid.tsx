"use client";

import React from "react";
import Image from "next/image";
import { SlExclamation } from "react-icons/sl";
import up from "@/assets/up.svg";
import down from "@/assets/down.svg";
import show_arrow from "@/assets/show_arrow.svg";

interface Events {
  eventName: string;
  status: string;
  certification: string;
  nftImg: string;
  date: string;
}

// First define the interfaces for the grid item structure
interface GridItem {
  name: string;
  subProp: string[];
  viewPartName: string;
  heading: string[];
  eventsData: Array<{
    eventName: string;
    status: string;
    certification: string;
    nftImg: string;
    date: string;
  }>;
}

interface ResultGridProps {
  address: string;
  item: GridItem;
  eventsData: Events[];
  generatePageNumbers: () => (string | number)[];
  goToPage: (page: any) => void;
  currentPage: number;
}

const shortenAddress = (address: any) => {
  return address.slice(0, 10) + "..." + address.slice(-10);
};

const ResultGrid: React.FC<ResultGridProps> = ({
  address,
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
            <span className="text-[#5801A9] text-[10px]">
              {shortenAddress(address)}
            </span>
          </p>
        );
      case "Status":
        return (
          <div className="h-[30px] w-auto px-4 bg-[#C4FFA2] rounded-xl flex items-center justify-center">
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
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
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
            <div className="flex gap-2 w-auto rounded-xl mx-12 items-center border-[1px] border-[#6B6D6E] p-3 mb-3">
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
        <div className="row-span-2 bg-white rounded-lg mb-6 py-5 border border-[#b9b9ba]">
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

          <div className="h-[308px] w-full overflow-auto">
            {item.eventsData.length > 0 ? (
              <>
                <table className="w-full border-separate border-spacing-y-3">
                  <thead>
                    <tr className="w-full h-[42px] border-b-2 border-black font-normal text-[#2d3a4b] leading-[19.79px] rounded">
                      {item.heading.map((item, i) => (
                        <td
                          key={i}
                          className="py-3 pl-3 flex-none border-b-2 border-[#b9b9ba] text-[12px]"
                        >
                          {item}
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.eventsData
                      .slice((currentPage - 1) * 6, currentPage * 6)
                      .map((data, index) => (
                        <tr key={index}>
                          <td className="py-3 pl-10 border-b-2 border-[#b9b9ba] flex-none">
                            {data.eventName}
                          </td>
                          <td className="p-3 mb-3 border-b-2 border-[#b9b9ba]">
                            <div
                              className={`flex p-2 rounded-lg text-xs items-center justify-around flex-none ${
                                data.status === "Course Complete"
                                  ? "bg-[#C4FFA2] text-[#115E2C]"
                                  : "bg-[#F6A61C2B] text-[#730404]"
                              }`}
                            >
                              {data.status}
                            </div>
                          </td>
                          <td className="p-3 border-b-2 border-[#b9b9ba]">
                            <h1 className="h-[30px] flex justify-center items-center text-[#5801A9] text-center">
                              {data.certification}
                            </h1>
                          </td>
                          <td className="p-3 border-b-2 border-[#b9b9ba]">
                            {data.date}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {item.eventsData.length > 6 && (
                  <div className="flex justify-center my-4">
                    <p className="px-2 py-2 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] inline-block text-transparent bg-clip-text">
                      Show more
                    </p>
                    <Image src={show_arrow} alt="show_arrow" />
                  </div>
                )}
              </>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <h1 className="text-[15px] text-[#817676] font-medium leading-[18px]">
                  This address has no event data
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultGrid;
