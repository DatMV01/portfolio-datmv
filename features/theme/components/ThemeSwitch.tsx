"use client";

import { useTheme } from "@/features/theme/context/ThemeContext";
import { LuMoon, LuSun } from "react-icons/lu";
import Switch from "./ui/Switch";

const ThemeSwitch = () => {
  const { theme, changeTheme } = useTheme();
  const checked = theme === "dark";
  const icon = checked ? (
    <LuSun className="h-full w-full  p-0.5 transition-transform duration-300 hover:rotate-12" />
  ) : (
    <LuMoon className="h-full w-full p-0.5 transition-transform   duration-300 hover:rotate-12" />
  );

  return (
    <Switch
      checked={checked}
      onChange={() => changeTheme(theme === "light" ? "dark" : "light")}
      className={`${checked ? " [&>span]:bg-zinc-900 bg-zinc-700 text-white" : ""}`}
      size="lg"
      icon={icon}
    />
  );
};

export default ThemeSwitch;
