import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  level?: keyof HTMLElementTagNameMap;
  children: ReactNode;
  className?: string;
}

const CVHeading = ({ level = "h1", children, className }: Props) => {
  const Tag = level;

  return (
    <Tag
      className={clsx(
        "border-border border-b pb-1 text-sm font-semibold tracking-wide",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default CVHeading;
