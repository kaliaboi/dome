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
      className={twMerge(
        "border-t-[3px] transition-all duration-300 cursor-pointer"
      )}
      onClick={() => setOpen((o) => !o)}
    >
      <div
        className={twMerge(
          "h-[70px] md:h-[80px] flex items-center w-full justify-between transition-all duration-300 hover:bg-[#252EFF] group",
          open && "bg-[#252EFF]"
        )}
      >
        <div
          className={twMerge(
            "mx-[25px] md:mx-[160px] flex justify-between items-center w-full transition-all duration-300"
          )}
        >
          <p
            className={twMerge(
              "text-[24px] md:text-[32px] group-hover:text-white",
              open && "text-white"
            )}
          >
            {title}
          </p>
          <PlusIcon
            className={twMerge(
              "text-black dark:text-white w-[24px] h-[24px] md:w-[32px] md:h-[32px] transition-all duration-300",
              open && "rotate-45 text-white"
            )}
          />
        </div>
      </div>
      <div
        className={twMerge(
          "transition-all",
          "xl:ml-[400px] xl:mt-[47px] xl:mr-[256px] md:mx-[160px] md:mt-[47px] text-[20px] mb-[72px]",
          open ? "block" : "hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
