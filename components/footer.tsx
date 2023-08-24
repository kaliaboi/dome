import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <div className="mt-[48px] mx-[25px] md:mx-[160px] max-w-full text-[14px] flex flex-col gap-4">
      <a href="mailto://info@domecollective.com">info@domecollective.com</a>
      <a href="https://www.instagram.com/domecollective">Instagram</a>
      <a href="https://www.linkedin.com/company/domecollective/">LinkedIn</a>
      <div className="opacity-60">
        <p className="text-[14px]">© 2023 Dome Collective LLC.</p>
        <p className="text-[14px]">All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
