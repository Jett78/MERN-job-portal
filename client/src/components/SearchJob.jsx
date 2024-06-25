import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const SearchJob = ({ query, handleInputChange }) => {
  return (
    <div>
      <h2 className="text-black font-semibold lg:text-5xl md:text-4xl text-2xl  max-w-[14em] text-center mx-auto px-2 pt-14">
        Find a Job that suits your
        <span className="text-primary"> Interest</span> and
        <span className="text-primary"> Skills</span>
      </h2>
      <p className="max-w-[50em] py-2 mx-auto text-center text-light">
        Thousands of jobs in the computer,engineering and technology sectors are
        waiting for you
      </p>

      <form action="" >
         <div className="flex justify-center items-center gap-4 mt-4">
         <div className="bg-white border flex items-center gap-2 md:py-4 py-2 w-[30em] rounded-3xl px-4">
          <CiSearch size={28} />
          <input
            onChange={handleInputChange}
            value={query}
            type="text"
            placeholder="search"
            className="w-full bg-transparent outline-none "
          />
        </div>
        <div className="bg-white border flex items-center gap-2 md:py-4 py-2 w-[30em] rounded-3xl px-4">
          <IoLocationOutline size={28} />
          <input
            onChange={handleInputChange}
            value={query}
            type="text"
            placeholder="location"
            className="w-full bg-transparent outline-none "
          />
        </div>
         </div>
        <button type="submit" className="bg-primary px-6 py-3 rounded-3xl text-white flex my-4 mx-auto">Submit</button>
      </form>
    </div>
  );
};

export default SearchJob;
