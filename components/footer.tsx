import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <div className="mt-[48px] mx-[25px] md:mx-[160px] w-auto text-[16px] flex flex-col gap-4 pb-[50px]">
      <a
        href="mailto:info@domecollective.com"
        className="hover:bg-[#252EFF] hover:text-white w-auto self-start"
      >
        info@domecollective.com
      </a>
      <a
        href="https://www.instagram.com/domecollective"
        className="hover:bg-[#252EFF] hover:text-white w-auto self-start"
      >
        Instagram
      </a>
      <a
        href="https://www.linkedin.com/company/domecollective/"
        className="hover:bg-[#252EFF] hover:text-white w-auto self-start"
      >
        LinkedIn
      </a>
      <div className="opacity-60">
        <p className="text-[14px]">
          © {new Date().getFullYear()} Dome Collective LLC.
        </p>
        <p className="text-[14px]">All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
