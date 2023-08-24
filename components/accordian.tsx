"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { FC, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface accordianProps {
  title: string;
  children: ReactNode;
}

const Accordian: FC<accordianProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-t-[3px] md:mx-[160px] transition-all duration-300 cursor-pointer"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="my-[11px] md:my-[21px] mx-[25px] md:mx-0 flex justify-between items-center">
        <p className="text-[24px] md:text-[32px]">{title}</p>
        <PlusIcon
          className={twMerge(
            "text-black dark:text-white w-[24px] h-[24px] md:w-[32px] md:h-[32px] transition-all duration-300",
            open && "rotate-45"
          )}
        />
      </div>
      <div className={twMerge("transition-all", open ? "block" : "hidden")}>
        {children}
      </div>
    </div>
  );
};

export default Accordian;
