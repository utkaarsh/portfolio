// components/ProjectHeader.jsx
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { RxGithubLogo } from "react-icons/rx";

const ProjectHeader = ({ icon, title, description, link, tech = [] }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Title Row */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col md:flex-row items-start gap-3 ">
          <div className="flex items-center justify-center max-w-28 rounded-lg bg-neutral-900 text-yellow-400">
            {icon}
          </div>

          <div className="pl-3">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          {/* <RxGithubLogo /> */}

          {link && (
            <a
              href={link}
              className="text-xl font-semibold text-white"
              target="_blank"
            >
              <GoArrowUpRight
                size={20}
                className="text-[#F0F8FF]  transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-md bg-neutral-800 text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectHeader;
