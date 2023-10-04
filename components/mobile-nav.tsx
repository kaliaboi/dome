"use client";
import { FC } from "react";
import Logo from "./logo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

interface navProps {
  mode: number;
  setMode: any;
}

const MobileNav: FC<navProps> = ({ mode, setMode }) => {
  return (
    <nav className="flex lg:hidden h-[55px] md:h-[97px] border-b-[3px] border-[#1a1a1a] dark:border-white w-full justify-between px-[24px] md:px-[160px] items-center">
      <div className="block md:hidden">
        <div className="block dark:hidden md:hidden">
          <Logo color="light" size="small" />
        </div>
        <div className="hidden dark:block">
          <Logo color="dark" size="small" />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="block dark:hidden">
          <Logo color="light" size="large" />
        </div>
        <div className="hidden dark:block">
          <Logo color="dark" size="large" />
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center">
          {mode === 1 && (
            <>
              <Image
                src={"/menu/s-b.svg"}
                alt=""
                width={36}
                height={36}
                className="hidden dark:block"
              />
              <Image
                src={"/menu/s-w.svg"}
                alt=""
                width={36}
                height={36}
                className="block dark:hidden"
              />
            </>
          )}
          {mode === 2 && (
            <>
              <Image
                src={"/menu/g-b.svg"}
                alt=""
                width={36}
                height={36}
                className="hidden dark:block"
              />
              <Image
                src={"/menu/g-w.svg"}
                alt=""
                width={36}
                height={36}
                className="block dark:hidden"
              />
            </>
          )}
          {mode === 3 && (
            <>
              <Image
                src={"/menu/l-b.svg"}
                alt=""
                width={36}
                height={36}
                className="hidden dark:block"
              />
              <Image
                src={"/menu/l-w.svg"}
                alt=""
                width={36}
                height={36}
                className="block dark:hidden"
              />
            </>
          )}
          <ChevronDownIcon className="dark:text-white" width={16} height={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto">
          <DropdownMenuItem onClick={() => setMode(1)}>
            <Image
              src={"/menu/s-b.svg"}
              alt=""
              width={36}
              height={36}
              className="hidden dark:block"
            />
            <Image
              src={"/menu/s-w.svg"}
              alt=""
              width={36}
              height={36}
              className="block dark:hidden"
            />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode(2)}>
            <Image
              src={"/menu/g-b.svg"}
              alt=""
              width={36}
              height={36}
              className="hidden dark:block"
            />
            <Image
              src={"/menu/g-w.svg"}
              alt=""
              width={36}
              height={36}
              className="block dark:hidden"
            />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode(3)}>
            <Image
              src={"/menu/l-b.svg"}
              alt=""
              width={36}
              height={36}
              className="hidden dark:block"
            />
            <Image
              src={"/menu/l-w.svg"}
              alt=""
              width={36}
              height={36}
              className="block dark:hidden"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default MobileNav;
