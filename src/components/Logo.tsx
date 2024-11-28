import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h1
        className={twMerge(
          "text-2xl text-accent hover:text-darkOrange font-bold uppercase relative group overflow-hidden duration-300",
          className
        )}
      >
        shoppers
        <span className="absolute w-full h-px bg-darkOrange inline-block left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
      </h1>
    </Link>
  );
};

export default Logo;
