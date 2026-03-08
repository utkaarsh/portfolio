import React from "react";
import ProjectOverview from "./ProjectOverview";

const Projects = ({title="Title for Projects", data}) => {
  const words = title?.split(" ");
  const firstLine = words[0];
  const secondLine = words.slice(1).join(" ");
  return (
    <div className="w-full  min-h-72  rounded-2xl space-y-6 p-5 ">
      {/* Title  */}
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

      {data?.map((item, index) => (
        <ProjectOverview key={index} data={item} />
      ))}
    </div>
  );
};

export default Projects;
