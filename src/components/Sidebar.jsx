import React from "react";
import { socials, utkarshLogo } from "../utils/utility";
import { MdFileDownload } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="box1 min-w-[20rem] w-full xl:h-[40rem] flex justify-center  xl:justify-end xl:col-span-2  xl:sticky top-20 ">
      <div className=" w-full  px-2 ">
        <div className="max-w-[95%] sm:max-w-[80%] xl:max-w-none mx-auto ml-3 bg-[#111110] rounded-2xl p-6 flex flex-col items-center space-y-4">
          <div className="overflow-hidden mt-4 rounded-2xl ">
            <img
              src={utkarshLogo}
              className="max-h-40 bg-[#F0F8FF]  w-full object-contain"
              alt="utkarsh"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#FFFFFF] text-center my-3">
            Utkarsh Ranpise
          </h1>
          <div></div>
          <div></div>
          <p className="text-center text-[#6A6B6E] font-medium   text-base leading-relaxed max-w-sm">
            Full Stack Developer React.js · React Native · Node.js Pune, India
          </p>
          {/* <a href="/" download="Utkarsh_1606.pdf">
            <button className="flex items-center mt-3 px-6 space-x-2 py-2 bg-[#F0F8FF] text-black rounded-lg font-semibold hover:bg-[#D6D6D6] transition-colors">
              <span>
                <MdFileDownload />
              </span>{" "}
              <span>Download CV</span>
            </button>
          </a> */}
          <div className="flex justify-around items-center w-9/12 mt-12">
            {socials?.map((item, index) => {
              return (
                <a
                  title={item.link}
                  className={`border-2  overflow-hidden p-2 rounded-lg border-[#D6D6D6]`}
                  target="_blank"
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
  );
};

export default Sidebar;
