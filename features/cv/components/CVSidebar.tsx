"use client";

import clsx from "clsx";
import CVAvatar from "./CVAvatar";
import CVContact from "./CVContact";
import CVPdfButton from "./CVPdfButton";
import CVSkills from "./CVSkills";

const CVSidebar = () => {
  return (
    <aside
      className={clsx(
        "md:col-span-1",
        "gap-y-4 p-4",
        "border-border border-r",
        "flex flex-col"
      )}
    >
      <CVAvatar />
      <CVPdfButton />
      <CVContact />
      <CVSkills />
    </aside>
  );
};

export default CVSidebar;
