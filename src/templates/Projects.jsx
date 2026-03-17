import React from "react";
import ProjectOverview from "./ProjectOverview";

const Projects = ({ title, data }) => {
  const words = title?.split(" ");
  const firstLine = title ? words[0] : "";
  const secondLine = title ? words.slice(1).join(" ") : "";
  return (
    <div className="w-full  min-h-72  rounded-2xl space-y-6 xl:p-5 ">
      {/* Title  */}
      {title && (
        <div className="leading-none">
          <div className="text-white text-5xl font-semibold uppercase">
            {firstLine}
          </div>

          {secondLine && (
            <div
              className="text-5xl font-semibold uppercase"
              style={{ color: "#353334" }}
            >
              {secondLine}
            </div>
          )}
        </div>
      )}

      {data?.map((item, index) => (
        <ProjectOverview key={index} data={item} />
      ))}
    </div>
  );
};

export default Projects;
