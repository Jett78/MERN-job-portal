import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";

const Navlinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/MyJobs",
    name: "MyJobs",
  },
  {
    path: "/SalaryEstimate",
    name: "Salary Estimate",
  },
  {
    path: "/PostJob",
    name: "Post Job",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  return (
    <main className="flex justify-between items-center md:px-20 px-8 py-4">
      <h2 className="text-3xl font-bold text-primary">
        Jobs<span className="text-black">can</span>
      </h2>
      <nav className="lg:flex hidden gap-14 font-medium">
        {Navlinks.map((nav, index) => (
          <ul key={index}>
            <Link
              to={nav.path}
              className={`${
                location.pathname == nav.path ? "text-primary font-semibold" : "text-light"
              }`} >
              {nav.name}
            </Link>
          </ul>
        ))}
      </nav>

      <div className="lg:flex hidden gap-6">
        <button className="border py-2 px-6">Log In</button>
        <button className="bg-primary text-white py-2 px-6">Sign Up</button>
      </div>

      {/* hamburger menu icon */}
      <div onClick={() => setOpen(!isOpen)} className="lg:hidden block cursor-pointer text-2xl">
        {isOpen ? <GiCrossedBones />: <FaBarsStaggered />}</div>

      {/* mobile view */}
      <div className={`lg:hidden  grid justify-center place-items-center bg-gray-400 w-full h-80 top-16 inset-0 ${isOpen ? "absolute" : "hidden"} `}>
        {Navlinks.map((nav, index) => (
          <ul key={index} className="">
            <Link
              to={nav.path}
              className={`${
                location.pathname == nav.path ? "text-primary" : "text-light"
              } `}
            >
              {nav.name}
            </Link>
          </ul>
        ))}
        <div className=" gap-6">
        <button className="border py-2 px-6">Log In</button>
        <button className="bg-primary text-white py-2 px-6">Sign Up</button>
      </div>
      </div>
    </main>
  );
};

export default Navbar;
