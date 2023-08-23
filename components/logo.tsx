import Link from "next/link";
import { FC } from "react";

interface logoProps {
  color: "dark" | "light";
  size: "small" | "large";
}

const Logo: FC<logoProps> = ({ color, size }) => {
  return (
    <Link href="/">
      <svg
        width={size === "small" ? "48" : "80"}
        height={size === "small" ? "24" : "40"}
        viewBox="0 0 165 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_267_7)">
          <path
            d="M140.65 23.72C125.23 8.42 104.55 0 82.41 0C60.27 0 39.54 8.42 24.07 23.71C8.55 39.06 0 59.68 0 81.77V87.03H164.61V81.77C164.61 59.67 156.1 39.05 140.65 23.72ZM10.7 76.51C13.34 38.85 44.08 10.51 82.41 10.51C120.74 10.51 151.27 38.85 153.91 76.51H10.7Z"
            fill={color === "light" ? "#1a1a1a" : "#ffffff"}
          />
        </g>
        <defs>
          <clipPath id="clip0_267_7">
            <rect width="164.61" height="87.03" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default Logo;
