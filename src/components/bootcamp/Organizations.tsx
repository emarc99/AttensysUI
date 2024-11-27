import React, { useState } from 'react'
import Organizationcard from './Organizationcard'
import {organizationData} from '@/constants/data'

const Organizations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  

  const itemsPerPage = 6;
  
   // Calculate total pages
 const totalPages = Math.ceil(organizationData.length / itemsPerPage);

 // Get current page items
 const currentItems = organizationData.slice(
   (currentPage - 1) * itemsPerPage,
   currentPage * itemsPerPage
 );

 const generatePageNumbers = () => {
  const pageNumbers = [];
  const maxVisiblePages = 10;

  // Always show the first page
  if (currentPage > 2) pageNumbers.push(1);

  // Show ellipsis if there are pages between the first page and current page range
  if (currentPage > 3) pageNumbers.push("...");

  // Show the range of pages around the current page
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(currentPage + 1, totalPages); i++) {
    pageNumbers.push(i);
  }

  // Show ellipsis if there are pages between the current range and the last page
  if (currentPage < totalPages - 2) pageNumbers.push("...");

  // Always show the last page
  if (currentPage < totalPages - 1) pageNumbers.push(totalPages);

  return pageNumbers;
};

// Handle pagination controls
const goToNextPage = () => {
 setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const goToPreviousPage = () => {
 setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};
const goToPage = (page: any) => {
  setCurrentPage(page);
};
  
  
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center space-y-4'>
        <h1 className='w-[1257px] text-[20px] text-[#333333] font-bold'>Top rated Organization</h1>
        <div className='h-[926px] w-[1257px] bg-[#FFFFFF] border-[1px] border-[#C8C8C8] rounded-lg px-12 py-12 flex flex-wrap gap-6'>         
           {currentItems.map((data, index)=>{
                return <div key={index} className='w-[30%]'>
                <Organizationcard key={index} name={data.name} about={data.about} numberofbootcamps={data.bootcampnumber} 
                numberofinstructors={data.instructors}
                stars={data.stars}
                totalreviews={data.reviewnumber}
                tags={data.tags}
                logo={data.logo}
                flier={data.flier}  />
                </div>
           })}
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
            <span key={index} className="px-2 text-base mt-2">...</span>
          ) : (
            <button
              key={index}
              onClick={() => goToPage(page)}
              className={`px-4 py-2 rounded text-[14px] ${currentPage == page ? "bg-none text-[#000000] border-[#F56630] border-[1px]" : "bg-none text-[#000000]"}`}
            >
              {page}
            </button>
          )
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
  )
}

export default Organizations