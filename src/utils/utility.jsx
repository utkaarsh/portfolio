import utkarsh from "../assets/Utkarsh_selfie.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
export const utkarshLogo = utkarsh;
const color = "#D6D6D6";
const className = `border p-3 rounded-full border-[${color}]`;

export const socials = [
  {
    name: "Linked In",
    icon: <FaLinkedin color={color} />,
    link: "https://www.linkedin.com/in/utkarsh-ranpise/",
  },
  {
    name: "Github",
    icon: <FaGithub color={color} />,
    link: "https://www.linkedin.com/in/utkarsh-ranpise/",
  },
  {
    name: "Gmail",
    icon: <BiLogoGmail color={color} />,
    type: "mail",
    link: "ranpiseutkarsh@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCall color={color} />,
    type: "phone",
    link: "9049077996",
  },
];
