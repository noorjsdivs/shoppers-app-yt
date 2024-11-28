import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
  htmlFor: string;
}

const Label = ({ children, className, htmlFor }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        "text-sm font-semibold tracking-wide flex items-start",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
