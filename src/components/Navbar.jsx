import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: AiOutlineHome },
    { id: "experience", label: "Experience", icon: FiBriefcase },
    { id: "projects", label: "Projects", icon: FaRegFolder },
    { id: "skills", label: "Skills", icon: MdOutlineSettings },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = 120;
      const currentSection = navItems
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .filter((section) => section.offsetTop <= window.scrollY + headerOffset)
        .at(-1);

      setActiveSection(currentSection?.id ?? "home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigation = (event, id) => {
    if (id !== "home") return;

    event.preventDefault();
    window.history.replaceState(null, "", "#home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center w-full mb-2 mt-8  font-semibold text-xl top-0 sticky bg-black z-30 py-5">
      <div className="flex justify-around items-center gap-3 w-11/12 md:w-4/12">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(event) => handleNavigation(event, id)}
            aria-current={activeSection === id ? "page" : undefined}
            className={`flex flex-col items-center transition-colors ${
              activeSection === id
                ? "text-white"
                : "text-[#6A6B6E] hover:text-white"
            }`}
          >
            <Icon />
            <p className="pt-2 text-xs">{label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
