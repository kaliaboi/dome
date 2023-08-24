"use client";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { twMerge as cn } from "tailwind-merge";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const mediaList = [
  {
    image: "/mcny/1.jpg",
  },
  {
    image: "/mcny/2.jpeg",
  },
  {
    image: "/mcny/3.jpeg",
  },
  {
    image: "/mcny/4.jpeg",
  },
  {
    image: "/mcny/5.jpeg",
  },
  {
    image: "/mcny/6.jpeg",
  },
  {
    image: "/mcny/7.jpeg",
  },
  {
    image: "/mcny/8.jpeg",
  },
];

const Switcher = ({
  mode,
  children,
  activeMode,
  onClick,
}: {
  mode: number;
  activeMode: number;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <p
      className={cn(
        "font-[300] text-[14px] md:text-[21px] uppercase md:capitalize opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300",
        activeMode === mode && "opacity-100"
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

const Mcny: FC = ({}) => {
  const [mode, setMode] = useState<1 | 2 | 3>(1);
  const [media, setMedia] = useState(0);
  return (
    <>
      <div className="h-[65px] w-full flex justify-around md:justify-end md:gap-[46px] items-center">
        <Switcher activeMode={mode} mode={1} onClick={() => setMode(1)}>
          Slides
        </Switcher>
        <Switcher activeMode={mode} mode={2} onClick={() => setMode(2)}>
          Grid
        </Switcher>
        <Switcher activeMode={mode} mode={3} onClick={() => setMode(3)}>
          List
        </Switcher>
      </div>

      {mode === 1 && (
        <>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
            onChange={(index) => setMedia(index)}
            interval={5000}
          >
            {mediaList.map((m, idx) => (
              <div key={idx}>
                <img src={m.image} />
              </div>
            ))}
          </Carousel>
          <div className="mt-[11px] mx-[25px] md:mx-0 flex justify-between max-w-full">
            <div className="max-w-[250px] md:max-w-[832px]">
              <p className="text-[24px] md:text-[32px]">
                Museum of the City of New York
              </p>
              <p className="text-[18px] md:text-[32px] opacity-60">
                This is New York
              </p>
            </div>
            <p className="font-thin">
              {media + 1}/{mediaList.length}
            </p>
          </div>
        </>
      )}

      {mode === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {mediaList.map((m, idx) => (
            <div className="relative" key={idx}>
              <img src={m.image} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Mcny;
