"use client";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { twMerge as cn } from "tailwind-merge";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

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

interface projectProps {
  project: any;
}

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
        "font-[300] text-[14px] md:text-[21px] uppercase md:upppercase tracking-wider opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 hover:bg-[#252EFF] hover:text-white p-2 m-2",
        activeMode === mode && "opacity-100"
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

const Mcny: FC<projectProps> = ({ project }) => {
  const [mode, setMode] = useState<1 | 2 | 3>(1);
  const [media, setMedia] = useState(0);
  console.log(project.media);
  return (
    <>
      <div className="h-[65px] w-full flex justify-around md:justify-end md:gap-[46px] items-center md:px-[160px]">
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
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop
            centerMode
            swipeable
            useKeyboardArrows
            onChange={(index) => setMedia(index)}
            emulateTouch
            selectedItem={media}
          >
            <iframe
              src={project.videoID}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ margin: 0, width: "100%" }}
            ></iframe>
            {project.media.map((m: any, idx: any) => (
              <div
                key={idx}
                className="cursor-grab active:cursor-grabbing focus:cursor-grabbing"
                onClick={() => setMedia(idx)}
              >
                <img src={m.image} />
              </div>
            ))}
          </Carousel>
          <div className="mt-[11px] flex justify-between max-w-full md:mx-[160px]">
            <div className="lg:mt-[68px]">
              <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                {project.client}
              </p>
              <br />
              <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                {project.title}
              </p>
            </div>
            <p className="font-thin">
              {media + 1}/{project.media.length + 1}
            </p>
          </div>
        </>
      )}

      {mode === 2 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[22px] md:mx-[160px]">
            <div className="aspect-video w-full">
              <iframe
                src={project.videoID}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ margin: 0, width: "100%" }}
              ></iframe>
            </div>
            {project.media.map((m: any, idx: any) => (
              <div className="relative" key={idx}>
                <img src={m.image} />
              </div>
            ))}
          </div>
          <div className="lg:mt-[68px] md:mx-[160px]">
            <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.client}
            </p>
            <br />
            <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.title}
            </p>
          </div>
        </>
      )}

      {mode === 3 && (
        <>
          <div className="grid grid-cols-1 gap-12 mt-12 md:mx-[160px]">
            {project.media.map((m: any, idx: any) => (
              <div className="group flex justify-between" key={idx}>
                <div className="mt-[16px] max-w-[736px] cursor-zoom-in">
                  <p className="text-[24px] md:text-[32px] font-[700] inline-block">
                    Image {idx + 1}
                  </p>
                  <br />
                  <p className="text-[24px] md:text-[32px]  inline-block ">
                    {m.title}
                  </p>
                </div>
                <div className="hidden lg:block opacity-0 aspect-video w-96 group-hover:opacity-100 transition-all relative">
                  <Image src={m.image} fill alt="" objectFit="cover" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[16px]">
            <div className="h-[1px] bg-black dark:bg-white my-[80px]"></div>
            <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.client}
            </p>
            <br />
            <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.title}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Mcny;
