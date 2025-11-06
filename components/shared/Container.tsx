import clsx from "clsx";
import { ElementType, ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<ElementType> {
  className?: string;
  children: ReactNode;
  fluid?: boolean;
  noPadding?: boolean;
  breakpoint?: "sm" | "md" | "lg" | "xl" | "xxl";
  as?: React.ElementType;
}

const Container = ({
  className = "",
  children,
  fluid = false,
  breakpoint,
  as: Comp = "div",
  id,
}: ContainerProps) => {
  const breakpoints = {
    sm: "max-w-screen-sm", // ~540px
    md: "max-w-screen-md", // ~720px
    lg: "max-w-screen-lg", // ~960px
    xl: "max-w-screen-xl", // ~1140px
    xxl: "max-w-[1320px]", // ~Bootstrap 5.3
  };

  const maxWidth = fluid
    ? "max-w-none"
    : breakpoint
      ? breakpoints[breakpoint]
      : "max-w-[1320px]";

  return (
    <Comp className={clsx("mx-auto w-full px-4", maxWidth, className)} id={id}>
      {children}
    </Comp>
  );
};

export default Container;
