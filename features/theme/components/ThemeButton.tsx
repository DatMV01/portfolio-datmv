"use client";

import { useTheme } from "@/features/theme/context/ThemeContext";
import clsx from "clsx";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeButton({ className = "" }) {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      className={clsx(
        // base styles
        "p-3 rounded-xl transition-colors duration-300 flex items-center justify-center",
        // light mode
        "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 hover:text-zinc-950",
        // dark mode
        "dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white",
        // optional external class
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <LuMoon className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
      ) : (
        <LuSun className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
}
