"use client";

import { useScrollSpy } from "@/hooks";
import clsx from "clsx";
import NavLi from "./NavLi";
import { NavItem } from "./NavItem";
import NavData from "./NavData";

export interface Props {
  items?: NavItem[];
  offset?: number;
  className?: string;
}

export default function ScrollSpyNav({
  items,
  offset = 0,
  className = "",
}: Props) {
  const _data = items ?? NavData;
  const activeId = useScrollSpy(_data.map((s) => s.id));

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Smooth scroll with offset
    const yOffset = offset ?? window.innerHeight / 2 - el.offsetHeight / 2;
    const top = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top, behavior: "smooth" });

    // Update URL hash without page jump
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <nav
      className={clsx(
        "md:hidden dark:bg-zinc-800 bg-zinc-100",
        "fixed bottom-8 left-1/2 -translate-x-1/2 transform",
        "border-border rounded-full border backdrop-blur-md",
        className
      )}
    >
      <ul className="flex flex-row items-center justify-center gap-2 p-2">
        {_data.map((navLink) => (
          <NavLi
            key={navLink.id}
            item={navLink}
            onClick={handleClick}
            active={activeId == navLink.id}
            showIcon={true}
          />
        ))}
      </ul>
    </nav>
  );
}
