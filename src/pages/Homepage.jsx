import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import PresentationList from "../components/PresentationList";
import SkillComponent from "../components/SkillComponent";
import { socials, utkarshLogo } from "../utils/utility";
import { experienceData, projects, skills, skillTools } from "../utils/temp";
import Projects from "../templates/Projects";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  return (
    <div className="flex flex-col space-y-4 items-center p-2 bg-black text-white w-full h-full min-h-screen">
      {/* BOX 2 */}
      <div className="box2 lg:min-h-[150vh] w-full col-span-5 space-y-5 pl-4 md:pl-8">
        {/* Title  */}
        <div className="gap-4">
          <h1 className="text-2xl md:text-6xl xl:text-9xl font-extrabold text-white">
            SOFTWARE
          </h1>
          <h1 className="text-2xl md:text-6xl xl:text-9xl font-extrabold text-[#353334]">
            ENGINEER
          </h1>
        </div>
        <p className="text-xl max-w-2xl w-full text-[#998F8F] text-wrap break-word whitespace-normal">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products
        </p>

        <div className="grid grid-cols-3  gap-4">
          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold">3</h1>
            <h2 className="text-base xl:text-xl text-[#998F8F]">
              Years of Experience
            </h2>
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold">+4</h1>
            <h2 className="text-base xl:text-xl text-[#998F8F]">
              PROJECTS COMPLETED
            </h2>
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold">+2</h1>
            <h2 className="text-base xl:text-xl text-[#998F8F]">
              WORLDWIDE CLIENTS
            </h2>
          </div>
        </div>
        <div id="projects" className="scroll-mt-24">
          <Projects title="Recent Projects" data={projects} />
        </div>
        {/* <div id="projects">
            <PresentationList title="Recent Projects" data={projectData} />
          </div> */}
        <div id="experience" className="scroll-mt-24">
          <PresentationList title="Work Experience" data={experienceData} />
        </div>
        <div id="skills" className="scroll-mt-24">
          <SkillComponent title="Languages and Frameworks" skills={skills} />
          <SkillComponent title="Tools and Technologies" skills={skillTools} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
