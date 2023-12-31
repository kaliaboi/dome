import { FC } from "react";
import Logo from "./logo";

interface navProps {}

const Nav: FC<navProps> = ({}) => {
  return (
    <nav className="hidden lg:flex h-[55px] md:h-[97px] border-b-[3px] border-[#1a1a1a] dark:border-white w-full justify-star px-[24px] md:px-[160px] items-center">
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
    </nav>
  );
};

export default Nav;
