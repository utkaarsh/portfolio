import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import PresentationList from "./components/PresentationList";
import SkillComponent from "./components/SkillComponent";
import { socials, utkarshLogo } from "./utils/utility";
import { experienceData, projects, skills, skillTools } from "./utils/temp";
import Projects from "./templates/Projects";

const App = () => {
  return (
    <div className="flex flex-col space-y-4 items-center p-2 bg-black text-white w-full h-full min-h-screen">
      <div className="flex justify-center w-full mb-10 mt-8  font-semibold text-xl top-0 sticky bg-black z-30 py-5">
        <div className="flex justify-around items-center gap-3 w-11/12 md:w-4/12">
          <a href="#home">
            <AiOutlineHome />
          </a>
          <a href="#projects">
            <FaRegFolder />
          </a>
          <a href="#experience">
            <FiBriefcase />
          </a>
          <a href="#skills">
            <MdOutlineSettings />
          </a>
          <BsFillPersonFill />
        </div>
      </div>

      {/* GRID BOX  */}
      <div
        id="home"
        className="grid w-full grid-cols-1 justify-center gap-10 xl:gap-2 xl:grid-cols-7 p-3  relative"
      >
        {/* BOX 1 */}
        <div className="box1 min-w-[23rem] w-full xl:h-[40rem] flex justify-center xl:justify-end xl:col-span-2  xl:sticky top-12 ">
          <div className=" w-full  xl:w-11/12  px-2 ">
            <div className="max-w-[95%] sm:max-w-[80%] xl:max-w-none mx-auto bg-[#1C1C1C] rounded-2xl p-6 flex flex-col items-center space-y-4">
              <div className="overflow-hidden mt-4 rounded-2xl ">
                <img
                  src={utkarshLogo}
                  className="max-h-36 bg-[#FFC107]  w-full object-contain"
                  alt="utkarsh"
                />
              </div>
              <h1 className="text-4xl font-bold text-[#F9FAFB] text-center my-3">
                Utkarsh Ranpise
              </h1>
              <div></div>
              <div></div>
              <p className="text-center text-[#D6D6D6] font-medium   text-lg">
                Software engineer building scalable, high-performance
                interfaces. Focused on frontend architecture, performance, and
                usability.
              </p>

              <div className="flex justify-around items-center w-9/12 mt-12">
                {socials?.map((item, index) => {
                  return (
                    <a
                      title={item.link}
                      className={`border-2  overflow-hidden p-2 rounded-lg border-[#D6D6D6]`}
                      href={
                        item.type === "mail"
                          ? `mailto:${item.link}`
                          : item.type === "phone"
                            ? `tel:+91${item.link}`
                            : item.link
                      }
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="box2 lg:min-h-[150vh] w-full col-span-5 space-y-5 pl-4 md:pl-24">
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
              <h1 className="text-6xl font-extrabold">+2</h1>
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
          <div id="projects">
            <Projects title="Recent Projects" data={projects} />
          </div>
          {/* <div id="projects">
            <PresentationList title="Recent Projects" data={projectData} />
          </div> */}
          <div id="experience">
            <PresentationList title="Work Experience" data={experienceData} />
          </div>
          <div id="skills">
            <SkillComponent title="Languages and Frameworks" skills={skills} />
            <SkillComponent
              title="Tools and Technologies"
              skills={skillTools}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
