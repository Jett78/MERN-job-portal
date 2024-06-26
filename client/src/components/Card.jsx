import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;
  return (
    <main className="border py-2 px-4 m-8 flex gap-6">
      <figure>
        <img src={companyLogo} alt="companylogo" className="w-40" />
      </figure>

      <section>
        <p className="text-light text-sm ">{companyName}</p>
        <h2 className="text-l font-semibold py-2">{jobTitle}</h2>

        <div className="flex gap-4">
        <div className="card-icon">
          <IoLocationOutline />
          <p>{jobLocation}</p>
        </div>
        <div className="card-icon">
          <MdOutlineAccessTime />
          <p>{employmentType}</p>
        </div>
        <div className="card-icon">
          <BiDollar />
          <p>
            {minPrice}-{maxPrice}
          </p>
        </div>
        <div className="card-icon">
          <CiCalendar />
          <p>{postingDate}</p>
        </div>
        </div>
        <p className="py-2 text-light ">{description}</p>
      </section>
    </main>
  );
};

export default Card;
