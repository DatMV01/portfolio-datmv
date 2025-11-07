import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const defaultOptions = [
  "All",
  "Frontend",
  "Backend",
  "Fullstack",
  "React",
  "NextJS",
  "NodeJS",
  "Java",
  "Spring",
  "Solidity",
];

const ProjectOptionsDropdown = ({
  categoryOptions = defaultOptions,
  onCategorySelected,
}: {
  categoryOptions?: string[];
  onCategorySelected: (category: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-30 self-end">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={clsx(
          "border-border w-full rounded border p-2",
          "flex items-center justify-between",
          "hover:bg-secondary/50"
        )}
      >
        <span> {selected}</span>

        <ChevronDown
          size={18}
          className={`${open && "rotate-180"} transform duration-500`}
        />
      </button>

      <ul
        className={clsx(
          "border-border bg-background absolute z-10 mt-2 w-full rounded border shadow-lg",
          "max-h-50 overflow-y-scroll",
          "origin-top transform transition-all duration-500 ease-out",
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2"
        )}
      >
        {categoryOptions.map((value) => (
          <li
            key={value}
            onClick={() => {
              setSelected(value);
              onCategorySelected(value);
              setOpen(false);
            }}
            className={clsx(
              "cursor-pointer px-3 py-2 text-sm",
              "hover:bg-secondary/70",
              selected === value && "bg-secondary/50 font-medium"
            )}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectOptionsDropdown;
