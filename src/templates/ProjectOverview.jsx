import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import { VscGithubProject } from "react-icons/vsc";
import BulletPoints from "../components/BulletPoints";

const ProjectOverview = ({title = "Title for Projects",data}) => {
    const words = title.split(" ");
  const firstLine = words[0];
  const secondLine = words.slice(1).join(" ");
  const detailEntries = Object.entries(data?.details || {});
const columnCount = Math.min(detailEntries.length, 3);

  console.log("Data :: ", data);
  
  return (
    <div className="w-full  min-h-72  rounded-2xl space-y-6 p-5 ">
       {/* Title  */}
      {/* <div className="leading-none">
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
      </div> */}
      <ProjectHeader
      title={data?.title}
      icon={data?.icon ?? <VscGithubProject className="w-8 h-8" />
}
      tech={data?.techStack}  
      description={data?.summary}
      />

       {/* Details */}
      <div className="grid grid-cols-1 xl:grid-cols-[repeat(var(--cols),_minmax(0,_1fr))] gap-10"
        style={{ "--cols": columnCount }}
      >
        {Object.entries(data?.details || {}).map(([section, value]) => (
          <BulletPoints
            key={section}
            title={section}
            points={value.points}
          />
        ))}
      </div>

    </div>
  );
};

export default ProjectOverview;
