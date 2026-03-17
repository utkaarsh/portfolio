import React from "react";
import Projects from "../templates/Projects";
import { projects } from "../utils/temp";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectNo } = useParams();

  return (
    <div className="scroll-mt-24 bg-black text-white w-full h-full min-h-screen p-6">
      <Projects
        // title="Recent Projects"
        data={projects.slice(0, projectNo + 1 ?? 1)}
      />
    </div>
  );
};

export default ProjectPage;
