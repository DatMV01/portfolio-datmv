import { FiUser } from "react-icons/fi";
import { LuContact } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";

const NavData = [
  // {
  //   id: "home",
  //   link: "#home",
  //   title: "Home",
  //   icon: <FiHome className="h-7 w-7" />,
  // },
  {
    id: "about",
    link: "#about",
    title: "About",
    icon: <FiUser className="h-7 w-7" />,
  },
  {
    id: "projects",
    link: "#projects",
    title: "Projects",
    icon: <MdOutlineWorkOutline className="h-7 w-7" />,
  },
  {
    id: "contact",
    link: "#contact",
    title: "Contact",
    icon: <LuContact className="h-7 w-7" />,
  },
];

export default NavData;
