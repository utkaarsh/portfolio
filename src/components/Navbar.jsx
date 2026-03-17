import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full mb-2 mt-8  font-semibold text-xl top-0 sticky bg-black z-30 py-5">
      <div className="flex justify-around items-center gap-3 w-11/12 md:w-4/12">
        <a href="#home" className="flex flex-col items-center">
          <AiOutlineHome /> <p className="pt-2 text-xs">Home</p>
        </a>
        <a href="#projects" className="flex flex-col items-center">
          <FaRegFolder />
          <p className="pt-2 text-xs">Projects</p>
        </a>
        <a href="#experience" className="flex flex-col items-center">
          <FiBriefcase />
          <p className="pt-2 text-xs">Experience</p>
        </a>
        <a href="#skills" className="flex flex-col items-center">
          <MdOutlineSettings />
          <p className="pt-2 text-xs">Skills</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
