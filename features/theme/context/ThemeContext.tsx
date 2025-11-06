"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const themes = [
  "light",
  "dark",
  "blue",
  "forest",
  "sunset",
  "neon",
  "pastel",
] as const;

export type Theme = (typeof themes)[number];

interface ThemeContextType {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
  themes: readonly Theme[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  changeTheme: () => {},
  themes,
});

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // 1) Always set default safe value for SSR
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // 2) Get real theme after client mount
  useLayoutEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTheme((prev) => (prev === initial ? prev : initial));

    document.documentElement.setAttribute("data-theme", initial);

    setMounted(true);
  }, []);

  const changeTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // 3) Track system changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) =>
      changeTheme(e.matches ? "dark" : "light");

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  //4) Block render before sync is complete to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// USAGE
// <html lang="en">
//   <body>
//     <ThemeProvider>
//       <main>{children}</main>
//     </ThemeProvider>
//   </body>
// </html>
