"use client";

import React from "react";
import clsx from "clsx";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import NavLi from "./NavLi";
 import NavData from "./NavData";
import { NavItem } from "@/types";

interface Props {
  items?: NavItem[];
  offset?: number;
  className?: string;
}

const TopNav = ({ items, offset = 0, className = "" }: Props) => {

  const _data = items ?? NavData
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
        "hidden",
        "border-border border",
        "h-12 items-center rounded-full border px-4 md:flex",
        className
      )}
    >
      <ul className="flex flex-row items-center justify-center gap-2">
        {_data.map((navLink) => (
          <NavLi
            key={navLink.id}
            item={navLink}
            onClick={handleClick}
            active={activeId == navLink.id}
            showIcon={false}
            className="mx-1"
          />
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
