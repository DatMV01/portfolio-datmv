"use client";

import { NavItem } from "@/types";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  className?: string;
  item: NavItem;
  onClick?: (id: NavItem["id"]) => void;
  showIcon?: boolean;
  active?: boolean;
}

const NavLi = ({
  className,
  item,
  onClick,
  showIcon = false,
  active = false,
}: Props) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (onClick) {
      e.preventDefault();
      onClick(item.id);
    }
  };

  return (
    <li
      className={clsx(
        "cursor-pointer rounded-full transition-all duration-300 hover:scale-110",
        showIcon ? "p-2" : "px-3 py-1",
        active
          ? "bg-secondary text-foreground font-semibold"
          : "hover:bg-muted",
        className
      )}
    >
      <Link onClick={handleClick} href={`#${item.id}`} className="block">
        {showIcon ? item.icon : item.title}
      </Link>
    </li>
  );
};

export default NavLi;
