import utkarsh from "../assets/Utkarsh_selfie.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
export const utkarshLogo =
  "https://avatars.githubusercontent.com/u/90500297?v=4" ?? utkarsh;
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
    link: "https://github.com/utkaarsh",
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

export const testImages = [
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
];
