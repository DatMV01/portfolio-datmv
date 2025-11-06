import { FaRegUserCircle } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { LuContact } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { NavItem } from "./NavItem";

const NavData: NavItem[] = [
  {
    id: "home",
    link: "#home",
    title: "Home",
    icon: <FiHome className="h-7 w-7" />,
  },
  {
    id: "about",
    link: "#about",
    title: "About",
    icon: <FaRegUserCircle className="h-7 w-7" />,
  },
  {
    id: "projects",
    link: "#projects",
    title: "Projects",
    icon: <MdWorkOutline className="h-7 w-7" />,
  },
  {
    id: "contact",
    link: "#contact",
    title: "Contact",
    icon: <LuContact className="h-7 w-7" />,
  },
];

export default NavData;
