import { clsx } from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "border-border h-fit w-full rounded-md border-2 p-4",
        "flex flex-col gap-2",
        "duration-100 hover:scale-101 hover:bg-muted/20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
