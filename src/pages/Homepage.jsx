import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import PresentationList from "../components/PresentationList";
import SkillComponent from "../components/SkillComponent";
import { socials, testImages, utkarshLogo } from "../utils/utility";
import { experienceData, projects, skills, skillTools } from "../utils/temp";
import Projects from "../templates/Projects";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="bg-black text-white h-full min-h-screen ">
      <div
        id="home"
        className=" grid xl:grid-cols-12 grid-cols-1 gap-4   w-full "
      >
        <Sidebar />
        <div />
        <div className="col-span-8 ">
          {/* Title  */}
          <div className="gap-4">
            <h1 className="text-2xl md:text-6xl xl:text-9xl font-extrabold text-white">
              SOFTWARE
            </h1>
            <h1 className="text-2xl md:text-6xl xl:text-9xl font-extrabold text-[#353334]">
              ENGINEER
            </h1>
          </div>
          <p className="text-lg max-w-4xl mt-4 w-full text-[#998F8F] text-wrap break-word whitespace-normal">
            I'm Utkarsh, a Full Stack Developer based in Pune around 2.5 years
            of experience building web and mobile applications. I work across
            the entire stack — React.js, React Native, and Node.js — and I care
            about writing clean code that ships fast and scales well. I've
            helped startups grow, led small teams, and built products that real
            people use.
          </p>

          <div className="grid grid-cols-3 mt-6 gap-4">
            <div className="space-y-4">
              <h1 className="text-6xl font-extrabold">+2</h1>
              <h2 className="text-base xl:text-lg text-[#998F8F]">
                Years of Experience
              </h2>
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl font-extrabold">+6</h1>
              <h2 className="text-base xl:text-lg text-[#998F8F]">
                PROJECTS COMPLETED
              </h2>
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl font-extrabold">+2</h1>
              <h2 className="text-base xl:text-lg text-[#998F8F]">
                WORLDWIDE CLIENTS
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* BOX 2 */}

      <div className="box2 lg:min-h-[150vh] w-full  space-y-5 pl-4 md:pl-8">
        <div id="experience" className="scroll-mt-24">
          <PresentationList title="Work Experience" data={experienceData} />
        </div>
        <div id="projects" className="scroll-mt-24">
          <Projects title="Recent Projects" data={projects} />
        </div>
        {/* <div id="projects">
            <PresentationList title="Recent Projects" data={projectData} />
          </div> */}

        <div id="skills" className="scroll-mt-24">
          <SkillComponent title="Languages and Frameworks" skills={skills} />
          <SkillComponent title="Tools and Technologies" skills={skillTools} />
        </div>
        <Footer />
        <div></div>
      </div>
    </div>
  );
};

export default Homepage;
