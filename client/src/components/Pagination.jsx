import React from 'react'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


const Pagination = ({prevPage,nextPage,result,currentPage,itemsPerPage,filteredItems}) => {
  return (
    <div className='flex items-center justify-center'>
         {result.length > 0 ? (
        <div className='flex items-center gap-4'>
          <button onClick={prevPage} >
            <FaCircleChevronLeft />
          </button>
          <span>  Page {currentPage} of {Math.ceil(filteredItems.length/itemsPerPage)}</span>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length/itemsPerPage)}>
            <FaCircleChevronRight />
         </button>
        </div>):""
      }

    </div>
  )
}

export default Pagination