"use client";

import { FC, ReactNode, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { twMerge as cn } from "tailwind-merge";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

interface projectProps {
  projects: any[];
}

// const projects = [
//   {
//     client: "Museum of the City of New York",
//     title: "This is New York",
//     image: "/mcny.jpg",
//     link: "/mcny",
//   },
//   {
//     client: "Electronic Arts",
//     title: "40 years of pioneering video games",
//     image: "/ears2.jpg",
//     link: "/ears",
//   },
//   {
//     client: "Cleveland Museum of Art",
//     title: "Revealing Krishna",
//     image: "/krishna_hero.jpg",
//     link: "/krishna",
//   },
// ];

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
        "font-[300] text-[14px] md:text-[21px] uppercase md:upppercase tracking-wider opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300",
        activeMode === mode && "opacity-100"
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

const Projects: FC<projectProps> = ({ projects }) => {
  const [mode, setMode] = useState<1 | 2 | 3>(1);
  const [project, setProject] = useState(0);

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
            onChange={(index) => setProject(index)}
            interval={5000}
          >
            {projects.map((project, idx) => (
              <Link href={`work/${project.slug}`} key={idx}>
                <div>
                  <img src={"/mcny.jpg"} />
                </div>
              </Link>
            ))}
          </Carousel>
          <div className="mt-[11px] mx-[25px] md:mx-0 flex justify-between max-w-full">
            <div className=" md:max-w-[832px] group">
              <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF]">
                {projects[project].client}
              </p>
              <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF]">
                {projects[project].title}
              </p>
            </div>
            <p className="font-thin">
              {project + 1}/{projects.length}
            </p>
          </div>
        </>
      )}

      {mode === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Link href={`work/${project.slug}`} key={idx}>
              <div className="relative">
                <img src={"/mcny.jpg"} />
                <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                  <p className="text-white text-[18px] md:text-[32px]">
                    {project.client}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {mode === 3 && (
        <div className="grid grid-cols-1 gap-12 mt-12">
          {projects.map((project, idx) => (
            <Link href={`work/${project.slug}`} key={idx}>
              <div className="mx-12 md:mx-0">
                <p className="text-[18px] md:text-[32px]">{project.client}</p>
                <p className="text-[18px] md:text-[32px] opacity-60">
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Projects;
